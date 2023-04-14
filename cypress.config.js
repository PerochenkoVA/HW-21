const { defineConfig } = require("cypress")
const allureWriter = require("@shelex/cypress-allure-plugin/writer")

module.exports = defineConfig({
  projectId: "hj3fms",
  video: false,
  e2e: {
    baseUrl: "https://staging.lpitko.ru",
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
  },
})
