# Introduction 
This is an example project about using Cypress with a react application along with build pipeline setup.

[![Build Status](https://dev.azure.com/saisrikanth-r/cypress-example/_apis/build/status/srikhs.cypress-example?branchName=master)](https://dev.azure.com/saisrikanth-r/cypress-example/_build/latest?definitionId=5&branchName=master)

# Getting Started
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project uses - React + Redux saga + Typescript + Cypress + Office Fabric React.

This example contains a React application with a very simple Contact form. The accessibility tests are run using Cypress. The azure devops build pipeline for this example is located at the pipelines folder of this repository.

## Steps to run Cypress tests and the application
1. Clone this Repository
```
git clone https://sarathak-examples@dev.azure.com/sarathak-examples/cypress-example/_git/cypress-example
```
2. Perform npm install to install the application and the dependencies

```
npm install
```
3. To start the server, wait for server and run cypress, use
```
npm run cypress-start-server-dev-test
```
4. To run with Cypress visual runner, use
```
npm run cypress-start-server-dev-open
```
5. If you want to just start the app, use 
```
npm run start
```

The other script commands are
```
"scripts": {
    "start": "node scripts/start.js",
    "cypress:open": "cypress open",
    "cy:verify": "cypress verify",
    "cypress:run:e2e:local": "cypress run --spec cypress/integration/**/*e2e* --env api_server=https://localhost:44389/api/v1/",
    "cypress-start-server-dev-test": "start-server-and-test start http-get://localhost:3000 cypress:run:e2e:local",
    "cypress-start-server-dev-open": "start-server-and-test start http-get://localhost:3000 cypress:open"
  }
```

# Build Pipeline
The azure pipeline files are located in the pipelines folder in the root level of the repository.

Please use the Build status badge at the status to visit the pipeline for this repository.


# Something Missing?

If you have ideas that should be on this page, let me know.