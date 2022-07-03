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
import useBreakpoint from 'hooks/useBreakpoint'

export default function Home() {
  const isDownsm = useBreakpoint('sm')

  return (
    <Box position="relative" overflow="hidden">
      <Banner>
        <Box
          sx={{
            padding: {
              xs: '153px 16px 44px',
              md: '190px 0 196px'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'center' }
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 27,
                md: 42
              },
              color: '#000000',
              textAlign: {
                xs: 'left',
                md: 'center'
              },
              maxWidth: 880
            }}
          >
            A financial infrastructure dedicated to NFT Swap, bringing fungible and non-fungible tokens together
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 20 },
              color: '#000000',
              margin: {
                xs: '16px 0 41px',
                md: '28px 0 41px'
              }
            }}
          >
            Swap ERC-1155 instant AMM liquidity MIX liquidity between ERC-1155 and ERC-20 Build an economy around
            ERC-1155
          </Typography>
          <SocialsSection />
        </Box>
      </Banner>
      <Box display="flex" flexDirection="column" alignItems="center">
        {!isDownsm && <CoverImage style={{ transform: 'translateY(-120px)' }} />}

        <About />
      </Box>
      <Footer height={750} copyright="Copyright©2022 Ladder Dao" />

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
    <Box
      width="100%"
      position="relative"
      padding="0 45px"
      sx={{
        padding: {
          xs: '45px 16px',
          md: '0 45px'
        }
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={86}>
        <Typography sx={{ fontSize: { xs: 24, md: 40 }, fontWeight: 700 }}>About</Typography>
        <ReadWhitepaper />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 60, md: 174 }, width: '100%' }}>
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
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          mt: {
            xs: 32,
            md: 60
          }
        }}
      >
        <AboutCards1 sx={{ maxWidth: 680 }} />
        <CompositeFigure1 sx={{ transform: { xs: 'scale(0.7)', md: 'translateX(-60px)' } }} />
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

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column-reverse',
            md: 'row'
          },
          mt: {
            xs: 32,
            md: 60
          }
        }}
      >
        <CompositeFigure2 sx={{ transform: { xs: 'scale(0.7)', md: 'translateX(-45px)' } }} />

        <AboutCards2 sx={{ maxWidth: 680 }} />
      </Box>
    </Box>
  )
}

function SectionHeader({ title, description }: { title: string; description: JSX.Element }) {
  const isDownSm = useBreakpoint('sm')

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: 17.82,
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start'
      }}
    >
      <Box display="flex" alignItems="center">
        <Typography sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mr: 12.82 }}>{title}</Typography>
        {!isDownSm && <Underline />}
      </Box>
      <Typography sx={{ fontSize: { xs: 20, md: 16 }, fontWeight: 600 }}> {description}</Typography>
    </Box>
  )
}
