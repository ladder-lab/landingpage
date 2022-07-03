import { Box, Typography, SxProps } from '@mui/material'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import useBreakpoint from 'hooks/useBreakpoint'

export default function Footer({ height, copyright }: { height?: string | number; copyright?: string }) {
  const isDownSm = useBreakpoint('sm')

  return (
    <Box
      sx={{
        pt: { xs: 90, md: 144 },
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height
      }}
    >
      <Typography sx={{ fontSize: { xs: 24, md: 40 }, fontWeight: 700, mb: { xs: 32, md: 45 }, textAlign: 'center' }}>
        Join Ladder community!
      </Typography>
      <Typography
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
      >
        Ladder community is an ecosystem of non-fungible and fungible users, developers
      </Typography>
      <Box display="flex" gap={31} alignItems="center" mt={63}>
        {Object.keys(Socials).map((key, idx) => {
          return (
            <ExternalLink key={idx} href={Socials[key as keyof typeof Socials].link}>
              <Image
                src={Socials[key as keyof typeof Socials].logo2}
                alt={`social-media-link-${Socials[key as keyof typeof Socials].title}-bg`}
                style={{
                  width: isDownSm ? 80 : 94
                }}
              />
            </ExternalLink>
          )
        })}
      </Box>
      {copyright && (
        <CopyWriting
          text={copyright}
          sx={{ position: 'absolute', left: { xs: 16, md: 'auto' }, bottom: { xs: 47, md: 80 } }}
        />
      )}
    </Box>
  )
}

export function CopyWriting({ text, sx }: { text: String; sx?: SxProps }) {
  return (
    <Typography fontSize={16} fontWeight={400} sx={{ opacity: 0.8, ...sx }}>
      {text}
    </Typography>
  )
}
