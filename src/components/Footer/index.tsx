import { Box, Typography, SxProps } from '@mui/material'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'

export default function Footer({ height, copyright }: { height?: string | number; copyright?: string }) {
  return (
    <Box pt={144} display="flex" alignItems="center" flexDirection="column" height={height}>
      <Typography fontSize={40} fontWeight={700} mb={45}>
        Join Ladder community!
      </Typography>
      <Typography fontSize={28} fontWeight={700} textAlign="center">
        Ladder community is an ecosystem <br />
        of non-fungible and fungible users, developers
      </Typography>
      <Box display="flex" gap={31} alignItems="center" mt={63}>
        {Object.keys(Socials).map((key, idx) => {
          return (
            <ExternalLink key={idx} href={Socials[key as keyof typeof Socials].link}>
              <Image
                src={Socials[key as keyof typeof Socials].logo2}
                alt={`social-media-link-${Socials[key as keyof typeof Socials].title}-bg`}
              />
            </ExternalLink>
          )
        })}
      </Box>
      {copyright && <CopyWriting text={copyright} sx={{ mt: 160, pb: 80, textAlign: 'center' }} />}
    </Box>
  )
}

function CopyWriting({ text, sx }: { text: string; sx: SxProps }) {
  return (
    <Typography fontSize={16} fontWeight={400} sx={{ opacity: 0.8, ...sx }}>
      {text}
    </Typography>
  )
}
