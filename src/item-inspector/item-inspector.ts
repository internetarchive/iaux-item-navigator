/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
import {
  css,
  html,
  LitElement,
  customElement,
  property,
  state,
} from 'lit-element';
import { MetadataResponse } from '@internetarchive/search-service';

import {
  ModalManagerInterface,
  ModalConfig,
} from '@internetarchive/modal-manager';
import { SharedResizeObserverInterface } from '@internetarchive/shared-resize-observer';
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

  @property({ attribute: false }) modal!: ModalManagerInterface;

  @property({ attribute: false }) sharedRO!: SharedResizeObserverInterface;

  @state() fileCount: number = 0;

  @state() loaded: boolean = false;

  @state() private shortcutOrder = ['visualMods'];

  firstUpdated() {
    this.loaded = true;
    console.log('modal', this.modal);
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

  modalClosedCallback() {
    console.log('item-inspector, modal closed');
  }

  openModal() {
    const config = new ModalConfig();
    const customModalContent = html`
      Can contain any markup, including web components. Event listeners also
      work. Try clicking on the picture.
      <div style="text-align: center">
        <a href="https://fillmurray.com" style="display: block">Fill Murray</a>
        <img src="100x100.jpg" alt="foo" />
      </div>
    `;

    this.modal.showModal({
      config,
      customModalContent,
      userClosedModalCallback: this.modalClosedCallback,
    });
  }

  render() {
    const { identifier = '' } = this.itemMD?.metadata;
    return html`
      <section>
        <div>
          <h2>${identifier}</h2>
        </div>
        <img src=${this.imageUrl} alt=${`${identifier} thumbnail`} />
        <button @click=${() => this.openModal()}>open modal</button>
        <p style="font-size: 20px;">
          Bacon ipsum dolor amet flank chicken leberkas sausage, meatball pork
          belly jowl. Chislic bacon salami frankfurter shankle drumstick
          andouille ball tip alcatra. Fatback beef ribs chicken, jerky ground
          round hamburger pork chop biltong. Shoulder short loin rump jerky
          kielbasa pork porchetta fatback ribeye pork belly sirloin chislic
          turducken corned beef tri-tip. Chuck pancetta meatball tail, spare
          ribs ham hock capicola pig. Ham hock hamburger chicken tri-tip venison
          swine burgdoggen boudin meatloaf pastrami chuck. Tri-tip spare ribs
          drumstick, tail rump hamburger burgdoggen swine t-bone tongue
          andouille chislic alcatra. Pork loin jowl frankfurter, doner meatball
          short loin ham hock filet mignon hamburger rump turkey bresaola
          shoulder sirloin flank. Ribeye sausage pig t-bone bacon frankfurter
          cupim capicola fatback pastrami ball tip pork belly. Picanha pancetta
          andouille flank shankle venison tri-tip tail, kevin turkey turducken
          chicken. Bacon picanha swine frankfurter, prosciutto chislic doner
          alcatra pork loin corned beef jowl biltong meatball chuck. Bacon
          burgdoggen pig fatback cupim t-bone. Cow pork loin bresaola brisket
          shoulder filet mignon chicken. Sirloin bresaola porchetta beef
          capicola meatloaf brisket shankle jerky turkey pork tri-tip swine
          kevin salami. Meatball t-bone doner venison. Pig tri-tip chuck, shank
          chicken pork chop landjaeger spare ribs jerky swine ham hock buffalo
          sirloin. Leberkas pancetta tenderloin, meatloaf buffalo rump pastrami
          chuck. Jerky cupim porchetta, tenderloin chuck andouille venison pork
          salami. Chuck strip steak cupim, turducken ham hock kielbasa shoulder
          porchetta chislic short loin tri-tip biltong cow corned beef.
        </p>
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
