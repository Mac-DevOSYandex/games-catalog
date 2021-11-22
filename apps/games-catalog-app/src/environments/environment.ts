import packageJson from '../../../../package.json';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * `package.json dependebcies can only be default-imported by setting the
 * flags: "resolveJsonModule": true, & "allowSyntheticDefaultImports": true,
 * in tscongif.json
 */

export const environment = {
  appName: 'Games Catalog - Angular Material AppStarter',
  production: false,
  envName: 'DEV',
  test: false,
  // BASE_URL: 'https://rawg-video-games-database.p.rapidapi.com/games',
  // HOST: 'rawg-video-games-database.p.rapidapi.com',
  // KEY: '',
  //
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    // material: packageJson.dependencies['@angular/material'],
    angularCore: packageJson.dependencies['@angular/core'],
    eslint: packageJson.devDependencies['eslint'],
    rxjs: packageJson.dependencies['rxjs'],
    cypress: packageJson.devDependencies['cypress'],
    jest: packageJson.devDependencies['jest'],
    nrwlCli: packageJson.devDependencies['@nrwl/cli'],
    typescript: packageJson.devDependencies['typescript'],
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
