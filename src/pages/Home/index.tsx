import { Box, Typography } from '@mui/material'
import Banner from 'components/Banner'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'

export default function Home() {
  return (
    <>
      <Banner>
        <Box
          sx={{
            paddingTop: 190,
            paddingBottom: 196,
            display: 'flex',
            flexDirection: 'column',
            alignItems: ' center'
          }}
        >
          <Typography fontSize={42} color="#000000" width={1008}>
            A financial infrastructure dedicated to NFT Swap, bringing fungible and non-fungible tokens together
          </Typography>
          <Typography fontSize={20} color="#000000" width={552} mt={28} mb={41}>
            Swap ERC-1155 instant AMM liquidity MIX liquidity between ERC-1155 and ERC-20 Build an economy around
            ERC-1155
          </Typography>
          <SocialsSection />
        </Box>
      </Banner>
    </>
  )
}

function SocialsSection() {
  return (
    <Box display="flex" gap={40} alignItems="center">
      {Object.keys(Socials).map((key) => {
        console.log(key)
        console.log(Socials[key as keyof typeof Socials])
        return (
          <ExternalLink href={Socials[key as keyof typeof Socials].link}>
            <Image
              src={Socials[key as keyof typeof Socials].logo1}
              alt={`social-media-link-${Socials[key as keyof typeof Socials].title}`}
            />
          </ExternalLink>
        )
      })}
    </Box>
  )
}
