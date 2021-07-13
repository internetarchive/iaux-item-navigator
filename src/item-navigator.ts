import { css, html, LitElement, customElement, property } from 'lit-element';
import { nothing } from 'lit-html';
// @ts-ignore
import { IAMenuSlider } from '@internetarchive/ia-menu-slider';
import {
  ModalConfig,
  ModalManagerInterface,
} from '@internetarchive/modal-manager';
import '@internetarchive/icon-ellipses';

@customElement('item-navigator')
export class ItemNavigator extends LitElement {
  @property({
    converter: (value: string | null) => {
      return !value ? {} : JSON.parse(atob(value));
    },
  })
  item = {};

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
  menuShortcuts: any[] = []; // specify

  @property({ type: Array }) menuContents: any[] = []; // specify

  @property({ type: Boolean }) viewportInFullscreen = false;

  @property({ type: Boolean }) menuOpened = false;

  @property({ type: String }) openMenu = '';

  @property({ type: Object }) modalConfig: ModalConfig = new ModalConfig();

  @property({ type: Object }) modal:
    | ModalManagerInterface
    | undefined = undefined;

  constructor() {
    /** TODO: Request BookModel.js
     * Request BookNavigator.js
     * Show loading spinner
     * When JS assets loaded:
     * - render book-navigator component
     */
    super();
    this.baseHost = 'archive.org';
    this.item = {};
    this.itemType = '';
    this.menuOpened = false;
    this.signedIn = false;
    this.menuShortcuts = [];
    this.menuContents = [];
    this.viewportInFullscreen = false;
    this.openMenu = '';
    this.renderModalManager();
  }

  showItemNavigatorModal(e: CustomEvent) {
    const { detail } = e;
    this.modal?.showModal({
      config: this.modalConfig,
      customModalContent: detail.customModalContent,
    });
  }

  closeItemNavigatorModal() {
    this.modal?.closeModal();
  }

  /**
   * Event handler - handles viewport slot going into fullscreen
   */
  manageViewportFullscreen(e: CustomEvent) {
    const { isFullScreen } = e.detail;
    this.viewportInFullscreen = isFullScreen;
  }

  /**
   * Event handler - handles viewport slot going into fullscreen
   * @param {Event} e - custom event object
   *   @param {object} event.detail - custom event detail
   *     @param {string} detail.action - open, toggle, close
   *     @param {string} detail.menuId - menu id to be shown
   */
  manageSideMenuEvents(e: CustomEvent): void {
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

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }

  closeMenu() {
    this.menuOpened = false;
  }

  /**
   * Opens menu to selected menu
   * @param {string} selectedMenuId
   */
  openShortcut(selectedMenuId = '') {
    // open sidemenu to proper tab
    this.openMenu = selectedMenuId;
    this.menuOpened = true;
  }

  setOpenMenu(e: CustomEvent) {
    const { id } = e.detail;
    this.openMenu = id === this.openMenu ? '' : id;
  }

  setMenuContents(e: CustomEvent) {
    const updatedContents = [...e.detail];
    this.menuContents = updatedContents;
  }

  setMenuShortcuts(e: CustomEvent) {
    this.menuShortcuts = [...e.detail];
  }

  /**
   * computes classes for item-navigator <section> node
   */
  get menuClass() {
    const drawerState = this.menuOpened ? 'open' : '';
    const fullscreenState = this.viewportInFullscreen ? 'fullscreen' : '';
    return `${drawerState} ${fullscreenState}`;
  }

