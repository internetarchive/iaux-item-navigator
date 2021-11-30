import { LitElement } from 'lit-element';
import { MetadataResponse } from '@internetarchive/search-service';
import { ModalManager } from '@internetarchive/modal-manager';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { IntMenuShortcut } from './menu-interfaces';

export interface IntNavController extends LitElement {
  baseHost: string;
  itemMD: MetadataResponse;
  menuProviders: object;
  menuShortcuts: IntMenuShortcut[];
  sideMenuOpen: boolean;

  signedIn: boolean;

  sharedObserver: SharedResizeObserver;
  modal: ModalManager;

  emitLoadingStatusUpdate: (loaded: boolean) => void;

  addMenuShortcut: (menuId: string) => void;
  removeMenuShortcut: (menuId: string) => void;
  sortMenuShortcuts: () => void;
  emitMenuShortcutsUpdated: () => void;

  book: MetadataResponse;
}

export interface BookNavigator extends IntNavController {
  book: MetadataResponse;
}
