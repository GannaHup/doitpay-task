# 🧾 Doitpay Task

A modern front-end application built with **React 19**, **TypeScript**, and **Vite 7**.

This project was developed as a technical task and demonstrates clean architecture, modern tooling, testing setup, and scalable UI structure.

---

## 🚀 Tech Stack

### Core

- React 19
- TypeScript 5
- Vite 7

### Routing

- react-router-dom

### Styling

- Tailwind CSS v4
- @tailwindcss/vite
- clsx
- tailwind-merge
- class-variance-authority

### State Management

- Zustand

### UI / Components

- @tabler/icons-react
- Swiper

### Testing

- Vitest
- Testing Library
- jsdom
- @vitest/coverage-v8

### Code Quality

- ESLint
- TypeScript ESLint
- Prettier

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/GannaHup/doitpay-task.git
cd doitpay-task
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open in your browser:

```
http://localhost:5173
```

---

## 📜 Available Scripts

| Script             | Description                         |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Start development server            |
| `npm run build`    | Type-check and build for production |
| `npm run preview`  | Preview production build            |
| `npm run lint`     | Run ESLint                          |
| `npm run test`     | Run tests in watch mode             |
| `npm run coverage` | Run tests with coverage             |

---

## 🧪 Testing

Run tests:

```bash
npm run test
```

Run coverage:

```bash
npm run coverage
```

Testing uses **Vitest + jsdom** with Testing Library utilities.

---

## 🏗 Project Structure

```
src/
 ├── assets/
 ├── components/
 ├── hooks/
 ├── libs/
 ├── pages/
 ├── store/
 ├── test/
 ├── types/
 ├── App.tsx
 ├── main.tsx
```

The structure is modular and designed for scalability.
