/* eslint-disable no-restricted-globals */
import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import {
  MetadataResponse,
  SearchService,
} from '@internetarchive/search-service';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/modal-manager';
import { ItemNavigator } from '../src/item-navigator';
import '../src/item-navigator';
import {
  MenuShortcutInterface,
  MenuDetailsInterface,
} from '../src/interfaces/menu-interfaces';
@customElement('app-root')
export class AppRoot extends LitElement {
  /**
   * Example controller to connect to `<ia-item-navigator>`
   */
  @property({ type: Object }) itemMD?: MetadataResponse;

  @property({ type: String }) encodedManifest = '';

  @property({ attribute: false }) sharedObserver = new SharedResizeObserver();

  @property({ type: Array, attribute: false })
  menuContents: MenuDetailsInterface[] = [];

  @property({ type: Array, attribute: false })
  menuShortcuts: MenuShortcutInterface[] = [];

  @property({ reflect: true, attribute: true }) fullscreen:
    | boolean
    | null = null;

  @property({ reflect: true, attribute: true }) headerOn: true | null = null;

  @property({ reflect: true, attribute: true }) loaded = true;

  @property({ reflect: true, attribute: true }) showPlaceholder:
    | true
    | null = null;

  @property({ reflect: true, attribute: true }) showTheaterExample:
    | true
    | null = true;

  @query('ia-item-navigator') private itemNav!: ItemNavigator;

  @query('modal-manager') modalMgr!: ModalManager;

  firstUpdated() {
    this.fetchItemMD();
    console.log(
      '<app-root> component has loaded',
      this.modalMgr,
      this.sharedObserver
    );

    this.itemNav.viewAvailable = false;
  }

  updated(changed: any) {
    console.log('changed', changed);
    if (changed.has('itemMD')) {
      this.fullscreenCheck();
    }
  }

  async fetchItemMD() {
    const searchService = SearchService.default;
    const mdResponse = await searchService.fetchMetadata('ux-team-books');

    if (mdResponse.error) {
      console.log('MD Fetch error: ', mdResponse.error);
      (window as any).confirm(
        'There was an error fetching response, please check dev console'
      );
      return;
    }

    console.log('mdResponse.success', JSON.stringify(mdResponse.success));
    this.itemMD = mdResponse.success;
  }

  get theaterReady(): boolean {
    return this.modalMgr && this.sharedObserver && !!this.itemMD;
  }

  get urlParams(): URLSearchParams {
    return new URLSearchParams(location.search.slice(1));
  }

  /** Fullscreen */
  get showFullscreen(): boolean {
    return this.urlParams.get('view') === 'theater';
  }

  /** sets url query param `view=theater` to toggle fullscreen */
  toggleFS(): void {
    if (this.urlParams.get('view')) {
      location.search = '';
    } else {
      location.search = 'view=theater';
    }
  }

  /** toggles attr: `<ia-item-navigator viewportinfullscreen>` */
  fullscreenCheck(): void {
    if (this.showFullscreen && this.itemNav) {
      this.fullscreen = true;
    }
  }
  /** End fullscreen */

  toggleHeader() {
    this.headerOn = this.headerOn ? null : true;
  }

  toggleLoader() {
    this.loaded = !this.loaded;
  }

  togglePlaceholder() {
    this.toggleLoader();
    const show = this.showPlaceholder ? null : true;
    this.showPlaceholder = show;
  }

  toggleImmersion() {
    const nextState = this.fullscreen ? null : true;
    if (!nextState) {
      this.menuShortcuts = [];
      return;
    }
    this.menuShortcuts = [
      {
        icon: html`<button
          @click=${() => {
            this.fullscreen = null;
            this.menuContents = [];
            this.menuShortcuts = [];
          }}
        >
          Exit
        </button>`,
        id: 'exit',
      },
    ];
    this.menuContents = [
      {
        icon: html`<button
          @click=${() => {
            this.fullscreen = null;
          }}
        >
          Exit
        </button>`,
        id: 'exit',
        label: 'Exit',
        selected: false,
      },
    ];

    this.fullscreen = nextState;
  }

