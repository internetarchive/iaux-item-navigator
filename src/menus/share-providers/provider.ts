import { TemplateResult } from 'lit';
import { ProviderParams } from './share-provider-interface';

export default class Provider {
  promoCopy: string;

  description: string;

  creator: string;

  fileSubPrefix: string;

  identifier: string;

  baseHost: string;

  name: string | undefined;

  icon: TemplateResult | string | undefined;

  class: string | undefined;

  constructor(params: ProviderParams) {
    this.promoCopy =
      ' : Free Download, Borrow, and Streaming : Internet Archive';

    this.description = params?.description || '';
    this.creator = params?.creator || '';
    this.fileSubPrefix = params?.fileSubPrefix || '';
    this.identifier = params?.identifier || '';
    this.baseHost = params?.baseHost || '';
  }

  get encodedDescription(): string {
    return this.encodeString(this.description);
  }

  get encodedCreator(): string {
    return this.encodeString(this.creator);
  }

  get encodedPromoCopy(): string {
    return this.encodeString(this.promoCopy);
  }

  get itemPath(): string {
    const encodedFileSubPrefix = this.fileSubPrefix
      ? encodeURIComponent(this.fileSubPrefix)
      : '';
    return encodedFileSubPrefix
      ? `${this.identifier}/${encodedFileSubPrefix}`
      : this.identifier;
  }

  get url(): string {
    return `https://${this.baseHost}/details/${this.itemPath}`;
  }

  encodeString(str: string): string {
    if (!str) return '';
    return encodeURIComponent(str.replace(/\s/g, '+')).replace(/%2B/g, '+');
  }
}
