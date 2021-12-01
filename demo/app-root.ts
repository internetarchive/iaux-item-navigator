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
import '../src/item-inspector/item-inspector';
import {
  MetadataResponse,
  SearchService,
} from '@internetarchive/search-service';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import '../src/item-navigator';
// import { ItemNavigator } from '../src/item-navigator';

import '@internetarchive/modal-manager';

@customElement('app-root')
export class AppRoot extends LitElement {
  /**
   * Example controller to connect to `<ia-item-navigator>`
   */
  @property({ type: Object }) itemMD: MetadataResponse | undefined = undefined;

  @property({ type: Object }) bookManifest = {};

  @property({ type: String }) encodedManifest = '';

  @query('ia-item-navigator') private itemNav!: any;

  @query('modal-manager') modalMgr!: any;

  @property({ attribute: false }) sharedObserver = new SharedResizeObserver();

  firstUpdated() {
    this.fetchItemMD();
    console.log(
      '<app-root> component has loaded',
      this.modalMgr,
      this.sharedObserver
    );
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

  /**
   * toggles attr: `<ia-item-navigator viewportinfullscreen>`
   */
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

    console.log('mdResponse.success', JSON.stringify(mdResponse.success));
    this.itemMD = mdResponse.success;
  }

  get urlParams(): URLSearchParams {
    return new URLSearchParams(location.search.slice(1));
  }

  get showFullscreen(): boolean {
    return this.urlParams.get('view') === 'theater';
  }

  /**
   * sets url query param `view=theater` to toggle fullscreen
   */
  toggleFS(): void {
    if (this.urlParams.get('view')) {
      location.search = '';
    } else {
      location.search = 'view=theater';
    }
  }

  get theaterBlock(): TemplateResult {
    return html`
      <ia-item-navigator
        baseHost="https://archive.org"
        .item=${this.itemMD}
        .modal=${this.modalMgr}
        .sharedObserver=${this.sharedObserver}
        @ViewportInFullScreen=${this.toggleFS}
      ></ia-item-navigator>
    `;
  }

  get placeholder(): TemplateResult {
    return html`<h2>Please hold as we fetch an item for ya</h2>`;
  }

  render(): TemplateResult {
    const theater = this.theaterReady ? this.theaterBlock : this.placeholder;
    return html`
      <h1>theater, in page</h1>
      ${theater}
      <modal-manager></modal-manager>
    `;
  }

  static styles = css`
    :host {
      border: 1px solid pink;
      color: #222;
    }

    :host,
    ia-item-navigator {
      display: block;
      position: relative;
      width: 100%;
      min-height: 64vh;
      height: 64vh;
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

    modal-manager[mode='closed'] {
      display: none;
    }
  `;
}
