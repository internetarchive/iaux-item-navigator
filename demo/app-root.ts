import { html, css, LitElement, customElement, property } from 'lit-element';
// import '../src/your-webcomponent';
import '../src/item-navigator';

// <your-webcomponent title="Hello">
// <div slot="my-slot">Some LightDOM Content</div>
// </your-webcomponent>
@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: Object }) bookManifest = {};

  @property({ type: String }) encodedManifest = '';

  firstUpdated(changed: object) {
    this.fetchDemoBook();
    console.log('firstUpdated=', changed);
  }

  updated(changed: object) {
    console.log('updated=', changed);
    // console.log('updated= this.bookManifest', encodeURIComponent(JSON.stringify(this.bookManifest)));
  }

  async fetchDemoBook() {
    const manifest = await fetch('./demo-book-manifest.json');
    const theJson = await manifest.json();

    this.bookManifest = theJson;
    this.encodedManifest = btoa(JSON.stringify(this.bookManifest));

    console.log('FETCH DEMO BOOK theJson', theJson, this.encodedManifest);
  }

  render() {
    return html`
      <item-navigator baseHost="archive.org" item=${this.encodedManifest}>
      </item-navigator>
    `;
  }

  static styles = css`
    :host {
      display: block;
      --primaryBGColor: var(--black, #000);
      --secondaryBGColor: #222;
      --tertiaryBGColor: #333;
      --primaryTextColor: var(--white, #fff);
      --primaryCTAFill: #194880;
      --primaryCTABorder: #c5d1df;
      --secondaryCTAFill: #333;
      --secondaryCTABorder: #999;
      --primaryErrorCTAFill: #e51c26;
      --primaryErrorCTABorder: #f8c6c8;
    }

    item-navigator {
      display: block;
      width: 100%;
      color: var(--primaryTextColor);
      --menuButtonLabelDisplay: block;
      --menuWidth: 320px;
      --menuSliderBg: var(--secondaryBGColor);
      --activeButtonBg: var(--tertiaryBGColor);
      --subpanelRightBorderColor: var(--secondaryCTABorder);
      --animationTiming: 100ms;
      --iconFillColor: var(--primaryTextColor);
      --iconStrokeColor: var(--primaryTextColor);
      --menuSliderHeaderIconHeight: 2rem;
      --menuSliderHeaderIconWidth: 2rem;
      --iconWidth: 2.4rem;
      --iconHeight: 2.4rem;
      --shareLinkColor: var(--primaryTextColor);
      --shareIconBorder: var(--primaryTextColor);
      --shareIconBg: var(--secondaryBGColor);
      --activityIndicatorLoadingDotColor: var(--primaryTextColor);
      --activityIndicatorLoadingRingColor: var(--primaryTextColor);
    }
  `;
}
