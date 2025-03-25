## Lendsqr Assessment Docs

## Technologies Used
- Next.js – Handles routing, rendering, and managing cookies and fonts.
- TypeScript – Provides type safety and improved code maintainability.
- SCSS – Used for styling and better modularity.
- JSON Generator – Generates mock APIs for testing purposes.
- Vercel – Deployment platform for seamless hosting and performance.

## Features and Functionalities
- Form Validation – Users must log in with a valid email and a password of at least six characters.

- Mobile Responsiveness – Ensures a seamless experience across all mobile devices.

- Pagination – Enables efficient navigation through large data sets.

- Mock User Authentication – User sessions are stored in cookies for 24 hours, after which they are automatically logged out.

- Protected Routing – Only authenticated users can access the dashboard and user details.

## Getting Started

## Installation

First, install the dependencies:

npm install
# or
yarn install
# or
pnpm install
# or
bun install

## Running the Development Server

Start the development server with the following command:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Then, open http://localhost:3000 in your browser to view the application.

## Editing the Project

You can modify the application by editing app/page.tsx. Changes will be automatically reflected in the browser.

## Fonts Optimization

This project uses next/font to automatically optimize and load Geist, a modern font family provided by Vercel.

## Deployment

The application is deployed on Vercel for production. To deploy your own version, run:

vercel

Follow the prompts to complete the deployment.

## License

This project is open-source and available for modification and distribution.



