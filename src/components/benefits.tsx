import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ICard {
  subtitle: string
  title: string
  text: string
  actions: {
    type: 'button' | 'arrow'
    text: string
  }[]
  img: string | null
}

const cards: ICard[] = [
  {
    subtitle: 'Flexibilidad',
    title: 'Equipos de última generacion',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolore ullam quibusdam ipsam. Nam fuga magni eum accusamus, aut velit expedita error sint. Reiciendis hic similique atque officiis, tenetur voluptas!',
    actions: [
      {
        type: 'arrow',
        text: 'Detalles'
      }
    ],
    img: null
  },
  {
    subtitle: 'Soporte',
    title: 'Medium length section heading goes here',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo dolore ullam quibusdam ipsam. Nam fuga magni eum accusamus, aut velit expedita error sint. Reiciendis hic similique atque officiis, tenetur voluptas!',
    actions: [
      {
        type: 'arrow',
        text: 'Más información'
      }
    ],
    img: null
  },
  {
    subtitle: 'Tecnología',
    title: 'Nuestros servicios a su disposición',
    text: 'En Makrosoft de Colombia entendemos que la agilidad y la eficiencia son claves para el éxito de tu negocio. Por eso, ofrecemos soluciones flexibles de alquiler de computadores, portátiles, impresoras y multifuncionales, adaptadas a tus necesidades operativas, eventos, capacitaciones o proyectos temporales para empresas',
    actions: [
      {
        type: 'button',
        text: 'Explorar'
      },
      {
        type: 'arrow',
        text: 'Button'
      }
    ],
    img: null
  }
]

function ArrowLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
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
            Por qué elegir Makrosoft
          </h2>
          <p className='text-muted-foreground'>
            Soluciones tecnológicas adaptadas a las necesidades de tu empresa
          </p>
        </div>

        {/* Layout */}
        <div className='grid gap-6 lg:grid-cols-2 items-stretch'>

          {/* Left Column */}
          <div className='flex flex-col gap-6 h-full'>
            {cards.slice(0, 2).map((card) => (
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
                      {card.actions.map((action) => (
                        <ArrowLink
                          key={action.text}
                          href='#'
                          text={action.text}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className='md:w-5/12'>
                    <div className='h-full min-h-[180px] bg-muted' />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column */}
          <Card className='flex flex-col h-full overflow-hidden p-0'>
            <CardContent className='p-6 space-y-4'>
              <p className='text-sm font-semibold uppercase tracking-wide text-muted-foreground'>
                {cards[2].subtitle}
              </p>
              <h3 className='text-xl font-semibold'>
                {cards[2].title}
              </h3>
              <p className='text-sm text-muted-foreground wrap-break-word overflow-visible line-clamp-none' style={{ WebkitLineClamp: 'unset', display: 'block' }}>
                {cards[2].text}
              </p>

              <div className='flex flex-wrap gap-4 pt-2'>
                <Button>{cards[2].actions[0].text}</Button>
                <ArrowLink
                  href='#'
                  text={cards[2].actions[1].text}
                />
              </div>
            </CardContent>

            <CardFooter className='p-0 mt-auto'>
              <div className='aspect-video w-full bg-muted' />
            </CardFooter>
          </Card>

        </div>

      </div>
    </section>
  )
}
