# SPEC: Simple Web App Containerized with Docker

## 1. Purpose

Build a minimal HTTP service for SRE practice.

The objective is to demonstrate the operational fundamentals of a small service:
- serving HTTP traffic
- exposing a health endpoint
- reading configuration from environment variables
- logging to stdout
- running the service inside Docker

This project is intentionally simple. It is not a feature-rich application.

---

## 2. Selected Stack

This project must be implemented with:
- Node.js
- Express
- Docker

No database or external services are required.

---

## 3. Functional Requirements

### `GET /`
The root endpoint must:
- return HTTP `200 OK`
- return JSON
- confirm that the service is running

Expected response shape:

```json
{
  "status": "ok",
  "message": "simple web app running"
}
```

### `GET /health`
The health endpoint must:
- return HTTP `200 OK`
- return JSON
- be suitable for a basic container health check

Expected response:

```json
{
  "status": "healthy"
}
```

### Other Routes
- Unspecified routes may return `404 Not Found`

---

## 4. Runtime Requirements

The application must:
- start an HTTP server
- listen on the port defined by the environment variable `PORT`
- use `3000` as the default port when `PORT` is not provided
- bind to `0.0.0.0`
- start without requiring any external dependency

---

## 5. Logging Requirements

Logs are part of the exercise and are mandatory.

The application must log:
- every incoming request with HTTP method and path
- a startup message showing the port in use

Logging rules:
- logs must go to stdout/stderr
- logs must be visible with `docker logs`
- do not write logs to files

---

## 6. Docker Requirements

### Dockerfile
The Dockerfile must:
- use an official lightweight Node.js base image
- copy the application source code into the image
- install production dependencies
- expose the application port
- start the server with a production-safe command

### Container Behavior
The container must:
- build successfully with `docker build`
- start successfully with `docker run`
- support `-e PORT=xxxx`
- serve traffic from outside the container when the port is published

---

## 7. Non-Goals

The following are explicitly out of scope:
- authentication
- databases
- background jobs
- Kubernetes
- CI/CD
- advanced monitoring or tracing
- multi-service architecture

---

## 8. Acceptance Criteria

The project is complete when all of the following are true:
- `docker build` succeeds without errors
- `docker run -p 3000:3000` starts the service correctly
- `GET /` returns HTTP `200` and valid JSON
- `GET /health` returns HTTP `200` and `{ "status": "healthy" }`
- request logs are visible through `docker logs <container>`
- the service changes its listening port when `PORT` is provided

---

## 9. Implementation Guidance for Codex

When implementing this project:
- keep the code minimal and easy to debug
- prefer a single small server file
- avoid unnecessary abstractions
- do not introduce extra frameworks or architectural layers

The goal is operational clarity, not over-engineering.
