import { TemplateResult } from 'lit-html';
import { ModalConfig } from '@internetarchive/modal-manager';
import { IntMenuProvider, IntMenuShortcut } from './menu-interfaces';

/** Toggles Menu && Sets open panel */
export interface IntManageSideMenuEvent extends CustomEvent {
  type: 'updateSideMenu';
  detail: {
    menuId: string | undefined | '';
    action: 'open' | 'toggle' | '';
  };
}

/** Sets open panel */
export interface IntSetOpenMenuEvent extends CustomEvent {
  type: 'menuTypeSelected';
  detail: {
    id: string /** name of menu to open */;
  };
}

/** Sets menu order that is displayed */
export interface IntSetMenuContentsEvent extends CustomEvent {
  type: 'menuUpdated';
  detail: IntMenuProvider[];
}

/** list of shortcut configs that displays in minimized menu */
export interface IntSetMenuShortcuts extends CustomEvent {
  type: 'menuShortcutsUpdated';
  detail: IntMenuShortcut[];
}

/** Toggles fullscreen mode */
export interface IntManageFullscreenEvent extends CustomEvent {
  type: 'ViewportInFullScreen';
  detail: {
    isFullScreen: boolean;
  };
}

/** Toggles modal & sets contents */
export interface IntOpenModalEvent extends CustomEvent {
  type: 'showItemNavigatorModal';
  detail: {
    config: ModalConfig;
    customModalContent: TemplateResult;
  };
}
