import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname);

    if (request.nextUrl.pathname === "/shop") {
        return NextResponse.redirect("https://netherhour.shop/");
    }

    if (request.nextUrl.pathname === "/contact") {
        return NextResponse.redirect("mailto:netherhour@gmail.com");
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/shop", "/contact"],
};
