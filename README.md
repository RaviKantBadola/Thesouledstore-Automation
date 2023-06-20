# Thesouledstore-Automation

Introduction
🌟 The Souled Store Automation is a collection of Cypress tests designed to automate the testing process of The Souled Store web application. The tests follow the Page Object Model (POM) design pattern, providing a modular and maintainable approach for interacting with web elements.

Installation
To set up the project locally, follow these steps:

Clone the repository:

```bash
git clone https://github.com/RaviKantBadola/-Thesouledstore-Automation.git
```

Install the dependencies:
```bash
npm install
```

Set up the configuration:

Provide any necessary environment variables or configuration settings.
Update the cypress.json file with the appropriate configuration values.
Usage
To run the Cypress tests, use the following commands:

Open the Cypress Test Runner:

```bash
npx cypress open
```

🚀 This will open the Cypress Test Runner, allowing you to interactively select and run the tests.

Run the Cypress tests in headless mode:

```bash
npx cypress run
```
🏃‍♀️ This will run the Cypress tests in the command line without the Test Runner interface.

Tests
The tests included in this project follow the Page Object Model (POM) design pattern. The test files are organized as follows:

cypress/TheSouledStore/*.js Description of the test file.

The POM approach separates the web elements and their interactions into separate page object files. This allows for better maintainability, reusability, and readability of the tests.


