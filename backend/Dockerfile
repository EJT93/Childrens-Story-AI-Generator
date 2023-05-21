# Start from a base Python 3.9 image
FROM python:3.9-slim

# Set a working directory
WORKDIR /app

# Copy your application files to the Docker image
COPY src/ ./

# Install the Python dependencies
RUN pip install flask openai flask_cors

# Set the command to start your application
CMD ["python", "main.py"]
