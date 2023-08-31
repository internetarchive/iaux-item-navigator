import '@internetarchive/icon-tumblr/icon-tumblr';
import { TemplateResult, html } from 'lit';
import Provider from './provider';
import { ProviderParams } from './share-provider-interface';

export default class extends Provider {
  name: string;

  icon: TemplateResult;

  class: string;

  constructor(params: ProviderParams) {
    super(params);
    this.name = 'Tumblr';
    this.icon = html`<ia-icon-tumblr></ia-icon-tumblr>`;
    this.class = 'tumblr';
  }

  get url(): string {
    return `https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2F${this.baseHost}%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&name=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
}
