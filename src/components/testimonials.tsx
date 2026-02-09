import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Star } from 'lucide-react'

interface Testimonial {
  user: {
    name: string
    image: string
    role: string
  }
  quote: string
  cualification: 1 | 2 | 3 | 4 | 5
}



const testimonials: Testimonial[] = [
  {
    user: {
      name: 'John Doe',
      image: 'https://github.com/shadcn.png',
      role: 'CTO | Makrosoft'
    },
    quote: 'This is a testimonial',
    cualification: 4
  },
  {
    user: {
      name: 'Doe John',
      image: 'https://github.com/shadcn.png',
      role: 'CTO | Google'
    },
    quote: 'This is a good tool for my busines',
    cualification: 3
  },
  {
    user: {
      name: 'Bill Gates',
      image: 'https://github.com/shadcn.png',
      role: 'CEO | Amazon'
    },
    quote: 'This is amazing tools',
    cualification: 5
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const {
    cualification,
    quote,
    user: { image, name, role }
  } = testimonial

  return (
    <Card className='h-full border-border'>
      <CardHeader className='gap-4'>
        {/* Rating */}
        <div
          className='flex gap-1'
          role='img'
          aria-label={`Rating: ${cualification} de 5`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              aria-hidden='true'
              className={`h-4 w-4 ${
                i < cualification
                  ? 'fill-foreground text-foreground'
                  : 'text-muted-foreground'
              }`}
            />
          ))}
        </div>

        {/* Quote */}
        <p className='text-sm leading-relaxed text-muted-foreground wrap-break-word line-clamp-5'>
          “{quote}”
        </p>
      </CardHeader>

      <CardContent className='flex items-center gap-4'>
        <Avatar className='h-10 w-10 shrink-0'>
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>
            {name
              .split(' ')
              .map(w => w[0])
              .join('')
              .slice(0, 2)}
          </AvatarFallback>
        </Avatar>

        <div className='min-w-0'>
          <CardTitle className='truncate text-sm'>
            {name}
          </CardTitle>
          <CardDescription className='truncate text-xs'>
            {role}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12'>
        {/* Header */}
        <div className='text-center space-y-2'>
          <h2 className='text-3xl sm:text-4xl font-bold'>
            Testimonios
          </h2>
          <p className='text-muted-foreground'>
            Lo que dicen nuestros clientes
          </p>
        </div>

        {/* Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.user.name}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
