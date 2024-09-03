import languageMiddleware from "./lib/i18n/languageMiddleware";

export const middleware = languageMiddleware;

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
