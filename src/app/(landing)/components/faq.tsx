'use client'
import { useState } from 'react'
import { ChevronUp } from 'lucide-react'

interface Faq {
  question: string
  answer: string
}

const faqs: Faq[] = [
  {
    question: '¿Cómo funciona el arriendo?',
    answer: 'Nuestro proceso de arriendo es simple y transparente. Evaluamos tus necesidades y te ofrecemos la mejor solución tecnológica.'
  },
  {
    question: '¿Cuáles son los costos?',
    answer: 'Manejamos tarifas flexibles que se adaptan al tamaño y presupuesto de tu empresa.'
  },
  {
    question: '¿Incluye mantenimiento?',
    answer: 'Todos nuestros contratos incluyen soporte técnico y mantenimiento preventivo.'
  },
  {
    question: '¿Puedo cambiar equipos?',
    answer: 'Ofrecemos opciones de actualización y cambio de equipos según tus necesidades empresariales.'
  },
  {
    question: '¿Qué documentos necesito?',
    answer: 'Solo necesitas documentos básicos de la empresa y una evaluación crediticia simple.'
  }
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id='faq'>
      <div className='max-w-7xl mx-auto px-0 md:px-0 lg:px-28 py-20 space-y-16'>

        {/* Header */}
        <div className='space-y-4'>
          <h2 className='text-4xl font-bold text-black'>
            Preguntas
          </h2>
          <p className='text-gray-700 max-w-xl'>
            Resolvemos todas tus dudas sobre nuestros servicios de arriendo tecnológico
          </p>
        </div>

        {/* FAQ list */}
        <div className='border-t border-black'>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={faq.question} className='border-b border-black'>
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className='w-full flex items-center justify-between py-8 text-left'
                >
                  <span className='text-lg font-semibold text-black'>
                    {faq.question}
                  </span>

                  <span
                    className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  >
                    <ChevronUp />
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className='overflow-hidden'>
                    <p className='pb-8 max-w-3xl text-gray-700 leading-relaxed'>
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
