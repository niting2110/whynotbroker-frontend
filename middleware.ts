// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/*
 Protect everything by default, but allow publicRoutes to be accessible without auth.
 Adjust publicRoutes regexes as needed.
*/

// Note: For routes like /properties(.*), we only need the base path /properties
const publicPathPrefixes = [
    "/",
    "/sign-in",
    "/sign-up",
    "/api/webhook",
    "/properties",
    "/about",
    "/contact",
    "/images",
    "/_vercel",
];

export default clerkMiddleware((auth, request) => {
    const { pathname } = request.nextUrl;

    // Check if the current pathname starts with any of the defined public prefixes
    // This handles cases like /properties and /properties/123
    const isPublicRoute = publicPathPrefixes.some(prefix => {
        // Paths must match the start exactly (e.g., /about matches /about/team)
        return pathname === prefix || pathname.startsWith(${prefix}/);
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
