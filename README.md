
# Fullstack Monorepo

A **full-stack monorepo** boilerplate combining **NestJS (backend)**, **React + Vite (frontend)**, and **Expo (React Native mobile)** — all managed under a single workspace using **pnpm workspaces**. The repo is designed for **code sharing, scalability, and multi-platform app development**.

---

## 🚀 Tech Stack

### 🖥️ Frontend (Website)

* **Framework**: [React](https://react.dev/)
* **Build Tool**: [Vite](https://vitejs.dev/) for super-fast development and HMR
* **Language**: TypeScript
* **Styling**: CSS Modules / SCSS
* **Usage**: User-facing web application (e.g., dashboard, landing page, etc.)

### ⚙️ Backend (API)

* **Framework**: [NestJS](https://nestjs.com/) (Node.js framework for scalable server-side apps)
* **Language**: TypeScript
* **Database**: Configurable (e.g., PostgreSQL, MySQL, MongoDB — depending on `.env`)
* **Features**:

  * Modular architecture
  * RESTful API endpoints (GraphQL optional)
  * Authentication & authorization (JWT, Passport strategies)
  * Configurable service layer for business logic

### 📱 Mobile (App)

* **Framework**: [Expo](https://expo.dev/) (built on React Native)
* **Language**: TypeScript
* **Features**:

  * Cross-platform support (iOS, Android)
  * Shared logic and types with web via `packages/`
  * Easy publishing via **Expo EAS**

### 📦 Shared Packages

* **Utilities** → Reusable helper functions
* **Types** → Global TypeScript types/interfaces
* **UI Components** → Shared React/React Native compatible UI elements

---

## 📂 Project Structure

```
fullstack-monorepo/
│── backend/       # NestJS API server
│── website/       # React + Vite frontend
│── mobile/        # Expo React Native app
│── packages/      # Shared libraries (utils, types, UI components)
│── pnpm-workspace.yaml
│── .gitignore
│── .prettierrc
│── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/daregoodness1997/fullstack-monorepo.git
cd fullstack-monorepo
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run apps

#### Backend (NestJS API)

```bash
pnpm --filter backend start:dev
```

Default: [http://localhost:4000](http://localhost:4000)

#### Frontend (React + Vite)

```bash
pnpm --filter website dev
```

Default: [http://localhost:5173](http://localhost:5173)

#### Mobile (Expo)

```bash
pnpm --filter mobile start
```

Then scan the QR code in the Expo Go app.

---

## ⚙️ Environment Variables

Each app requires its own `.env`. Examples:

### Backend (`backend/.env`)

```
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/mydb
JWT_SECRET=supersecret
```

### Website (`website/.env`)

```
VITE_API_URL=http://localhost:4000
```

### Mobile (`mobile/.env`)

```
EXPO_PUBLIC_API_URL=http://localhost:4000
```

---

## 📜 Scripts

```bash
pnpm install         # Install dependencies
pnpm dev             # Run all apps in dev mode
pnpm build           # Build all apps
pnpm lint            # Run ESLint
pnpm test            # Run tests
```

---

## 🚀 Deployment

* **Backend (NestJS)** → Deploy with Docker, Railway, or Heroku
* **Frontend (React + Vite)** → Deploy with Vercel or Netlify
* **Mobile (Expo)** → Build & publish via [EAS](https://docs.expo.dev/eas/)

---

## 🤝 Contributing

We use:

* **Conventional Commits**
* **Prettier + ESLint** for consistent formatting


Steps:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit (`git commit -m 'feat: add new feature'`)
4. Push & open a PR

---

## 📜 License

MIT License © 2025 [Dare Goodness](https://github.com/daregoodness1997)

---

👉 With this monorepo, you can build **a complete full-stack system** where web, mobile, and backend apps share code, logic, and types in one place.

