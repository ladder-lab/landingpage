import { Box } from '@mui/material'
import BackgroundImage from 'assets/image/banner-bg.png'

export default function Banner({ children }: { children?: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover'
      }}
    >
      {children}
    </Box>
  )
}
