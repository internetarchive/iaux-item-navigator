import '@internetarchive/icon-pinterest/icon-pinterest';
import { TemplateResult, html } from 'lit';
import Provider from './provider';
import { ProviderParams } from './share-provider-interface';

export default class extends Provider {
  name: string;

  icon: TemplateResult;

  class: string;

  constructor(params: ProviderParams) {
    super(params);
    this.name = 'Pinterest';
    this.icon = html`<ia-icon-pinterest></ia-icon-pinterest>`;
    this.class = 'pinterest';
  }

  override get url(): string {
    return `http://www.pinterest.com/pin/create/button/?url=https://${this.baseHost}/details/${this.itemPath}&description=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
}
