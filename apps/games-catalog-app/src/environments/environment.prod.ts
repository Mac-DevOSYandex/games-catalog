import packageJson from '../../../../package.json';

export const environment = {
  appName: 'Games Catalog - Angular Material AppStarter',
  production: true,
  envName: 'PROD',
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
