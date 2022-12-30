import { html, fixture, expect } from '@open-wc/testing';
import '../src/menu-slider/ia-menu-slider';

const container = (menus = []) => (
  html`<ia-menu-slider .menus=${menus}></ia-menu-slider>`
);

const menus = [{
  icon: html`<span id="icon-1"></span>`,
  label: 'Icon 1',
  menuDetails: '(this icon is rad)',
  id: 'menu-1',
  component: html`
    <h1>Menu 1</h1>
  `,
}, {
  icon: html`<b></b>`,
  label: 'Icon 2',
  id: 'menu-2',
  component: html`
    <h1>Menu 2</h1>
  `,
}, {
  icon: html`<i></i>`,
  label: 'Regular link',
  id: 'regular-link',
  followable: true,
  href: '#',
}];

describe('<ia-menu-slider>', () => {
  it('sets default properties', async () => {
    const el = await fixture(container(menus));

    expect(el.menus).to.equal(menus);
    expect(el.open).to.be.false;
    expect(el.selectedMenu).to.equal('');
  });

  it('has a close button', async () => {
    const el = await fixture(container(menus));
    const closebutton = el.shadowRoot
      .querySelector('button.close');
    expect(closebutton).to.not.be.undefined;
  });

  it('sets the selected menu', async () => {
    const el = await fixture(container(menus));

    el.setSelectedMenu({ detail: { id: menus[0].id } });
    await el.updateComplete;

    expect(el.selectedMenu).to.equal(menus[0].id);
  });

  it('unsets the selected menu when existing selected menu toggled', async () => {
    const el = await fixture(container(menus));

    el.setSelectedMenu({ detail: { id: menus[0].id } });
    await el.updateComplete;

    el.setSelectedMenu({ detail: { id: menus[0].id } });
    await el.updateComplete;

    expect(el.selectedMenu).to.equal('');
  });

  it('returns open CSS class when menu is open', async () => {
    const el = await fixture(container(menus));

    el.open = true;
    await el.updateComplete;

    expect(el.sliderDetailsClass).to.contain('open');
  });

  it('returns open CSS class when menu is open', async () => {
    const el = await fixture(container(menus));

    el.selectedMenu = menus[0].id;
    await el.updateComplete;

    expect(el.selectedMenuClass).to.equal('open');
  });

  it('dispatches a "menuTypeSelected" event when a menu item clicked', async () => {
    const el = await fixture(container(menus));

    el
      .shadowRoot
      .querySelector('menu-button')
      .shadowRoot
      .querySelector('button')
      .click();

    await el.updateComplete;

    expect(el.selectedMenu).to.equal(menus[0].id);
  });

  it('renders menu item icons', async () => {
    const el = await fixture(container(menus));

    const icons = el
      .shadowRoot
      .querySelectorAll('menu-button');
    const icon1 = icons[0].shadowRoot.querySelector('#icon-1');
    const icon2 = icons[1].shadowRoot.querySelector('b');

    expect(icons).to.exist;
    expect(icon1).to.exist;
    expect(icon2).to.exist;
  });

  it('renders the menu component when menu button clicked', async () => {
    const el = await fixture(container(menus));
    const h1 = await fixture(menus[0].component);

    el
      .shadowRoot
      .querySelector('menu-button')
      .shadowRoot
      .querySelector('button')
      .click();
    await el.updateComplete;
    const menuComponent = el
      .shadowRoot
      .querySelector('.content h1');

    expect(menuComponent).to.not.be.undefined;
    expect(menuComponent.innerText).to.equal(h1.innerText);
  });

  it('does not capture click events on menu items marked followable', async () => {
    const el = await fixture(container(menus));

    el
      .shadowRoot
      .querySelectorAll('menu-button')[2]
      .shadowRoot
      .querySelector('a')
      .click();
    await el.updateComplete;

    expect(el.selectedMenu).to.not.equal(menus[2].id);
  });

  describe('Menu list', async () => {
    const el = await fixture(container(menus));
    const menuList = el
      .shadowRoot
      .querySelectorAll('menu-button');

    it('shows menu details when available', () => {
      const firstMenuItem = menuList[0].shadowRoot.querySelector('.menu-details');
      expect(firstMenuItem.innerText).to.equal(menus[0].menuDetails);

      const secondMenuItem = menuList[1].shadowRoot.querySelector('.menu-details');
      expect(secondMenuItem.innerText).to.be.empty;
    });
  });

  describe('Header section', () => {
    let extraButtonClicked = false;
    const extraActionClickHandler = () => {
      extraButtonClicked = true;
    };
    const menu = {
      icon: html`<ia-icon icon="audio"></ia-icon>`,
      title: 'Audio Menu',
      menuDetails: '(100,000,000 tracks)',
      actionButton: html`
        <button
          id="custom-action-button"
          style='color: white;'
          @click=${extraActionClickHandler}
        >Foo</button>
      `,
      label: 'Audio',
      id: 'audio',
      component: html`
        <h1>Menu 2</h1>
      `,
    };

    it('creates a header section', async () => {
      const el = await fixture(container([menu]));
      el
        .shadowRoot
        .querySelectorAll('menu-button')[0]
        .shadowRoot
        .querySelector('button')
        .click();
      await el.updateComplete;

      const menuHeader = el.shadowRoot.querySelector('.content header');
      expect(menuHeader).to.not.be.undefined;

      const title = menuHeader.querySelector('h3');
      expect(title).to.not.be.undefined;
      expect(title.innerText).to.equal(menu.label);

      const description = menuHeader.querySelector('.extra-details');
      expect(description).to.not.be.undefined;
      expect(description.innerText).to.equal(menu.menuDetails);

      const closeButton = menuHeader.querySelector('.close');
      expect(closeButton).to.not.be.undefined;

      const actionButton = menuHeader.querySelector('.custom-action');
      expect(actionButton).to.not.be.undefined;
    });

    it('can click on the custom action', async () => {
      const el = await fixture(container([menu]));
      el
        .shadowRoot
        .querySelectorAll('menu-button')[0]
        .shadowRoot
        .querySelector('button')
        .click();
      await el.updateComplete;

      const menuHeader = el.shadowRoot.querySelector('.content header');
      const actionButton = menuHeader.querySelector('.custom-action > *');
      expect(el.selectedMenuAction).to.not.be.undefined;
      expect(extraButtonClicked).to.be.false; // has not been clicked

      const actionClick = new MouseEvent('click');
      actionButton.dispatchEvent(actionClick);
      await el.updateComplete;
      expect(extraButtonClicked).to.be.true;
    });
  });

  describe('Close behavior', () => {
    it('emits a custom event when the drawer closes', async () => {
      const el = await fixture(container(menus));
      el.open = true;
      await el.updateComplete;
      expect(el.open).to.be.true;

      const menuHeader = el.shadowRoot.querySelector('.content header');
      const closeButton = menuHeader.querySelector('button.close');
      closeButton.dispatchEvent(new MouseEvent('click'));
      await el.updateComplete;
      expect(el.open).to.be.false;
    });
    it('emits event but does not close drawer if prop `manuallyHandleClose = true`', async () => {
      let sliderEmittedEvent = false;
      const el = await fixture(container(menus));
      el.manuallyHandleClose = true;
      el.open = true;
      await el.updateComplete;

      // confirm base config
      expect(el.open).to.be.true;
      expect(sliderEmittedEvent).to.be.false;

      el.addEventListener('menuSliderClosed', () => {
        sliderEmittedEvent = true;
      });

      const menuHeader = el.shadowRoot.querySelector('.content header');
      const closeButton = menuHeader.querySelector('button.close');
      closeButton.dispatchEvent(new MouseEvent('click'));
      await el.updateComplete;

      expect(sliderEmittedEvent).to.be.true; // handler received click event
      expect(el.open).to.be.true; // open state is still active, does not close
    });
  });
});
