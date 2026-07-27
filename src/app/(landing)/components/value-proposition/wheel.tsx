'use client'

import { arc, pie } from 'd3-shape'
import { segments } from './segments'

const WIDTH = 900
const HEIGHT = 700

const OUTER_RADIUS = 250
const INNER_RADIUS = 150

export default function Wheel() {
  const generator = pie<number>()
    .sort(null)
    .padAngle(0.03)

  const arcs = generator(new Array(segments.length).fill(1))

  const path = arc()
    .innerRadius(INNER_RADIUS)
    .outerRadius()

  return (
    <div>
      wheel
    </div>
  )
}