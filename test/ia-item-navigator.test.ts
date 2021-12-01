/* eslint-disable camelcase */
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';

import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { ModalManager } from '@internetarchive/modal-manager';
import { IntNavController } from '../src/interfaces/nav-controller-interface';
import { ItemNavigator } from '../src/item-navigator';
import '../src/item-navigator';

import '../test/book-nav-stub';
import { ItemStub, menuProvider, shortcut } from '../test/ia-stub';
import { IntManageSideMenuEvent } from '../src/interfaces/event-interfaces';

afterEach(() => {
  Sinon.restore();
});

describe('ItemNavigator', () => {
  describe('Theaters', () => {
    it('shows <ia-no-theater-available> by default', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator .item=${new ItemStub()}></ia-item-navigator>`
      );
      expect(el.shadowRoot?.querySelector('ia-no-theater-available')).to.exist;
    });

    it('shows <book-navigator> if `this.itemType = "bookreader"`', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator
          .itemType=${`bookreader`}
          .item=${new ItemStub()}
        ></ia-item-navigator>`
      );

      await el.updateComplete;

      el.toggleMenu();
      await el.updateComplete;

      const bookNavigator = el.shadowRoot?.querySelector(
        'book-navigator'
      ) as IntNavController;
      await bookNavigator.updateComplete;

      console.log('132234234324324324');
      // TODO: add BookNavigator type & import via @internetarchive/bookreader
      // For now, let's check that the BookNavigator element and its properties exist w/ stub
      expect(bookNavigator).to.exist;
      expect(bookNavigator?.modal).to.exist;
      expect(bookNavigator?.baseHost).to.exist;
      expect(bookNavigator?.book).to.exist;
      expect(bookNavigator?.signedIn).to.be.null;
      expect(bookNavigator?.sharedObserver).to.exist;
      expect(bookNavigator?.sideMenuOpen).to.exist;
    });
  });
  describe('`el.loaded`', () => {
    it('toggles the spinning loader', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );
      expect(el.loaded).to.be.null; // initial load
      expect(el.shadowRoot?.querySelector('ia-itemnav-loader')).to.exist;
    });
    it('hides reader section if `!loaded`', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );

      expect(
        el.shadowRoot?.querySelector('#reader')?.getAttribute('class')
      ).to.contain('hide');
    });
    it('shows reader when `loaded` ', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator .item=${new ItemStub()}></ia-item-navigator>`
      );

      const mainTheaterSection = el.shadowRoot?.querySelector('#reader');
      expect(mainTheaterSection?.classList.contains('hide')).to.be.false;
      expect(el.loaded).to.be.true;
      // `loaded` property is reflected as DOM attribute
      expect(el.hasAttribute('loaded')).to.equal(true);
      expect(el.shadowRoot?.querySelector('ia-no-theater-available')).to.exist;
    });
    it('listens to `@loadingStateUpdated` to update `loaded`', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );

      await el.updateComplete;
      const spy = Sinon.spy();
      el.loadingStateUpdated = spy;
      el.loaded = false;
      await el.updateComplete;
      // check base properties
      expect(el.loaded).to.equal(false);
      expect(el.item).to.be.undefined;

      // hydrate item
      el.item = new ItemStub();
      await el.updateComplete;

      // spy fires
      expect(spy.called).to.equal(true);
      expect(spy.callCount).to.equal(1);
    });
  });

  describe('`el.sharedObserver`', () => {
    it('can create one', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );
      await el.updateComplete;
      expect(el.sharedObserver).to.not.be.null;
      expect(el.sharedObserver).to.be.instanceOf(SharedResizeObserver);
    });

    it('can recieve one', async () => {
      const sharedObserver = new SharedResizeObserver();

      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator
          .sharedObserver=${sharedObserver}
        ></ia-item-navigator>`
      );
      await el.updateComplete;
      expect(el.sharedObserver).to.be.instanceOf(SharedResizeObserver);
    });
  });

  describe('`el.modal`', () => {
    it('can create one', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );
      await el.updateComplete;
      expect(el.modal).to.not.be.null;
      expect(el.modal).to.be.instanceOf(ModalManager);
    });

    it('can recieve one', async () => {
      const sharedObserver = new SharedResizeObserver();
      const observerSpy = Sinon.stub(sharedObserver, 'addObserver');

      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator
          .sharedObserver=${sharedObserver}
        ></ia-item-navigator>`
      );
      await el.updateComplete;
      expect(el.sharedObserver).to.be.instanceOf(SharedResizeObserver);
      expect(observerSpy.called).to.equal(true);
    });
  });

  describe('full browser window immersion "fullscreen"', () => {
    it('creates reflected attribute `viewportinfullscreen`', async () => {
      /** to help with external styling adjustmnents */
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );
      expect(el.getAttribute('viewportinfullscreen')).to.be.null;

      el.viewportInFullscreen = true;
      await el.updateComplete;

      expect(el.getAttribute('viewportinfullscreen')).to.exist;
    });
  });

  /* Side menu & shortcuts tests */
  describe('el.menuOpened', () => {
    it('toggles side menu open', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator .item=${new ItemStub()}></ia-item-navigator>`
      );

      el.menuContents = [menuProvider];
      await el.updateComplete;

      const nav = el.shadowRoot?.querySelector('nav');

      expect(nav?.querySelector('#menu')).to.exist;
      // side menu starts closed
      expect(el.menuOpened).to.be.false;
      expect(nav?.querySelector('#menu')?.getAttribute('class')).to.contain(
        'hidden'
      );

      // let's open menu
      el.toggleMenu();
      await el.updateComplete;

      expect(el.menuOpened).to.be.true;
      expect(nav?.querySelector('#menu')?.getAttribute('class')).to.not.contain(
        'hidden'
      );
    });

    it('opens menu shortcut with `@manageSideMenuEvents`', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator .item=${new ItemStub()}></ia-item-navigator>`
      );
      const detail = {
        menuId: 'fullscreen',
        action: 'open',
      };

      el.menuContents = [menuProvider];
      await el.updateComplete;
      const frame = el.shadowRoot?.querySelector('#frame');
      // default menu open behavior is to side menu open, not overlay
      expect(frame?.getAttribute('class')).to.contain('shift');

      expect(el.menuOpened).to.be.false;
      expect(el.openMenu).to.be.empty;
      expect(frame?.getAttribute('class')).to.not.contain('open');

      const event = new CustomEvent('updateSideMenu', {
        detail,
      }) as IntManageSideMenuEvent;
      el.manageSideMenuEvents(event);
      await el.updateComplete;

      expect(el.shouldRenderMenu).to.be.true;
      expect(el.menuOpened).to.be.true;
      expect(el.openMenu).to.equal(detail.menuId);

      expect(frame?.getAttribute('class')).to.contain('open');
    });
  });

  describe('el.menuContents', () => {
    it('draws side menu when populated', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator .item=${new ItemStub()}></ia-item-navigator>`
      );

      el.menuContents = [menuProvider];
      await el.updateComplete;
      expect(el.menuContents.length).to.exist;
      expect(el.shouldRenderMenu).to.be.true;

      const nav = el.shadowRoot?.querySelector('nav');
      expect(nav).to.exist;

      const menuSlider = nav?.querySelector('ia-menu-slider');
      expect(menuSlider).to.exist;
      expect(menuSlider?.getAttribute('manuallyhandleclose')).to.exist;
      expect(menuSlider?.getAttribute('open')).to.exist;
    });
  });

  describe('`el.menuShortcuts`', () => {
    it('displays shortcut & toggle side menu button', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator .item=${new ItemStub()}></ia-item-navigator>`
      );

      el.menuContents = [menuProvider];
      el.menuShortcuts = [shortcut];
      await el.updateComplete;

      const nav = el.shadowRoot?.querySelector('nav');

      expect(el.menuShortcuts.length).to.exist;
      expect(nav).to.exist;
      expect(nav?.querySelector('.shortcuts')).to.exist;
      expect(
        nav?.querySelector('.shortcuts')?.querySelector('i.fullscreen-test')
      ).to.exist;
      expect(nav?.querySelector('.toggle-menu')).to.exist;
    });
  });
});
