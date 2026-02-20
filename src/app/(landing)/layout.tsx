import type { ReactNode } from 'react'

import NavBar from './components/navbar'
import Footer from './components/footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}