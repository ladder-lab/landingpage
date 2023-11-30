import { Box } from '@mui/material'
import { useEffect } from 'react'
import { Gradient } from './homeCanvas'

// import BackgroundImage from 'assets/image/banner-bg.png'

export default function Banner({ children }: { children?: React.ReactNode }) {
  useEffect(() => {
    var gradient = new Gradient() as any
    gradient.initGradient('#gradient-canvas')
  }, [])
  return (
    <Box sx={{ position: 'relative' }}>
      <canvas id="gradient-canvas"></canvas>

      {children}
    </Box>
  )
}
