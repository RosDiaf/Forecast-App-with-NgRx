# AgileSphere Forecast App

Using the Free open weather map api (http://openweathermap.org/forecast5 api key has been included inside weather.service.ts)

  * Application that allows you to search the weather forecast for a city. 
  * Every time a new city is searched - Add to a table of cities displaying the next 24 hours weather forecast.
  * The application is using ng-rx

## Task completed

  * Components(search, results and the weather container)
  * Weather.service.ts, using the API provided by the openweathermap for a given city
  * Unit test files (*.spec.ts).
  * End to End test using Protractor.
  * Interfaces added in model/weather.ts.
  * Layout table added inside the results component.
  * Application compiled and all the tests to passed.

## Development server

Run `npm start` for a dev server. App will open here `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running e2e tests

Run `ng e2e` to execute the e2e tests via [Protractor](https://www.protractortest.org).
