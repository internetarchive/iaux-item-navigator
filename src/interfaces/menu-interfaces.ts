import { TemplateResult } from 'lit-html';
import { MetadataResponse } from '@internetarchive/search-service';

export interface IntMenuShortcut {
  icon: TemplateResult;
  id: string;
}

export interface IntMenuIconAndDetails extends IntMenuShortcut {
  icon: TemplateResult;
  id: string;
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
}
export interface IntMenuProvider
  extends IntProviderArgs,
    IntMenuIconAndDetails,
    IntMenuShortcut {}
