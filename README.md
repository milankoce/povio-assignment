# AQA assignment Repository for Cypress Automation Tests

This repository is designed for end-to-end (E2E) testing of web applications using the **Cypress framework**. It includes test scripts, configurations, and reporting tools to ensure the quality and reliability of web applications.

## Features

- **Framework**: Cypress for E2E testing
- **Programming Language**: JavaScript
- **Reporting Tool**: Mochawesome for generating detailed and user-friendly test reports
- **Scalable and Maintainable**: Built to support scalable and maintainable automation practices

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Cypress](https://www.cypress.io/)

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/milankoce/povio-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd /povio-assignment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Run Tests

To execute the Cypress tests in headless mode:

```bash
npm run all:e2e:headless
```

To execute the tests in the Cypress Test Runner:

```bash
npm run cypress
```

## Directory Structure

```plaintext
project-root/
├── cypress/
│   ├── e2e/                # Test files
│   ├── fixtures/           # Test data
│   ├── support/            # Custom commands and utilities
├── node_modules/           # Installed dependencies
├── reports/                # Mochawesome reports
├── cypress.config.js       # Cypress configuration file
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration file  
└── README.md               # Project documentation
```

## Reporting

- **Mochawesome**: After running the tests, a detailed report will be generated in the `reports` folder. The report includes visual and interactive elements to analyze test results.


