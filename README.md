## Lendsqr Assessment Docs

## Technologies Used
Next.js – Handles routing, rendering, and managing cookies and fonts.

TypeScript – Provides type safety and improved code maintainability.

SCSS – Used for styling and better modularity.

JSON Generator – Generates mock APIs for testing purposes.

Vercel – Deployment platform for seamless hosting and performance.

## Features and Functionalities
- Simple form validation: A user is required to login using a valid email and a password not less than 6 characters
- Mobile Responsiveness: Ensuring a seamless user experience across all mobile devices.- Pagination
- Mock User Authentication: A logged in user session is stored using cookies for a day, after which they are automatically logged out
- Protected Routing: Only logged in users can view dashboard and other user details

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

