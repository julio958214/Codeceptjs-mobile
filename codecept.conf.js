exports.config = {
  output: './output',
    helpers: {
      Appium: {
        app: "./app/ingresso.com.apk",
        platform: "Android",
        desiredCapabilities: {}
      }
  },
  include: {
    I: './steps_file.js',
    pages: "../Codeceptjs-Mobile/pages.js"
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './navigation/*.feature',
    steps: ['./navigation/step_definitions/navigation.steps.js']
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