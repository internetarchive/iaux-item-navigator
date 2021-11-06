/* eslint-disable camelcase */
/* eslint-disable import/no-duplicates */
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from 'sinon';
// import { MetadataResponse, Metadata, File, Review, SpeechMusicASREntry } from '@internetarchive/search-service';
import {
  SharedResizeObserver,
  // SharedResizeObserverInterface
} from '@internetarchive/shared-resize-observer';

// import { IntLoadingStateUpdatedEvent } from '../src/interfaces/event-interfaces';
import { ItemNavigator } from '../src/item-navigator';
import '../src/item-navigator';
// import { IaItemInspector } from '../src/item-inspector/item-inspector';

// class ItemStub implements MetadataResponse {
//   constructor() {
//     this.rawResponse = '';
//     this.created = 1;
//     this.d1 = 'hello';
//     this.d2 = 'boop';
//     this.dir = 'whee';
//     this.files = [];
//     this.files_count = 0;
//     this.item_last_updated = 2020;
//     this.item_size = 111;
//     this.metadata = { identifier: 'foo' } as Metadata;
//     this.server = 'foo-server';
//     this.uniq = 2;
//     this.workable_servers = ['abc'];
//   }

//   rawResponse: any;

//   created: number;

//   d1: string;

//   d2: string;

//   dir: string;

//   files: File[];

//   files_count: number;

//   item_last_updated: number;

//   item_size: number;

//   metadata: Metadata;

//   server: string;

//   uniq: number;

//   workable_servers: string[];

//   speech_vs_music_asr?: SpeechMusicASREntry[] | undefined;

//   reviews?: Review[] | undefined;
// };

afterEach(() => {
  Sinon.restore();
});

describe('ItemNavigator', () => {
  describe('Loading Behavior', () => {
    it('shows the spinning loader', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );
      expect(el.shadowRoot?.querySelector('ia-itemnav-loader')).to.be.exist;
    });
    it('hides reader section if not `loaded`', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );
      const mainTheaterSection = el.shadowRoot?.querySelector('#reader');
      expect(mainTheaterSection).to.be.exist;
      expect(mainTheaterSection?.classList.contains('hide')).to.be.true;
      expect(el.loaded).to.be.false;
      expect(el.hasAttribute('loaded')).to.equal(false);
    });
    it('shows reader once `loaded`', async () => {
      const el = await fixture<ItemNavigator>(
        html`<ia-item-navigator></ia-item-navigator>`
      );
      el.loaded = true;
      await el.updateComplete;

      const mainTheaterSection = el.shadowRoot?.querySelector('#reader');
      expect(mainTheaterSection?.classList.contains('hide')).to.be.false;
      expect(el.loaded).to.be.true;
      // `loaded` property is reflected as DOM attribute
      expect(el.hasAttribute('loaded')).to.equal(true);
    });

    // it('listens to event `loadingStateUpdated` to signal load', async () => {
    //   const item = new ItemStub() as MetadataResponse;
    //   const el = await fixture<ItemNavigator>(
    //     html`<ia-item-navigator .item=${item}></ia-item-navigator>`
    //   );
    //   // const loadSpy = Sinon.spy();
    //   // el.loadingStateUpdated = loadSpy;
    //   await el.updateComplete;

    //   expect(el?.item).to.not.be.undefined;

    //   const mainTheaterSection = el.shadowRoot?.querySelector('#reader');

    //   const contentController = mainTheaterSection?.querySelector('ia-item-inspector');

    //   expect(contentController).to.equal(32324);

    //   // const loadingEvent = new CustomEvent('loadingStateUpdated', { detail: { loaded: true }}) as IntLoadingStateUpdatedEvent;
    //   // contentController?.emitLoadingStatusUpdate(true);

    //   // await contentController?.updateComplete;
    //   // await el.updateComplete;

    // });
  });

  describe('It uses a shared ResizeObserver', () => {
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

  describe('It uses a shared modal component', () => {
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

  // describe('full browser window immersion "fullscreen"', () => {
  //   it('creates reflected attribute `viewportinfullscreen`', () =>{
  //     /** to help with external styling adjustmnents */
  //   });
  // });

  // describe('Loads side menu contents', () =>{
  // });

  // describe('Menu Shortcuts', () => {
  // });

  //   it('passes the a11y audit', async () => {
  //     const el = await fixture<YourWebComponent>(
  //       html`<your-webcomponent></your-webcomponent>`
  //     );

  //     await expect(el).shadowDom.to.be.accessible();
  //   });
});

// describe('YourWebComponent', () => {
//   it('has a default title "Hey there" and counter 5', async () => {
//     const el = await fixture<YourWebComponent>(
//       html`<your-webcomponent></your-webcomponent>`
//     );

//     expect(el.title).to.equal('Hey there');
//     expect(el.counter).to.equal(5);
//   });

//   it('increases the counter on button click', async () => {
//     const el = await fixture<YourWebComponent>(
//       html`<your-webcomponent></your-webcomponent>`
//     );
//     el.shadowRoot!.querySelector('button')!.click();

//     expect(el.counter).to.equal(6);
//   });

//   it('can override the title via attribute', async () => {
//     const el = await fixture<YourWebComponent>(
//       html`<your-webcomponent title="attribute title"></your-webcomponent>`
//     );

//     expect(el.title).to.equal('attribute title');
//   });

//   it('passes the a11y audit', async () => {
//     const el = await fixture<YourWebComponent>(
//       html`<your-webcomponent></your-webcomponent>`
//     );

//     await expect(el).shadowDom.to.be.accessible();
//   });
// });
