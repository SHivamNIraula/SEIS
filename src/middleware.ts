// src/middleware.ts
import { auth } from "@/auth"

export default auth((req) => {
  const loggedIn = !!req.auth
  const isOnDashboard = req.nextUrl.pathname.startsWith("/learn") || 
                        req.nextUrl.pathname.startsWith("/leaderboard")

  if (isOnDashboard && !loggedIn) {
    return Response.redirect(new URL("/login", req.nextUrl))
  }
})

// Specify which routes the middleware should run on
export const config = {
  matcher: ["/learn/:path*", "/leaderboard/:path*", "/profile/:path*"],
}