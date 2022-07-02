import { Box, Typography } from '@mui/material'
import Banner from 'components/Banner'
import ReadWhitepaper from 'components/Button/ReadWhitepaper'

export default function About() {
  return (
    <>
      <Banner>
        <Box
          sx={{
            paddingTop: 190,
            paddingBottom: 72,
            display: 'flex',
            flexDirection: 'column',
            alignItems: ' center'
          }}
        >
          <Typography fontSize={42} color="#000000" mb={50}>
            About
          </Typography>
          <ReadWhitepaper />
        </Box>
      </Banner>
    </>
  )
}
