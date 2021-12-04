exports.config = {
  output: './output',
    helpers: {
      Appium: {
        app: "./nuclone/app/nuclone.apk",
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
    features: './src/interaction/*.feature',
    steps: ['./src/interaction/step_definitions/interaction.steps.js']
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