import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "scully",
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './dist/static',
  routes: {
    '/dogs/:dogId': {
        type: 'json',
        dogId: {
            url: 'https://angular-no-scully-default-rtdb.firebaseio.com/dogs.json',
            property: 'id'
        }
    }
  }
};