# BuildMarket Store

## Links

- GitHub: https://github.com/Andrey15211/buildmarket-store
- Live Demo: https://buildmarket-store.vercel.app

Production-like e-commerce demo for a Russian construction materials supplier. The project is a standalone portfolio case focused on commercial frontend engineering, catalog behavior, client state, and validated checkout flows.

## Features

- Industrial B2B storefront with responsive home page
- 24 realistic products in 6 construction categories
- Catalog search, category and price filters, sorting, and empty state
- Static product detail routes with specifications and stock status
- Persistent Zustand cart with quantity controls and product removal
- Delivery calculation and order totals
- Checkout form built with React Hook Form and Zod
- Complete RU/EN interface localization with a persistent language switcher
- Accessible labels, loading states, keyboard focus styles, and mobile filters

## Stack

- Next.js App Router
- next-intl
- TypeScript
- Tailwind CSS
- Zustand
- React Hook Form
- Zod
- Vitest

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to Russian:

- `http://localhost:3000/ru`
- `http://localhost:3000/en`

Quality checks:

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
src/
  app/[locale]/ localized App Router pages and global layout
  components/   storefront, catalog, cart, checkout, and layout UI
  data/         mock product catalog
  lib/          filtering, validation, category, and pricing logic
  i18n/         next-intl routing, navigation, request config, and RU/EN dictionaries
  store/        persistent Zustand cart
  types/        shared product and cart contracts
```

## Demonstrated skills

- App Router composition and static dynamic routes
- Typed domain modeling and reusable component boundaries
- Client-side filtering and derived catalog state
- Persistent cart state and pricing calculations
- Form validation with conditional delivery rules
- Dictionary-based localization of navigation, catalog, products, forms, errors, and states
- Responsive, accessible commercial UI implementation
- Unit testing for catalog, pricing, and validation behavior

## Vercel deployment

The project has no required runtime environment variables. Import the repository into Vercel and use the default Next.js preset. Vercel will run `npm run build`; the static product pages are generated during the build.

`.env.example` is included as a deployment template for future external integrations.

## Localization

Russian is the default language. `next-intl` provides locale-prefixed routes (`/ru` and `/en`), middleware redirects, locale-aware navigation, static rendering for both languages, and correct `html lang` values. Use the `RU / EN` switcher in the header to preserve the current page while changing locale.

All interface copy, validation errors, product content, filters, loading states, empty states, and statuses are sourced from typed RU/EN dictionaries.
