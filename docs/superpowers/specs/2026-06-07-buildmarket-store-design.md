# BuildMarket Store Design

## Product direction

BuildMarket is a standalone portfolio e-commerce case for a Russian construction materials supplier. The interface uses a graphite shell, white merchandising surfaces, restrained gray borders, and a safety-yellow accent. Geometry is rectangular and grid-driven, with large prices, inventory language, product units, and practical delivery information.

## Information architecture

- `/` presents the supplier offer, categories, commercial benefits, popular products, and a catalog CTA.
- `/catalog` provides name search, category and price filters, sorting, responsive mobile filters, and an empty result.
- `/product/[slug]` presents product details, specifications, stock, price, unit, and cart action.
- `/cart` provides quantity management, removal, subtotal, delivery calculation, and total.
- `/checkout` validates customer and delivery details and shows a success state.

## Architecture

Static product records live in `src/data/products.ts` and use shared types from `src/types`. Server components render static pages and metadata. Interactive catalog controls, cart controls, Zustand persistence, and React Hook Form checkout are isolated client components. Pricing, delivery, category labels, and formatting use pure helpers from `src/lib`.

## Visual system

- Palette: graphite `#171717`, white, cool gray, yellow `#f5b800`, red only for destructive actions.
- Typography: condensed display face for headings and prices, neutral sans-serif for controls and copy.
- Shape: small or zero radii, crisp 1px borders, restrained shadows, strict alignment.
- Responsive behavior: desktop filter rail becomes a collapsible mobile panel; product grids collapse from four to two to one column; cart and checkout summaries stack below content.

## Behavior and validation

Cart data persists in local storage. Quantity cannot fall below one. Delivery is free from 50,000 RUB and otherwise costs 1,490 RUB; pickup is free at checkout. Checkout requires a valid Russian-format name, phone, address for delivery, and delivery type. Successful submission clears the cart and replaces the form with an order confirmation.

## Verification

Pure pricing and filtering helpers receive automated tests. The project must pass tests, lint, and `npm run build`. After build success, the local app is reviewed in CloakBrowser at desktop and mobile widths, focusing on layout, readability, responsive behavior, forms, and core interactions.
