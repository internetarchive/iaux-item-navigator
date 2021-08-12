import { html, TemplateResult } from 'lit-element';

import '@internetarchive/ia-sharing-options';
import '@internetarchive/icon-share/icon-share';
import {
  IntMenuProvider,
  IntProviderArgs,
} from '../interfaces/menu-interfaces';

export class ShareProvider implements IntMenuProvider {
  item: any = null;

  baseHost: string = 'https://archive.org';

  icon: TemplateResult = html`<ia-icon-share
    style="width: var(--iconWidth); height: var(--iconHeight);"
  ></ia-icon-share>`;

  id: string = 'share';

  label: string = 'Share this item';

  component: TemplateResult | null = null;

  subPrefix: string = '';

  encodedSubPrefix: string = '';

  constructor(shareArgs: IntProviderArgs) {
    const { item, baseHost, subPrefix = '' } = shareArgs;
    const { identifier = '', creator = '', title = '' } = item.metadata || {};
    const encodedSubPrefix = encodeURIComponent(subPrefix);
    const urlIdentifier =
      subPrefix && subPrefix !== identifier
        ? `${identifier}/${encodedSubPrefix}`
        : identifier;

    this.item = item;
    this.baseHost = baseHost;
    this.subPrefix = subPrefix;
    this.encodedSubPrefix = encodedSubPrefix;

    this.component = html`<ia-sharing-options
      identifier=${urlIdentifier}
      type="item"
      creator="${creator}"
      description="${title}"
      baseHost="${this.baseHost}"
    ></ia-sharing-options>`;
  }
}
