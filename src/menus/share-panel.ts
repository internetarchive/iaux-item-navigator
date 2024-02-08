/* eslint-disable lit-a11y/click-events-have-key-events */
/* eslint-disable lit-a11y/list */
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
import '@internetarchive/icon-share/icon-share';
import '@internetarchive/icon-twitter/icon-twitter';
import '@internetarchive/icon-facebook/icon-facebook';
import '@internetarchive/icon-tumblr/icon-tumblr';
import '@internetarchive/icon-pinterest/icon-pinterest';
import '@internetarchive/icon-email/icon-email';
import '@internetarchive/icon-link/icon-link';

type ShareOption = {
  name: string;
  icon: TemplateResult | string;
  url: string;
};

const copyToClipboard = (event: MouseEvent) => {
  const currentTarget = event.currentTarget as HTMLElement;
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

@customElement('iaux-in-share-panel')
export class IauxSharingOptions extends LitElement {
  @property({ type: String }) baseHost = 'archive.org';

  @property({ type: String }) creator = '';

  @property({ type: String }) description = '';

  @property({ type: Boolean }) embedOptionsVisible = false;

  @property({ type: String }) identifier = '';

  @property({ type: Array }) sharingOptions: ShareOption[] = [];

  @property({ type: String }) type = '';

  @property({ type: Boolean }) renderHeader = false;

  @property({ type: String }) fileSubPrefix = '';

  updated(changed: PropertyValues) {
    if (changed.has('sharingOptions') && !this.sharingOptions.length) {
      this.loadProviders();
    }
  }

  loadProviders() {
    let shareUrl = `https://${this.baseHost}/details/${this.identifier}`;
    if (this.fileSubPrefix) {
      shareUrl += `/${this.fileSubPrefix}`;
    }
    const shareBlurb = [
      this.description,
      this.creator,
      'Free Download, Borrow, and Streaming',
      'Internet Archive',
    ]
      .filter(Boolean)
      .join(' : ');

    this.sharingOptions = [
      {
        name: 'Twitter',
        icon: html`<ia-icon-twitter></ia-icon-twitter>`,
        url: `https://twitter.com/intent/tweet?${new URLSearchParams({
          url: shareUrl,
          text: shareBlurb,
          via: 'internetarchive',
        })}`,
      },
      {
        name: 'Facebook',
        icon: html`<ia-icon-facebook></ia-icon-facebook>`,
        url: `https://www.facebook.com/sharer/sharer.php?${new URLSearchParams({
          u: shareUrl,
        })}`,
      },
      {
        name: 'Tumblr',
        icon: html`<ia-icon-tumblr></ia-icon-tumblr>`,
        url: `https://www.tumblr.com/widgets/share/tool/preview?${new URLSearchParams(
          {
            posttype: 'link',
            canonicalUrl: shareUrl,
            title: shareBlurb,
          },
        )}`,
      },
      {
        name: 'Pinterest',
        icon: html`<ia-icon-pinterest></ia-icon-pinterest>`,
        url: `http://www.pinterest.com/pin/create/button/?${new URLSearchParams(
          {
            url: shareUrl,
            description: shareBlurb,
          },
        )}`,
      },
      {
        name: 'Email',
        icon: html`<ia-icon-email></ia-icon-email>`,
        url: `mailto:?${new URLSearchParams({
          subject: shareBlurb,
          body: shareUrl,
        })}`,
      },
    ];
  }

  get iframeEmbed() {
    return `<iframe
      src="https://${this.baseHost}/embed/${this.identifier}"
      width="560" height="384" frameborder="0"
      webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen
    ></iframe>`;
  }

  get bbcodeEmbed() {
    return `[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`;
  }

  get helpURL() {
    return `https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`;
  }

  get header() {
    const header = html`<header><h3>Share this ${this.type}</h3></header>`;
    return this.renderHeader ? header : nothing;
  }

  render() {
    return html`
      ${this.header}
      <main>
        ${this.sharingOptions.map(
          option =>
            html` <a class="share-option" href="${option.url}" target="_blank">
              ${option.icon} ${option.name}
            </a>`,
        )}
        <details>
          <summary class="share-option">
            <ia-icon-link></ia-icon-link>
            Get an embeddable link
          </summary>
          <div class="embed">
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
        </details>
      </main>
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

      main {
        padding: 1rem 0;
      }

      .share-option {
        display: block;
        padding: 0.5rem 0;
        font-size: 1.6rem;
        text-decoration: none;
        color: var(--shareLinkColor);
        cursor: pointer;
      }

      .share-option > * {
        display: inline-block;
        padding: 0.2rem;
        margin-right: 1rem;
        vertical-align: middle;
        border: 1px solid var(--shareIconBorder);
        border-radius: 7px;
        background: var(--shareIconBg);
      }

      /* Hide the triangle that appears on details tags */
      summary::marker {
        content: '';
      }

      summary::-webkit-details-marker {
        display: none;
      }

      .embed {
        padding-right: 5px;
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
