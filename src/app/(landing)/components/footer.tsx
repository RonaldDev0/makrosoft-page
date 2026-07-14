import Logo from './logo'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'

type items = {
  label: string
  url: string
}[]

const navigation: items = [
  {
    label: 'Inicio',
    url: '/'
  },
  // {
  //   label: 'Equipo',
  //   url: ''
  // },
  {
    label: 'Servicios',
    url: '/servicios'
  },
  // {
  //   label: 'Historia',
  //   url: ''
  // },
  {
    label: 'Soluciones',
    url: '/soluciones'
  },
  {
    label: 'Contacto',
    url: 'https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.'
  },
  {
    label: 'Empresa',
    url: '/empresa'
  }
  // {
  //   label: 'Blog',
  //   url: ''
  // },
  // {
  //   label: 'Nosotros',
  //   url: ''
  // },
  // {
  //   label: 'Recursos',
  //   url: ''
  // }
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
              {navigation.map(item => (
                <li key={item.label}>
                  <Link href={item.url} className='hover:underline'>
                    {item.label}
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
            <Link href='/politica-de-privacidad'>Política de Privacidad</Link>
            <Link href='/terminos-de-servicio'>Términos de Servicio</Link>
            {/* <Link href='/'>Configuración de cookies</Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
