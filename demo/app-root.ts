/* eslint-disable no-restricted-globals */
import {
  html,
  css,
  LitElement,
  customElement,
  property,
  query,
  TemplateResult,
} from 'lit-element';
import {
  MetadataResponse,
  SearchService,
} from '@internetarchive/search-service';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/modal-manager';
import { ItemNavigator } from '../src/item-navigator';
import '../src/item-navigator';
@customElement('app-root')
export class AppRoot extends LitElement {
  /**
   * Example controller to connect to `<ia-item-navigator>`
   */
  @property({ type: Object }) itemMD: MetadataResponse | undefined = undefined;

  @property({ type: String }) encodedManifest = '';

  @query('ia-item-navigator') private itemNav!: ItemNavigator;

  @query('modal-manager') modalMgr!: ModalManager;

  @property({ attribute: false }) sharedObserver = new SharedResizeObserver();

  @property({ type: Boolean, reflect: true, attribute: true }) fullscreen:
    | boolean
    | null = null;

  @property({ type: Boolean, reflect: true, attribute: true }) headerOn = false;

  firstUpdated() {
    this.fetchItemMD();
    console.log(
      '<app-root> component has loaded',
      this.modalMgr,
      this.sharedObserver
    );
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
    this.headerOn = !this.headerOn;
  }

  /** Views */
  get headerExample(): TemplateResult {
    return html`
      <div slot="theater-header">
        <div class="embed-link">
          <img
            src="https://archive.org/images/glogo-jw.png"
            alt="glowing ia logo"
          />
          <a href="/details/goody"
            >The history of Little Goody Two-Shoes : otherwise called Mrs.
            Margery Two-Shoes ... [1766 edition]</a
          >
        </div>
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <h1>theater, in page</h1>
      <section>
        <ia-item-navigator
          baseHost="https://archive.org"
          .item=${this.itemMD}
          .modal=${this.modalMgr}
          .sharedObserver=${this.sharedObserver}
          @fullscreenToggled=${this.toggleFS}
        >
          ${this.headerOn ? this.headerExample : ''}
        </ia-item-navigator>
      </section>
      <div>
        <button @click=${this.toggleHeader}>toggle header</button>
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
      height: inherit;
    }
    ia-item-navigator {
      height: inherit;
      min-height: inherit;
    }
    div {
      position: relative;
      overflow: hidden;
      height: 100%;
      min-height: inherit;
    }

    .embed-link {
      height: 55px;
      border: 1px solid yellow;
    }

    modal-manager[mode='closed'] {
      display: none;
    }
  `;
}
