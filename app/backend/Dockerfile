# Official Python image
FROM python:3.8-slim-buster

# Set the working directory
WORKDIR /app

# Copy requirements.txt
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code
COPY . .

# Run the app
CMD [ "python", "main/app.py" ]