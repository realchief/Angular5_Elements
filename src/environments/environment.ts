// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    backendEndpoint: "http://172.28.230.205",
    apiEndpoint: "http://localhost:5010/api",
    transactionRouterEndpoint: "http://172.28.237.181/hubs/transaction-router",
    production: false
};
