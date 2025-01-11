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
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <repository-folder>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

### Run Tests

To execute the Cypress tests in headless mode:

```bash
npx cypress run
```

To execute the tests in the Cypress Test Runner:

```bash
npx cypress open
```

### Generate Reports

After running the tests, the Mochawesome reporter will generate a report in the configured directory. Use the following command to merge and view the report:

```bash
npx mochawesome-merge && npx mochawesome-report-generator
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
└── README.md               # Project documentation
```

## Reporting

- **Mochawesome**: After running the tests, a detailed report will be generated in the `reports` folder. The report includes visual and interactive elements to analyze test results.

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to update the repository as needed. For any issues or feature requests, please open a new issue in the repository.
