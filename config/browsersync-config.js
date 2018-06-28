
var historyApiFallback = require("connect-history-api-fallback")

/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
        "port": 3001
    },
    "watch": false,
    "single": false,
    "watchOptions": {
        "ignoreInitial": true
    },
    "server": {
      "baseDir":"./dev/"
    },
    "proxy": false,
    "port": 3000,
    "middleware": false,
    "serveStatic": [],
    "ghostMode": false,
    "logLevel": "info",
    "logPrefix": "Browsersync",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    "rewriteRules": false,
    "open": "local",
    "hostnameSuffix": false,
    "reloadOnRestart": true,
    "notify": false,
    "reloadDelay": 0,
    "reloadDebounce": 0,
    "reloadThrottle": 0,
    "injectChanges": true,
    "host": null,
    "codeSync": true,
    "timestamps": true
};
