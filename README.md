# Swathi Shree Hospital — premium website starter

A responsive Next.js App Router + React + TypeScript website with Redux Toolkit state management and an RTK Query API layer prepared for later backend integration.

## Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm start
```

## Architecture
- `src/app`: Next.js App Router pages and global styles
- `src/components`: reusable website sections
- `src/lib/store.ts`: Redux store and RTK Query middleware
- `src/lib/baseApi.ts`: API base configuration
- `src/features/enquiries`: enquiry slice and async-ready state
- `src/types`: shared API types

## API integration later
Set `NEXT_PUBLIC_API_BASE_URL` in `.env.local`, then extend `baseApi` with endpoints such as doctors, departments, appointments, enquiry submissions, and patient follow-ups. The enquiry form currently opens WhatsApp with the visitor's message; it does not store patient data.

## Before publishing
Please verify all clinical details, doctor names/qualifications, services, timings, phone numbers, address, emergency instructions, and claims with hospital management. The supplied screenshots are used as visual reference material only. This demo is not a patient portal, medical advice service, emergency triage system, or live appointment booking system.
# swathishreehospital
