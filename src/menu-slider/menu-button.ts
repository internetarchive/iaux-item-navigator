import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import menuButtonCSS from './styles/menu-button';

@customElement('menu-button')
export class MenuButton extends LitElement {
  static get styles() {
    return menuButtonCSS;
  }

  @property({ type: String }) icon = '';

  @property({ type: String }) href = '';

  @property({ type: String }) label = '';

  @property({ type: String }) menuDetails = '';

  @property({ type: String }) buttonId = '';

  @property({ type: Boolean }) selected = false;

  @property({ type: Boolean }) followable = false;

  onClick(e: Event) {
    e.preventDefault();
    this.dispatchMenuTypeSelectedEvent();
  }

  dispatchMenuTypeSelectedEvent() {
    this.dispatchEvent(
      new CustomEvent('menuTypeSelected', {
        bubbles: true,
        composed: true,
        detail: {
          id: this.buttonId,
        },
      }),
    );
  }

  get buttonClass() {
    return this.selected ? 'selected' : '';
  }

  get iconClass() {
    return this.selected ? 'active' : '';
  }

  get menuItem() {
    return html`
      <span class="icon ${this.iconClass}"> ${this.icon} </span>
      <span class="label">${this.label}</span>
      <span class="menu-details">${this.menuDetails}</span>
    `;
  }

  get linkButton() {
    return html`
      <a
        href="${this.href}"
        class="menu-item ${this.buttonClass}"
        @click=${this.followable ? undefined : this.onClick}
        >${this.menuItem}</a
      >
    `;
  }

  get clickButton() {
    return html`
      <button class="menu-item ${this.buttonClass}" @click=${this.onClick}>
        ${this.menuItem}
      </button>
    `;
  }

  render() {
    return this.href ? this.linkButton : this.clickButton;
  }
}
