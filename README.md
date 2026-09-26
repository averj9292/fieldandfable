# Field & Fable

Marketing + booking site for immersive kids’ birthday experiences.

## Stack

- Next.js 15 (App Router) + TypeScript + Tailwind CSS v4
- Framer Motion for intentional page/section motion
- Square checkout **stubbed / env-ready** (no live keys required to demo)
- Designed for **Vercel Hobby (free)** + GitHub

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — hero, experience grid, delivery/setup/pickup |
| `/about` | Story & values |
| `/booking` | Experience + deposit + Square-ready checkout |
| `/inventory` | Browseable kits & props |
| `/contact` | Inquiry form (demo submit) |

## Local development

```bash
cd field-fable
cp .env.example .env.local   # optional
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

See `.env.example`. Important:

- `NEXT_PUBLIC_DAMAGE_DEPOSIT_CENTS` — default `25000` ($250), configurable
- `SQUARE_ACCESS_TOKEN`, `SQUARE_LOCATION_ID`, `SQUARE_ENVIRONMENT` — optional; booking completes in **stub mode** without them

## Square wiring (remaining)

1. Create a Square Developer application (sandbox first).
2. Set `SQUARE_ACCESS_TOKEN` + `SQUARE_LOCATION_ID` on Vercel Hobby.
3. Implement Payment Links / Orders in `src/lib/square.ts` → `createCheckout()`.
4. Add success/cancel redirect routes and webhook for payment + deposit refunds.
5. Optionally add Square Web Payments SDK with `NEXT_PUBLIC_SQUARE_APPLICATION_ID`.

## Deploy (Hobby)

Connect the GitHub repo to a Vercel Hobby project. No paid add-ons required for v1.
