# Personal Website

This repository contains a multilingual personal website built with the Next.js **app router** and Tailwind CSS. The site supports English and Ukrainian locales and uses sliders to control the type and length of the presented content.

## Project Structure

```
personal-website/
├─ app/              # Next.js “app” directory with routing
│  ├─ api/           # API routes (e.g. mail sending)
│  ├─ [locale]/      # Locale-specific pages/layouts
│  ├─ globals.css    # Global Tailwind styles
│  └─ layout.tsx     # Root layout
├─ components/       # UI components and page sections
├─ images/           # Static images
├─ lib/              # Helper utilities, hooks, i18n setup
├─ middleware.ts     # Redirects root route to preferred locale
├─ next.config.mjs   # Next.js configuration with next-intl plugin
├─ tailwind.config.ts
└─ package.json
```

### Key Concepts

- **Internationalization** – translations live in `lib/i18n/messages` and locale definitions are in `lib/i18n/locales.ts`.
- **Routing** – middleware redirects `/` to the user’s preferred locale and next-intl handles locale-aware URLs.
- **Content Sliders** – the intro sliders keep their state in the URL via custom hooks located in `lib`.
- **API Route** – `app/api/mail/route.ts` exposes a POST endpoint that sends email via the Resend service.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page reloads as you edit source files.

## Learn More

To learn about the frameworks and libraries used in this project, visit:

- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)


