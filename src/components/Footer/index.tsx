import { Box, Typography } from '@mui/material'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'

export default function Footer() {
  return (
    <Box padding="144px 0 80px" display="flex" alignItems="center" flexDirection="column">
      <Typography fontSize={40} fontWeight={700} mb={45}>
        Join Ladder community!
      </Typography>
      <Typography fontSize={28} fontWeight={700}>
        Ladder community is an ecosystem of non-fungible and fungible users, developers
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
      <Typography fontSize={16} fontWeight={400} sx={{ opacity: 0.8 }} mt={170}>
        Copyright©2022 Ladder Dao
      </Typography>
    </Box>
  )
}
