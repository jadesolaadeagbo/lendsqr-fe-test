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
  
- Simple Loaders – Improves user experience with visual indicators during data fetching.

- Mock User Authentication – User sessions are stored in cookies for 24 hours, after which they are automatically logged out.

- Protected Routing – Only authenticated users can access the dashboard and user details.

## Getting Started

## Installation

First, install the dependencies:

npm install
or    
yarn install

## Environment Variables
Create a .env.local file in the root of your project and add the following:

NEXT_PUBLIC_API_KEY=your_api_key_here

## Running the Development Server

Start the development server with the following command:

npm run dev
or      
yarn dev

Then, open http://localhost:3000 in your browser to view the application.

## Project Structure
src/  
│── app/  
│   ├── components/             # Reusable UI components  
│   ├── dashboard/              # Dashboard-related pages and components  
│   ├── services/               # API calls and data-fetching logic  
│   ├── utils/                  # Helper functions and utilities  
│   ├── layout.tsx              # Global layout configuration (imports fonts, wrappers)  
│   ├── page.tsx                # Root page of the application  


- components/: Houses UI elements like the navbar, sidebar, table, and cards.
- dashboard/: Contains dashboard-specific components and pages for user interactions.
- services/: Manages API requests and data fetching from external sources.
- utils/: Includes helper functions, formatters, and other utility functions.
- layout.tsx: This file is responsible for setting up the global layout and importing fonts.
- page.tsx: The root entry point of the application, handling the main page rendering.

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

## User Interface

<img width="1436" alt="Screenshot 2025-03-25 at 23 54 51" src="https://github.com/user-attachments/assets/90260cc1-8646-4ee3-9011-8868c0eb7fb3" />
<img width="1438" alt="Screenshot 2025-03-25 at 23 54 31" src="https://github.com/user-attachments/assets/e47e4d37-7f53-46da-b81f-48328edd92f4" />
<img width="1440" alt="Screenshot 2025-03-25 at 23 53 54" src="https://github.com/user-attachments/assets/3de52187-41c7-45e7-bade-95c8bdca0b19" />
<img width="1440" alt="Screenshot 2025-03-25 at 23 53 20" src="https://github.com/user-attachments/assets/a51b3f20-e474-43d3-8a7f-f0a54aca0cc8" />


