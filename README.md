# Vulnerable Fullstack Demo

A deliberately vulnerable full-stack web application with a Python backend and TypeScript frontend.
This project is designed for educational purposes to help security researchers practice identifying and addressing common web application vulnerabilities. Contains intentional security flaws and exposed secrets - DO NOT use in production environments.

# Setup

```bash
docker-compose up --build
```

# Vulnerabilities

## Backend

- SQL Injection vulnerability in the get_user route
- Reflected XSS vulnerability in the echo route
- Hardcoded secrets (API key and secret key)
- Storing plaintext passwords
- Insecure direct object reference in the get_data route
- Debug mode enabled in production
- Weak secret key generation in utils.py

## Frontend

- XSS vulnerabilities in UserDetails and Echo components
- Storing sensitive data (username and password) in localStorage
- Exposing API key in frontend code
- Sending API key in requests
- Using dangerouslySetInnerHTML without proper sanitization
