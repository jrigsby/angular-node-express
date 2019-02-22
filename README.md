# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.  It was edited so 
that node routes to index.html to handle the angular app and it routes to node script to handle a post request to send an email via the server. 
The entire project is then hosted in azure.

## Config file required

Create a config.ts file at the root alongside server.ts to hold the sendgrid apikey

    var config: {sendgrid: {apikey: string}} = {};
    config.sendgrid = {};
    config.sendgrid.apikey = "mysendgridkey";
    module.exports = config;

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Host in azure

Follow steps in document at https://docs.microsoft.com/en-us/azure/app-service-web/app-service-deploy-local-git

## Full build/run/host sequence

Create a config.ts file at the root alongside server.ts to hold the sendgrid apikey

    var config: {sendgrid: {apikey: string}} = {};
    config.sendgrid = {};
    config.sendgrid.apikey = "mysendgridkey";
    module.exports = config;

Using npm terminal, build the angular web application files which puts them in dist folder. The node script server.js will route requests to dist/index.html unless they are api requests containing api/ in the route. Once in index.html routes are contrlled by angular.

Run `ng build` (or ng build --prod)

To build node js files Run `tsc`

start the server and test locally

Run `node server`

Navigate to `http://localhost:1337/`. 

To host in azure you follow the steps at https://docs.microsoft.com/en-us/azure/app-service-web/app-service-deploy-local-git that create a webapp for nodejs and point to a local github repository.  It gets a name ex. azure
Then push the files to azure with the following line, but we need to comment out two lines in the.gitignore file when we do this.  We want to send the dist folder 
and the config.js file.  We do not want to store these files in the repository.  In the case of dist because they are generated files and in the case of config.js for security reasons

Using gitbash send files to azure after they have been built using commands above. 

In gitbash Run `git push azure master` where azure is the name of the remote as setup using the azure documentation mentioned above.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
