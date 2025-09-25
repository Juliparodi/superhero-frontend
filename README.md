# Superhero Frontend

A React + TypeScript web application for managing **Superheroes**.  
This frontend communicates securely with the Spring Boot backend via HTTPS and authenticates users using **JWT**.

---

## ✨ Features

- **User Authentication**: Login with username and password to obtain a JWT token.
- **Role-based Access**:
    - **USER / READ** role → can view superhero lists and details.
    - **ADMIN** role → can create, update, and delete superheroes.
- **Hero Management**:
    - Create, edit, and delete heroes.
    - View a paginated list of all heroes and individual hero details.
- **Form Validation** with `react-hook-form` and `zod`.
- **API Caching & Mutations** with [TanStack React Query v4](https://tanstack.com/query/v4).

---

## 🛡️ Security

Security is a top priority for this application.

- **JWT Authentication**  
  The frontend obtains a JSON Web Token from the backend during login and attaches it to every API request in the `Authorization: Bearer <token>` header.
- **HTTPS Only**  
  All API traffic is encrypted end-to-end using SSL/TLS. The backend runs on port **8443** with a valid certificate.
- **Role-Based Access Control (RBAC)**
    - **GET** endpoints require authentication and the role `USER` or `READ`.
    - **POST**, **PUT**, **DELETE** endpoints require authentication and the role `ADMIN`.

---

## 🛠️ Tech Stack

- **React 18** with **TypeScript**
- **Vite** (or CRA if you scaffolded that way) for development/build
- **Tailwind CSS** for styling
- **React Router v6**
- **TanStack React Query v4** for server state
- **Zod** for schema validation
- **Axios** for HTTP requests

---

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- Yarn or npm
- Backend running with HTTPS (default: `https://<your-route-or-host>:8443`)

### Installation

```bash
git clone https://github.com/juliparodi/superhero-frontend.git
cd superhero-frontend
npm install
