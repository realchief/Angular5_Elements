// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    backendEndpoint: "http://172.28.230.72",
    apiEndpoint: "http://172.28.230.72/api",
    transactionRouterEndpoint: "http://172.28.225.157/hubs/transaction-router",
    marketDataHub: "hubs/market-data",
    production: false
};
