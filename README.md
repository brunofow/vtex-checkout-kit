# VTEX Checkout Kit

A lightweight, modern boilerplate for customizing the VTEX checkout UI using **Vite**, **TypeScript**, and **SASS**.

Designed for modular, fast development of checkout6 interfaces while remaining fully compatible with the VTEX IO environment.

---

## 🚀 Stack

- ⚡ **Vite** — fast, modern build tool
- 🟦 **TypeScript** — static typing for reliability
- 🎨 **SASS (SCSS)** — CSS preprocessor with variables and mixins
- 🧩 **Modular Pages** — hash-based routing per checkout step
- 📦 **Optimized output** to `checkout6-custom.js`

---

## 📁 Project Structure

```
src/
├── api/
│   └── index.ts              # Generic fetch wrapper
├── components/               # Reusable UI components
├── pages/
│   ├── index.ts              # Orchestrates all pages
│   ├── cart/                 # Cart page customizations
│   ├── shipping/             # Shipping page customizations
│   ├── profile.ts            # Profile page customizations
│   └── payment.ts            # Payment page customizations
├── styles/
│   ├── styles.css.ts         # CSS entry point
│   ├── variables.scss        # Global SCSS variables
│   ├── global.scss           # Global styles
│   ├── components.scss       # Component styles
│   └── pages/                # Per-page stylesheets
├── typings/                  # TypeScript type declarations
│   ├── checkout.d.ts         # VTEX vtexjs.checkout typings
│   ├── global.d.ts           # Global window typings
│   └── orderForm.d.ts        # OrderForm interface
├── utils/
│   ├── applyQuantityMask.ts  # Quantity input mask helper
│   ├── cleanNewElements.ts   # Cleanup on page transitions
│   ├── discountPerItem.ts    # Per-item discount calculation
│   ├── formatPrice.ts        # Price formatting (BRL)
│   ├── getOrderForm.ts       # Fetch orderForm from vtexjs
│   ├── pageWrapper.ts        # Hash-based page initializer
│   ├── sleep.ts              # Promise-based delay
│   └── waitForElement.ts     # MutationObserver DOM helper
└── index.ts                  # Entry point
```

---

## ⚙️ Getting Started

### 1. Update `manifest.json`

Replace `{vendor}` with your VTEX account name:

```json
{
  "vendor": "yourstore",
  "name": "checkout-ui-kit"
}
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Development

```bash
# Watch mode with lint
yarn dev

# Link to your VTEX workspace
vtex link
```

### 4. Production build

```bash
yarn build
```

This outputs `checkout-ui-custom/checkout6-custom.js` ready for VTEX.

---

## 🛠️ Available Scripts

| Script | Description |
|---|---|
| `yarn dev` | Lint + Vite watch mode |
| `yarn build` | Production build |
| `yarn lint` | Run ESLint |
| `yarn format` | Run Prettier |
| `yarn clean` | Remove `checkout-ui-custom/` output |

---

## 📐 Architecture

Each checkout page (cart, shipping, profile, payment) is initialized via `pageWrapper`, which only runs the page function when the URL hash matches. On navigation, custom DOM elements are cleaned up automatically via `cleanNewElements`.

```ts
// Example: adding logic to the cart page
export const cart = pageWrapper('#/cart', async () => {
  // your logic here
  $(window).on('orderFormUpdated.vtex', (_, orderForm) => {
    // react to order form updates
  })
})
```

---

## 📄 License

MIT
