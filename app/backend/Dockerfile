# Official Python image
FROM python:3.8-slim-buster

# Set the working directory
WORKDIR /app

# Update system packages and clean up
RUN apt-get update && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy requirements.txt
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code
COPY . .

# Set necessary environment variables
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PROMPT_FILE_PATH=/app/main/prompt.json

# Define command to start app
CMD ["python", "main/app.py"]