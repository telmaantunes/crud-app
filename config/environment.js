/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'crud-app',
    podModulePrefix: 'crud-app/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };
  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  ENV.coreHost = 'https://jsonplaceholder.typicode.com';

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = { enabled: false };
  }

  if (environment === 'local') {
    ENV['ember-cli-mirage'] = { enabled: true };
  }

  if (environment === 'production') {
    // ...
  }

  return ENV;
};
