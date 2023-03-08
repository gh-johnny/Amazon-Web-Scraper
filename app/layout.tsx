import '../styles/globals.css'

export const metadata = {
  title: 'Amazon Web Scraper',
  description: 'A Helper App for your future purchases',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
