// middleware.ts
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

export default clerkMiddleware(async (auth, req) => {
  const pathname = req.nextUrl.pathname;
  
  const isPublic = publicPaths.some(path => 
    pathname === path || pathname.startsWith(path + "/")
  );

  if (!isPublic) {
    // Just check auth - Clerk handles protection automatically
    await auth();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
