import { Box, Typography } from '@mui/material'
import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Image from 'components/Image'
import bg4 from 'assets/image/bg4.png'
import bg5 from 'assets/image/bg5.png'
import bg6 from 'assets/image/bg6.png'
import { ReactComponent as Figure4 } from 'assets/svg/figure4.svg'
import { ReactComponent as Figure5 } from 'assets/svg/figure5.svg'
import useBreakpoint from 'hooks/useBreakpoint'

export default function Community() {
  const isDownMd = useBreakpoint('md')
  return (
    <Box position="relative" overflow="hidden" minHeight={'100vh'}>
      <Banner>
        <Box
          sx={{
            paddingTop: 190,
            paddingBottom: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: ' center'
          }}
        >
          <Typography fontSize={42} color="#000000" mb={50} variant="h1">
            Community
          </Typography>
        </Box>
      </Banner>
      <Footer height={isDownMd ? 760 : 360} />

      <Image src={bg5} style={{ position: 'absolute', right: 0, bottom: 0 }} />
      <Image
        src={bg6}
        style={{
          position: 'absolute',
          left: isDownMd ? -300 : 'calc(50% - 340px)',
          bottom: 0,
          transform: isDownMd ? 'rotate(30deg) scale(0.7)' : 'none'
        }}
      />
      {!isDownMd && (
        <>
          <Image src={bg4} style={{ position: 'absolute', left: 0, bottom: 0 }} />
          <Figure4 style={{ zIndex: 1, position: 'absolute', left: 0, bottom: 15 }} />
        </>
      )}

      <Figure5
        style={{
          zIndex: 1,
          position: 'absolute',
          right: isDownMd ? 0 : 30,
          bottom: isDownMd ? 0 : 30,
          transform: isDownMd ? 'scale(0.7)' : 'none'
        }}
      />
    </Box>
  )
}
