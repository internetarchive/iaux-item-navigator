import { LitElement } from 'lit-element';
import { MetadataResponse } from '@internetarchive/search-service';
import { IntMenuShortcut } from './menu-interfaces';

export interface IntNavController extends LitElement {
  baseHost: string;
  itemMD: MetadataResponse;
  menuProviders: object;
  menuShortcuts: IntMenuShortcut[];
  sideMenuOpen: boolean;

  emitLoadingStatusUpdate: (loaded: boolean) => void;
}
