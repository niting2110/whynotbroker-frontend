// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
  // List of public routes - modify as needed
  const publicRoutes = [
    "/",
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/api/webhook(.*)",
    "/properties(.*)",
    "/about(.*)",
    "/contact(.*)",
    "/images(.*)",
    "/_vercel(.*)",
  ];

  // Get the current path
  const { pathname } = req.nextUrl;

  // Check if current route is public
  const isPublicRoute = publicRoutes.some((route) => {
    const regex = new RegExp(`^${route.replace(/\(\\.\\*\\)/g, ".*")}$`);
    return regex.test(pathname);
  });

  // If not public, require authentication
  if (!isPublicRoute) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
