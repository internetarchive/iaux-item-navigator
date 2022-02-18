import { LitElement } from 'lit';
import { MetadataResponse } from '@internetarchive/search-service';
import { ModalManager } from '@internetarchive/modal-manager';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import {
  MenuProviderInterface,
  MenuShortcutInterface,
} from './menu-interfaces';

export interface CustomTheaterInterface extends LitElement {
  baseHost?: string;
  itemMD?: MetadataResponse;
  menuProviders?: MenuProviderInterface[];
  menuShortcuts?: MenuShortcutInterface[];
  sideMenuOpen: boolean;

  signedIn?: boolean | null;

  sharedObserver?: SharedResizeObserver;
  modal?: ModalManager;

  emitLoadingStatusUpdate: (loaded: boolean) => void;

  addMenuShortcut: (menuId: string) => void;
  removeMenuShortcut: (menuId: string) => void;
  sortMenuShortcuts: () => void;
  emitMenuShortcutsUpdated: () => void;
}
