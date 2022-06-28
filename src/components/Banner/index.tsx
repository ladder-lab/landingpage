import { Box } from '@mui/material'
import BackgroundImage from 'assets/image/banner-bg.png'

export default function Banner({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`
      }}
    >
      {children}
    </Box>
  )
}
