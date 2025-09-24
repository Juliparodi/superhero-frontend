# Project Title
"SuperHero Frontend"

## Overview
A ReactJS web app to create, read, update, and delete Super Heroes using my Spring backend API running in Kubernetes.
This app will grants you access to a vast database of superheroes, their characteristics, and related information

---

## Tech Preferences
- Language: TypeScript
- Styling: Tailwind CSS
- Package manager: npm

---

## Pages / Screens
List every page or view and give a short description.
- **Super Heroes List**: Main listing of all heroes. Table or card layout with: Search and filter by name, power, alignment, etc. Pagination or infinite scroll. Actions to view details, edit, or delete.
- **Hero Detail / Edit**: Page showing full hero profile. Name, description, birthDate. Edit mode with form validation.
- **Create Hero**: Form to add a new hero. Fields: Name, description, birthDate. Validation and confirmation on save.
- **Not Found**: Fallback page if user navigates to a non-existent route.
- **Login**: Simple login page if backend auth is enabled. The backend URL is  http://public-superhero-juliparodi19-dev.apps.rm1.0a51.p1.openshiftapps.com

---

## UI Components
- **Hero Table/Grid**: Paginated, sortable, and filterable list of heroes.
- **Hero Card**: Responsive card layout for mobile and dashboard widgets.
- **Hero Form**: Reusable create/edit form with validation and optional image upload.
- **Search & Filter Bar**: Text search and dropdown filters (alignment, power range).
- **Modals/Dialogs**: Delete confirmation and quick-view hero details.
- **Notifications/Toasts**: Success and error feedback for CRUD operations.
- **Loading & Empty States**: Skeleton loaders and friendly “no heroes found” message.
- **Navigation Bar**: Responsive top menu with optional dark mode toggle.
- **Power Level Badge/Slider**: Color-coded indicator of hero strength.

---

## Backend API
Information so the frontend can call your existing API.

- **Base URL**: http://public-superhero-juliparodi19-dev.apps.rm1.0a51.p1.openshiftapps.com
- **Endpoints**:
  | Method | Path                  | Description                | Request body | Example Response |
  |------- |---------------------- |--------------------------- |------------- |----------------- |
  | GET    | /superheroes          | List all heroes           | –           | [
  {
  "id": 1,
  "name": "Superman",
  "description": "The Man of Steel",
  "birthDate": "1938-04-18",
  "creationDate": "2023-08-30",
  "modifiedDate": "2023-08-30"
  },
  {
  "id": 2,
  "name": "Spider-Man",
  "description": "Your friendly neighborhood superhero",
  "birthDate": "1962-08-10",
  "creationDate": "2023-08-30",
  "modifiedDate": "2023-08-30"
  },
  ] |
  | POST   | /hero              | Create new hero           | {
  "name": "Aqua Dynamo",
  "description": "Master of the Abyss",
  "birthDate": "1938-04-18"
  }       | {...}           |
  | GET    | /superheroes/{id}         | Get a specific hero       | –           | {
  "id": 3,
  "name": "Wonder Woman",
  "description": "Amazonian princess with super strength",
  "birthDate": "1941-12-01",
  "creationDate": "2023-08-30",
  "modifiedDate": "2023-08-30"
  }           |
  | PUT    | /hero/{id}         | Update a hero             | {...}       | {...}           |
  | DELETE | /hero/{id}         | Delete a hero             | –           | {...}           |
  | GET    | /superheroes/search              | Delete a hero             | –           | {...}           |


- **Authentication**: <!-- None, Basic Auth, JWT, etc. -->
  It has JWT based on the login page  http://public-superhero-juliparodi19-dev.apps.rm1.0a51.p1.openshiftapps.com/login

---

## Data Handling
- **State Management**: Use React Query for all server data (heroes list, detail, mutations). Local `useState`/`useReducer` for UI state (dialogs, form fields, filters).
- **Error Handling**:
    - Toast notifications for API failures and form errors.
    - Inline form validation with React Hook Form + Zod.
    - Global error boundary to catch unexpected runtime errors.
- **Loading States**:
    - Skeleton placeholders for hero table and detail pages.
    - Spinner overlay during API calls for create/update/delete.
- **Optimistic Updates**: Immediately remove hero from list on delete and roll back if the request fails.

---

## Local Development
- Environment variables to configure backend URL.
  <!-- Example: `VITE_API_BASE_URL=http://localhost:8080` or a port-forwarded Kubernetes service URL -->
- Any instructions for developers to reach the backend (e.g., `kubectl port-forward` commands).

---

## Design / Branding
- **Colors**: Primary #1E40AF, Secondary #EF4444, Accent #FBBF24, Background #F3F4F6, Text #111827
- **Fonts**: Primary font 'Inter', secondary font 'Bangers' for headings
- **Logos / Images**: Placeholder superhero icon for app logo; optional hero avatars for each hero
- **Additional Notes**:
    - Rounded buttons and cards with subtle shadow
    - Hover states with slight scale or color change
    - Skeleton loaders and empty states should match color palette
    - Optional dark mode support
---

## Acceptance Criteria
- Pages implemented and connected to live backend.
- CRUD operations fully functional.
- Responsive layout desktop.
- Unit or integration tests? yes

---

## Optional Extras
- Future deployment plan (if you later decide to deploy frontend to Kubernetes or other hosting).

