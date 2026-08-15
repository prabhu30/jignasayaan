import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jignasayaan — The Modern Desayatana | This Time for Keralam',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Loaded as plain <link> tags, matching the original document. Swapping to
            next/font would inject a metric-adjusted fallback face and rename the
            family, which risks shifting text — not worth it for a pixel-for-pixel port. */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      {/* suppressHydrationWarning covers only <body>'s own attributes, not its children.
          Extensions such as Grammarly stamp data-gr-* / data-new-gr-* onto <body> before
          React hydrates, which otherwise reports a mismatch the app cannot cause or fix. */}
      <body suppressHydrationWarning className="antialiased selection:bg-emerald selection:text-white">
        {children}
      </body>
    </html>
  )
}
