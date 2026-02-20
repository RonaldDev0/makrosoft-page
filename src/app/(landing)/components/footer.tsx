import Logo from './logo'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

const navigation = [
  'Inicio',
  'Equipo',
  'Servicios',
  'Historia',
  'Soluciones',
  'Contacto',
  'Empresa',
  'Blog',
  'Nosotros',
  'Recursos'
]

export default function Footer() {
  return (
    <footer className='border-t border-black mt-20'>
      <div className='max-w-7xl mx-auto px-6 lg:px-28 py-12 space-y-12'>
        {/* Top section */}
        <div className='grid gap-12 lg:grid-cols-2'>
          {/* Info */}
          <div className='flex flex-col gap-6'>
            <Logo />

            <address className='not-italic space-y-4 text-sm'>
              <div>
                <p className='font-semibold text-base'>Dirección</p>
                <p>Carrera 29 #39 - 47</p>
              </div>

              <div>
                <p className='font-semibold text-base'>Contacto</p>
                <p>320 931 3050</p>
                <a
                  href='mailto:administracion@makrosoft.com.co'
                  className='hover:underline'
                >
                  administracion@makrosoft.com.co
                </a>
              </div>
            </address>

            <div className='flex gap-4'>
              <Link
                href='https://www.facebook.com/MakrosoftColombia'
                target='_blank'
                aria-label='Facebook'
              >
                <Facebook className='hover:opacity-70 transition' />
              </Link>
              <Link
                href='https://www.instagram.com/makrosoftdecolombia/'
                target='_blank'
                aria-label='Instagram'
              >
                <Instagram className='hover:opacity-70 transition' />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label='Footer navigation'>
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8 font-medium'>
              {navigation.map((item) => (
                <li key={item}>
                  <Link href='/' className='hover:underline'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom section */}
        <div className='flex flex-col gap-6 border-t border-black pt-8 md:flex-row md:justify-between md:items-center text-sm'>
          <p>© 2026 Makrosoft. Todos los derechos reservados</p>

          <div className='flex flex-col gap-3 md:flex-row md:gap-6 underline'>
            <Link href='/'>Política de Privacidad</Link>
            <Link href='/'>Términos de Servicio</Link>
            <Link href='/'>Configuración de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
