'use client'

import { useMemo, useState } from 'react'
import { BRAND } from './colors'
import { items } from './data'

// ─────────────────────────────────────────────────────────────
// 3. GEOMETRÍA — arco de 270° (180° original + 90°), abierto hacia abajo
// ─────────────────────────────────────────────────────────────
const CX = 400
const CY = 360
const R_OUTER = 340
const R_INNER = 140

const SWEEP_START = 135
const SWEEP_TOTAL = 270
const SECTOR_ANGLE = SWEEP_TOTAL / items.length
const GAP_DEG = 3

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = angleDeg * Math.PI / 180
  const x = Math.round((cx + r * Math.cos(rad)) * 100) / 100
  const y = Math.round((cy + r * Math.sin(rad)) * 100) / 100
  return { x, y }
}

function sectorPath(startAngle: number, endAngle: number) {
  const p1 = polarToCartesian(CX, CY, R_INNER, startAngle)
  const p2 = polarToCartesian(CX, CY, R_OUTER, startAngle)
  const p3 = polarToCartesian(CX, CY, R_OUTER, endAngle)
  const p4 = polarToCartesian(CX, CY, R_INNER, endAngle)
  return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} A ${R_OUTER} ${R_OUTER} 0 0 1 ${p3.x} ${p3.y} L ${p4.x} ${p4.y} A ${R_INNER} ${R_INNER} 0 0 0 ${p1.x} ${p1.y} Z`
}

// ─────────────────────────────────────────────────────────────
// 4. COMPONENTE
// ─────────────────────────────────────────────────────────────
export default function ValuePropArc() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [selected, setSelected] = useState<number | null>(null)

  const activeId = hovered ?? selected
  const activeItem = items.find(it => it.id === activeId) ?? null

  const sectors = useMemo(() => items.map((item, i) => {
    const rawStart = SWEEP_START + i * SECTOR_ANGLE
    const rawEnd = rawStart + SECTOR_ANGLE
    const mid = (rawStart + rawEnd) / 2
    const labelPos = polarToCartesian(CX, CY, (R_INNER + R_OUTER) / 2 + 6, mid)
    const d = sectorPath(rawStart + GAP_DEG / 2, rawEnd - GAP_DEG / 2)
    return { item, d, labelPos }
  }), [])

  return (
    <section className='relative w-full bg-white py-20 px-6 overflow-hidden'>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.22s ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .fade-up { animation: none; }
        }
      `}</style>

      {/* ---------- Desktop / tablet: arco SVG ---------- */}
      <div className='hidden md:flex flex-col items-center'>
        <svg
          viewBox='0 0 800 660'
          className='w-full max-w-2xl xl:max-w-3xl 2xl:max-w-4xl'
          role='img'
          aria-label='Arco de propuesta de valor con 6 piezas interactivas'
        >
          {sectors.map(({ item, d, labelPos }) => {
            const isActive = activeId === item.id
            return (
              <g
                key={item.id}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelected(selected === item.id ? null : item.id)}
                onFocus={() => setHovered(item.id)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                role='button'
                aria-pressed={isActive}
                aria-label={`${item.title}: ${item.description}`}
                className='cursor-pointer outline-none'
                style={{ transition: 'transform 200ms ease', transformOrigin: `${CX}px ${CY}px` }}
                transform={isActive ? 'scale(1.03)' : undefined}
              >
                <path
                  d={d}
                  fill={isActive ? BRAND.accent : BRAND.accentSoft}
                  stroke={BRAND.border}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  strokeLinejoin='round'
                  style={{ transition: 'fill 200ms ease, stroke-width 200ms ease' }}
                />

                <foreignObject x={labelPos.x - 85} y={labelPos.y - 38} width={170} height={100}>
                  <div
                    className='w-full h-full flex items-center justify-center text-center leading-tight font-extrabold tracking-tight text-sm md:text-base pointer-events-none select-none px-1'
                    style={{ color: isActive ? '#FFFFFF' : BRAND.ink }}
                  >
                    {item.title}
                  </div>
                </foreignObject>
              </g>
            )
          })}

          {/* Centro: SOLO el título — corto, sin riesgo de recorte por el foreignObject */}
          <foreignObject x={CX - R_INNER} y={CY - R_INNER} width={R_INNER * 2} height={R_INNER * 2}>
            <div className='w-full h-full flex items-center justify-center text-center px-3'>
              <p className='font-extrabold tracking-tight text-xl leading-snug' style={{ color: BRAND.ink }}>
                {activeItem
                  ? activeItem.title
                  : (
                    <>
                      <span className='block'>Propuesta</span>
                      <span className='block'>de Valor</span>
                    </>
                  )}
              </p>
            </div>
          </foreignObject>
        </svg>

        {/* Descripción — fuera del SVG, con todo el ancho de la sección disponible */}
        <div className='w-full max-w-xl xl:max-w-xl 2xl:max-w-2xl text-center px-6 -mt-6 min-h-18'>
          {activeItem && (
            <p key={activeItem.id} className='fade-up text-base leading-relaxed' style={{ color: BRAND.inkSoft }}>
              {activeItem.description}
            </p>
          )}
        </div>
      </div>

      {/* ---------- Mobile: lista tipo acordeón ---------- */}
      <div className='md:hidden max-w-md mx-auto'>
        <p className='font-extrabold tracking-tight text-3xl text-center mb-6' style={{ color: BRAND.ink }}>
          Propuesta de Valor
        </p>
        <div className='space-y-3'>
          {items.map(item => {
            const isOpen = selected === item.id
            return (
              <div
                key={item.id}
                className='rounded-2xl border overflow-hidden transition-colors'
                style={{ borderColor: isOpen ? BRAND.accent : '#E5E7EB' }}
              >
                <button
                  onClick={() => setSelected(isOpen ? null : item.id)}
                  className='w-full flex items-center gap-3 px-5 py-4 text-left'
                  aria-expanded={isOpen}
                >
                  <span className='font-extrabold tracking-tight text-lg flex-1' style={{ color: BRAND.ink }}>
                    {item.title}
                  </span>
                  <span className='text-neutral-400 text-xl leading-none'>{isOpen ? '-' : '+'}</span>
                </button>
                {isOpen && (
                  <div className='px-5 pb-5 fade-up'>
                    <p className='text-base leading-relaxed' style={{ color: BRAND.inkSoft }}>
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}