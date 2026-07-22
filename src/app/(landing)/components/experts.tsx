import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import Image from 'next/image'

export default function Experts() {
  return (
    <section id='help' className='py-16 lg:py-24 my-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        <div className='grid items-center gap-12 lg:grid-cols-2'>

          {/* Content */}
          <div className='space-y-8 max-w-2xl'>

            {/* Eyebrow */}
            {/* <span className='text-sm font-semibold uppercase tracking-wider'>
              Expertos
            </span> */}

            {/* Title */}
            <h2 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
              Innovación tecnológica al servicio de tu empresa
            </h2>

            {/* Description */}
            <p className='text-base text-muted-foreground'>
              Con <strong>27 años de experiencia</strong>, lideramos el arriendo tecnológico en Colombia, ayudando a las empresas a optimizar y escalar sus recursos tecnológicos.
            </p>

            {/* Benefits */}
            <ul className='space-y-3 text-sm sm:text-base'>
              <li className='flex items-start gap-3'>
                <span>Soluciones personalizadas para cada negocio</span>
              </li>
              <li className='flex items-start gap-3'>
                <span>Soporte técnico especializado</span>
              </li>
              <li className='flex items-start gap-3'>
                <span>Tecnología de última generación</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className='flex flex-col gap-3 pt-4 sm:flex-row'>
              <Link href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>
                <Button className='w-full sm:w-auto'>
                  Conocer más
                </Button>
              </Link>
              <Link href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>
                <Button variant='outline' className='w-full sm:w-auto'>
                  Contactar
                </Button>
              </Link>
            </div>
          </div>

          {/* IMG
          <div className='relative aspect-[1.2/1] w-full overflow-hidden rounded-xl border'>
            <Image
              src='/img/experts.png'
              alt='Expertos Makrosoft'
              fill
              priority
              className='object-cover transition-transform duration-500 hover:scale-105'
            />
          </div> */}

        </div>
      </div>
    </section>
  )
}
