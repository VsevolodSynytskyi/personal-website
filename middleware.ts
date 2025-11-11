// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale } from "@/lib/i18n/locales";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect ONLY if user is on "/"
  if (pathname === "/") {
    const preferredLang =
      request.headers.get("accept-language")?.split(",")[0].split("-")[0] ??
      defaultLocale;

    const matchedLocale = isValidLocale(preferredLang)
      ? preferredLang
      : defaultLocale;

    return NextResponse.redirect(
      new URL(`/${matchedLocale}/content/0/0`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // Only run middleware for "/"
};