  get menuToggleButton() {
    return html`
      <button
        class="toggle-menu"
        @click=${() => this.toggleMenu()}
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

  get menuSlider() {
    return html`
      <div id="menu">
        <ia-menu-slider
          .menus=${this.menuContents}
          .selectedMenu=${this.openMenu}
          @menuTypeSelected=${this.setOpenMenu}
          @menuSliderClosed=${this.closeMenu}
          manuallyHandleClose
          open
        ></ia-menu-slider>
      </div>
    `;
  }

  /**
   * Returns the shortcut buttons for minimized view
   * @return html
   */
  get shortcuts() {
    // todo: aria tags
    const shortcuts = this.menuShortcuts.map(
      ({ icon, id }) => html`
        <button
          class="shortcut ${id}"
          @click="${() => {
            this.openShortcut(id);
          }}"
        >
          ${icon}
        </button>
      `
    );

    return html`<div class="shortcuts">${shortcuts}</div>`;
  }

  /**
   * Returns the side menu given it's open/close state
   * @return html
   */
  get renderSideMenu() {
    // todo: aria tags
    return html`
      <nav>
        <div class="minimized">${this.shortcuts} ${this.menuToggleButton}</div>
        ${this.menuSlider}
      </nav>
    `;
  }

  /**
   * Given a itemType, this chooses the proper viewport component
   * @return html
   */
  get renderViewport() {
    if (this.itemType === 'bookreader') {
      return html`
        <book-navigator
          .baseHost=${this.baseHost}
          .book=${this.item}
          ?signedIn=${this.signedIn}
          ?sideMenuOpen=${this.menuOpened}
          @ViewportInFullScreen=${this.manageViewportFullscreen}
          @updateSideMenu=${this.manageSideMenuEvents}
          @menuUpdated=${this.setMenuContents}
          @menuShortcutsUpdated=${this.setMenuShortcuts}
          @showItemNavigatorModal=${this.showItemNavigatorModal}
          @closeItemNavigatorModal=${this.closeItemNavigatorModal}
        >
          <div slot="bookreader">
            <slot name="bookreader"></slot>
          </div>
        </book-navigator>
      `;
    }
    return html`<div class="viewport"></div>`;
  }

  renderModalManager() {
    this.modal = document.createElement(
      'modal-manager'
    ) as ModalManagerInterface;
    this.modal.setAttribute('id', 'item-navigator-modal');
    this.modalConfig.title = html`Delete Bookmark`;
    this.modalConfig.headline = html`This bookmark contains a note. Deleting it
    will permanently delete the note. Are you sure?`;
    this.modalConfig.headerColor = '#194880';
    document.body.appendChild(this.modal);
  }

  render() {
    const renderMenu = this.menuContents.length || this.menuShortcuts.length;
    return html`
      <div id="frame" class=${this.menuClass}>
        <slot name="item-nav-header"></slot>
        <div class="menu-and-reader">
          ${renderMenu ? this.renderSideMenu : nothing}
          <div id="reader">${this.renderViewport}</div>
        </div>
      </div>
    `;
  }

  static get styles() {
    const subnavWidth = css`var(--menuWidth, 320px)`;
    const tabletPlusQuery = css`
      @media (min-width: 640px);
    `;
    const transitionTiming = css`var(--animationTiming, 200ms)`;
    const transitionEffect = css`transform ${transitionTiming} ease-out`;

    return css`
      #frame {
        position: relative;
        overflow: hidden;
      }

      #frame.fullscreen,
      #frame.fullscreen #reader {
        height: 100vh;
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
        border-bottom-right-radius: 5%;
        position: absolute;
        padding-top: 0.6rem;
        left: 0;
        width: 4rem;
        z-index: 2;
      }

      nav .minimized button {
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin: auto;
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
      }

      nav .minimized button.toggle-menu > * {
        border: 2px solid var(--iconStrokeColor);
        border-radius: var(--iconWidth);
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin: auto;
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
        transition: ${transitionEffect};
        transform: translateX(0);
        width: 100%;
      }

      .open #menu {
        width: ${subnavWidth};
        transform: translateX(0);
        transition: ${transitionEffect};
      }

      ${tabletPlusQuery} {
        .open #reader {
          transition: ${transitionEffect};
          transform: translateX(${subnavWidth});
          width: calc(100% - ${subnavWidth});
        }
      }

      #loading-indicator {
        display: none;
      }

      #loading-indicator.visible {
        display: block;
      }
    `;
  }
}

customElements.define('ia-menu-slider', IAMenuSlider);
