import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../frontend/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abhishek Sharma - Full Stack Developer',
  description: 'Versatile Full Stack Developer specializing in MERN stack technologies. Passionate about creating responsive and interactive web solutions.',
  keywords: 'Abhishek Sharma, Full Stack Developer, MERN Stack, React, Next.js, TypeScript, JavaScript, Portfolio',
  authors: [{ name: 'Abhishek Sharma' }],
  creator: 'Abhishek Sharma',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhisheksharma.dev',
    title: 'Abhishek Sharma - Full Stack Developer',
    description: 'Versatile Full Stack Developer specializing in MERN stack technologies.',
    siteName: 'Abhishek Sharma Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhishek Sharma - Full Stack Developer',
    description: 'Versatile Full Stack Developer specializing in MERN stack technologies.',
    creator: '@abhisheksharma',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
