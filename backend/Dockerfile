# Start from a base Python 3.9 image
FROM python:3.9-slim

# Set a working directory
WORKDIR /app

# Copy your application files to the Docker image
COPY src/ ./

# Install the Python dependencies
RUN pip install flask openai

# Set an environment variable for the OpenAI key
# You will pass the actual key while running the Docker container
ENV OPENAI_KEY=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

# Set the command to start your application
CMD ["python", "main.py"]
