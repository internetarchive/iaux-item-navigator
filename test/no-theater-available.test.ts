import { html, fixture, expect } from '@open-wc/testing';
import { IANoTheaterAvailable } from '../src/no-theater-available';
import '../src/no-theater-available';

describe('IANoTheaterAvailable', () => {
  it('Fires `loadingStateUpdated` on identifier change', async () => {
    const el = await fixture<IANoTheaterAvailable>(
      html`<ia-no-theater-available
        .identifier=${`foo`}
      ></ia-no-theater-available>`,
    );
    let eventFired = false;
    el.addEventListener('loadingStateUpdated', () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      eventFired = true;
    });
    expect(eventFired).to.be.false;

    el.identifier = 'bar';
    await el.updateComplete;
    expect(eventFired).to.be.true;
  });
  it('Has link to item download page', async () => {
    const el = await fixture<IANoTheaterAvailable>(
      html`<ia-no-theater-available
        .identifier=${`foo`}
      ></ia-no-theater-available>`,
    );
    expect(el.downloadUrl).to.equal('/download/foo');
    expect(el?.shadowRoot?.querySelector('a')?.href).to.contain(el.downloadUrl);
  });
});
