import { Box, Typography, SxProps } from '@mui/material'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import useBreakpoint from 'hooks/useBreakpoint'
import { ReactComponent as LadderFooter } from 'assets/svg/ladder-footer.svg'

export default function Footer({ height, copyright }: { height?: string | number; copyright?: string }) {
  const isDownSm = useBreakpoint('sm')

  return (
    <Box
      id="community"
      sx={{
        height,
        overflow: 'hidden',
        background: '#fff'
      }}
    >
      <Box
        sx={{
          pt: { xs: 90, md: 61 },
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height,
          position: 'relative',
          bottom: 0,
          left: 0,
          zIndex: 99
        }}
      >
        <LadderFooter />
        <Typography
          sx={{
            color: '#252525',
            fontFamily: 'Sora',
            letterSpacing: '-1.92px',
            fontSize: { xs: 24, md: 48 },
            fontWeight: 600,
            textAlign: 'center',
            mt: 19
          }}
          variant="h5"
        >
          Join Ladder community !
        </Typography>
        {/* <Typography
        sx={{
          fontSize: {
            xs: 16,
            md: 28
          },
          fontWeight: 700,
          textAlign: 'center',
          maxWidth: {
            xs: 300,
            md: 880
          }
        }}
        variant="h5"
      >
        Ladder community is an ecosystem of non-fungible and fungible users, developers
      </Typography> */}
        <Box display="flex" gap={22.5} alignItems="center" mt={32}>
          {Object.keys(Socials).map((key, idx) => {
            return (
              <ExternalLink
                key={idx}
                href={Socials[key as keyof typeof Socials].link}
                sx={{
                  transform: 'rotate3d(0)',
                  '&:hover': {
                    transform: 'rotate3d(0,1,0,180deg)'
                  }
                }}
              >
                <Image
                  src={Socials[key as keyof typeof Socials].logo2}
                  alt={`social-media-link-${Socials[key as keyof typeof Socials].title}-bg`}
                  style={{
                    width: isDownSm ? 32 : 32
                  }}
                />
              </ExternalLink>
            )
          })}
        </Box>
        {copyright && <CopyWriting text={copyright} sx={{ mt: '40px' }} />}
      </Box>
      <Box
        sx={{
          width: '100%',
          height: ' 309.6px',
          borderRadius: '1508px',
          background: '#A5FFE6',
          filter: 'blur(175px)',
          position: 'relative',
          transform: 'translateY(-50px)',
          zIndex: 0
        }}
      />
    </Box>
  )
}

export function CopyWriting({ text, sx }: { text: String; sx?: SxProps }) {
  return (
    <Typography
      sx={{
        color: '#444',
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: '400',
        textTransform: 'capitalize',
        ...sx
      }}
    >
      {text}
    </Typography>
  )
}
