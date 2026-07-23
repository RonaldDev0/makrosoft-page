import { Marker } from 'react-simple-maps'
import type { City } from './types'

export default function MarkerCity({ city }: { city: City }) {
  const labelWidth = Math.max(52, city.name.length * 7 + 18)
  const labelHeight = 30

  const { side, dx, dy } = city.label

  let labelX = dx
  let labelY = dy

  switch (side) {
  case 'left':
    labelX -= labelWidth
    labelY -= labelHeight / 2
    break

  case 'right':
    labelY -= labelHeight / 2
    break

  case 'top':
    labelX -= labelWidth / 2
    labelY -= labelHeight
    break

  case 'bottom':
    labelX -= labelWidth / 2
    break
  }

  return (
    <Marker coordinates={city.coordinates} key={city.id}>
      {/* Halo */}
      <circle
        r={13}
        fill='#2563EB'
        opacity={0.10}
      />

      {/* Halo interior */}
      <circle
        r={8}
        fill='#2563EB'
        opacity={0.18}
      />

      {/* Punto */}
      <circle
        r={4.5}
        fill='#2563EB'
        stroke='white'
        strokeWidth={2.5}
      />

      <line
        x1={0}
        y1={0}
        x2={dx}
        y2={dy}
        stroke='#2563EB'
        opacity={0.28}
        strokeWidth={2}
        strokeLinecap='round'
      />

      <g transform={`translate(${labelX}, ${labelY})`}>
        <rect
          rx={15}
          width={labelWidth}
          height={labelHeight}
          fill='#FFFFFF'
          stroke='black'
          strokeWidth={.5}
          filter='url(#labelShadow)'
        />

        <text
          x={labelWidth / 2}
          y={19}
          textAnchor='middle'
          fontSize={12}
          fontWeight={700}
          letterSpacing={0.15}
          fill='#111827'
        >
          {city.name}
        </text>
      </g>
    </Marker>
  )
}