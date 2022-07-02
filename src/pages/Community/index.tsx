import { Box, Typography } from '@mui/material'
import Banner from 'components/Banner'
import Footer from 'components/Footer'

export default function Community() {
  return (
    <>
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
          <Typography fontSize={42} color="#000000" mb={50}>
            Community
          </Typography>
        </Box>
      </Banner>
      <Footer />
    </>
  )
}
