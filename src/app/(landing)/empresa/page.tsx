import { Users, Target, Eye, Award, Clock, Building2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const stats = [
  { value: '27+', label: 'Años de experiencia' },
  { value: '500+', label: 'Clientes atendidos' },
  { value: '6', label: 'Líneas de servicio' },
  { value: '24/7', label: 'Soporte disponible' }
]

const values = [
  {
    icon: Users,
    title: 'Compromiso',
    description: 'Nos comprometemos con el éxito de nuestros clientes, brindando soluciones confiables y oportunas en cada proyecto.'
  },
  {
    icon: Award,
    title: 'Calidad',
    description: 'Trabajamos con los mejores equipos y marcas del mercado para garantizar la máxima calidad en cada entrega.'
  },
  {
    icon: Target,
    title: 'Innovación',
    description: 'Nos mantenemos a la vanguardia tecnológica para ofrecer siempre las soluciones más modernas y eficientes.'
  },
  {
    icon: Clock,
    title: 'Eficiencia',
    description: 'Optimizamos el presupuesto y los recursos tecnológicos de nuestros clientes para maximizar su rentabilidad.'
  }
]

export default function EmpresaPage() {
  return (
    <main className='w-screen px-8'>

      {/* Hero */}
      <section className='w-full flex justify-center px-4 pt-24 md:pt-32 pb-16'>
        <div className='flex flex-col gap-6 items-center text-center max-w-3xl'>
          <span className='text-sm font-semibold uppercase tracking-wider'>Empresa</span>
          <h1 className='font-bold text-4xl md:text-6xl leading-tight'>
            27 años liderando la tecnología en Colombia
          </h1>
          <p className='text-base md:text-lg text-muted-foreground'>
            Somos Makrosoft de Colombia, una compañía especializada en desarrollar y administrar proyectos de tecnología, optimizando el presupuesto y los recursos de nuestros clientes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className='py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {stats.map((stat) => (
              <div key={stat.label} className='flex flex-col items-center text-center gap-2 p-6 border rounded-xl'>
                <span className='text-4xl font-bold'>{stat.value}</span>
                <span className='text-sm text-muted-foreground'>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión & Visión */}
      <section className='py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12'>
          <div className='max-w-2xl space-y-4'>
            <span className='text-sm font-semibold uppercase tracking-wider'>Quiénes somos</span>
            <h2 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>Misión y visión</h2>
          </div>

          <div className='grid gap-8 lg:grid-cols-2'>
            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                  <Target className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Misión</h3>
                <p className='text-muted-foreground'>
                  Desarrollar y administrar proyectos de tecnología que optimicen el presupuesto y los recursos de nuestros clientes, ofreciendo soluciones integrales de alta calidad con el respaldo de 27 años de experiencia en el mercado colombiano.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className='p-8 space-y-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                  <Eye className='h-6 w-6 text-primary' />
                </div>
                <h3 className='text-xl font-semibold'>Visión</h3>
                <p className='text-muted-foreground'>
                  Ser la empresa líder en Colombia en soluciones de arriendo y gestión tecnológica, reconocida por nuestra calidad, innovación y compromiso con la satisfacción de nuestros clientes empresariales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className='py-16 lg:py-24 border-t'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid items-center gap-12 lg:grid-cols-2'>
            <div className='space-y-6'>
              <span className='text-sm font-semibold uppercase tracking-wider'>Historia</span>
              <h2 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
                Más de dos décadas de confianza
              </h2>
              <p className='text-muted-foreground'>
                Desde nuestra fundación, Makrosoft de Colombia ha crecido para convertirse en un referente del sector tecnológico empresarial en el país. Ubicados en Bogotá, hemos acompañado a cientos de empresas en su transformación digital, ofreciendo equipos de última generación bajo esquemas flexibles de arriendo.
              </p>
              <p className='text-muted-foreground'>
                Nuestra propuesta se fundamenta en la flexibilidad, el soporte continuo y el conocimiento profundo de las necesidades del mercado colombiano.
              </p>
              <div className='flex items-center gap-3 pt-2'>
                <Building2 className='h-5 w-5 text-muted-foreground flex-shrink-0' />
                <span className='text-sm text-muted-foreground'>Carrera 29 N 39-47 La Soledad, Bogotá D.C</span>
              </div>
            </div>
            <div className='w-full'>
              <div className='aspect-square w-full rounded-xl border bg-muted' />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12'>
          <div className='max-w-2xl space-y-4'>
            <span className='text-sm font-semibold uppercase tracking-wider'>Valores</span>
            <h2 className='text-3xl font-bold sm:text-4xl lg:text-5xl'>Lo que nos define</h2>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title}>
                  <CardContent className='p-6 space-y-4'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                      <Icon className='h-6 w-6 text-primary' />
                    </div>
                    <h3 className='text-lg font-semibold'>{value.title}</h3>
                    <p className='text-sm text-muted-foreground'>{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 border-t'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center text-center gap-6 max-w-2xl mx-auto'>
            <h2 className='text-3xl font-bold sm:text-4xl'>¿Quieres trabajar con nosotros?</h2>
            <p className='text-muted-foreground'>
              Contáctanos y descubre cómo podemos ayudarte a optimizar la tecnología de tu empresa.
            </p>
            <Button className='px-8 py-6 text-lg font-bold' asChild>
              <a href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>Contactar</a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
