/* eslint-disable lit-a11y/click-events-have-key-events */
/* eslint-disable lit-a11y/list */
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  css,
  CSSResult,
  html,
  LitElement,
  nothing,
  PropertyValues,
  TemplateResult,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@internetarchive/icon-link/icon-link';
import '@internetarchive/icon-share/icon-share';

import EmailProvider from './share-providers/email';
import FacebookProvider from './share-providers/facebook';
import PinterestProvider from './share-providers/pinterest';
import TumblrProvider from './share-providers/tumblr';
import TwitterProvider from './share-providers/twitter';
import { ProviderParams } from './share-providers/share-provider-interface';
import type Provider from './share-providers/provider';

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

export const iauxShareIcon: TemplateResult = html`<ia-icon-share
  style="width: var(--iconWidth); height: var(--iconHeight);"
></ia-icon-share>`;

@customElement('iaux-sharing-options')
export class IauxSharingOptions extends LitElement {
  @property({ type: String }) baseHost = 'archive.org';

  @property({ type: String }) creator = '';

  @property({ type: String }) description = '';

  @property({ type: Boolean }) embedOptionsVisible = false;

  @property({ type: String }) identifier = '';

  @property({ type: Array }) sharingOptions: Provider[] = [];

  @property({ type: String }) type = '';

  @property({ type: Boolean }) renderHeader = false;

  @property({ type: String }) fileSubPrefix = '';

  updated(changed: PropertyValues) {
    if (changed.has('sharingOptions') && !this.sharingOptions.length) {
      this.loadProviders();
    }
  }

  loadProviders() {
    const { baseHost, creator, description, identifier, type, fileSubPrefix } =
      this;
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
    return this.sharingOptions.map(
      option =>
        html`<li>
          <a
            class="${ifDefined(option.class)}"
            href="${option.url}"
            target="_blank"
          >
            ${option.icon} ${option.name}
          </a>
        </li>`,
    );
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
    return html`&lt;iframe
    src="https://${this.baseHost}/embed/${this.identifier}" width="560"
    height="384" frameborder="0" webkitallowfullscreen="true"
    mozallowfullscreen="true" allowfullscreen&gt;&lt;/iframe&gt;`;
  }

  get bbcodeEmbed() {
    return `[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`;
  }

  get helpURL() {
    return `https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`;
  }

  toggleEmbedOptions(e: Event) {
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
        ${this.sharingItems} ${this.embedOption}
        <div
          class=${classMap({ visible: this.embedOptionsVisible, embed: true })}
        >
          <h4>Embed</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly>${this.iframeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <h4>
            Embed for wordpress.com hosted blogs and archive.org item
            &lt;description&gt; tags
          </h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly>${this.bbcodeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <p>
            Want more?
            <a href=${this.helpURL}
              >Advanced embedding details, examples, and help</a
            >!
          </p>
        </div>
      </ul>
    `;
  }

  get providerIcon(): TemplateResult {
    return html`<ia-icon-share
      style="width: var(--iconWidth); height: var(--iconHeight);"
    ></ia-icon-share>`;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        height: 100%;
        overflow-y: auto;
        font-size: 1.4rem;
        box-sizing: border-box;
      }

      header {
        display: flex;
        align-items: baseline;
      }

      h3 {
        padding: 0;
        margin: 0 1rem 0 0;
        font-size: 1.6rem;
      }

      h4 {
        font-size: 1.4rem;
      }

      ul {
        padding: 0 0 2rem 0;
        list-style: none;
      }

      li {
        padding: 0 0 1rem 0;
      }

      li a {
        font-size: 1.6rem;
        text-decoration: none;
        color: var(--shareLinkColor);
      }

      li a * {
        display: inline-block;
        padding: 0.2rem;
        margin-right: 1rem;
        vertical-align: middle;
        border: 1px solid var(--shareIconBorder);
        border-radius: 7px;
        background: var(--shareIconBg);
      }

      .embed {
        display: none;
      }
      .embed.visible {
        display: block;
        width: 95%;
      }

      .embed a {
        color: var(--shareLinkColor);
      }

      .code {
        position: relative;
      }

      textarea {
        display: block;
        width: 100%;
        height: 120px;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        resize: none;
        cursor: pointer;
        font:
          normal 1.4rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaColor, #fff);
        background: var(--textareaBg, #151515);
      }

      small {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        padding: 0.5rem 1rem;
        box-sizing: border-box;
        font:
          normal 1.2rem/2rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaBg, #151515);
        background: var(--textareaColor, #fff);
        opacity: 0;
        transition: opacity 300ms linear;
      }
      small.visible {
        opacity: 1;
      }
    `;
  }
}
