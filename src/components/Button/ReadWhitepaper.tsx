import { Typography, Box } from '@mui/material'
import ReadWhitePaper from 'assets/image/read_white_paper1.png'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'

export default function ReadWhitepaper() {
  return (
    <ExternalLink
      href={'/'}
      sx={{
        position: 'relative',
        width: { xs: 175, md: 220 },
        '&:hover': {
          '& div': { transform: 'rotate3d(0,1,0,180deg)' }
        }
      }}
    >
      <Typography
        fontSize={20}
        color="#000000"
        fontWeight={50}
        sx={{
          position: 'absolute',
          zIndex: 2,
          top: '45%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 'fit-content'
        }}
      >
        Read Whitepaper
      </Typography>
      <Box width="100%">
        <Image
          src={ReadWhitePaper}
          alt={`read-whitepaper`}
          style={{ width: '100%' }}
          // style={{ transform: 'scale(0.66)', transformOrigin: '50% 50%' }}
        />
      </Box>
    </ExternalLink>
  )
}
