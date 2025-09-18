# Equipment Maintenance SaaS (CMMS with AI)

## Project Overview

This SaaS platform provides a comprehensive solution for managing equipment maintenance in industrial and commercial environments. It enables users to register assets, schedule and track preventive, corrective, and predictive maintenance activities, manage work orders, and monitor maintenance costs. Leveraging AI-driven insights, the system helps optimize maintenance schedules, predict failures, and reduce downtime, improving operational efficiency and asset lifespan.

## Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS, shadcn/ui component library
- **Backend:** Prisma ORM with PostgreSQL (hosted on Supabase)
- **Authentication:** Auth.js/Clerk
- **Storage:** Cloudflare R2 object storage
- **Queueing & Messaging:** Upstash QStash
- **Email & SMS:** Postmark and Twilio
- **Monitoring & Error Tracking:** Sentry

## Repository Structure

- `/apps` — Contains the frontend Next.js application and any additional client-facing apps.
- `/server` — Backend services, API route handlers, and business logic.
- `/packages` — Shared libraries, utilities, and components used across apps and server code.
