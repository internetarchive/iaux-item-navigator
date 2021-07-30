import { css, html, LitElement, customElement, property } from 'lit-element';
// import { nothing, TemplateResult } from 'lit-html';
import { IntNavController } from './interfaces/nav-controller-interface';

@customElement('ia-item-inspector')
export class IaItemInspector extends LitElement implements IntNavController {
  @property({ type: Object }) itemMD = {};

  @property({ type: String }) baseHost = 'archive.org';

  render() {
    console.log('ITEM INSPECTOR');
    return html`
      <section>
        <p>foo</p>
      </section>
    `;
  }

  static get styles() {
    const main = css``;
    return [main];
  }
}
