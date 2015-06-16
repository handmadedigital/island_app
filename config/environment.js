module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'island-buyers-club',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }

  };

 ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token',
    crossOriginWhitelist: ['http://localhost:8000'],
    routeAfterAuthentication: 'user.dashboard'
  };

  ENV['simple-auth-token'] = {
    refreshAccessTokens: true,
    timeFactor: 1000,
    refreshLeeway: 30, // Refresh the token 5 minutes (300s) before it expires.
    serverTokenEndpoint: 'http://localhost:8000/api/v1/auth/login',
    serverTokenRefreshEndpoint: 'http://localhost:8000/api/v1/auth/refresh',
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self' http://fonts.gstatic.com",
    'connect-src': "'self'",
    'img-src': "'self'",
    'media-src': "'self'"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};