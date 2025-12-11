// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/*
 Protect everything by default, but allow publicRoutes to be accessible without auth.
 Adjust publicRoutes regexes as needed.
*/

const publicPaths = [
    "/",                        // homepage
    "/sign-in(.*)",             // clerk sign in flows
    "/sign-up(.*)",             // clerk sign up flows
    "/api/webhook(.*)",         // webhooks (keep public if necessary)
    "/properties(.*)",          // public listing pages, property detail pages
    "/about(.*)",               // about page
    "/contact(.*)",             // contact page
    "/images(.*)",              // static public images if served from this app
    "/_vercel(.*)",             // Vercel preview/health endpoints if any
];

export default clerkMiddleware((auth, request) => {
    // Check if the current path matches any of the public paths
    const isPublicRoute = publicPaths.some(path => {
        // Create a RegExp object from the path string
        // The original code uses (.*) which should match everything after the prefix, 
        // so we use a looser check here to allow Next.js to match paths like /properties/123
        const regex = new RegExp(^); 
        return regex.test(request.nextUrl.pathname);
    });

    // If the path is not public, protect it
    if (!isPublicRoute) {
        auth().protect();
    }
    
    return NextResponse.next();
});

// ensure middleware runs for app routes and API, but NOT static assets or _next
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
