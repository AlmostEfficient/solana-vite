# solana-vite
Minimal Solana + Vite template: build quick, think less, go fast. Adapted from [create-solana-dapp](https://github.com/solana-developers/create-solana-dapp).

## Usage
Rename the .env.example to .env and fill in the API keys.

```bash
bun install
bun dev
```
## Template structure
- `src/solana/solana-provider.tsx`: Solana provider for the wallet
- `src/solana/cluster-provider.tsx`: Solana cluster provider
- `src/solana/hooks.tsx`: various hooks: balance, tx history, token accounts, transfer sol, send tx
- `src/App.tsx`: Main app
- `src/index.tsx`: Entry point

This template is barebones to give you only what's necessary. You can add navigation with React Router.

## Deploy
You can deploy this to any static site host, such as Vercel, Cloudflare Pages, or GitHub Pages.

**Vercel**  
With the [Vercel CLI](https://vercel.com/docs/cli) installed:
```bash
vercel
```

**Cloudflare Pages**  
With the Wrangler CLI:
```bash
bun add wrangler
bun run build
bun wrangler pages deploy ./dist
```
