import { Button } from '@/components/ui/button'

export default function Experts() {
  return (
    <section id='help' className='py-16 lg:py-24 my-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        <div className='grid items-center gap-12 lg:grid-cols-2'>

          {/* Content */}
          <div className='space-y-8 max-w-2xl'>

            {/* Eyebrow */}
            <span className='text-sm font-semibold uppercase tracking-wider'>
              Expertos
            </span>

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
              <Button className='w-full sm:w-auto'>
                Conocer más
              </Button>
              <Button variant='outline' className='w-full sm:w-auto'>
                Contactar
              </Button>
            </div>
          </div>

          {/* IMG (temporal como pediste) */}
          <div className='w-full'>
            <div className='aspect-square w-full rounded-xl border bg-muted' />
          </div>

        </div>
      </div>
    </section>
  )
}
