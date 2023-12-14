/* eslint-disable no-restricted-globals */
import { html, css, LitElement, TemplateResult } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import {
  MetadataResponse,
  SearchService,
} from '@internetarchive/search-service';
import { SharedResizeObserver } from '@internetarchive/shared-resize-observer';
import { ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/modal-manager';
import type { ItemNavigator } from '../src/iaux-item-navigator';
import '../src/iaux-item-navigator';
import '../src/menus/share-panel';
import {
  MenuShortcutInterface,
  MenuProviderInterface,
} from '../src/interfaces/menu-interfaces';
import { iauxShareIcon } from '../src/menus/share-panel';
import { viewableFilesIcon } from '../src/menus/viewable-files';

const fileList = [
  {
    file_origin: '',
    file_source: 'beyonce-cosmo-article.pdf',
    file_subprefix: 'beyonce-cosmo-article',
    orig_sort: 0,
    title: 'beyonce-cosmo-article.pdf',
    url_path: '/details/pdf_only_item/beyonce-cosmo-article.pdf',
  },
  {
    file_origin: '',
    file_source: 'onestrandriverpdf.pdf',
    file_subprefix: 'onestrandriverpdf',
    orig_sort: 1,
    title:
      'Very cool title that is extra long so it wraps for three rows and close to the right side of the pane',
    url_path: '/details/pdf_only_item/onestrandriverpdf.pdf',
  },
  {
    url_path: '/details/masterbookofamericanfolksong00shep',
    file_subprefix: '01-The Master Book of American Folk Song',
    title: 'The Master Book of American Folk Song',
    file_source: '/01-The Master Book of American Folk Song_jp2.zip',
    orig_sort: 0,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/02-Encyclopedia%20of%20the%20Traditional%20Music%20and%20Folk%20Songs%20of%20the%20United%20States%20Index%20A%20through%20M',
    file_subprefix:
      '02-Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M',
    title:
      'Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M',
    file_source:
      '/02-Encyclopedia of the Traditional Music and Folk Songs of the United States Index A through M_jp2.zip',
    orig_sort: 1,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/03-Encyclopedia%20of%20the%20Traditional%20Music%20and%20Folk%20Songs%20of%20the%20United%20States%20Index%20N%20through%20Z',
    file_subprefix:
      '03-Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z',
    title:
      'Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z',
    file_source:
      '/03-Encyclopedia of the Traditional Music and Folk Songs of the United States Index N through Z_jp2.zip',
    orig_sort: 2,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/04-Letters%20to%20Riley%20Shepard',
    file_subprefix: '04-Letters to Riley Shepard',
    title: 'Letters to Riley Shepard',
    file_source: '/04-Letters to Riley Shepard_jp2.zip',
    orig_sort: 3,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%201',
    file_subprefix: 'Master Book of American Folk Song Vol. 1',
    title: 'Master Book of American Folk Song Vol. 1.pdf',
    file_source: '/Master Book of American Folk Song Vol. 1_jp2.zip',
    orig_sort: 4,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%202',
    file_subprefix: 'Master Book of American Folk Song Vol. 2',
    title: 'Master Book of American Folk Song Vol. 2.pdf',
    file_source: '/Master Book of American Folk Song Vol. 2_jp2.zip',
    orig_sort: 5,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%203',
    file_subprefix: 'Master Book of American Folk Song Vol. 3',
    title: 'Master Book of American Folk Song Vol. 3.pdf',
    file_source: '/Master Book of American Folk Song Vol. 3_jp2.zip',
    orig_sort: 6,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%204',
    file_subprefix: 'Master Book of American Folk Song Vol. 4',
    title: 'Master Book of American Folk Song Vol. 4.pdf',
    file_source: '/Master Book of American Folk Song Vol. 4_jp2.zip',
    orig_sort: 7,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%205',
    file_subprefix: 'Master Book of American Folk Song Vol. 5',
    title: 'Master Book of American Folk Song Vol. 5',
    file_source: '/Master Book of American Folk Song Vol. 5_jp2.zip',
    orig_sort: 8,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%206',
    file_subprefix: 'Master Book of American Folk Song Vol. 6',
    title: 'Master Book of American Folk Song Vol. 6.pdf',
    file_source: '/Master Book of American Folk Song Vol. 6_jp2.zip',
    orig_sort: 9,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%207',
    file_subprefix: 'Master Book of American Folk Song Vol. 7',
    title: 'Master Book of American Folk Song Vol. 7.pdf',
    file_source: '/Master Book of American Folk Song Vol. 7_jp2.zip',
    orig_sort: 10,
  },
  {
    url_path:
      '/details/masterbookofamericanfolksong00shep/Master%20Book%20of%20American%20Folk%20Song%20Vol.%208',
    file_subprefix: 'Master Book of American Folk Song Vol. 8',
    title: 'Master Book of American Folk Song Vol. 8.pdf',
    file_source: '/Master Book of American Folk Song Vol. 8_jp2.zip',
    orig_sort: 11,
  },
];
@customElement('app-root')
export class AppRoot extends LitElement {
  /**
   * Example controller to connect to `<iaux-item-navigator>`
   */
  @property({ type: Object }) itemMD?: MetadataResponse;

  @property({ type: String }) encodedManifest = '';

  @property({ attribute: false }) sharedObserver = new SharedResizeObserver();

  @property({ type: Array, attribute: false })
  menuContents: MenuProviderInterface[] = [];

  @property({ type: Array, attribute: false })
  menuShortcuts: MenuShortcutInterface[] = [];

  @property({ reflect: true, attribute: true, type: Boolean }) fullscreen:
    | boolean
    | null = null;

  @property({ reflect: true, attribute: true, type: Boolean }) headerOn:
    | true
    | null = null;

  @property({ reflect: true, attribute: true, type: Boolean }) loaded:
    | true
    | null = null;

  @property({ reflect: true, attribute: true, type: Boolean }) showPlaceholder:
    | true
    | null = null;

  @property({ reflect: true, attribute: true, type: Boolean })
  showTheaterExample: true | null = null;

  @property({ type: Array }) fileListToDisplay: any[] = fileList;

  @query('iaux-item-navigator') private itemNav!: ItemNavigator;

  @query('modal-manager') modalMgr!: ModalManager;

  firstUpdated() {
    this.fetchItemMD();
    console.log(
      '<app-root> component has loaded',
      this.modalMgr,
      this.sharedObserver,
    );

    this.itemNav.viewAvailable = false;
  }

  updated(changed: any) {
    console.log('changed', changed);
    if (changed.has('itemMD')) {
      this.fullscreenCheck();
    }

    if (changed.has('fileList')) {
      this.drawMenus();
    }
  }

  async fetchItemMD() {
    const searchService = SearchService.default;

    // masterbookofamericanfolksong00shep => multiple files
    // ux-team-books => item
    const mdResponse = await searchService.fetchMetadata(
      'masterbookofamericanfolksong00shep',
    );

    if (mdResponse.error) {
      console.log('MD Fetch error: ', mdResponse.error);
      (window as any).confirm(
        'There was an error fetching response, please check dev console',
      );
      return;
    }

    console.log('mdResponse.success', JSON.stringify(mdResponse.success));
    this.itemMD = mdResponse.success;
    this.toggleTheaterExample();
  }

  get theaterReady(): boolean {
    return this.modalMgr && this.sharedObserver && !!this.itemMD;
  }

  get urlParams(): URLSearchParams {
    return new URLSearchParams(location.search.slice(1));
  }

  /** Fullscreen */
  get showFullscreen(): boolean {
    return this.urlParams.get('view') === 'theater';
  }

  /** sets url query param `view=theater` to toggle fullscreen */
  toggleFS(): void {
    if (this.urlParams.get('view')) {
      location.search = '';
    } else {
      location.search = 'view=theater';
    }
  }

  /** toggles attr: `<iaux-item-navigator viewportinfullscreen>` */
  fullscreenCheck(): void {
    if (this.showFullscreen && this.itemNav) {
      this.fullscreen = true;
    }
  }
  /** End fullscreen */

  toggleHeader() {
    this.headerOn = this.headerOn ? null : true;
  }

  toggleLoader() {
    const nextState = this.loaded === true ? null : true;
    this.loaded = nextState;
  }

  togglePlaceholder() {
    this.toggleLoader();
    const show = this.showPlaceholder ? null : true;
    this.showPlaceholder = show;
  }

  toggleImmersion() {
    const nextState = this.fullscreen ? null : true;
    if (!nextState) {
      this.menuShortcuts = [];
      return;
    }
    this.menuShortcuts = [
      {
        icon: html`<button
          @click=${() => {
            this.fullscreen = null;
            this.menuContents = [];
            this.menuShortcuts = [];
          }}
        >
          Exit
        </button>`,
        id: 'exit',
      },
    ];
    this.menuContents = [
      {
        icon: html`<button
          @click=${() => {
            this.fullscreen = null;
          }}
        >
          Exit
        </button>`,
        id: 'exit',
        label: 'Exit',
        selected: false,
      },
    ] as any as MenuProviderInterface[];

    this.fullscreen = nextState;
  }

  toggleTheaterExample() {
    if (this.showTheaterExample) {
      // turn on placeholder
      this.showPlaceholder = true;
      // turn off example
      this.showTheaterExample = null;

      this.menuContents = [];
      this.menuShortcuts = [];
      return;
    }

    // turn off placeholder
    this.showPlaceholder = null;
    this.showTheaterExample = true;
    this.drawMenus();
  }

  drawMenus() {
    const shareMenu = {
      icon: iauxShareIcon,
      label: 'Share this item',
      id: 'share',
      component: html`<iaux-in-share-panel
        .identifier=${this.itemMD?.metadata.identifier || 'ux-team-books'}
        .type=${`book`}
        .creator=${`UX Team`}
        .description=${'list of test books'}
        .baseHost=${'archive.org'}
        .fileSubPrefix=${''}
      ></iaux-in-share-panel>`,
    } as unknown as MenuProviderInterface;

    const filesNewArr = [...fileList];
    const viewableFilesMenu = {
      id: 'viewable-files',
      icon: viewableFilesIcon,
      label: `Viewable Files (${fileList.length})`,
      baseHost: 'archive.org',
      item: this.itemMD as MetadataResponse,
      subPrefix: '',
      // sorter
      actionButton: html`<iaux-in-sort-files-button
        @fileListSorted=${(e: CustomEvent) => this.sortFilesCallback(e)}
        .fileListRaw=${fileList}
      ></iaux-in-sort-files-button>`,
      component: html`<iaux-in-viewable-files-panel
        .subPrefix=${'onestrandriverpdf'}
        .fileList=${filesNewArr}
      ></iaux-in-viewable-files-panel> `,
    };

    this.menuContents = [viewableFilesMenu, shareMenu];
    this.menuShortcuts = [viewableFilesMenu, shareMenu];
  }

  async sortFilesCallback(e: CustomEvent) {
    const { sortType, sortedFiles } = e.detail;
    this.fileListToDisplay = sortedFiles;
    console.log('fileListSorted', { sortType, sortedFiles });
    await this.updateComplete;
    console.log('fileListSortedasyncd', { sortType, sortedFiles });
    this.drawMenus();
    // debugger;
  }

  /** Views */
  get theaterExample(): TemplateResult {
    return html`
      <div slot="main">
        <div class="theater-example">
          <img
            alt="cat theater"
            src="https://archive.org/download/masterbookofamericanfolksong00shep/__ia_thumb.jpg"
          />
          <h3>Welcome to Cat Theater</h3>
        </div>
      </div>
    `;
  }

  get headerExample(): TemplateResult {
    return html`
      <div slot="header">
        <div class="embed-link">
          <img
            src="https://archive.org/images/glogo-jw.png"
            alt="glowing ia logo"
          />
          <a href="/details/goody">
            The history of Little Goody Two-Shoes : otherwise called Mrs.
            Margery Two-Shoes ... [1766 edition]
          </a>
        </div>
      </div>
    `;
  }

  get isViewAvailable(): boolean {
    if (this.showTheaterExample) {
      return true;
    }
    return false;
  }

  render(): TemplateResult {
    const {
      isViewAvailable,
      loaded,
      showPlaceholder,
      headerOn,
      fullscreen,
      menuContents,
      menuShortcuts,
      showTheaterExample,
    } = this;
    console.log('&&&& item nav properties', {
      loaded,
      headerOn,
      isViewAvailable,
      showTheaterExample,
      showPlaceholder,
      fullscreen,
      menuContents,
      menuShortcuts,
    });
    return html`
      <h1>theater, in page</h1>
      <section>
        <iaux-item-navigator
          baseHost="archive.org"
          .item=${this.itemMD}
          .modal=${this.modalMgr}
          .sharedObserver=${this.sharedObserver}
          .loaded=${this.loaded}
          ?viewAvailable=${!!this.showTheaterExample}
          .menuContents=${this.menuContents}
          .menuShortcuts=${this.menuShortcuts}
          .viewportInFullscreen=${this.fullscreen}
        >
          ${this.headerOn ? this.headerExample : ''}
          ${this.showTheaterExample ? this.theaterExample : ''}
        </iaux-item-navigator>
      </section>
      <div>
        <button @click=${this.toggleHeader}>toggle header</button>
        <button @click=${this.toggleLoader}>toggle loader</button>
        <button @click=${this.togglePlaceholder}>toggle placeholder</button>
        <button @click=${this.toggleTheaterExample}>toggle new theater</button>
        <button @click=${this.toggleImmersion}>toggle immersion</button>
      </div>
      <modal-manager></modal-manager>
    `;
  }

  static styles = css`
    :host([fullscreen]),
    :host([fullscreen]) section {
      height: 100vh;
      width: 100vw;
    }

    :host([fullscreen]) h1 {
      display: none;
    }

    h1 {
      color: black;
    }

    section {
      border: 1px solid pink;
      color: #222;
      height: calc(100vh - 200px);
    }

    :host,
    iaux-item-navigator {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    .embed-link {
      height: 55px;
      border: 1px solid yellow;
    }

    .theater-example {
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 10px;
      border: 5px dotted yellow;
      flex: 1;
    }

    div[slot='main'] {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    div[slot='main'] > * {
      flex: 1;
    }

    modal-manager[mode='closed'] {
      display: none;
    }
  `;
}
