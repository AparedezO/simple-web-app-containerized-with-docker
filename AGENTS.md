# AGENTS.md

## Project Overview
This is a minimal SRE-style HTTP service designed for learning purposes.

The goal is to build a simple, observable, containerized service.

---

## Objectives
- Provide a minimal HTTP server
- Implement a root endpoint `/`
- Implement a health endpoint `/health`
- Log all incoming requests
- Use environment variables for configuration
- Run inside Docker

---

## Tech Stack
- Node.js (Express)
- Docker

---

## System Behavior Rules

### Endpoints
- `GET /` must return JSON with a simple message
- `GET /health` must return:

```json
{ "status": "healthy" }
```

### Logging
- Log every incoming request (method + path)
- Log server startup with port
- Logs MUST go to stdout (`console.log`)

### Configuration
- Use environment variable `PORT`
- Default port = `3000`
- Server must bind to `0.0.0.0`

### Code Principles
- Keep implementation minimal
- Do not introduce unnecessary dependencies
- Prefer clarity over cleverness
- Code must be easy to debug

### Docker Requirements
- Use a lightweight base image
- Expose the correct port
- Application must run with `docker run`
- Must support `-e PORT=xxxx`

---

## What NOT to do
- Do not add databases
- Do not add authentication
- Do not add unnecessary layers (services, controllers, etc.)
- Do not over-engineer

---

## Acceptance Criteria
The implementation is correct if:
- Server starts successfully
- `/` responds correctly
- `/health` returns `200`
- Logs are visible via `docker logs`
- `PORT` environment variable works
