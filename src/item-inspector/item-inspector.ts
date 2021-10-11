/* eslint-disable no-console */
import {
  css,
  html,
  LitElement,
  customElement,
  property,
  state,
} from 'lit-element';
import { MetadataResponse } from '@internetarchive/search-service';

import { IntNavController } from '../interfaces/nav-controller-interface';
import {
  IntMenuProvider,
  IntMenuShortcut,
} from '../interfaces/menu-interfaces';
import { IntManageFullscreenEvent } from '../interfaces/event-interfaces';

import { ShareProvider } from './share-provider';
import { FilesByTypeProvider } from './files-by-type/files-by-type-provider';
import { VisualModsProvider } from './visual-mod-provider';

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

  @property({ type: Boolean }) sideMenuOpen = false;

  @property({ type: Boolean }) fullscreenState = false;

  @state() fileCount: number = 0;

  @state() loaded: boolean = false;

  @state() private shortcutOrder = ['visualMods'];

  firstUpdated() {
    this.loaded = true;
  }

  updated(changed: any) {
    if (changed.has('loaded')) {
      setTimeout(() => this.emitLoadingStatusUpdate(this.loaded), 1000);
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

  addMenuShortcut(menuId: keyof menuProvidersInt) {
    if (this.menuShortcuts.find(m => m.id === menuId)) {
      return;
    }

    const shortcut = this.menuProviders[menuId];
    this.menuShortcuts.push(shortcut);
    this.sortMenuShortcuts();
    this.emitMenuShortcutsUpdated();
  }

  /**
   * Removes a provider object from the menuShortcuts array and emits a
   * menuShortcutsUpdated event.
   */
  removeMenuShortcut(menuId: string) {
    this.menuShortcuts = this.menuShortcuts.filter(m => m.id !== menuId);
    this.emitMenuShortcutsUpdated();
  }

  /**
   * Sorts the menuShortcuts property by comparing each provider's id to
   * the id in each iteration over the shortcutOrder array.
   */
  sortMenuShortcuts() {
    this.menuShortcuts = this.shortcutOrder.reduce(
      (shortcuts: IntMenuShortcut[], id) => {
        const menu = this.menuShortcuts.find(m => m.id === id);

        // eslint-disable-next-line no-param-reassign
        if (menu) {
          const newShortcuts = [...shortcuts, menu];
          // eslint-disable-next-line no-param-reassign
          shortcuts = newShortcuts;
        }
        return shortcuts;
      },
      []
    );
  }

  emitMenuShortcutsUpdated() {
    const event = new CustomEvent('menuShortcutsUpdated', {
      detail: this.menuShortcuts,
    });
    this.dispatchEvent(event);
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
      visualMods: new VisualModsProvider({
        updated: (modType: string) => {
          if (modType === 'toggleFullscreen') {
            this.updateFullscreenState();
          }
        },
        item: this.itemMD,
        baseHost: this.baseHost,
        subPrefix: '',
        // maybe DOM root for class configs?
      }),
    };

    this.menuProviders = menuProviders;
    this.addMenuShortcut('visualMods');
  }

  updateFullscreenState() {
    const isFullScreen = !this.fullscreenState;
    this.fullscreenState = isFullScreen;

    const event = new CustomEvent('ViewportInFullScreen', {
      detail: { isFullScreen },
    } as IntManageFullscreenEvent);
    this.dispatchEvent(event);
  }

  updateMenuContents() {
    const { share, filesByType, visualMods } = this.menuProviders;
    const availableMenus = [filesByType, share, visualMods].filter(
      menu => !!menu
    );

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
        overflow: auto;
        background-color: black;
        color: var(--primaryTextColor, #fff);
      }

      :host,
      section {
        min-height: inherit;
        height: inherit;
      }

      section {
        margin: auto;
        width: 100%;
        text-align: center;
      }

      img {
        border: 1px solid var(--primaryTextColor, #fff);
      }
    `;
    return [main];
  }
}
