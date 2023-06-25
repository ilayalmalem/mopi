import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'מופי משחקים ברשת',
  description: 'משחקי רשת וסרטוני עשה זאת בעצמך לילדים',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body dir='rtl' className={`${inter.className} p-8 h-screen`}>

        <Navbar />
        {children}

      </body>
    </html>
  )
}
