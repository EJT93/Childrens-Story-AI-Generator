# First stage: Node.js build
FROM node:14 AS build
WORKDIR /app/frontend
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend/ ./
RUN npm run build

# Second stage: Python server
FROM python:3.8-slim-buster
WORKDIR /app/backend
COPY ./backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./backend/main ./main
COPY --from=build /app/frontend/build ../frontend/build

CMD ["python", "./main/app.py"]