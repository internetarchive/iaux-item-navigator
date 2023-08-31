import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/ia-sharing-options.js';

const identifier = 'goody';
const itemType = 'book';
const creator = 'Welsh, Charles';
const description = 'The history of Little Goody Two-Shoes : otherwise called Mrs. Margery Two-Shoes ... [1766 edition]';

const container = (optionalFileSubprefix = '') => (
  html`<ia-sharing-options
    identifier="${identifier}"
    type="${itemType}"
    creator="${creator}"
    description="${description}"
    baseHost="archive.org"
    fileSubPrefix="${optionalFileSubprefix}"
  ></ia-sharing-options>`
);

describe('<ia-sharing-options>', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('sets default properties', async () => {
    const el = await fixture(container());

    expect(el.identifier).to.equal(identifier);
    expect(el.type).to.equal(itemType);
    expect(el.creator).to.equal(creator);
    expect(el.description).to.equal(description);
  });

  it('renders buttons for each sharing method', async () => {
    const el = await fixture(container());

    await el.updateComplete;

    el.sharingOptions.forEach((option) => {
      const button = el.shadowRoot.querySelector(`a.${option.class}`);
      expect(button).to.exist;
      expect(button.getAttribute('href')).to.equal(option.url);
    });
  });

  it('toggles visibility of embed options', async () => {
    const el = await fixture(container());

    el.toggleEmbedOptions(new Event('click'));
    await el.updateComplete;

    expect(el.embedOptionsVisible).to.equal(true);
  });

  it('does not show internal header by default', async () => {
    const el = await fixture(container());
    expect(el.shadowRoot.querySelector('header')).to.be.null;
  });

  it('does shows internal header when requested', async () => {
    const el = await fixture(container());
    el.renderHeader = true;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('header')).to.not.be.null;
  });

  it('sets file subprefix to end of share URLs if present', async () => {
    const optionalFileSubprefix = 'foo- bar - 123-';
    const el = await fixture(container(optionalFileSubprefix));

    el.sharingOptions.forEach((option) => {
      if (option.name !== 'Tumblr') {
        expect(option.url).to.contain(encodeURIComponent(optionalFileSubprefix));
      }
    });
  });
});
