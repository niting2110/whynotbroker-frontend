// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

/*
 Protect everything by default, but allow publicRoutes to be accessible without auth.
 Adjust publicRoutes regexes as needed.
*/

export default authMiddleware({
  publicRoutes: [
    "/",                        // homepage
    "/sign-in(.*)",             // clerk sign in flows
    "/sign-up(.*)",             // clerk sign up flows
    "/api/webhook(.*)",         // webhooks (keep public if necessary)
    "/properties(.*)",          // public listing pages, property detail pages
    "/about(.*)",               // about page
    "/contact(.*)",             // contact page
    "/images(.*)",              // static public images if served from this app
    "/_vercel(.*)",             // Vercel preview/health endpoints if any
  ],
});

// ensure middleware runs for app routes and API, but NOT static assets or _next
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
