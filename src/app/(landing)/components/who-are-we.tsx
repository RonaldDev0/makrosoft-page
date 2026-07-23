export default function WhoAreWe() {
  return (
    <section id='who-are-we' className='py-16 lg:py-24 my-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        <div className='grid items-center gap-12 lg:grid-cols-2'>

          {/* Content */}
          <div className='space-y-8 max-w-2xl'>
            {/* Title */}
            <h2 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
              ¿Quiénes somos?
            </h2>

            {/* Description */}
            <p className='text-base text-muted-foreground'>
              Somos un equipo de profesionales altamente <strong>calificados con 27 años de experiencia en el mercado</strong> desarrollando y administrando proyectos de tecnología, mejorando presupuestos, proyectos y procesos. <strong>Ayudamos a las empresas</strong> a optimizar el presupuesto con nuestros <strong>recursos tecnológicos.</strong>
            </p>

            <p className='text-base text-muted-foreground'>
              Unificamos productos, servicios y demás elementos de los principales <strong>fabricantes de tecnología</strong>, para crear soluciones de avanzada que ayuden a las empresas en la toma de decisiones y a generar <strong>los mejores resultados.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
