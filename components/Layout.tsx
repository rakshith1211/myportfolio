import { ReactNode } from 'react'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
  title?: string
}

export default function Layout({ children, title = 'MyPortfolio' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Personal portfolio showcasing projects and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white">
        {children}
      </div>
    </>
  )
}