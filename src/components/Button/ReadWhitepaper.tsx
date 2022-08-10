import { Typography, Box } from '@mui/material'
import ReadWhitePaper from 'assets/image/read_white_paper1.png'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import { DocLink } from 'constants/index'

export default function ReadWhitepaper() {
  return (
    <ExternalLink
      href={DocLink}
      sx={{
        position: 'relative',
        transform: {
          xs: 'scale(0.7)',
          sm: 'none'
        },
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
        Read Docs
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
