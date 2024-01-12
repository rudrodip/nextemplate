import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  return null;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
