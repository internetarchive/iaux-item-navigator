import { MetadataResponse, File } from '@internetarchive/search-service';
import { html, customElement, LitElement, property } from 'lit-element';

interface CollapsedFileInt extends File {
  [menuId: string]: any;
  derivatives: [];
}

@customElement('ia-files-by-type')
export default class IaFilesByType extends LitElement {
  @property({ type: Object }) item: MetadataResponse = {} as MetadataResponse;

  @property({ type: Array }) archivalArtifacts: File[] = [];

  @property({ type: Array }) collapsedFiles: CollapsedFileInt[] = [];

  firstUpdated() {
    this.collapseFiles();
  }

  render() {
    return html`
      <div>
        <p>there are ${this.collapsedFiles.length} original files</p>

        <p>there are ${this.archivalArtifacts.length} archival artifacts</p>

        <p></p>
      </div>
    `;
  }

  collapseFiles() {
    const { files = [] } = this?.item as MetadataResponse;

    const archivalArtifacts: File[] = [];
    const origDir: any = {};

    files.forEach(fi => {
      const { format, source, name, original = '' } = fi as File;
      if (
        format.toLowerCase() === 'metadata' ||
        format.toLowerCase() === 'item tile'
      ) {
        archivalArtifacts.push(fi);
        return;
      }

      let origEntry: any = {};
      if (source === 'original') {
        origEntry = origDir[name];
        if (!origEntry) {
          // add new
          origDir[name] = { ...fi, derivatives: [] } as CollapsedFileInt;
          origEntry = origDir[name];
        } else {
          // update
          const merged = { ...origEntry, ...fi };
          origDir[name] = merged;
        }
        return;
      }

      if (source === 'derivative') {
        const keyToFile = original || '';
        origEntry = origDir[keyToFile];
        if (!origEntry && original) {
          // add new
          const fileFrame = { derivatives: [] } as CollapsedFileInt;
          origEntry = fileFrame;
          origEntry?.derivatives.push(fi);
          origDir[keyToFile] = origEntry;
          origEntry = origDir[keyToFile];
        }
        origEntry?.derivatives.push(fi);
      }
    });

    this.archivalArtifacts = archivalArtifacts;
    this.collapsedFiles = Object.keys(origDir).map(
      (fileName: string) => origDir[fileName]
    );
  }
}
