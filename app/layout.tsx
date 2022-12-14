import '../styles/globals.css'

// components
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="bg-gray-10 transition-all
      duration-700">
        <Header />
        <div className='max-w-6xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
