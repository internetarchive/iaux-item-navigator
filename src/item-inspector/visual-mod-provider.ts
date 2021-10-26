/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-classes-per-file */

import { html, TemplateResult, customElement, LitElement } from 'lit-element';

import '@internetarchive/ia-sharing-options';
import '@internetarchive/icon-visual-adjustment/icon-visual-adjustment';
import {
  IntMenuProvider,
  IntProviderArgs,
} from '../interfaces/menu-interfaces';

@customElement('ia-visual-mods')
class VisualMods extends LitElement {
  toggleFullscreen() {
    this.dispatchEvent(new Event('fullscreenToggle'));
  }

  render() {
    return html`<section>
      <button @click=${this.toggleFullscreen}>Toggle Fullscreen</button>
    </section>`;
  }
}

export class VisualModsProvider implements IntMenuProvider {
  item: any = null;

  baseHost: string = 'https://archive.org';

  icon: TemplateResult = html`<ia-icon-visual-adjustment
    style="width: var(--iconWidth); height: var(--iconHeight);"
  ></ia-icon-visual-adjustment>`;

  id: string = 'visualMods';

  label: string = 'Visual Modifications';

  component: TemplateResult | null = null;

  subPrefix: string = '';

  encodedSubPrefix: string = '';

  updated: any = () => {};

  constructor(providerArgs: IntProviderArgs) {
    const { item, baseHost, subPrefix = '', updated } = providerArgs;

    this.updated = updated;

    this.component = html`<ia-visual-mods
      @fullscreenToggle=${() => this?.updated('toggleFullscreen')}
      @openModa=${this.openModal}
    ></ia-visual-mods>`;
  }

  openModal() {}

  closeModal() {}

  toggleFullscreen() {
    this.updated('toggleFullscreen');
  }
}
