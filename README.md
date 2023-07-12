# Children's Story Generator

This project uses the [ChatGPT API](https://planetbanknote.com/) to create children's stories on demand. The frontend collects user input for the genre of the story, and the backend, implemented in Python, generates a story based on this input. 

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Local Installation](#local-installation)
- [Usage](#usage)
- [Cloud Infrastructure](#cloud-infrastructure)
- [CI/CD Pipeline](#ci/cd-pipeline)
- [Containerization](#containerization)
- [Code Quality](#code-quality)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this application, you'll need:
- Docker and Docker Compose installed on your system.

### Local Installation

1. Clone the repo
```
git clone https://github.com/EJT93/Childrens-Story-AI-Generator.git
```

2. Navigate to the cloned directory. Create an `.env` file in the main directory, following the template in `.env.example` and add your OpenAI API key to it.

3. Start the application using Docker Compose:
```
docker-compose up -d --build
```

## Usage

Once the Docker containers are running, open `http://localhost:3000` in a web browser to use the story generator.

## Cloud Infrastructure

The application is designed to be deployed on Amazon Web Services (AWS), leveraging services like AWS CodeBuild and CodePipeline for continuous integration/continuous delivery.

## CI/CD Pipeline

The application employs a CI/CD pipeline using AWS CodeBuild and CodePipeline. Any changes pushed to the GitHub repository are automatically built and deployed, ensuring a seamless development process and continuous delivery of features.

## Containerization

This application uses Docker for containerization. Docker creates isolated environments called containers to run your applications. Each container will include all necessary executables, binary code, libraries, and configuration files.

## Code Quality

The application uses SonarQube for continuous inspection of code quality. SonarQube detects bugs, code smells, and security vulnerabilities, thereby helping to maintain high code standards and reliability.

## Contributing

If you would like to contribute to this project, please feel free to fork the repo and submit a pull request.

## Contact

Elijah Torrence - [@LinkedIn](https://www.linkedin.com/in/elijah-torrence-67208169/)

Project Link: [https://github.com/EJT93/Childrens-Story-AI-Generator.git](https://github.com/EJT93/Childrens-Story-AI-Generator.git)

## Acknowledgments

- Thanks to OpenAI for providing the GPT-3 API.
- Thanks to the Flask and Node.js communities for the great open source tools.