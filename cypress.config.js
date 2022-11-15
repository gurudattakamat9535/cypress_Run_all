const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'jet8mk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})