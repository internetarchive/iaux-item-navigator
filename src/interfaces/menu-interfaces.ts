import { TemplateResult } from 'lit';
import { MetadataResponse } from '@internetarchive/search-service';

export type MenuId = string;
export interface MenuShortcutInterface {
  icon: TemplateResult;
  id: MenuId;
}

export interface MenuDetailsInterface extends MenuShortcutInterface {
  label: string;
  menuDetails?: TemplateResult;
  selected?: boolean;
  followable?: boolean;
  href?: string;
}

export interface MenuProviderBaseConfigInterface {
  item: MetadataResponse;
  baseHost: string;
  subPrefix: string;
  updated?: any;
}
export interface MenuProviderInterface
  extends MenuProviderBaseConfigInterface,
    MenuDetailsInterface,
    MenuShortcutInterface {
  actionButton: TemplateResult;
}
