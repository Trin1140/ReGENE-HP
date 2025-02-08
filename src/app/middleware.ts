// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_TOKEN = process.env.SECRET_TOKEN || "my-secret-token";

export function middleware(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (token !== ALLOWED_TOKEN) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api).*)"],
};
