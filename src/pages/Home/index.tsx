import { Box, Typography } from '@mui/material'
import Banner from 'components/Banner'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import { ReactComponent as CoverImage } from 'assets/svg/cover.svg'
import { ReactComponent as Figure3 } from 'assets/svg/figure3.svg'
import { ReactComponent as Underline } from 'assets/svg/underline.svg'
import ReadWhitepaper from 'components/Button/ReadWhitepaper'
import { CompositeFigure1, CompositeFigure2, AboutCards1, AboutCards2 } from 'pages/About'
import Footer from 'components/Footer'

export default function Home() {
  return (
    <Box position="relative">
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
          <Typography fontSize={42} color="#000000" textAlign="center">
            A financial infrastructure
            <br /> dedicated to NFT Swap,
            <br /> bringing fungible and non-fungible <br />
            tokens together
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
      <Figure3 style={{ position: 'absolute', right: 0, bottom: 0 }} />
    </Box>
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
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={86}>
        <Typography fontSize={40} fontWeight={700}>
          About
        </Typography>
        <ReadWhitepaper />
      </Box>

      <Box display="grid" gap={174}>
        <Section1 />
        <Section2 />
      </Box>
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
      <Box width="100%" display="flex" alignItems="center" justifyContent="space-between" mt={60}>
        <AboutCards1 sx={{ width: 680 }} />
        <CompositeFigure1 sx={{ transform: 'translateX(-60px)' }} />
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
        <CompositeFigure2 sx={{ transform: 'translateX(-45px)' }} />

        <AboutCards2 sx={{ width: 680 }} />
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
