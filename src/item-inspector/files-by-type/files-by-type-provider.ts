import { html, TemplateResult } from 'lit-element';

import './ia-files-by-type';
import '@internetarchive/icon-share/icon-share';
import {
  IntMenuProvider,
  IntProviderArgs,
} from '../../interfaces/menu-interfaces';

export class FilesByTypeProvider implements IntMenuProvider {
  item: any = null;

  baseHost: string = 'https://archive.org';

  icon: TemplateResult = html`<ia-icon-share
    style="width: var(--iconWidth); height: var(--iconHeight);"
  ></ia-icon-share>`;

  id: string = 'filesByType';

  label: string = 'Files by type';

  component: TemplateResult | null = null;

  subPrefix: string = '';

  constructor(shareArgs: IntProviderArgs) {
    const { item, baseHost, subPrefix = '' } = shareArgs;
    const { title = '' } = item.metadata;

    this.item = item;
    this.baseHost = baseHost;
    this.subPrefix = subPrefix;

    this.component = html`<ia-files-by-type
      .item=${this.item}
      .description="${title}"
      .baseHost="${this.baseHost}"
    ></ia-files-by-type>`;
  }
}
