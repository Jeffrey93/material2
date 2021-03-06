import {writeFileSync} from 'fs';
import {join} from 'path';

/** Creates a metadata file that re-exports the metadata bundle inside of the typings. */
export function createMetadataReexportFile(destDir: string, from: string, name: string) {
  const metadataJsonContent = JSON.stringify({
    __symbolic: 'module',
    version: 3,
    metadata: {},
    exports: [{from}],
    flatModuleIndexRedirect: true
  }, null, 2);

  writeFileSync(join(destDir, `${name}.metadata.json`), metadataJsonContent, 'utf-8');
}
