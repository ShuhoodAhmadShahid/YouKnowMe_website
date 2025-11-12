import { type NextRequest, NextResponse } from "next/server"

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({
    request,
  })

  // Protect dashboard and admin routes
  // In production, check for auth token in cookies
  const authToken = request.cookies.get("sb-auth-token")?.value

  if (
    !authToken &&
    (request.nextUrl.pathname.startsWith("/dashboard") || request.nextUrl.pathname.startsWith("/admin"))
  ) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.pathname = "/login"
    return NextResponse.redirect(redirectUrl)
  }

  return response
}
