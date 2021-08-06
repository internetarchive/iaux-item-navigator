import { LitElement } from 'lit-element';
import { IntMenuShortcut } from './menu-interfaces';

export interface IntNavController extends LitElement {
  baseHost: string;
  itemMD: object;
  menuProviders: object;
  menuShortcuts: IntMenuShortcut[];
  sideMenuOpen: boolean;

  emitLoadingStatusUpdate: (loaded: boolean) => void;
}
