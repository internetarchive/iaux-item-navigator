import { TemplateResult } from 'lit';

export type ProviderParams = {
  class: string;
  icon: TemplateResult | string;
  name: string;

  promoCopy: string;
  description: string;
  creator: string;

  // ia item
  fileSubPrefix: string;
  identifier: string;
  baseHost: string;
  itemPath: string;
};
