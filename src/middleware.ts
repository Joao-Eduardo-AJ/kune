import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'es', 'pt']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const segments = pathname.split('/').filter(Boolean)

  if (!locales.includes(segments[0])) {
    const locale = 'en'
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next|.*\\..*).*)'
}
