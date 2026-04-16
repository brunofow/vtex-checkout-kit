# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2026-04-16

### Added

- Initial boilerplate setup with Vite, TypeScript, and SASS
- Page-based architecture with `pageWrapper` utility
- Generic utilities: `waitForElement`, `formatPrice`, `getOrderForm`, `sleep`, `applyQuantityMask`, `discountPerItem`, `cleanNewElements`, `pageWrapper`
- Full VTEX `OrderForm` TypeScript typings
- Pre-configured pages: cart, shipping, profile, payment
- SCSS structure with global styles, variables, per-page stylesheets, and component styles
- ESLint and Prettier configuration
- Husky pre-commit hooks with lint-staged
