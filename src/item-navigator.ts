import {
  css,
  html,
  LitElement,
  customElement,
  property,
  state,
  query,
  PropertyValues,
  CSSResult,
} from 'lit-element';
import { nothing, TemplateResult } from 'lit-html';
import { MetadataResponse } from '@internetarchive/search-service';
import {
  SharedResizeObserver,
  SharedResizeObserverResizeHandlerInterface,
} from '@internetarchive/shared-resize-observer';
import '@internetarchive/ia-menu-slider';

import { ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/icon-ellipses/icon-ellipses';
import './loader';

import {
  ToggleSideMenuOpenEvent,
  ToggleSidePanelOpenEvent,
  SetSideMenuContentsEvent,
  SetSideMenuShortcutsEvent,
  loadingStateUpdatedEvent,
  ManageFullscreenEvent,
} from './interfaces/event-interfaces';

import {
  MenuProviderInterface,
  MenuShortcutInterface,
  MenuId,
} from './interfaces/menu-interfaces';
import './no-theater-available';

export enum ItemType {
  BOOK = 'bookreader',
}
@customElement('ia-item-navigator')
export class ItemNavigator
  extends LitElement
  implements SharedResizeObserverResizeHandlerInterface {
  @property({
    type: Object,
    converter: (value: string | MetadataResponse | null): MetadataResponse => {
      if (value && typeof value === 'string') {
        return new MetadataResponse(JSON.parse(atob(value)));
      }
      return value as MetadataResponse;
    },
  })
  item?: MetadataResponse;

  @property({ type: String }) itemType?: ItemType;

  @property({ type: String }) baseHost = 'archive.org';

  @property({
    converter: (arg: string | boolean | null) => {
      if (typeof arg === 'boolean') {
        return arg;
      }
      return arg === 'true';
    },
  })
  signedIn = false;

  @property({ type: Array }) menuContents: MenuProviderInterface[] = [];

  @property({ type: Array }) menuShortcuts: MenuShortcutInterface[] = [];

  @property({ type: Boolean, reflect: true, attribute: true })
  viewportInFullscreen: boolean | null = null;

  @property({ type: Boolean }) menuOpened = false;

  @property({ type: String }) openMenu?: MenuId;

  @property({ attribute: false }) modal?: ModalManager;

  @property({ attribute: false }) sharedObserver?: SharedResizeObserver;

  @property({ type: Boolean, reflect: true, attribute: true }) loaded:
    | true
    | null = null;

  @state() openMenuState: 'overlay' | 'shift' = 'shift';

  @query('#frame') private frame!: HTMLDivElement;

  @query('slot[name="theater-header"]') private headerSlot!: HTMLDivElement;

  disconnectedCallback() {
    this.removeResizeObserver();
  }

  updated(changed: PropertyValues) {
    if (changed.has('sharedObserver')) {
      const oldObserver = changed.get('sharedObserver') as SharedResizeObserver;
      oldObserver?.removeObserver(this.resizeObserverConfig);
      this.setResizeObserver();
    }
  }

  /** Shared observer */
  handleResize(entry: ResizeObserverEntry): void {
    const { width } = entry.contentRect;
    if (width <= 600) {
      this.openMenuState = 'overlay';
      return;
    }
    this.openMenuState = 'shift';
  }

  private setResizeObserver(): void {
    this.sharedObserver?.addObserver(this.resizeObserverConfig);
  }

  private removeResizeObserver(): void {
    this.sharedObserver?.removeObserver(this.resizeObserverConfig);
  }

  get resizeObserverConfig(): {
    handler: SharedResizeObserverResizeHandlerInterface;
    target: Element;
  } {
    return {
      handler: this,
      target: this.frame,
    };
  }
  /** End shared observer */

  get loaderTitle() {
    return this.viewportInFullscreen ? 'Internet Archive' : '';
  }

  get readerHeightStyle(): string {
    const calcFSHeight = `calc(100vh - ${this.headerSlot?.offsetHeight}px)`;
    return this.viewportInFullscreen ? `height: ${calcFSHeight}` : '';
  }

  get loadingArea() {
    return html`
      <div class="loading-area">
        <div class="loading-view">
          <ia-itemnav-loader .title=${this.loaderTitle}></ia-itemnav-loader>
        </div>
      </div>
    `;
  }

  headerSlotChange() {
    this.requestUpdate();
  }

  render(): TemplateResult {
    const displayReaderClass = this.loaded ? '' : 'hidden';
    return html`
      <div id="frame" class=${`${this.menuClass}`}>
        <slot
          name="theater-header"
          @slotchange=${() => this.headerSlotChange()}
        ></slot>
        <div class="menu-and-reader">
          ${this.shouldRenderMenu ? this.renderSideMenu : nothing}
          <div
            id="reader"
            class=${displayReaderClass}
            style=${this.readerHeightStyle}
          >
            ${this.renderViewport}
          </div>
          ${!this.loaded ? this.loadingArea : nothing}
        </div>
      </div>
    `;
  }

  get noTheaterView() {
    return html`<ia-no-theater-available
      .identifier=${this.item?.metadata?.identifier}
      @loadingStateUpdated=${this.loadingStateUpdated}
    ></ia-no-theater-available>`;
  }

  get theaterSlot() {
    return html`
      <slot name="theater-main" style=${this.readerHeightStyle}></slot>
    `;
  }

  get booksViewer(): TemplateResult {
    const slotVisibility = !this.loaded ? 'opacity: 0;' : 'opacity: 1;';

    return html`
      <book-navigator
        .modal=${this.modal}
        .baseHost=${this.baseHost}
        .itemMD=${this.item}
        ?signedIn=${this.signedIn}
        ?sideMenuOpen=${this.menuOpened}
        .sharedObserver=${this.sharedObserver}
        @ViewportInFullScreen=${this.manageViewportFullscreen}
        @loadingStateUpdated=${this.loadingStateUpdated}
        @updateSideMenu=${this.manageSideMenuEvents}
        @menuUpdated=${this.setMenuContents}
        @menuShortcutsUpdated=${this.setMenuShortcuts}
      >
        <div slot="theater-main" style=${slotVisibility}>
          ${this.theaterSlot}
        </div>
      </book-navigator>
    `;
  }

  get renderViewport(): TemplateResult | typeof nothing {
    if (!this.item) {
      return nothing;
    }
    if (this.itemType === ItemType.BOOK) {
      return this.booksViewer;
    }
    return this.noTheaterView;
  }

  loadingStateUpdated(e: loadingStateUpdatedEvent): void {
    const { loaded } = e.detail;
    this.loaded = loaded || null;
  }

  /** Fullscreen Management */
  manageViewportFullscreen(e: ManageFullscreenEvent): void {
    const fullscreenStatus = !!e.detail.isFullScreen;
    this.viewportInFullscreen = !fullscreenStatus ? null : fullscreenStatus;

    const event = new CustomEvent('fullscreenToggled', {
      detail: e.detail,
    }) as ManageFullscreenEvent;

    this.dispatchEvent(event);
  }
  /** End Fullscreen Management */

  /** Side menu */
  get shouldRenderMenu(): boolean {
    return !!this.menuContents.length;
  }

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  closeMenu(): void {
    this.menuOpened = false;
  }

  setOpenMenu(e: ToggleSidePanelOpenEvent): void {
    const { id } = e.detail;
    this.openMenu = id !== this.openMenu ? id : undefined;
  }

  setMenuContents(e: SetSideMenuContentsEvent): void {
    const updatedContents = [...e.detail];
    this.menuContents = updatedContents;
  }

  setMenuShortcuts(e: SetSideMenuShortcutsEvent) {
    this.menuShortcuts = [...e.detail];
  }

  /** Toggles Side Menu & Sets viewable subpanel  */
  manageSideMenuEvents(e: ToggleSideMenuOpenEvent): void {
    const { menuId, action } = e.detail;
    if (!menuId) {
      return;
    }

    if (action === 'open') {
      this.openShortcut(menuId);
    } else if (action === 'toggle') {
      this.openMenu = menuId;
      this.toggleMenu();
    }
  }

  get menuToggleButton() {
    return html`
      <button
        class="toggle-menu"
        @click=${this.toggleMenu}
        title="Toggle theater side panels"
      >
        <div>
          <ia-icon-ellipses
            style="width: var(--iconWidth); height: var(--iconHeight);"
          ></ia-icon-ellipses>
        </div>
      </button>
    `;
  }

  get selectedMenuId(): MenuId | '' {
    return this.openMenu || '';
  }

  get renderSideMenu(): TemplateResult {
    const drawerState = this.menuOpened ? '' : 'hidden';
    return html`
      <nav>
        <div class="minimized">${this.shortcuts} ${this.menuToggleButton}</div>
        <div id="menu" class=${drawerState}>
          <ia-menu-slider
            .menus=${this.menuContents}
            .selectedMenu=${this.selectedMenuId}
            @menuTypeSelected=${this.setOpenMenu}
            @menuSliderClosed=${this.closeMenu}
            manuallyHandleClose
            open
          ></ia-menu-slider>
        </div>
      </nav>
    `;
  }
  /** End Side menu */

  /** Menu Shortcuts */
  openShortcut(selectedMenuId: MenuId = ''): void {
    this.openMenu = selectedMenuId;
    this.menuOpened = true;
  }

  get shortcuts(): TemplateResult {
    const shortcuts = this.menuShortcuts.map(({ icon, id }) => {
      if (id === 'fullscreen') {
        return html`${icon}`;
      }

      return html`
        <button class="shortcut ${id}" @click="${() => this.openShortcut(id)}">
          ${icon}
        </button>
      `;
    });
    return html`<div class="shortcuts">${shortcuts}</div>`;
  }
  /** End Menu Shortcuts */

  /** Misc Render */
  get menuClass(): string {
    const drawerState = this.menuOpened ? 'open' : '';
    const fullscreenState = this.viewportInFullscreen ? 'fullscreen' : '';
    return `${drawerState} ${fullscreenState} ${this.openMenuState}`;
  }

  static get styles(): CSSResult {
    const subnavWidth = css`var(--menuWidth, 320px)`;
    const transitionTiming = css`var(--animationTiming, 200ms)`;
    const transitionEffect = css`transform ${transitionTiming} ease-out`;
    const menuMargin = css`var(--theaterMenuMargin, 42px)`;
    const theaterBg = css`var(--theaterBgColor, #000)`;

    return css`
      :host,
      #frame,
      .menu-and-reader {
        min-height: inherit;
        height: inherit;
        position: relative;
        overflow: hidden;
        display: block;
      }

      :host,
      #frame,
      .menu-and-reader,
      .loading-area,
      .loading-view {
        min-height: inherit;
        height: inherit;
      }

      slot {
        display: block;
        overflow: hidden;
      }

      #frame {
        background-color: ${theaterBg};
        color-scheme: dark;
      }

      #frame.fullscreen {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
      }

      .loading-view {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      ia-itemnav-loader {
        display: block;
        width: 100%;
      }

      .hidden {
        display: none;
      }

      button {
        cursor: pointer;
        padding: 0;
        border: 0;
      }

      button:focus,
      button:active {
        outline: none;
      }

      .menu-and-reader {
        position: relative;
      }

      nav button {
        background: none;
      }

      nav .minimized {
        background: rgba(0, 0, 0, 0.7);
        padding-top: 6px;
        position: absolute;
        width: ${menuMargin};
        z-index: 2;
        left: 0;
        border-bottom-right-radius: 5%;
      }

      nav .minimized button {
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin-bottom: 0.2rem;
        margin: auto;
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: ${menuMargin};
        height: ${menuMargin};
      }

      nav .minimized button.toggle-menu > * {
        border: 2px solid var(--iconStrokeColor);
        border-radius: var(--iconWidth);
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin: auto;
      }

      ia-icon-ellipses {
        width: var(--iconWidth);
        height: var(--iconHeight);
      }

      #menu {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        overflow: hidden;
        transform: translateX(-${subnavWidth});
        width: ${subnavWidth};
        transform: translateX(calc(${subnavWidth} * -1));
        transition: ${transitionEffect};
      }

      #reader {
        position: relative;
        z-index: 1;
        transform: translateX(0);
        width: 100%;
      }

      .open.overlay #reader {
        transition: none;
      }

      .open #menu {
        width: ${subnavWidth};
        transform: translateX(0);
        transition: ${transitionEffect};
      }

      .open.shift #reader {
        width: calc(100% - var(--menuWidth));
        float: right;
        transition: ${transitionEffect};
      }
    `;
  }
}
