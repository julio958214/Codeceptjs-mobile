exports.config = {
  output: './output',
    helpers: {
      Appium: {
        app: "/home/julio/nuclone/app/nuclone.apk",
        platform: "Android",
        desiredCapabilities: {}
      }
  },
  include: {
    I: './steps_file.js',
    pages: "../nuclone/pages.js"
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './interation/*.feature',
    steps: ['./interation/step_definitions/interation.steps.js']
  },
  plugins: {
    "allure": {
    "enabled": true
  },
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
}