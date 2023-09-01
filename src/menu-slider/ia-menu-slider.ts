import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import menuSliderCSS from './styles/menu-slider';
import '@internetarchive/icon-collapse-sidebar';
import './menu-button';
import { MenuProviderInterface } from '../interfaces/menu-interfaces';

const sliderEvents = {
  closeDrawer: 'menuSliderClosed',
};

@customElement('ia-menu-slider')
export class IaMenuSlider extends LitElement {
  static get styles() {
    return menuSliderCSS;
  }

  @property({ type: Array }) menus: MenuProviderInterface[] = [];

  @property({ type: Boolean }) open = false;

  @property({ type: Boolean }) manuallyHandleClose = false;

  @property({ type: String }) selectedMenu = '';

  @property({ type: Object }) selectedMenuAction = nothing;

  @property({ type: Boolean }) animateMenuOpen = false;

  updated() {
    const { actionButton } =
      this.selectedMenuDetails || ({} as Record<string, any>);
    const actionButtonHasChanged = actionButton !== this.selectedMenuAction;
    if (actionButtonHasChanged) {
      this.selectedMenuAction = actionButton || nothing;
    }
  }

  /**
   * Event handler, captures state of selected menu
   */
  setSelectedMenu({ detail }: CustomEvent) {
    const { id } = detail;
    this.selectedMenu = this.selectedMenu === id ? '' : id;
    const { actionButton } =
      this.selectedMenuDetails || ({} as Record<string, any>);
    this.selectedMenuAction = actionButton || nothing;
  }

  /**
   * closes menu drawer
   */
  closeMenu() {
    if (!this.manuallyHandleClose) {
      this.open = false;
    }
    const { closeDrawer } = sliderEvents;
    const drawerClosed = new CustomEvent(closeDrawer, {
      detail: this.selectedMenuDetails,
    });
    this.dispatchEvent(drawerClosed);
  }

  get selectedMenuDetails() {
    const selectedMenu = this.menus.find(
      menu => (menu as any).id === this.selectedMenu,
    );
    return selectedMenu;
  }

  get selectedMenuComponent() {
    const menuItem = this.selectedMenuDetails;
    return menuItem && (menuItem as any)?.component
      ? (menuItem as any).component
      : html``;
  }

  /* render */

  get sliderDetailsClass() {
    const animate = this.animateMenuOpen ? 'animate' : '';
    const state = this.open ? 'open' : '';
    return `${animate} ${state}`;
  }

  get selectedMenuClass() {
    return this.selectedMenu ? 'open' : '';
  }

  get menuItems() {
    return this.menus.map(
      (menu: Record<string, any>) => html`
        <li>
          <menu-button
            @menuTypeSelected=${this.setSelectedMenu}
            .icon=${menu.icon}
            .label=${menu.label}
            .menuDetails=${menu.menuDetails}
            .buttonId=${menu.id}
            .selected=${menu.id === this.selectedMenu}
            .followable=${menu.followable}
            .href=${menu.href}
          ></menu-button>
        </li>
      `,
    );
  }

  get renderMenuHeader() {
    const { label = '', menuDetails = '' } =
      this.selectedMenuDetails || ({} as Record<string, any>);
    const headerClass = this.selectedMenuAction ? 'with-secondary-action' : '';
    const actionBlock = this.selectedMenuAction
      ? html`<span class="custom-action">${this.selectedMenuAction}</span>`
      : nothing;
    return html`
      <header class="${headerClass}">
        <div class="details">
          <h3>${label}</h3>
          <span class="extra-details">${menuDetails}</span>
        </div>
        ${actionBlock} ${this.closeButton}
      </header>
    `;
  }

  get closeButton() {
    return html`
      <button
        class="close"
        aria-label="Close this menu"
        @click=${this.closeMenu}
      >
        <ia-icon-collapse-sidebar></ia-icon-collapse-sidebar>
      </button>
    `;
  }

  /** @inheritdoc */
  render() {
    return html`
      <div class="main">
        <div class="menu ${this.sliderDetailsClass}">
          ${this.closeButton}
          <ul class="menu-list">
            ${this.menuItems}
          </ul>
          <div
            class="content ${this.selectedMenuClass}"
            @menuTypeSelected=${this.setSelectedMenu}
          >
            ${this.renderMenuHeader}
            <section>
              <div class="selected-menu">${this.selectedMenuComponent}</div>
            </section>
          </div>
        </div>
      </div>
    `;
  }
}
