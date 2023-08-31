import '@internetarchive/icon-twitter/icon-twitter';
import { TemplateResult, html } from 'lit';
import Provider from './provider';
import { ProviderParams } from './share-provider-interface';

export default class TwitterProvider extends Provider {
  name: string;

  icon: TemplateResult;

  class: string;

  constructor(params: ProviderParams) {
    super(params);
    this.name = 'Twitter';
    this.icon = html`<ia-icon-twitter></ia-icon-twitter>`;
    this.class = 'twitter';
  }

  get url(): string {
    return `https://twitter.com/intent/tweet?url=https://${this.baseHost}/details/${this.itemPath}&via=internetarchive&text=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
}
