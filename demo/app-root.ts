import { html, css, LitElement, customElement, property } from 'lit-element';
import '../src/item-navigator';
import '../src/item-inspector/item-inspector';
import {
  MetadataResponse,
  SearchService,
} from '@internetarchive/search-service';
@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: Object }) itemMD: MetadataResponse | undefined = undefined;

  @property({ type: Object }) bookManifest = {};

  @property({ type: String }) encodedManifest = '';

  firstUpdated() {
    this.fetchItemMD();
    // this.fetchDemoBook();
  }

  async fetchDemoBook() {
    const manifest = await fetch('/demo/demo-book-manifest.json');
    const theJson = await manifest.json();
    this.bookManifest = theJson;
    this.encodedManifest = btoa(JSON.stringify(this.bookManifest));
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
    console.log('** App Root: this.itemMD', this.itemMD);
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

  render() {
    console.log('---- APP ROOT - ', this.itemMD);
    if (!this.itemMD) {
      return html`<h2>Please hold as we fetch an item for ya</h2>`;
    }

    return html`
      <h1>theater, in page</h1>
      <item-navigator baseHost="https://archive.org" .item=${this.itemMD}>
      </item-navigator>
      <section>${this.renderMD}</section>
    `;
  }

  static styles = css`
    :host {
      min-height: 64vh;
      border: 1px solid pink;
      color: #222;
    }

    :host,
    item-navigator {
      display: block;
      position: relative;
      width: 100%;
      min-height: 64vh;
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
  `;
}
