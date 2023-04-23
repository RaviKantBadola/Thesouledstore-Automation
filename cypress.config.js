
const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {

  return config;
}
module.exports = defineConfig({
  e2e: {
   setupNodeEvents,
   //you have to provide the path of the test script // will be stored as specpattern
   //for normal cypress 
   specPattern:'cypress/TheSouledStore/*.js',

  
 
  }
})