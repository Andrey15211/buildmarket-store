# BuildMarket Store Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-like, standalone construction materials e-commerce demo.

**Architecture:** Next.js App Router pages render static catalog data while focused client components own filtering, persistent cart state, and checkout validation. Pure helpers isolate calculation logic from UI.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, Zustand, React Hook Form, Zod, Vitest.

---

### Task 1: Project foundation

**Files:** `package.json`, configuration files, `src/app/globals.css`, shared types and utilities.

- [ ] Add the Next.js and TypeScript project configuration.
- [ ] Add Vitest and tests for price formatting, delivery calculation, and product filtering.
- [ ] Implement the pure helpers until tests pass.

### Task 2: Catalog domain

**Files:** `src/types/product.ts`, `src/data/products.ts`, catalog components.

- [ ] Define product and category contracts.
- [ ] Add at least 24 realistic products across all required categories.
- [ ] Implement search, category, price, sorting, and empty-state behavior.

### Task 3: Storefront UI

**Files:** shared header/footer, home page, product cards, product details.

- [ ] Implement the industrial visual system and responsive shell.
- [ ] Build the home page sections and catalog links.
- [ ] Build static product detail routes and add-to-cart actions.

### Task 4: Cart and checkout

**Files:** Zustand cart store, cart controls, checkout schema and form.

- [ ] Implement persisted cart add, update, remove, and clear behavior.
- [ ] Implement subtotal, delivery fee, and total summaries.
- [ ] Implement accessible React Hook Form fields with Zod validation and a success state.

### Task 5: Documentation and verification

**Files:** `README.md`, `.gitignore`, `.env.example`.

- [ ] Document goal, features, stack, setup, demonstrated skills, and Vercel deployment.
- [ ] Run tests, lint, and production build.
- [ ] Start the dev server and inspect desktop and mobile layouts with CloakBrowser.
- [ ] Fix visible blocking or obvious UI/UX issues and repeat verification.
