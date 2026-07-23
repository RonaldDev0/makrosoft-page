export interface City {
  id: string
  name: string
  coordinates: [number, number]

  label: {
    dx: number
    dy: number
    side: 'top' | 'bottom' | 'left' | 'right'
  }
}
