import Map from './map'

export default function Coverage() {
  return (
    <section id='help' className='my-16 py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

        <div className='grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]'>

          {/* Content */}
          <div className='space-y-8 max-w-2xl'>
            <h2 className='text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl'>
              Cobertura
            </h2>

            <p className='text-base text-muted-foreground'>
              <strong>En Makrosoft de Colombia</strong> nos enorgullece contar con presencia y capacidad operativa en las <strong>principales regiones del país</strong>, lo que nos permite atender a nuestros clientes de manera <strong>ágil, cercana y eficiente.</strong>
            </p>

            <p className='text-base text-muted-foreground'>
              Actualmente, estamos presentes en: <strong>Bogotá, Medellín, Cali, Valledupar, Montería, Muzo, Santa Rosa de Viterbo, Cómbita, Villavicencio, Acacías, Yopal, Barrancabermeja, Santa Marta y Ciénaga</strong>, entre otros.
            </p>

            <p className='text-base text-muted-foreground'>
              Nuestra amplia cobertura nos permite ofrecer soluciones personalizadas en <strong>todo el territorio nacional</strong>, garantizando calidad, cumplimiento y soporte oportuno sin importar la ubicación.
            </p>
          </div>

          {/* Interactive Map */}
          <div className='flex justify-center lg:justify-end'>
            <div className='w-full overflow-hidden'>

              {/* ESTE DIV ES DONDE IRÍA EL MAPA */}
              <div className='h-200'>
                <Map />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}