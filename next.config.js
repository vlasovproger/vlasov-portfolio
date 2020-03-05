const withSass = require("@zeit/next-sass");
const withOffline = require("next-offline");
require("dotenv").config();

function withPreact(nextConfig = {}) {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          "This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
        );
      }

      if (options.isServer) {
        config.externals = ["react", "react-dom", ...config.externals];
      }

      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        react: "preact/compat",
        react$: "preact/compat",
        "react-dom": "preact/compat",
        "react-dom$": "preact/compat"
      });

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    }
  });
}

const nextConfig = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    PORTFOLIO_API_KEY: process.env.PORTFOLIO_API_KEY,
    PORTFOLIO_AUTH_DOMAIN: process.env.PORTFOLIO_AUTH_DOMAIN,
    PORTFOLIO_DATABASE_URL: process.env.PORTFOLIO_DATABASE_URL,
    PORTFOLIO_PROJECT_ID: process.env.PORTFOLIO_PROJECT_ID,
    PORTFOLIO_STORAGE_BUCKET: process.env.PORTFOLIO_STORAGE_BUCKET,
    PORTFOLIO_MESSAGEING_SENDER_ID: process.env.PORTFOLIO_MESSAGEING_SENDER_ID,
    PORTFOLIO_APP_ID: process.env.PORTFOLIO_APP_ID,
    PORTFOLIO_MEASUREMENT_ID: process.env.PORTFOLIO_MEASUREMENT_ID
  },
  target: "serverless",
  transformManifest: manifest => ["/"].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: false,
  dontAutoRegisterSw: true,
  workboxOpts: {
    swDest: "static/service-worker.js",
    maximumFileSizeToCacheInBytes: 5000000,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = withPreact(withOffline(withSass(nextConfig)));
