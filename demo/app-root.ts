/* eslint-disable no-restricted-globals */
import {
  html,
  css,
  LitElement,
  customElement,
  property,
  query,
} from 'lit-element';
import '../src/item-inspector/item-inspector';
import {
  MetadataResponse,
  SearchService,
} from '@internetarchive/search-service';
import '../src/item-navigator';
import '@internetarchive/modal-manager';
import {
  SharedResizeObserver,
  // SharedResizeObserverInterface,
  // SharedResizeObserverResizeHandlerInterface,
} from '@internetarchive/shared-resize-observer';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: Object }) itemMD: MetadataResponse | undefined = undefined;

  @property({ type: Object }) bookManifest = {};

  @property({ type: String }) encodedManifest = '';

  @query('item-navigator') private itemNav!: any;

  @query('modal-manager') modalMgr!: any;

  @property({ attribute: false }) sharedObserver = new SharedResizeObserver();

  firstUpdated() {
    this.fetchItemMD();
    console.log('AP R', this.modalMgr, this.sharedObserver);
  }

  /**
   * @inheritdoc
   */
  updated(changed: any) {
    console.log('changed', changed);
    if (changed.has('itemMD')) {
      this.fullscreenCheck();
    }
  }

  get theaterReady(): boolean {
    return this.modalMgr && this.sharedObserver && this.itemMD;
  }

  fullscreenCheck() {
    if (this.showFullscreen && this.itemNav) {
      this.itemNav.viewportInFullscreen = true;
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

    this.itemMD = mdResponse.success;
  }

  get urlParams(): URLSearchParams {
    return new URLSearchParams(location.search.slice(1));
  }

  get showFullscreen(): boolean {
    return this.urlParams.get('view') === 'theater';
  }

  get renderMD() {
    const x = [];
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const md in this.itemMD) {
      const val = (this.itemMD as any)[md];
      x.push(
        html`<dt>${md}</dt>
          :
          <dd>${val}</dd>`
      );
    }
    return html`<dl>${[...x]}</dl>`;
  }

  toggleFS() {
    if (this.urlParams.get('view')) {
      location.search = '';
    } else {
      location.search = 'view=theater';
    }
  }

  get theaterBlock() {
    return html`
      <item-navigator
        baseHost="https://archive.org"
        .item=${this.itemMD}
        .modal=${this.modalMgr}
        .sharedObserver=${this.sharedObserver}
        @ViewportInFullScreen=${this.toggleFS}
      ></item-navigator>
    `;
  }

  get placeholder() {
    return html`<h2>Please hold as we fetch an item for ya</h2>`;
  }

  render() {
    const theater = this.theaterReady ? this.theaterBlock : this.placeholder;
    return html`
      <h1>theater, in page</h1>
      ${theater}
      <section>${this.renderMD}</section>
      <modal-manager></modal-manager>
    `;
  }

  static styles = css`
    :host {
      border: 1px solid pink;
      color: #222;
    }

    :host,
    item-navigator {
      display: block;
      position: relative;
      width: 100%;
      min-height: 64vh;
      height: 64vh;
    }
    item-navigator {
      height: inherit;
      min-height: inherit;
    }
    div {
      position: relative;
      overflow: hidden;
      height: 100%;
      min-height: inherit;
    }

    modal-manager[mode='closed'] {
      display: none;
    }
  `;
}
