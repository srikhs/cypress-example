This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project uses - React + Redux saga + Typescript + Cypress + Office Fabric React.

This example contains a React application with a very simple Contact form. The accessibility tests are run using Cypress. The azure devops build pipeline for this example is located at the pipelines folder of this repository.

## Steps to run Cypress tests and the app

```sh
npm install
```
To start the server, wait for server and run cypress, use
```
npm run cypress-start-server-dev-test
```
To run with Cypress visual runner, use
```
npm run cypress-start-server-dev-open
```
If you want to just start the app, use 
```
npm run start
```

The other script commands are
```
"scripts": {
    "start": "node scripts/start.js",
    "cypress:open": "cypress open",
    "cypress:run:e2e:local": "cypress run --spec cypress/integration/**/*e2e* --env api_server=https://localhost:44389/api/v1/",
    "cypress-start-server-dev-test": "start-server-and-test start http-get://localhost:3000 cypress:run:e2e:local",
    "cypress-start-server-dev-open": "start-server-and-test start http-get://localhost:3000 cypress:open"
  }
```

## Something Missing?

If you have ideas that should be on this page, [let us know](https://github.com/microsoft/Garage4Philanthropies/issues).
