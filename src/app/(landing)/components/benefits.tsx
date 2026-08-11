import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronRight, Wallet, Wrench, Zap } from 'lucide-react'
import Link from 'next/link'
// import Image from 'next/image'

interface ICard {
  subtitle: string
  title: string
  text: string
  labelAction: string
  img: string
}

interface IHighlight {
  icon: typeof Wallet
  text: string
}

const cards: ICard[] = [
  {
    subtitle: 'Flexibilidad',
    title: 'Equipos de última generacion',
    text: 'Accede a impresoras, multifuncionales y computadores de alto rendimiento sin realizar grandes inversiones. Soluciones flexibles de alquiler que se adaptan al crecimiento de tu empresa, con equipos siempre actualizados y listos para operar.',
    labelAction: 'Detalles',
    img: '/img/flexibility.png'
  },
  {
    subtitle: 'Soporte',
    title: 'Acompañamiento técnico especializado',
    text: 'Nuestro equipo brinda soporte preventivo y correctivo para garantizar la continuidad de tu operación. Atendemos de forma ágil cualquier incidencia y te acompañamos durante todo el ciclo del servicio.',
    labelAction: 'Más información',
    img: '/img/support.png'
  },
  {
    subtitle: 'Tecnología',
    title: 'Nuestros servicios a su disposición',
    text: 'En Makrosoft de Colombia entendemos que la agilidad y la eficiencia son claves para el éxito de tu negocio. Por eso, ofrecemos soluciones flexibles de alquiler de computadores, portátiles, impresoras y multifuncionales, adaptadas a tus necesidades operativas, eventos, capacitaciones o proyectos temporales para empresas',
    labelAction: 'Explorar',
    img: '/img/tecnology.png'
  }
]

const highlights: IHighlight[] = [
  { icon: Wallet, text: 'Sin inversión inicial' },
  { icon: Wrench, text: 'Soporte técnico incluido' },
  { icon: Zap, text: 'Entrega e instalación rápida' }
]

const WHATSAPP_HREF =
  'https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.'

function ArrowLink({ href, text, target, rel }: { href: string; text: string; target?: string; rel?: string }) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className='inline-flex items-center gap-2 text-sm font-medium transition hover:gap-3'
    >
      {text}
      <ChevronRight className='h-4 w-4' />
    </Link>
  )
}

export default function Benefits() {
  return (
    <section id='benefits' className='py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12'>

        {/* Section Header */}
        <div className='max-w-2xl space-y-4'>
          <span className='text-sm font-semibold uppercase tracking-wider'>
            Beneficios
          </span>
          <h2 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
            ¿Por qué elegir Makrosoft?
          </h2>
          <p className='text-muted-foreground'>
            Soluciones tecnológicas adaptadas a las necesidades de tu empresa
          </p>
        </div>

        {/* Layout */}
        <div className='grid gap-6 lg:grid-cols-2 items-stretch'>

          {/* Left Column */}
          <div className='flex flex-col gap-6 h-full'>
            {cards.slice(0, 2).map(card => (
              <Card
                key={card.title}
                className='flex flex-col justify-between flex-1 overflow-hidden p-0'
              >
                <CardContent className='p-0 flex flex-col md:flex-row h-full'>

                  {/* Content */}
                  <div className='flex-1 p-6 space-y-4'>
                    <p className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
                      {card.subtitle}
                    </p>
                    <h3 className='text-xl font-semibold'>
                      {card.title}
                    </h3>
                    <p className='text-sm text-muted-foreground wrap-break-word overflow-visible line-clamp-none' style={{ WebkitLineClamp: 'unset', display: 'block' }}>
                      {card.text}
                    </p>

                    <div>
                      <ArrowLink
                        href={WHATSAPP_HREF}
                        target='_blank'
                        rel='noopener noreferrer'
                        text={card.labelAction}
                      />
                    </div>
                  </div>

                  {/* Image
                  <div className='relative md:w-5/12 min-h-[180px] overflow-hidden bg-muted'>
                    <Image
                      src={card.img}
                      alt={card.title}
                      fill
                      className='object-cover transition-transform duration-500 hover:scale-105'
                    />
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column */}
          <Card className='flex flex-col h-full overflow-hidden p-0'>
            <CardContent className='p-6 space-y-6'>
              <div className='space-y-4'>
                <p className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
                  {cards[2].subtitle}
                </p>
                <h3 className='text-xl font-semibold'>
                  {cards[2].title}
                </h3>
                <p className='text-sm text-muted-foreground wrap-break-word overflow-visible line-clamp-none' style={{ WebkitLineClamp: 'unset', display: 'block' }}>
                  {cards[2].text}
                </p>
              </div>

              {/* Highlights */}
              <ul className='space-y-5 border-t pt-8'>
                {highlights.map(({ icon: Icon, text }) => (
                  <li key={text} className='flex items-center gap-3 text-sm'>
                    <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted'>
                      <Icon className='h-5 w-5' />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className='flex flex-wrap gap-4 pt-2'>
                <Link href={WHATSAPP_HREF} target='_blank' rel='noopener noreferrer'>
                  <Button size='lg'>
                    {cards[2].labelAction}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  )
}