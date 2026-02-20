import { Button } from '@/components/ui/button'

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
          <Button className='px-6 text-lg font-bold'>
            Cotizar
          </Button>
          <Button variant='outline' className='px-6 text-lg font-bold'>
            Servicios
          </Button>
        </div>
      </div>
    </section>
  )
}
