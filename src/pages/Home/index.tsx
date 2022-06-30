import { Box, Typography, Grid } from '@mui/material'
import Banner from 'components/Banner'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import { ReactComponent as CoverImage } from 'assets/svg/cover.svg'
import InfoCard from 'components/Card/InfoCard'
import { ReactComponent as CardIcon1 } from 'assets/svg/card-icon1.svg'
import { ReactComponent as CardIcon2 } from 'assets/svg/card-icon2.svg'
import { ReactComponent as CardIcon3 } from 'assets/svg/card-icon3.svg'
import { ReactComponent as CardIcon4 } from 'assets/svg/card-icon4.svg'

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
      <Box display="flex" flexDirection="column" alignItems="center" padding="0px 45px">
        <CoverImage style={{ transform: 'translateY(-120px)' }} />
        <Box display="flex" width="100%">
          <Typography fontSize={40} fontWeight={700} mb={86}>
            About
          </Typography>
        </Box>
        <About />
      </Box>
    </>
  )
}

function SocialsSection() {
  return (
    <Box display="flex" gap={40} alignItems="center">
      {Object.keys(Socials).map((key) => {
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

function About() {
  return (
    <Box width="100%">
      <Box maxWidth={800}>
        <Typography fontSize={40} fontWeight={700} mb={40}>
          ERC-1155
        </Typography>
        <Typography fontSize={18} fontWeight={300}>
          ERC-1155 is a token standard that enables the efficient transfer for fungible and non-fungible tokens in a
          single transaction.
        </Typography>

        <Grid container columnSpacing={15} rowSpacing={26} mt={90}>
          <Grid item xs={6}>
            <InfoCard
              text={'Multiple items stored in a single smart contract'}
              icon={<CardIcon1 />}
              type="upper-left"
            />
          </Grid>
          <Grid item xs={6}>
            <InfoCard text={'Simple reclaim function'} icon={<CardIcon2 />} type="upper-right" />
          </Grid>
          <Grid item xs={6}>
            <InfoCard text={'Infinite number of items'} icon={<CardIcon3 />} type="lower-left" />
          </Grid>
          <Grid item xs={6}>
            <InfoCard text={'Single transaction with multiple recipients'} icon={<CardIcon4 />} type="lower-right" />
          </Grid>
        </Grid>
      </Box>

      <Box maxWidth={800} mt={135}>
        <Typography fontSize={40} fontWeight={700} mb={40}>
          Ladder AMM
        </Typography>
        <Typography fontSize={18} fontWeight={300}>
          Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens. Unlike the traditional AMM where paired
          assets are all erc20, Ladder AMM supports non-fungible asset ERC1155 as the pair option.
        </Typography>

        <Grid container columnSpacing={15} rowSpacing={26} mt={90}>
          <Grid item xs={6}>
            <InfoCard text={'Contribute liquidity as a holder'} icon={<CardIcon1 />} type="upper-left" />
          </Grid>
          <Grid item xs={6}>
            <InfoCard text={'Smart Routing'} icon={<CardIcon2 />} type="upper-right" />
          </Grid>
          <Grid item xs={12}>
            <InfoCard text={'Infinite number of items'} icon={<CardIcon3 />} type="lower" height={90} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
