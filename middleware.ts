import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { useRouter } from "next/router";

export async function middleware(request: NextRequest) {
    let cookie = request.cookies.get('nextjs');
    const response = NextResponse.next()
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    console.log(request.headers)

    if (!cookie) {
        return NextResponse.rewrite(url)
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
