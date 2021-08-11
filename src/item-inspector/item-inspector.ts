/* eslint-disable no-console */
import {
  css,
  html,
  LitElement,
  customElement,
  property,
  state,
} from 'lit-element';
// import { nothing, TemplateResult } from 'lit-html';
import { IntNavController } from '../interfaces/nav-controller-interface';
import {
  IntMenuShortcut,
  IntMenuProvider,
} from '../interfaces/menu-interfaces';

import { ShareProvider } from './share-provider';

const events = {
  menuUpdated: 'menuUpdated',
  updateSideMenu: 'updateSideMenu',
  PostInit: 'PostInit',
  ViewportInFullScreen: 'ViewportInFullScreen',
};

interface menuProvidersInt {
  share?: IntMenuProvider;
}

@customElement('ia-item-inspector')
export class IaItemInspector extends LitElement implements IntNavController {
  @property({ type: Object }) itemMD = {
    files: [],
    metadata: { identifier: '' },
  };

  @property({ type: String }) baseHost = 'archive.org';

  @property({ type: Object }) menuProviders: menuProvidersInt = {};

  @property({ type: Array }) menuShortcuts: IntMenuShortcut[] = [];

  @property({ type: Boolean }) sideMenuOpen = false;

  @state() fileCount: number = 0;

  @state() loaded: boolean = false;

  firstUpdated() {
    this.loaded = true;
  }

  updated(changed: any) {
    // console.log('CHANED', changed);
    if (changed.has('itemMD')) {
      this.parseItemInfo();
    }
    if (changed.has('loaded')) {
      this.emitLoadingStatusUpdate(this.loaded);
      this.setMenu();
    }
    if (changed.has('menuProviders')) {
      this.updateMenuContents();
    }
  }

  setMenu() {
    const menuProviders = {
      share: new ShareProvider({
        item: this.itemMD,
        baseHost: this.baseHost,
        subPrefix: '',
      }),
      // downloads: new DownloadProvider(this.item, this.baseHost)
    };

    this.menuProviders = menuProviders;
  }

  updateMenuContents() {
    const { share } = this.menuProviders;
    const availableMenus = [share].filter(menu => !!menu);

    const event = new CustomEvent(events.menuUpdated, {
      detail: availableMenus,
    });

    this.dispatchEvent(event);
  }

  emitLoadingStatusUpdate(loaded: boolean) {
    const event = new CustomEvent('loadingStateUpdated', {
      detail: { loaded },
    });
    this.dispatchEvent(event);
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
        position: relative;
      }

      section {
        display: flex;
        width: 100%;
        /* border: 5px dotted green; */
        justify-content: center;
        align-items: center;
      }
    `;
    return [main];
  }
}
