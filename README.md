# Tayyibraent Web

Premium responsive website and interactive local prototype for Tayyibraent.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Build output: `dist/`.

## Deploy to Cloudflare Pages using Git integration
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank if `package.json` is in the repository root.

## Important functionality notes
- Ingredient screening uses local demonstration rules. It is not connected to a live AI model and cannot determine halal/haram status.
- Document checker performs simple keyword checks on text pasted by the visitor. It does not upload or authenticate files.
- Early access form validates the email and displays a demo confirmation only. It does not transmit or save personal data. Connect a secure backend before collecting registrations.
- No API keys are required for the demo.
- Required branding "TAYYIBRAENT — SINCE 2025" appears in the navigation, hero, about section and footer.


## Product/pricing section
The site now includes a product-led pricing section with a free prototype tier and an indicative $10 USD/month Starter plan (or $100/year). These are proposed prices for concept validation only; checkout, billing, and paid features are not implemented. Do not represent the plan as purchasable until payment and backend functionality are added.
