import { Button } from '@/components/ui/button'

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
            <Button className='px-8 py-6 text-lg font-bold'>
              Contactar
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
