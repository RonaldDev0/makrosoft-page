import Hero from '@/components/hero'
import Experts from '@/components/experts'
import Faq from '@/components/faq'
import Help from '@/components/help'
import Testimonials from '@/components/testimonials'

export default function Page() {
  return (
    <main className='w-screen px-8'>
      <Hero />
      {/* IMG */}
      <Experts />
      {/* BENEFITS */}
      <Faq />
      <Help />
      {/* CONTACT */}
      <Testimonials />
    </main>
  )
}