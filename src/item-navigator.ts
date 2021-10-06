import {
  css,
  html,
  LitElement,
  customElement,
  property,
  state,
  query,
} from 'lit-element';
import { nothing, TemplateResult } from 'lit-html';
import { MetadataResponse } from '@internetarchive/search-service';
import { PromisedSingleton } from '@internetarchive/promised-singleton';
import {
  SharedResizeObserver,
  SharedResizeObserverInterface,
  SharedResizeObserverResizeHandlerInterface,
} from '@internetarchive/shared-resize-observer';
// @ts-ignore
import { IAMenuSlider } from '@internetarchive/ia-menu-slider';
import { ModalManagerInterface } from '@internetarchive/modal-manager';
import '@internetarchive/icon-ellipses/icon-ellipses';
import './loader';

import {
  IntOpenModalEvent,
  IntManageSideMenuEvent,
  IntSetOpenMenuEvent,
  IntSetMenuContentsEvent,
  IntSetMenuShortcutsEvent,
  IntLoadingStateUpdatedEvent,
} from './interfaces/event-interfaces';

import { IntMenuProvider, IntMenuShortcut } from './interfaces/menu-interfaces';

@customElement('item-navigator')
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
  item: MetadataResponse | undefined = undefined;

  @property({ type: String }) itemType = '';

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

  @property({
    type: Array,
    hasChanged: (newVal: Array<object>, oldVal: Array<object>) => {
      if (newVal !== oldVal) {
        return true;
      }
      return false;
    },
  })
  @property({ type: Array })
  menuContents: IntMenuProvider[] = [];

  @property({ type: Array }) menuShortcuts: IntMenuShortcut[] = [];

  @property({ type: Boolean, reflect: true }) viewportInFullscreen = false;

  @property({ type: Boolean }) menuOpened = false;

  @property({ type: String }) openMenu = '';

  @property({ type: Object }) modal:
    | ModalManagerInterface
    | undefined = undefined;

  @property({ attribute: false }) private sharedObserver?: any; // PromisedSingleton<SharedResizeObserverInterface>;

  @state() private loaded: boolean = false;

  @state() private openMenuState: 'overlay' | 'shift' = 'shift';

  @query('#frame') private frame!: HTMLDivElement;

  disconnectedCallback() {
    this.sharedObserver?.removeObserver({
      handler: this,
      target: this.frame,
    });
  }

  firstUpdated(): void {
    if (!this.modal) {
      this.createModal();
    }

    this.startResizeObserver();
  }

  handleResize(entry: ResizeObserverEntry): void {
    const { width } = entry.contentRect;
    if (width <= 600) {
      this.openMenuState = 'overlay';
      return;
    }
    this.openMenuState = 'shift';
    console.log('width', width);
  }

  private async startResizeObserver(): Promise<void> {
    const ro = new PromisedSingleton<SharedResizeObserverInterface>({
      generator: async (): Promise<SharedResizeObserverInterface> => {
        return new SharedResizeObserver();
      },
    });

    this.sharedObserver = await ro.get();
    this.sharedObserver?.addObserver({
      handler: this,
      target: this.frame,
    });
  }

  render(): TemplateResult {
    const displayReaderClass = this.loaded ? '' : 'hide';
    return html`
      <div id="frame" class=${this.menuClass}>
        <slot name="item-nav-header"></slot>
        <div class="menu-and-reader">
          ${this.shouldRenderMenu ? this.renderSideMenu : nothing}
          ${!this.loaded
            ? html`<div class="loading-view">
                <ia-itemnav-loader></ia-itemnav-loader>
              </div>`
            : nothing}
          <div id="reader" class=${displayReaderClass}>
            ${this.renderViewport}
          </div>
        </div>
      </div>
    `;
  }

  get BooksViewer(): TemplateResult {
    return html`
      <book-navigator
        .baseHost=${this.baseHost}
        .book=${this.item}
        ?signedIn=${this.signedIn}
        ?sideMenuOpen=${this.menuOpened}
        .sharedObserver=${this.sharedObserver}
        @ViewportInFullScreen=${this.manageViewportFullscreen}
        @loadingStateUpdated=${this.loadingStateUpdated}
        @updateSideMenu=${this.manageSideMenuEvents}
        @menuUpdated=${this.setMenuContents}
        @menuShortcutsUpdated=${this.setMenuShortcuts}
        @showItemNavigatorModal=${this.openModal}
        @closeItemNavigatorModal=${this.closeModal}
      >
        <div slot="bookreader">
          <slot name="bookreader"></slot>
        </div>
      </book-navigator>
    `;
  }

  get renderViewport(): TemplateResult | typeof nothing {
    if (!this.item) {
      return nothing;
    }
    if (this.itemType === 'bookreader') {
      return this.BooksViewer;
    }
    return html` <ia-item-inspector
      .itemMD=${this.item}
      @updateSideMenu=${this.manageSideMenuEvents}
      @menuUpdated=${this.setMenuContents}
      @ViewportInFullScreen=${this.manageViewportFullscreen}
      @menuShortcutsUpdated=${this.setMenuShortcuts}
      @showItemNavigatorModal=${this.openModal}
      @closeItemNavigatorModal=${this.closeModal}
      @loadingStateUpdated=${this.loadingStateUpdated}
    ></ia-item-inspector>`;
  }

  loadingStateUpdated(e: IntLoadingStateUpdatedEvent): void {
    const { loaded } = e.detail;
    this.loaded = !!loaded;
  }

  /* Modal management */
  openModal(e: IntOpenModalEvent): void {
    const { config, customModalContent } = e.detail;
    if (!config || !customModalContent) {
      return;
    }

    this.modal?.showModal({
      config,
      customModalContent,
    });
  }

  closeModal(): void {
    this.modal?.closeModal();
  }

  /** Creates modal DOM & attaches to `<body>` */
  private createModal(): void {
    this.modal = document.createElement(
      'modal-manager'
    ) as ModalManagerInterface;
    document.body.appendChild(this.modal);
  }
  /* End Modal management */

  /** Fullscreen Management */
  manageViewportFullscreen(): void {
    this.viewportInFullscreen = !this.viewportInFullscreen;
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

  setOpenMenu(e: IntSetOpenMenuEvent): void {
    const { id } = e.detail;
    this.openMenu = id === this.openMenu ? '' : id;
  }

  setMenuContents(e: IntSetMenuContentsEvent): void {
    const updatedContents = [...e.detail];
    this.menuContents = updatedContents;
  }

  setMenuShortcuts(e: IntSetMenuShortcutsEvent) {
    this.menuShortcuts = [...e.detail];
  }

  /** Toggles Side Menu & Sets viewable subpanel  */
  manageSideMenuEvents(e: IntManageSideMenuEvent): void {
    const { menuId, action } = e.detail;
    if (menuId) {
      if (action === 'open') {
        this.openShortcut(menuId);
      } else if (action === 'toggle') {
        this.openMenu = menuId;
        this.toggleMenu();
      }
    }
  }

  get menuToggleButton() {
    // <ia-icon icon="ellipses" style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon>
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

  get renderSideMenu(): TemplateResult {
    const drawerState = this.menuOpened ? '' : 'hidden';

    return html`
      <nav>
        <div class="minimized">${this.shortcuts} ${this.menuToggleButton}</div>
        <div id="menu" class=${drawerState}>
          <ia-menu-slider
            .menus=${this.menuContents}
            .selectedMenu=${this.openMenu}
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
  openShortcut(selectedMenuId = ''): void {
    this.openMenu = selectedMenuId;
    this.menuOpened = true;
  }

  get shortcuts(): TemplateResult {
    const shortcuts = this.menuShortcuts.map(
      ({ icon, id }) => html`
        <button class="shortcut ${id}" @click="${() => this.openShortcut(id)}">
          ${icon}
        </button>
      `
    );
    return html`<div class="shortcuts">${shortcuts}</div>`;
  }
  /** End Menu Shortcuts */

  /** Misc Render */
  get menuClass(): string {
    const drawerState = this.menuOpened ? 'open' : '';
    const fullscreenState = this.viewportInFullscreen ? 'fullscreen' : '';
    return `${drawerState} ${fullscreenState} ${this.openMenuState}`;
  }

  static get styles() {
    const subnavWidth = css`var(--menuWidth, 320px)`;
    const transitionTiming = css`var(--animationTiming, 200ms)`;
    const transitionEffect = css`transform ${transitionTiming} ease-out`;
    const menuMargin = css`var(--theaterMenuMargin, 42px)`;

    return css`
      :host,
      #frame,
      #reader,
      .menu-and-reader {
        min-height: inherit;
        height: inherit;
        position: relative;
        overflow: hidden;
        display: block;
      }

      #frame {
        background-color: var(--menuSliderBg);
      }

      #frame.fullscreen {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
      }

      #frame.fullscreen,
      #frame.fullscreen #reader {
        height: 100vh;
      }

      .loading-view {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: inherit;
        height: inherit;
      }

      ia-itemnav-loader {
        display: block;
        width: 100%;
      }

      .hidden {
        height: 1px;
        width: 1px;
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
        /* transition: ${transitionEffect}; */
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

customElements.define('ia-menu-slider', IAMenuSlider);
