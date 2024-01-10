const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 30000,
  },
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    html: true,
    json: true,
    reportDir: "cypress/reports",
    reportFilename: "report",
    overwrite: true
  }
})