
import { rewrite } from '@vercel/edge';

export const config = {
    matcher: ['/admin', '/admin/:path*'],
};

export default function middleware(request: Request) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/admin')) {
      return rewrite(new URL('/admin', request.url));
    }
}