import { html, css, LitElement, customElement, property } from 'lit-element';
import '../src/item-navigator';
import '../src/item-inspector/item-inspector';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: Object }) itemMD = {};

  @property({ type: Object }) bookManifest = {};

  @property({ type: String }) encodedManifest = '';

  firstUpdated() {
    this.fetchDemoBook();
  }

  async fetchDemoBook() {
    const manifest = await fetch('/demo/demo-book-manifest.json');
    const theJson = await manifest.json();
    this.bookManifest = theJson;
    this.encodedManifest = btoa(JSON.stringify(this.bookManifest));
  }

  async fetchItemMD() {
    const manifest = await fetch('https://archive.org/metadata/ux-team-books');
    const theJson = await manifest.json();
    this.itemMD = theJson;
  }

  render() {
    return html`
      <item-navigator baseHost="https://archive.org" .item=${this.itemMD}>
      </item-navigator>
    `;
  }

  static styles = css`
    :host {
      min-height: 64vh;
      border: 1px solid pink;
    }
    :host,
    item-navigator {
      display: block;
      position: relative;
      width: 100%;
    }
    item-navigator {
      height: inherit;
      min-height: inherit;
    }
  `;
}
