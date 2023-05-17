# Vehicle Finance Calculator Monorepo

This monorepo contains the following applications and technologies:

- Angular application called `vehicleFinanceCalculatorUi`
- Node.js application called `vehicleFinanceCalculatorApi`
- Dockerfile for spinning up a PostgreSQL database

## Getting Started

To get started with this monorepo, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies for each application by running `npm install` in the respective application directories (`vehicleFinanceCalculatorUi` and `vehicleFinanceCalculatorApi`).
3. Build the Docker image for the PostgreSQL database by running `docker build -t vehiclefinancecalculatordb .` in the root directory of the monorepo.

## Running the Applications

To run the applications, follow these steps:

1. Start the PostgreSQL database by running `docker run -d --name vehiclefinancecalculatordb-container -p 5432:5432 vehiclefinancecalculatordb`.
2. Start the Node.js application by running `npm start` in the `vehicleFinanceCalculatorApi` directory.
3. Start the Angular application by running `ng serve` in the `vehicleFinanceCalculatorUi` directory.
