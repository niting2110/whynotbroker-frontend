// middleware.ts - MUST be in root directory
import { clerkMiddleware } from "@clerk/nextjs/server";

const publicPaths = [
  "/",
  "/sign-in",
  "/sign-up",
  "/api/webhook",
  "/properties",
  "/about",
  "/contact",
  "/images",
  "/_vercel"
];

export default clerkMiddleware((auth, req) => {
  const pathname = req.nextUrl.pathname;
  
  const isPublic = publicPaths.some(path => 
    pathname === path || pathname.startsWith(path + "/")
  );

  if (!isPublic) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
