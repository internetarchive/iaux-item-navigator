import { TemplateResult } from 'lit-html';
import { MetadataResponse } from '@internetarchive/search-service';

export type MenuId = string;
export interface IntMenuShortcut {
  icon: TemplateResult;
  id: MenuId;
}

export interface IntMenuIconAndDetails extends IntMenuShortcut {
  icon: TemplateResult;
  id: MenuId;
  label: string;
  menuDetails?: TemplateResult;
  selected?: boolean;
  followable?: boolean;
  href?: string;
}

export interface IntProviderArgs {
  item: MetadataResponse;
  baseHost: string;
  subPrefix: string;
  updated?: any;
}
export interface IntMenuProvider
  extends IntProviderArgs,
    IntMenuIconAndDetails,
    IntMenuShortcut {}
