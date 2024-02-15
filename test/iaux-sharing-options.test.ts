import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/menus/share-panel';
import type { IauxSharingOptions } from '../src/menus/share-panel';

const identifier = 'goody';
const itemType = 'book';
const creator = 'Welsh, Charles';
const description =
  'The history of Little Goody Two-Shoes : otherwise called Mrs. Margery Two-Shoes ... [1766 edition]';

const container = (optionalFileSubprefix = '') =>
  html`<iaux-in-share-panel
    identifier="${identifier}"
    type="${itemType}"
    creator="${creator}"
    description="${description}"
    baseHost="archive.org"
    fileSubPrefix="${optionalFileSubprefix}"
  ></iaux-in-share-panel>`;

describe('<iaux-in-share-panel>', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('sets default properties', async () => {
    const el = (await fixture(container())) as IauxSharingOptions;

    expect(el.identifier).to.equal(identifier);
    expect(el.type).to.equal(itemType);
    expect(el.creator).to.equal(creator);
    expect(el.description).to.equal(description);
  });

  it('renders buttons for each sharing method', async () => {
    const el = (await fixture(container())) as IauxSharingOptions;

    await el.updateComplete;

    el.sharingOptions.forEach((option, i) => {
      const button = el.shadowRoot?.querySelectorAll('a')[i];
      expect(button).to.exist;
      expect(button?.getAttribute('href')).to.equal(option.url);
    });
  });

  it('does not show internal header by default', async () => {
    const el = (await fixture(container())) as IauxSharingOptions;
    expect(el.shadowRoot?.querySelector('header')).to.be.null;
  });

  it('does shows internal header when requested', async () => {
    const el = (await fixture(container())) as IauxSharingOptions;
    el.renderHeader = true;
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('header')).to.not.be.null;
  });

  it('sets file subprefix to end of share URLs if present', async () => {
    const el = (await fixture(container('foo 123'))) as IauxSharingOptions;

    el.sharingOptions.forEach(option => {
      expect(option.url).to.contain('foo+123');
    });
  });
});
