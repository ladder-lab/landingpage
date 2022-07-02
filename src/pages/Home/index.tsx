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
import { ReactComponent as CardIcon5 } from 'assets/svg/card-icon5.svg'
import { ReactComponent as CardIcon6 } from 'assets/svg/card-icon6.svg'
import { ReactComponent as CardIcon7 } from 'assets/svg/card-icon7.svg'
import { ReactComponent as Figure1 } from 'assets/svg/figure1.svg'
import { ReactComponent as Figure2 } from 'assets/svg/figure2.svg'
import { ReactComponent as Figure3 } from 'assets/svg/figure3.svg'
import bg1 from 'assets/image/bg1.png'
import bg2 from 'assets/image/bg2.png'
import { ReactComponent as Underline } from 'assets/svg/underline.svg'

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
      <Box display="flex" flexDirection="column" alignItems="center">
        <CoverImage style={{ transform: 'translateY(-120px)' }} />
        <About />
      </Box>
      <Footer />
    </>
  )
}

function SocialsSection() {
  return (
    <Box display="flex" gap={40} alignItems="center">
      {Object.keys(Socials).map((key, idx) => {
        return (
          <ExternalLink key={idx} href={Socials[key as keyof typeof Socials].link}>
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
    <Box width="100%" position="relative" padding="0 45px">
      <Typography fontSize={40} fontWeight={700} mb={86}>
        About
      </Typography>
      <Box display="grid" gap={174}>
        <Section1 />
        <Section2 />
      </Box>
    </Box>
  )
}

function Footer() {
  return (
    <Box padding="144px 0 80px" display="flex" alignItems="center" flexDirection="column" position="relative">
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
      <Figure3 style={{ position: 'absolute', right: 0, bottom: 0 }} />
    </Box>
  )
}

function Section1() {
  return (
    <Box width="100%">
      <SectionHeader
        title={'ERC-1155'}
        description={
          <Typography fontSize={20} fontWeight={600}>
            ERC-1155 is a token standard that enables the efficient transfer
            <br /> for fungible and non-fungible tokens in a single transaction.
          </Typography>
        }
      />
      <Box width="100%" display="flex" justifyContent="space-between">
        <Grid container columnSpacing={15} rowSpacing={26} width={675} mt={90}>
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

        <Box position="relative" display="flex" alignItems="center" sx={{ transform: 'translateX(-60px)' }}>
          <Figure1 style={{ zIndex: 1 }} />
          <Image src={bg1} style={{ position: 'absolute' }} />
        </Box>
      </Box>
    </Box>
  )
}

function Section2() {
  return (
    <Box>
      <SectionHeader
        title={'Ladder AMM'}
        description={
          <Typography fontSize={20} fontWeight={600}>
            Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens.
            <br /> Unlike the traditional AMM where paired assets are all erc20, Ladder AMM <br />
            supports non-fungible asset ERC1155 as the pair option.
          </Typography>
        }
      />

      <Box display="flex" justifyContent="space-between" width="100%" alignItems="center" mt={90}>
        <Box position="relative" display="flex" alignItems="center" sx={{ transform: 'translateX(-45px)' }}>
          <Figure2 style={{ zIndex: 1 }} />
          <Image src={bg2} style={{ position: 'absolute' }} />
        </Box>

        <Grid container columnSpacing={15} rowSpacing={15} width={675}>
          <Grid item xs={6}>
            <InfoCard text={'Contribute liquidity as a holder'} icon={<CardIcon5 />} type="upper-left" />
          </Grid>
          <Grid item xs={6}>
            <InfoCard text={'Smart Routing'} icon={<CardIcon6 />} type="upper-right" />
          </Grid>
          <Grid item xs={12}>
            <InfoCard text={'Infinite number of items'} icon={<CardIcon7 />} type="lower" height={90} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

function SectionHeader({ title, description }: { title: string; description: JSX.Element }) {
  return (
    <Box display="flex" alignItems="flex-start" gap={17.82}>
      <Box display="flex" alignItems="center">
        <Typography fontSize={32} fontWeight={700} mr={12.82}>
          {title}
        </Typography>
        <Underline />
      </Box>

      {description}
    </Box>
  )
}
