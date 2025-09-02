import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''

  // Force HTTPS in production
  if (process.env.NODE_ENV === 'production' && url.protocol === 'http:') {
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // Redirect www to non-www (canonical domain)
  if (hostname.startsWith('www.')) {
    url.hostname = hostname.replace('www.', '')
    return NextResponse.redirect(url, 301)
  }

  // Block malicious URLs and redirect to homepage
  const maliciousPaths = [
    '/caf',
    '/cgi-bin',
    '/parking.php',
    '/portal.php',
    '/cc.php',
    '/fb.php',
    '/admin',
    '/wp-admin',
    '/wp-content',
    '/search'
  ]

  const pathname = url.pathname.toLowerCase()
  for (const maliciousPath of maliciousPaths) {
    if (pathname.startsWith(maliciousPath)) {
      url.pathname = '/'
      return NextResponse.redirect(url, 301)
    }
  }

  // Remove trailing slashes (except for root)
  if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}