# Credex Micro Credit

A responsive marketing website and client-portal prototype for **Credex Micro Credit**, a micro-lending service for individuals and small businesses in Ghana. Built with React, TypeScript, Vite and Tailwind CSS.

> **Project status: front-end prototype.** There is no backend yet. Accounts, sessions and all dashboard figures are simulated in the browser. See [Limitations](#limitations) before using any part of this with real customer data.

## Features

**Public website**
- Landing page with hero, services, about, "how it works", testimonials and contact sections
- Interactive loan calculator (amount, annual interest rate and term in GHS) showing monthly payment, total repayment and total interest
- Services overview: microloans, savings programmes, financial education, business development, group lending, mobile banking, credit building and investment advisory

**Client portal (prototype)**
- Three-step registration flow (account information, address and security questions, password and confirmation) and login
- Dashboard with overview, loans, transactions, profile and settings tabs
- Typed data models for users, loan applications, transactions and savings goals (`src/types/User.ts`)

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 18, TypeScript 5 |
| Build tooling | Vite 5 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Icons | lucide-react |
| Quality | ESLint 9 (typescript-eslint), `tsc` type-checking, GitHub Actions CI |

## Getting started

Requires **Node.js 18 or newer** and npm.

```bash
git clone https://github.com/Khofhity/credex-micro-credit.git
cd credex-micro-credit
npm install
npm run dev
```

The dev server starts at <http://localhost:5173>.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check the project without emitting files |
| `npm run lint` | Lint the codebase with ESLint |

## Project structure

```
src/
├── App.tsx              # Page composition, session handling
├── main.tsx             # Application entry point
├── index.css            # Tailwind directives
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── HowItWorks.tsx
│   ├── LoanCalculator.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── AuthModal.tsx    # Login and registration
│   └── Dashboard.tsx    # Client portal
└── types/
    └── User.ts          # User, LoanApplication, Transaction, SavingsGoal
```

## Limitations

This project is a demonstration and is **not production-ready**:

- **No real authentication.** Registered users are stored in the browser's `localStorage`, including their passwords in plain text. Anyone with access to the browser can read them. Do not enter real passwords or personal information.
- **Sample data only.** Loans, transactions, balances and credit scores in the dashboard are hard-coded placeholders.
- **Placeholder content.** Contact details, office address, testimonials and statistics on the public pages are illustrative and must be replaced with real, verifiable information before launch.
- **No payments or lending logic.** The calculator is an estimate and does not represent an offer of credit.

## Roadmap

- [ ] Backend API with proper authentication (hashed passwords, sessions or JWT)
- [ ] Persistent database for users, loans and transactions
- [ ] Real KYC and document upload flow
- [ ] Mobile money (MoMo) payment integration
- [ ] Automated tests for the loan calculator and auth flows
- [ ] Deployment pipeline

## Contributing

Issues and pull requests are welcome. Before opening a pull request, please make sure the checks that CI runs pass locally:

```bash
npm run lint
npm run typecheck
npm run build
```

## Author

**Foster Yaw Tamakloe** ([@Khofhity](https://github.com/Khofhity))
