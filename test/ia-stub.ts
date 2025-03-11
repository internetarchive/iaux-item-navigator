import { Metadata } from '@internetarchive/iaux-item-metadata';
import {
  File,
  MetadataResponse,
  Review,
  SpeechMusicASREntry,
} from '@internetarchive/metadata-service';
import { html } from 'lit';
import {
  MenuProviderInterface,
  MenuShortcutInterface,
} from '../src/interfaces/menu-interfaces';

export class ItemStub implements MetadataResponse {
  constructor() {
    this.rawResponse = '';
    this.created = 1;
    this.d1 = 'hello';
    this.d2 = 'boop';
    this.dir = 'whee';
    this.files = [];
    this.files_count = 0;
    this.item_last_updated = 2020;
    this.item_size = 111;
    this.metadata = new Metadata({ identifier: 'foo' });
    this.server = 'foo-server';
    this.uniq = 2;
    this.workable_servers = ['abc'];
  }

  rawResponse: any;

  created: number;

  d1: string;

  d2: string;

  dir: string;

  files: File[];

  files_count: number;

  item_last_updated: number;

  item_size: number;

  metadata: Metadata;

  server: string;

  uniq: number;

  workable_servers: string[];

  speech_vs_music_asr?: SpeechMusicASREntry[] | undefined;

  reviews?: Review[] | undefined;
}

export const shortcut = {
  id: 'fullscreen',
  icon: html`<i class="fas fullscreen-test"></i>`,
} as MenuShortcutInterface;

export const menuProvider = {
  ...shortcut,
  label: 'foo',
  menuDetails: html`<div>foo</div>`,
  selected: true,
  followable: false,
  href: 'https://archive.foo',
  item: new ItemStub(),
  baseHost: 'https://archive.foo',
  subPrefix: 'bar',
  updated: () => {},
} as MenuProviderInterface;
