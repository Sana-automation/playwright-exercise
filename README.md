# Playwright Automation Exercise
This project contains automated UI tests built using Playwright with Typescript and Page Object Model (POM).
## Framework Structure
- pages/ -> Page Object classes(HomePage, ProductPage, CartPage, ContactUsPage)
- tests/ -> Test files
- testdata/ -> Test data files

## Prerequisites
- Node.js v18+
- npm v9+

## Installation
Install dependencies:
```bash
npm install
npx playwright install
```
## Run Tests
```bash
npx playwright test
```
## Test Suites
- `product-Search.spec.ts` | Search for the product and verifies the result
- `contact-Form.spec.ts`   | Fill the contact form and verifies the success message
- `add-to-cart.spec.ts`    | Add to 2 products to the cart and verifies the items count