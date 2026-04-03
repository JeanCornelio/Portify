import { NextRequest, NextResponse } from "next/server";

import { getSessionCookie } from "better-auth/cookies";

export default async function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  const { pathname } = request.nextUrl;

  // Redirect to sign-in if NO session
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (pathname === "/" && sessionCookie) {
    return NextResponse.redirect(new URL("/dashboards", request.url));
  }

  if (pathname.startsWith("/dashboards") && !sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboards/:path*"], // Specify the routes the middleware applies to
};
