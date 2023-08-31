import '@internetarchive/icon-email/icon-email';
import { TemplateResult, html } from 'lit';
import Provider from './provider';
import type { ProviderParams } from './share-provider-interface';

export default class extends Provider {
  name: string;

  icon: TemplateResult;

  class: string;

  constructor(params: ProviderParams) {
    super(params);
    this.name = 'Email';
    this.icon = html`<ia-icon-email></ia-icon-email>`;
    this.class = 'email';
  }

  get url(): string {
    return `mailto:?body=https://${this.baseHost}/details/${this.itemPath}&subject=${this.description} : ${this.creator}${this.promoCopy}`;
  }
}
