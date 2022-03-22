exports.config = {
    output: './output',
    helpers: {
        "AssertWrapper": {
            "require": "codeceptjs-assert"
        },
        Appium: {
            app: "../Codeceptjs-mobile/app/nuclone.apk",
            platform: "Android",
            desiredCapabilities: {}
        }
    },
    include: {
        I: './steps_file.js',
        pages: "../Codeceptjs-mobile/pages.js"
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