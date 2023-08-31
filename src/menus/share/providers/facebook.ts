import '@internetarchive/icon-facebook/icon-facebook';
import { TemplateResult, html } from 'lit';
import Provider from './provider';
import type { ProviderParams } from './share-provider-interface';

export default class extends Provider {
  name: string;

  icon: TemplateResult;

  class: string;

  constructor(params: ProviderParams) {
    super(params);
    this.name = 'Facebook';
    this.icon = html`<ia-icon-facebook></ia-icon-facebook>`;
    this.class = 'facebook';
  }

  get url(): string {
    return `https://www.facebook.com/sharer/sharer.php?u=https://${this.baseHost}/details/${this.itemPath}`;
  }
}
