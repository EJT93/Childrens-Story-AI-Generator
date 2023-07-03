#!/bin/bash

# Update the package lists
sudo apt update

# Install OpenJDK 11
sudo apt install openjdk-11-jdk -y

# Install Maven
sudo apt install maven -y

# Download and import the Jenkins repository key
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null

# Add the Jenkins repository to the package manager's source list
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

# Update the package lists again to include the Jenkins repository
sudo apt-get update

# Install Jenkins
sudo apt-get install jenkins -y