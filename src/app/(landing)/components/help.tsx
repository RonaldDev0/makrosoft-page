import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Help() {
  return (
    <section id='help'>
      <div className='max-w-7xl mx-auto space-y-6'>

        <div className='px-4 md:px-6 lg:px-28 space-y-4'>
          <h2 className='text-4xl font-bold text-black'>
            Más ayuda
          </h2>

          <p className='text-gray-700 max-w-xl'>
            No encuentras tu respuesta? Contáctanos directamente.
          </p>

          <div className='pt-4'>
            <Link
              href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='px-8 py-6 text-lg font-bold'>
                Contactar
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
