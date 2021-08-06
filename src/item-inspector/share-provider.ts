import { html, TemplateResult } from 'lit-element';
import { IntMenuProvider } from '../interfaces/menu-interfaces';
import '@internetarchive/ia-sharing-options';
import '@internetarchive/icon-share/icon-share';

interface ProviderArgs {
  item: any;
  baseHost: string;
  subPrefix: string;
}

export class ShareProvider implements IntMenuProvider {
  item: any = null;

  baseHost: string = 'https://archive.org';

  icon: TemplateResult = html`<ia-icon-share style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon>`;

  id: string = 'share';

  label: string = 'Share this item';

  component: TemplateResult | null = null;

  constructor(shareArgs: ProviderArgs) {
    const { item, baseHost, subPrefix = '' } = shareArgs;
    const { identifier = '', creator = '', title = '' } = item.metadata || {};
    const encodedSubPrefix = encodeURIComponent(subPrefix);
    const urlIdentifier =
      subPrefix && subPrefix !== identifier
        ? `${identifier}/${encodedSubPrefix}`
        : identifier;

    this.item = item;
    this.baseHost = baseHost;

    this.component = html`<ia-sharing-options
      identifier=${urlIdentifier}
      type="item"
      creator="${creator}"
      description="${title}"
      baseHost="${this.baseHost}"
    ></ia-sharing-options>`;
  }
}
