import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

export const metadata = {
  title: 'Amazon Web Scraper',
  description: 'A helpinh hand app for your future purchases',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex bg-[#f7fbff] h-screen'>
        <Sidebar/>

        <main className='w-full p-10 mx-auto overflow-y-auto max-w-7xl'>
          {/* Header */}
          {children}
        </main>
        </body>
    </html>
  )
}