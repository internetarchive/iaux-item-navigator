import { ModalManager } from '@internetarchive/modal-manager';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { html, customElement, LitElement, property } from 'lit-element';
import { MetadataResponse } from '@internetarchive/search-service';
import {
  MenuProviderInterface,
  MenuShortcutInterface,
} from '../src/interfaces/menu-interfaces';
import { CustomTheaterInterface } from '../src/interfaces/custom-theater-interface';
@customElement('book-navigator')
export class BookNavigator
  extends LitElement
  implements CustomTheaterInterface {
  @property({ attribute: false }) modal?: ModalManager;

  @property({ type: Object }) itemMD?: MetadataResponse;

  @property({ type: String }) baseHost?: string;

  @property({ type: Boolean, reflect: true }) signedIn?: boolean | null = null;

  @property({ type: Boolean }) sideMenuOpen!: boolean;

  @property({ attribute: false }) sharedObserver?: SharedResizeObserver;

  @property({ type: Array }) menuProviders?: MenuProviderInterface[];

  @property({ type: Array }) menuShortcuts?: MenuShortcutInterface[];

  emitLoadingStatusUpdate() {}

  addMenuShortcut(menuId: string) {
    return menuId;
  }

  removeMenuShortcut(menuId: string) {
    return menuId;
  }

  sortMenuShortcuts() {}

  emitMenuShortcutsUpdated() {}

  render() {
    return html` <p>foo</p> `;
  }
}
