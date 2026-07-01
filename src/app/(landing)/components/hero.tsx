import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id='hero'
      className='w-full flex justify-center px-4 pt-24 md:pt-32'
    >
      <div className='flex flex-col gap-8 items-center text-center max-w-3xl'>
        <h1 className='font-bold text-4xl md:text-6xl leading-tight'>
          Transformamos tu tecnología con soluciones inteligentes
        </h1>

        <p className='text-base md:text-lg text-muted-foreground'>
          Ofrecemos arriendo tecnológico de alta calidad para empresas que buscan
          optimizar sus recursos. Trabajamos con los mejores equipos del mercado.
        </p>

        <div className='flex flex-col sm:flex-row gap-4'>
          <Link href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>
            <Button className='px-6 text-lg font-bold'>
              Cotizar
            </Button>
          </Link>
          <Link href='/servicios'>
            <Button variant='outline' className='px-6 text-lg font-bold'>
              Servicios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
