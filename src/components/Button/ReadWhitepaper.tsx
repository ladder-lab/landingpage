import { Typography, Box } from '@mui/material'
import ReadWhitePaper from 'assets/image/readwhitepaper.png'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'

export default function ReadWhitepaper() {
  return (
    <ExternalLink
      href={'/'}
      sx={{
        position: 'relative',
        '&:hover': {
          '& div': { transform: 'rotate3d(0,1,0,180deg)' }
        }
      }}
    >
      <Typography
        fontSize={20}
        color="#000000"
        fontWeight={600}
        style={{ position: 'absolute', zIndex: 2, top: '45%', left: '50%', transform: 'translate(-50%,-50%)' }}
      >
        Read Whitepaper
      </Typography>
      <Box>
        <Image
          src={ReadWhitePaper}
          alt={`read-whitepaper`}
          style={{ transform: 'scale(0.66)', transformOrigin: '50% 50%' }}
        />
      </Box>
    </ExternalLink>
  )
}
