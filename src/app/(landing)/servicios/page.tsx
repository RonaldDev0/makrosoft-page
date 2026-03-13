import { Monitor, Printer, Wrench, Network, Package, ShieldCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    icon: Monitor,
    title: 'Arriendo de Computadores',
    description: 'Soluciones flexibles de alquiler de portátiles y equipos de escritorio para empresas, eventos, capacitaciones y proyectos temporales.',
    features: ['Portátiles y All-in-One', 'Equipos de escritorio', 'Periféricos incluidos', 'Actualización tecnológica']
  },
  {
    icon: Printer,
    title: 'Arriendo de Impresoras',
    description: 'Equipos de impresión multifuncionales y térmicos bajo contrato flexible, con soporte y suministros incluidos.',
    features: ['Impresoras multifuncionales', 'Impresoras térmicas', 'Gestión de suministros', 'Mantenimiento incluido']
  },
  {
    icon: Wrench,
    title: 'Soporte Técnico',
    description: 'Asistencia técnica remota y presencial para garantizar la continuidad operativa de tu empresa.',
    features: ['Soporte remoto 24/7', 'Visitas técnicas presenciales', 'Mantenimiento preventivo', 'Help desk especializado']
  },
  {
    icon: Network,
    title: 'Cableado Estructurado',
    description: 'Diseño e instalación de infraestructura de red de alta calidad para oficinas y centros de datos.',
    features: ['Diseño de red', 'Instalación certificada', 'Fibra óptica y cobre', 'Documentación técnica']
  },
  {
    icon: Package,
    title: 'Suministros de Oficina',
    description: 'Gestión integral de insumos tecnológicos y de oficina para mantener tu operación sin interrupciones.',
    features: ['Tóners y cartuchos', 'Papelería especializada', 'Consumibles tecnológicos', 'Entrega a domicilio']
  },
  {
    icon: ShieldCheck,
    title: 'Ciberseguridad',
    description: 'Protección integral de la información y los activos digitales de tu empresa con tecnología de vanguardia.',
    features: ['Antivirus empresarial', 'Firewall y VPN', 'Auditorías de seguridad', 'Capacitación al equipo']
  }
]

export default function ServiciosPage() {
  return (
    <main className='w-screen px-8'>

      {/* Hero */}
      <section className='w-full flex justify-center px-4 pt-24 md:pt-32 pb-16'>
        <div className='flex flex-col gap-6 items-center text-center max-w-3xl'>
          <span className='text-sm font-semibold uppercase tracking-wider'>Servicios</span>
          <h1 className='font-bold text-4xl md:text-6xl leading-tight'>
            Soluciones tecnológicas para tu empresa
          </h1>
          <p className='text-base md:text-lg text-muted-foreground'>
            Con 27 años de experiencia ofrecemos servicios de arriendo tecnológico, soporte técnico e infraestructura adaptados a las necesidades de cada negocio.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button className='px-6 text-lg font-bold' asChild>
              <a href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>Cotizar ahora</a>
            </Button>
            <Button variant='outline' className='px-6 text-lg font-bold' asChild>
              <a href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>Hablar con un asesor</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-16 lg:py-24'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className='flex flex-col'>
                  <CardContent className='p-6 flex flex-col gap-4 flex-1'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10'>
                      <Icon className='h-6 w-6 text-primary' />
                    </div>
                    <h2 className='text-xl font-semibold'>{service.title}</h2>
                    <p className='text-sm text-muted-foreground'>{service.description}</p>
                    <ul className='mt-auto space-y-2 pt-4 border-t'>
                      {service.features.map((f) => (
                        <li key={f} className='flex items-center gap-2 text-sm'>
                          <span className='h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0' />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 lg:py-24 border-t'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center text-center gap-6 max-w-2xl mx-auto'>
            <h2 className='text-3xl font-bold sm:text-4xl'>¿Listo para optimizar tu tecnología?</h2>
            <p className='text-muted-foreground'>
              Contáctanos hoy y recibe una propuesta personalizada sin costo para tu empresa.
            </p>
            <Button className='px-8 py-6 text-lg font-bold' asChild>
              <a href='https://wa.me/573209313050?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20los%20servicios%20y%20soluciones%20de%20Makrosoft.' target='_blank' rel='noopener noreferrer'>Solicitar cotización</a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
