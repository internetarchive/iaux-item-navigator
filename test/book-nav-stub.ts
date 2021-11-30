import { ModalManagerInterface } from '@internetarchive/modal-manager';
import { MetadataResponse } from '@internetarchive/search-service';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { html, customElement, LitElement, property } from 'lit-element';

@customElement('book-navigator')
export class BookNavigator extends LitElement {
  @property({ attribute: false }) modal?: ModalManagerInterface;

  @property({ type: String }) baseHost?: string;

  @property({ type: Object }) book?: MetadataResponse;

  @property({ type: Boolean, reflect: true }) signedIn?: boolean | null = null;

  @property({ type: Boolean }) sideMenuOpen?: boolean;

  @property({ attribute: false }) sharedObserver?: SharedResizeObserver;

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
