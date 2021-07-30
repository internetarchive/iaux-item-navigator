import { TemplateResult } from 'lit-html';

export interface IntMenuShortcut {
  icon: TemplateResult;
  id: string;
}

export interface IntMenuIconAndDetails extends IntMenuShortcut {
  icon: TemplateResult;
  id: string;
  label: string;
  menuDetails: TemplateResult;
  selected: boolean;
  followable: boolean;
  href: string;
}

export interface IntMenuProvider extends IntMenuIconAndDetails {}