  toggleTheaterExample() {
    if (this.showTheaterExample) {
      // turn on placeholder
      this.showPlaceholder = true;
      // turn off example
      this.showTheaterExample = null;

      this.menuContents = [];
      this.menuShortcuts = [];
      return;
    }

    // turn off placeholder
    this.showPlaceholder = null;
    this.showTheaterExample = true;

    const x = {
      icon: html`<p style="color: red">Allo</p>`,
      id: 'a',
      label: 'Hello world',
      menuDetails: html`<h3>Wheee!</h3>`,
    } as any;
    this.menuContents = [x];
    this.menuShortcuts = [x];
  }

  /** Views */
  get theaterExample(): TemplateResult {
    return html`
      <div slot="main">
        <div class="theater-example">
          <img
            alt="cat theater"
            src="https://archive.org/download/encyclopediaofca0000poll_t2e2/__ia_thumb.jpg"
          />
          <h3>Welcome to Cat Theater</h3>
        </div>
      </div>
    `;
  }

  get headerExample(): TemplateResult {
    return html`
      <div slot="header">
        <div class="embed-link">
          <img
            src="https://archive.org/images/glogo-jw.png"
            alt="glowing ia logo"
          />
          <a href="/details/goody">
            The history of Little Goody Two-Shoes : otherwise called Mrs.
            Margery Two-Shoes ... [1766 edition]
          </a>
        </div>
      </div>
    `;
  }

  get isViewAvailable(): boolean {
    if (this.showTheaterExample) {
      return true;
    }
    return false;
  }

  render(): TemplateResult {
    const {
      isViewAvailable,
      loaded,
      showPlaceholder,
      headerOn,
      fullscreen,
      menuContents,
      menuShortcuts,
      showTheaterExample,
    } = this;
    console.log('&&&& item nav properties', {
      loaded,
      headerOn,
      isViewAvailable,
      showTheaterExample,
      showPlaceholder,
      fullscreen,
      menuContents,
      menuShortcuts,
    });
    return html`
      <h1>theater, in page</h1>
      <section>
        <ia-item-navigator
          baseHost="https://archive.org"
          .item=${this.itemMD}
          .modal=${this.modalMgr}
          .sharedObserver=${this.sharedObserver}
          .loaded=${this.loaded}
          ?viewAvailable=${!!this.showTheaterExample}
          .menuContents=${this.menuContents}
          .menuShortcuts=${this.menuShortcuts}
          .viewportInFullscreen=${this.fullscreen}
        >
          ${this.headerOn ? this.headerExample : ''}
          ${this.showTheaterExample ? this.theaterExample : ''}
        </ia-item-navigator>
      </section>
      <div>
        <button @click=${this.toggleHeader}>toggle header</button>
        <button @click=${this.toggleLoader}>toggle loader</button>
        <button @click=${this.togglePlaceholder}>toggle placeholder</button>
        <button @click=${this.toggleTheaterExample}>toggle new theater</button>
        <button @click=${this.toggleImmersion}>toggle immersion</button>
      </div>
      <modal-manager></modal-manager>
    `;
  }

  static styles = css`
    :host([fullscreen]),
    :host([fullscreen]) section {
      height: 100vh;
      width: 100vw;
    }

    :host([fullscreen]) h1 {
      display: none;
    }

    h1 {
      color: black;
    }

    section {
      border: 1px solid pink;
      color: #222;
      height: calc(100vh - 200px);
    }

    :host,
    ia-item-navigator {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .embed-link {
      height: 55px;
      border: 1px solid yellow;
    }

    .theater-example {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 10px;
      border: 5px dotted yellow;
      flex: 1;
    }

    div[slot='main'] {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    div[slot='main'] > * {
      flex: 1;
    }

    modal-manager[mode='closed'] {
      display: none;
    }
  `;
}
