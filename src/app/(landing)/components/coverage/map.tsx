'use client'

import { useSyncExternalStore } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { cities } from './cities'
import MarkerCity from './marker'

const coverageDepartments = [
  'Magdalena',
  'Cesar',
  'Santander',
  'Boyacá',
  'Cundinamarca',
  'Meta',
  'Casanare',
  'Valle del Cauca',
  'Antioquia',
  'La Guajira',
  'Caldas'
]

function subscribe(callback: () => void) {
  const mq = window.matchMedia('(min-width: 1024px)')

  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia('(min-width: 1024px)').matches
}

function getServerSnapshot() {
  return false
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )
}

export default function Map() {
  const isDesktop = useIsDesktop()

  return (
    <ComposableMap
      width={isDesktop ? 100 : 600}
      height={810}
      projection='geoMercator'
      projectionConfig={{
        center: [-73.8, 4.7],
        scale: 2600
      }}
      style={{
        width: '100%',
        height: '100%'
      }}
    >
      <defs>
        <filter
          id='labelShadow'
          x='-50%'
          y='-50%'
          width='200%'
          height='200%'
        >
          <feDropShadow
            dx='0'
            dy='3'
            stdDeviation='8'
            floodColor='#000000'
            floodOpacity='0.08'
          />
        </filter>
      </defs>
      <Geographies geography='/maps/geoBoundaries-COL-ADM1_simplified.topojson'>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              stroke='#ffffff'
              strokeWidth={1}
              fill={
                coverageDepartments.includes(geo.properties.shapeName)
                  ? '#CFE5FC'
                  : '#E5E7EB'
              }
              style={{
                default: {
                  outline: 'none'
                },
                hover: {
                  outline: 'none',
                  fill: '#2563EB',
                  stroke: '#ffffff'
                },
                pressed: {
                  outline: 'none'
                }
              }}
            />
          ))
        }
      </Geographies>
      {/* Marcadores */}
      {cities.map(city => (
        <MarkerCity city={city} key={city.id} />
      ))}
    </ComposableMap>
  )
}