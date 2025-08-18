
# Fullstack Monorepo

A **full-stack monorepo** boilerplate that brings together **backend, web, mobile, and shared packages** in one workspace. This setup is designed for scalable development, easy dependency management, and shared code across multiple platforms.

## 🚀 Tech Stack

* **Monorepo Management**: [pnpm Workspaces](https://pnpm.io/workspaces)
* **Backend**: Node.js + Express (TypeScript)
* **Web**: React (TypeScript)
* **Mobile**: React Native (Expo)
* **Shared Packages**: Utilities, UI components, and types
* **Language**: TypeScript
* **Tooling**: ESLint, Prettier, Husky, Commitlint

---

## 📂 Project Structure

```
fullstack-monorepo/
│── backend/       # API server (Express + TypeScript)
│── mobile/        # Mobile app (React Native + Expo)
│── website/       # Web frontend (React)
│── packages/      # Shared libraries, components, types
│── .gitignore
│── .prettierrc
│── pnpm-workspace.yaml
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

### 3. Start development servers

* **Backend**

  ```bash
  pnpm --filter backend dev
  ```
* **Website**

  ```bash
  pnpm --filter website dev
  ```
* **Mobile** (Expo)

  ```bash
  pnpm --filter mobile start
  ```

---

## ⚙️ Environment Variables

Each app may require its own `.env` file. Example for `backend`:

```
PORT=4000
DATABASE_URL=postgres://user:password@localhost:5432/mydb
JWT_SECRET=supersecret
```

Add corresponding `.env` files inside `backend/`, `website/`, and `mobile/` as needed.

---

## 📦 Shared Packages

The `packages/` folder contains reusable code that can be shared across apps:

* **types** → Global TypeScript interfaces
* **ui** → Shared React components
* **utils** → Helper functions

Usage inside apps:

```ts
import { formatDate } from "@fullstack/utils";
```

---

## 📜 Scripts

Common commands:

```bash
pnpm install         # Install dependencies
pnpm build           # Build all apps & packages
pnpm dev             # Run all apps in dev mode
pnpm lint            # Run ESLint checks
pnpm test            # Run tests
```

---

## 🚀 Deployment

* **Backend** → Deploy to [Railway](https://railway.app/), [Heroku](https://www.heroku.com/), or Docker
* **Website** → Deploy to [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
* **Mobile** → Build and publish with [Expo EAS](https://expo.dev/eas)

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit changes (`git commit -m 'feat: add new feature'`)
4. Push to your branch (`git push origin feature/my-feature`)
5. Open a Pull Request 🚀

We use:

* **Conventional Commits** for commit messages
* **ESLint + Prettier** for consistent code style
* **Husky hooks** to enforce checks before commits

---

## 📖 Guidelines

* **Coding style** → Follow ESLint + Prettier rules
* **Commit messages** → Follow [Conventional Commits](https://www.conventionalcommits.org/)
* **Branching** → `main` is stable, feature branches should follow `feature/*`

---

## 📜 License

MIT License © 2025 [Dare Goodness](https://github.com/daregoodness1997)

---

👉 With this setup, you can build and scale **web, mobile, and backend** apps all from one monorepo, while sharing code across platforms.

