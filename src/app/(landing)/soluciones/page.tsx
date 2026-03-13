import { HardDrive, Laptop, Printer, PlaneTakeoff, Tv } from 'lucide-react'
import { Button } from '@/components/ui/button'

const solutions = [
  {
    icon: HardDrive,
    category: 'Partes y Repuestos',
    description: 'Componentes originales y compatibles para el mantenimiento de tus equipos de cómputo.',
    items: ['Baterías', 'Teclados', 'Adaptadores', 'Discos SSD', 'Memorias RAM', 'Cargadores']
  },
  {
    icon: Laptop,
    category: 'Equipos de Cómputo',
    description: 'Portátiles, equipos de escritorio y periféricos de las mejores marcas para uso profesional.',
    items: ['Portátiles', 'Equipos de escritorio', 'All-in-One (AIO)', 'Periféricos']
  },
  {
    icon: Printer,
    category: 'Equipos de Impresión',
    description: 'Soluciones de impresión para oficina y puntos de venta con respaldo técnico incluido.',
    items: ['Impresoras multifuncionales', 'Impresoras térmicas', 'Suministros de impresión']
  },
  {
    icon: PlaneTakeoff,
    category: 'Drones',
    description: 'Drones profesionales DJI con accesorios y repuestos para aplicaciones especializadas.',
    items: ['Dron DJI', 'Accesorios', 'Repuestos originales']
  },
  {
    icon: Tv,
    category: 'Más Tecnología',
    description: 'Dispositivos tecnológicos adicionales para equipar cualquier tipo de empresa u hogar.',
    items: ['Televisores', 'Video Beam', 'Pantallas táctiles', 'Lectores de código de barras', 'Tablets', 'Celulares', 'Diademas']
  }
]

export default function SolucionesPage() {
  return (
    <main className='w-screen px-8'>

      {/* Hero */}
      <section className='w-full flex justify-center px-4 pt-24 md:pt-32 pb-16'>
        <div className='flex flex-col gap-6 items-center text-center max-w-3xl'>
          <span className='text-sm font-semibold uppercase tracking-wider'>Soluciones</span>
          <h1 className='font-bold text-4xl md:text-6xl leading-tight'>
            Productos y soluciones tecnológicas
          </h1>
          <p className='text-base md:text-lg text-muted-foreground'>
            Equipos, componentes y dispositivos de las mejores marcas del mercado para impulsar la productividad de tu empresa.
          </p>
          <Button className='px-6 text-lg font-bold' asChild>
            <a href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>Consultar disponibilidad</a>
          </Button>
        </div>
      </section>

      {/* Solutions */}
      <section className='py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8'>
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isEven = index % 2 === 0
            return (
              <div
                key={solution.category}
                className={`flex flex-col lg:flex-row gap-8 items-center border rounded-2xl p-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className='flex flex-col items-center lg:items-start gap-4 lg:w-1/3'>
                  <div className='flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10'>
                    <Icon className='h-8 w-8 text-primary' />
                  </div>
                  <h2 className='text-2xl font-bold'>{solution.category}</h2>
                  <p className='text-muted-foreground text-sm text-center lg:text-left'>{solution.description}</p>
                </div>

                <div className='flex-1'>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                    {solution.items.map((item) => (
                      <div
                        key={item}
                        className='rounded-lg border bg-muted/30 px-4 py-3 text-sm font-medium text-center'
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 border-t'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center text-center gap-6 max-w-2xl mx-auto'>
            <h2 className='text-3xl font-bold sm:text-4xl'>¿Buscas un producto específico?</h2>
            <p className='text-muted-foreground'>
              Nuestro equipo te ayuda a encontrar la solución ideal. Contáctanos y recibe asesoría personalizada.
            </p>
            <Button className='px-8 py-6 text-lg font-bold' asChild>
              <a href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>Contactar un asesor</a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
