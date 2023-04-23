
const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
   setupNodeEvents,
   //you have to provide the path of the test script // will be stored as specpattern
   //for normal cypress 
   
   specPattern:'cypress/TheSouledStore/*.js',
  
  
 
  }
 
})