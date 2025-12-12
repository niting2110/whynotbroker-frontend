// middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

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

    const isPublicRoute = publicPathPrefixes.some(prefix => {
        return pathname === prefix || pathname.startsWith(prefix + '/');
    });

    if (!isPublicRoute) {
        auth().protect();
    }
    
    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
