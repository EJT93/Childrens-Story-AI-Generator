# Children's Story Generator

This project uses the ChatGPT API to create children's stories on demand. The frontend collects user input for the genre of the story, and the backend generates a story based on this input.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Cloud Infrastructure](#cloud-infrastructure)
- [CI/CD Pipeline](#ci/cd-pipeline)
- [Containerization and Orchestration](#containerization-and-orchestration)
- [Monitoring and Logging](#monitoring-and-logging)
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

_This section is under development._

## CI/CD Pipeline

_This section is under development._

## Containerization and Orchestration

This application uses Docker and Docker Compose for containerization and orchestration. Docker creates isolated environments to run your applications, while Docker Compose allows you to manage multi-container applications.

## Monitoring and Logging

_This section is under development._

## Contributing

If you would like to contribute to this project, please feel free to fork the repo and submit a pull request.

## Contact

Elijah Torrence - [@LinkedIn](https://www.linkedin.com/in/elijah-torrence-67208169/)

Project Link: [https://github.com/EJT93/Childrens-Story-AI-Generator.git](https://github.com/EJT93/Childrens-Story-AI-Generator.git)

## Acknowledgments

- Thanks to OpenAI for providing the GPT-3 API.
- Thanks to the Flask and Node.js communities for the great open source tools.