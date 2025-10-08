import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/utils/auth";

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const session = await auth();

  const isDashboardPage = pathname.startsWith("/dashboard");
  const isLoginPage = pathname.startsWith("/login");

  if (!session && isDashboardPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (session && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
