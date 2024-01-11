import {
  LitElement,
  html,
  TemplateResult,
  PropertyValues,
  CSSResult,
  css,
} from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('ia-no-theater-available')
export class IANoTheaterAvailable extends LitElement {
  @property({ type: String }) identifier?: string = '';

  emitLoaded(): void {
    this.dispatchEvent(
      new CustomEvent<{ loaded: boolean }>('loadingStateUpdated', {
        detail: { loaded: true },
      }),
    );
  }

  updated(changed: PropertyValues): void {
    if (changed.has('identifier')) {
      this.emitLoaded();
    }
  }

  get downloadUrl(): string {
    return `/download/${this.identifier}`;
  }

  render(): TemplateResult {
    return html`
      <section>
        <h2>THERE IS NO PREVIEW AVAILABLE FOR THIS ITEM</h2>
        <p>
          This item does not appear to have any files that can be experienced on
          Archive.org. <br />
          Please download files in this item to interact with them on your
          computer.
        </p>
        <a href=${this.downloadUrl}>Show all files</a>
      </section>
    `;
  }

  static get styles(): CSSResult {
    return css`
      :host {
        color: var(--primaryTextColor, #fff);
        text-align: center;
      }
      section {
        width: 100%;
        margin: 5%;
        padding: 0 5%;
      }
      p {
        font-size: 1.4rem;
      }
      a {
        color: var(--primaryTextColor, #fff);
        background-color: rgb(25, 72, 128);
        min-height: 35px;
        cursor: pointer;
        line-height: normal;
        border-radius: 0.4rem;
        text-align: center;
        vertical-align: middle;
        font-size: 1.4rem;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        display: inline-block;
        padding: 0.85rem 1.2rem;
        border: 1px solid rgb(197, 209, 223);
        white-space: nowrap;
        appearance: auto;
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
      }
    `;
  }
}
