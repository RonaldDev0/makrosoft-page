import { Mail, Phone, MapPin, LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

interface Item {
  icon: LucideIcon
  title: string
  text: string
  contact: {
    label: string
    link: string
  }
}

const items: Item[] = [
  {
    icon: Mail,
    title: 'Correo',
    text: 'Escríbenos para más información',
    contact: {
      label: 'info@makrosoft.com.co',
      link: 'mailto:info@makrosoft.com.co'
    }
  },
  {
    icon: Phone,
    title: 'Teléfono',
    text: 'Línea de atención al cliente',
    contact: {
      label: '+57 320 931 3050',
      link: 'tel:3209313050'
    }
  },
  {
    icon: MapPin,
    title: 'Oficina',
    text: 'Cra. 29 #39-43 - Bogotá, Colombia - Dirección comercial',
    contact: {
      label: 'Ver ubicación',
      link: 'https://maps.app.goo.gl/ftfQYZ8Tag4bfXaQ8'
    }
  }
]

export default function Contact() {
  return (
    <section id='contact' className='py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12'>

        {/* Section Header */}
        <div className='max-w-2xl space-y-4'>
          <span className='text-sm font-semibold uppercase tracking-wider'>
            Contacto
          </span>
          <h2 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
            Contáctanos
          </h2>
          <p className='text-muted-foreground'>
            Estamos listos para ayudarte con soluciones tecnológicas
          </p>
        </div>

        {/* Layout */}
        <div className='grid gap-8 lg:grid-cols-2 items-start'>

          {/* Left Column - Contact Items */}
          <div className='flex flex-col gap-6 h-full'>
            {items.map((item) => {
              const Icon = item.icon
              return (
                <Card key={item.title} className='p-6 flex-1 flex flex-col justify-center'>
                  <CardContent className='p-0 space-y-4'>
                    <div className='flex items-center gap-4'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                        <Icon className='h-6 w-6 text-primary' />
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold'>{item.title}</h3>
                      </div>
                    </div>
                    <p className='text-sm text-muted-foreground'>
                      {item.text}
                    </p>
                    <Link
                      href={item.contact.link}
                      className='inline-flex items-center text-sm font-medium text-primary hover:underline'
                    >
                      {item.contact.label}
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Right Column - Map */}
          <div className='sticky top-8'>
            <div className='aspect-square w-full rounded-xl border bg-muted' />
          </div>

        </div>

      </div>
    </section>
  )
}
