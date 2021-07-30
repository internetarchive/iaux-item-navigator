import {
  css,
  html,
  LitElement,
  customElement,
  property,
  state,
} from 'lit-element';
// import { nothing, TemplateResult } from 'lit-html';
import { IntNavController } from './interfaces/nav-controller-interface';
import { IntMenuShortcut } from './interfaces/menu-interfaces';
@customElement('ia-item-inspector')
export class IaItemInspector extends LitElement implements IntNavController {
  @property({ type: Object }) itemMD = {
    files: [],
    metadata: { identifier: '' },
  };

  @property({ type: String }) baseHost = 'archive.org';

  @property({ type: Object }) menuProviders = {};

  @property({ type: Array }) menuShortcuts: IntMenuShortcut[] = [];

  @property({ type: Boolean }) sideMenuOpen = false;

  @state() fileCount = 0;

  updated(changed: any) {
    if (changed.has('itemMD')) {
      this.parseItemInfo();
    }
  }

  parseItemInfo() {
    this.fileCount = this.itemMD?.files?.length || 0;
  }

  get imageUrl() {
    const { metadata } = this.itemMD;
    return `${this.baseHost}/services/img/${metadata?.identifier}`;
  }

  render() {
    return html`
      <section>
        <img src=${this.imageUrl} alt="default item" />
        <div>
          <h3>Welcome to item:</h3>
          <p>foo</p>
        </div>
      </section>
    `;
  }

  static get styles() {
    const main = css`
      :host {
        display: block;
        width: 100%;
        margin: 0 auto;
      }

      section {
        display: flex;
      }
    `;
    return [main];
  }
}
