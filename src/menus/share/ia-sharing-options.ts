/* eslint-disable lit-a11y/click-events-have-key-events */
/* eslint-disable lit-a11y/list */
import { classMap } from 'lit/directives/class-map';
import { ifDefined } from 'lit/directives/if-defined';
import { html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators';
import '@internetarchive/icon-link/icon-link';

import sharingOptionsCSS from './styles/ia-sharing-options';
import EmailProvider from './providers/email';
import FacebookProvider from './providers/facebook';
import PinterestProvider from './providers/pinterest';
import TumblrProvider from './providers/tumblr';
import TwitterProvider from './providers/twitter';
import { ProviderParams } from './providers/share-provider-interface';
import type Provider from './providers/provider';

const copyToClipboard = (options: Record<any, any>) => {
  const currentTarget = options.currentTarget as HTMLElement;
  const textarea = currentTarget.querySelector('textarea');
  const note = currentTarget.querySelector('small') as any;
  textarea!.select();
  document.execCommand('copy');
  textarea!.blur();
  note.classList.add('visible');
  clearTimeout(note.timeout);
  note.timeout = setTimeout(() => note.classList.remove('visible'), 4000);
};

export class IASharingOptions extends LitElement {
  static get styles() {
    return sharingOptionsCSS;
  }

  @property({ type: String }) baseHost = 'archive.org';

  @property({ type: String }) creator = '';

  @property({ type: String }) description = '';

  @property({ type: Boolean }) embedOptionsVisible = false;

  @property({ type: String }) identifier = '';

  @property({ type: Array }) sharingOptions: Provider[] = [];

  @property({ type: String }) type = '';

  @property({ type: Boolean }) renderHeader = false;

  @property({ type: String }) fileSubPrefix = '';

  firstUpdated() {
    const {
      baseHost,
      creator,
      description,
      identifier,
      type,
      fileSubPrefix,
    } = this;
    const params = {
      baseHost,
      creator,
      description,
      identifier,
      type,
      fileSubPrefix,
    } as unknown as ProviderParams;

    this.sharingOptions = [
      new TwitterProvider(params),
      new FacebookProvider(params),
      new TumblrProvider(params),
      new PinterestProvider(params),
      new EmailProvider(params),
    ];
  }

  get sharingItems() {
    return this.sharingOptions.map((option: Provider) => (
      html`<li>
        <a class="${ifDefined(option.class)}" href="${option.url}" target="_blank">
          ${option.icon}
          ${option.name}
        </a>
      </li>`
    ));
  }

  get embedOption() {
    return html`<li>
      <a href="#" @click=${this.toggleEmbedOptions}>
        <ia-icon-link></ia-icon-link>
        Get an embeddable link
      </a>
    </li>`;
  }

  get iframeEmbed() {
    return html`&lt;iframe src="https://${this.baseHost}/embed/${this.identifier}" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen&gt;&lt;/iframe&gt;`;
  }

  get bbcodeEmbed() {
    return `[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`;
  }

  get helpURL() {
    return `https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`;
  }

  toggleEmbedOptions(e) {
    e.preventDefault();
    this.embedOptionsVisible = !this.embedOptionsVisible;
  }

  get header() {
    const header = html`<header><h3>Share this ${this.type}</h3></header>`;
    return this.renderHeader ? header : nothing;
  }

  render() {
    return html`
      ${this.header}
      <ul>
        ${this.sharingItems}
        ${this.embedOption}
        <div class=${classMap({ visible: this.embedOptionsVisible, embed: true })}>
          <h4>Embed</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly>${this.iframeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <h4>Embed for wordpress.com hosted blogs and archive.org item &lt;description&gt; tags</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly>${this.bbcodeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <p>Want more? <a href=${this.helpURL}>Advanced embedding details, examples, and help</a>!</p>
        </div>
      </ul>
    `;
  }
}

customElements.define('ia-sharing-options', IASharingOptions);
