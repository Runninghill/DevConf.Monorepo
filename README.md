# Important
To facilitate your understanding and follow along with the blog post, we have organized the repository into two branches: the Main branch and the Template branch.

1. Main Branch: The Finished Application
The Main branch of this repository contains the fully developed and polished version of the vehicle finance calculator application. If you're interested in exploring the final product or examining the complete codebase, you can access it directly from the Main branch. This branch represents the culmination of our workshop and showcases the full potential of AI tools in accelerating full stack application development.

2. Template Branch: Follow the Blog Post
If you wish to dive into the workshop step-by-step and follow the guidance provided in the corresponding blog post, we recommend checking out the Template branch. This branch serves as a starting point, providing you with a template that aligns with the initial stage of the application development process as described in the blog post. By checking out the Template branch, you'll have access to the codebase in its initial state, allowing you to follow the blog post instructions accurately.

Whether you choose to explore the Main branch to view the finished application or check out the Template branch to follow the blog post, this repository caters to your individual learning preferences. We encourage you to make the most of both branches to gain a comprehensive understanding of the workshop and the concepts discussed in the blog post.

Happy coding and learning!
# Blog checklist

- Docker
- VSCODE
- ChatGPT
- Mintlify & Tabnine
- AI Commits globally installed

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
