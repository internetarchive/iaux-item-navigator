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
import { MetadataResponse } from '@internetarchive/search-service';
import { IntNavController } from '../interfaces/nav-controller-interface';
import {
  IntMenuShortcut,
  IntMenuProvider,
} from '../interfaces/menu-interfaces';

import { ShareProvider } from './share-provider';
import { FilesByTypeProvider } from './files-by-type/files-by-type-provider';

// eslint-disable-next-line no-shadow
enum ItemInspectorEvents {
  menuUpdated = 'menuUpdated',
  updateSideMenu = 'updateSideMenu',
  PostInit = 'PostInit',
  ViewportInFullScreen = 'ViewportInFullScreen',
}

interface menuProvidersInt {
  share?: IntMenuProvider;
  filesByType?: IntMenuProvider;
}

@customElement('ia-item-inspector')
export class IaItemInspector extends LitElement implements IntNavController {
  @property({ type: Object }) itemMD: MetadataResponse = {} as MetadataResponse;

  @property({ type: String }) baseHost = 'https://archive.org';

  @property({ type: Object }) menuProviders: menuProvidersInt = {};

  @property({ type: Array }) menuShortcuts: IntMenuShortcut[] = [];

  @property({ type: Boolean }) sideMenuOpen = false;

  @state() fileCount: number = 0;

  @state() loaded: boolean = false;

  firstUpdated() {
    this.loaded = true;
  }

  updated(changed: any) {
    if (changed.has('itemMD') && this.itemMD) {
      this.parseItemInfo();
    }
    if (changed.has('loaded') && this.itemMD) {
      this.emitLoadingStatusUpdate(this.loaded);
      this.setMenu();
    }
    if (changed.has('menuProviders')) {
      this.updateMenuContents();
    }
  }

  render() {
    const { identifier = '' } = this.itemMD?.metadata;
    return html`
      <section>
        <div>
          <h3>${identifier}</h3>
          <p>foo</p>
        </div>
        <img
          src=${this.imageUrl}
          alt=${`${this.itemMD?.metadata?.identifier} thumbnail`}
        />
      </section>
    `;
  }

  setMenu() {
    const menuProviders = {
      share: new ShareProvider({
        item: this.itemMD,
        baseHost: this.baseHost,
        subPrefix: '',
      }),
      filesByType: new FilesByTypeProvider({
        item: this.itemMD,
        baseHost: this.baseHost,
        subPrefix: '',
      }),
    };

    this.menuProviders = menuProviders;
  }

  updateMenuContents() {
    const { share, filesByType } = this.menuProviders;
    const availableMenus = [share, filesByType].filter(menu => !!menu);

    const event = new CustomEvent(ItemInspectorEvents.menuUpdated, {
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
    const { metadata = {} } = this.itemMD;
    const url = `${this.baseHost}/download/${metadata?.identifier}/__ia_thumb.jpg`;
    console.log('imageUrl metadata', metadata?.identifier, url);
    return url;
  }

  static get styles() {
    const main = css`
      :host {
        display: block;
        width: 100%;
        margin: 0 auto;
        position: relative;
        min-height: inherit;
        height: inherit;
        position: relative;
        overflow: hidden;
        display: block;
      }

      section {
        margin: auto;
        width: 100%;
        border: 1px solid;
        text-align: center;
      }

      img {
        border: 1px solid var(--primaryTextColor, #fff);
      }
    `;
    return [main];
  }
}
