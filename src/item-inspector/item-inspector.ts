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
  [menuId: string]: IntMenuProvider;
}

@customElement('ia-item-inspector')
export class IaItemInspector extends LitElement implements IntNavController {
  @property({ type: Object }) itemMD: MetadataResponse = {
    metadata: {},
  } as MetadataResponse;

  @property({ type: String }) baseHost = 'https://archive.org';

  @property({ type: Object }) menuProviders: menuProvidersInt = {};

  @property({ type: Array }) menuShortcuts: IntMenuShortcut[] = [];

  @property({ type: Array }) shortcutOrder: string[] = ['filesByType'];

  @property({ type: Boolean }) sideMenuOpen = false;

  @state() fileCount: number = 0;

  @state() loaded: boolean = false;

  firstUpdated() {
    this.loaded = true;
  }

  updated(changed: any) {
    if (changed.has('loaded')) {
      this.emitLoadingStatusUpdate(this.loaded);
    }

    if (changed.has('itemMD') && this.itemMD) {
      this.parseItemInfo();
      this.setMenu();
    }

    if (changed.has('menuProviders') || changed.has('menuShortcuts')) {
      this.updateMenuContents();
    }
  }

  render() {
    const { identifier = '' } = this.itemMD?.metadata;
    return html`
      <section>
        <div>
          <h2>${identifier}</h2>
        </div>
        <img src=${this.imageUrl} alt=${`${identifier} thumbnail`} />
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

    this.addMenuShortcut('filesByType');
  }

  addMenuShortcut(menuId: keyof menuProvidersInt) {
    if (this.menuShortcuts.find(m => m.id === menuId)) {
      return;
    }

    const shortcut = this.menuProviders[menuId];
    this.menuShortcuts.push(shortcut);
    this.sortMenuShortcuts();
    this.emitMenuShortcutsUpdated();
  }

  sortMenuShortcuts() {
    const sorted = this.shortcutOrder.reduce(
      (shortcuts: IntMenuShortcut[], id): IntMenuShortcut[] => {
        const menu = this.menuShortcuts.find(
          m => m.id === id
        ) as IntMenuShortcut;

        let allShortcuts: IntMenuShortcut[] = [...shortcuts];
        if (menu) {
          const newShortcut = [menu];
          allShortcuts = [...shortcuts, ...newShortcut];
        }
        return allShortcuts;
      },
      []
    );

    this.menuShortcuts = sorted;
  }

  emitMenuShortcutsUpdated() {
    const event = new CustomEvent('menuShortcutsUpdated', {
      detail: this.menuShortcuts,
    });
    this.dispatchEvent(event);
  }

  removeMenuShortcut(menuId: string) {
    this.menuShortcuts = this.menuShortcuts.filter(m => m.id !== menuId);
    this.emitMenuShortcutsUpdated();
  }

  updateMenuContents() {
    const { share, filesByType } = this.menuProviders;
    const availableMenus = [filesByType, share].filter(menu => !!menu);

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
    return url;
  }

  static get styles() {
    const main = css`
      :host {
        display: block;
        width: 100%;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
        display: block;
      }

      :host,
      section {
        min-height: inherit;
        height: inherit;
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
