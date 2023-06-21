
const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// async function setupNodeEvents(on, config) {
//   require('cypress-mochawesome-reporter/plugin')(on);
//   return config;
// }

module.exports = defineConfig({
 // reporter: 'cypress-mochawesome-reporter',
  e2e: {
  
   //you have to provide the path of the test script // will be stored as specpattern
   //for normal cypress 
   setupNodeEvents(on, config) {
    allureWriter(on, config);
   return config;
  },
  env: {
    allureReuseAfterSpec: true
},
   specPattern:'cypress/TheSouledStore/*.js',
  
  }
 
})
