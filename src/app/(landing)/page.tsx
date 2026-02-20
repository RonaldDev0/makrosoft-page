import Hero from './components/hero'
import Img from './components/img'
import Experts from './components/experts'
import Benefits from './components/benefits'
import Faq from './components/faq'
import Help from './components/help'
import Contact from './components/contact'
import Testimonials from './components/testimonials'

export default function Page() {
  return (
    <main className='w-screen px-8'>
      <Hero />
      <Img />
      <Experts />
      <Benefits />
      <Faq />
      <Help />
      <Contact />
      <Testimonials />
    </main>
  )
}