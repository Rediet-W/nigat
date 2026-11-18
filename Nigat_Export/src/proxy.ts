import { NextResponse, type NextRequest } from "next/server";

/**
 * Language routing. Pages live under `app/[lang]`:
 *  - `/am/...`  is served as is (Amharic).
 *  - `/en/...`  redirects to the unprefixed URL, so English has one address.
 *  - anything else is rewritten to `/en/...` (English keeps its original URLs).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/am" || pathname.startsWith("/am/")) return NextResponse.next();

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Skip Next.js internals, metadata routes and any file with an extension (images, icons, sitemap…).
    "/((?!_next|api|icon|apple-icon|opengraph-image|.*\\..*).*)",
  ],
};
