import { useRef } from 'react'
import { Box, Typography } from '@mui/material'
import Banner from 'components/Banner'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import { ReactComponent as CoverImage } from 'assets/svg/cover.svg'
import { ReactComponent as Figure3 } from 'assets/svg/figure3.svg'
import { ReactComponent as Underline } from 'assets/svg/underline.svg'
import ReadWhitepaper from 'components/Button/ReadWhitepaper'
import {
  CompositeFigure0,
  CompositeFigure1,
  CompositeFigure2,
  AboutCards1,
  AboutCards2,
  AboutCards0
} from 'pages/About'
import Footer from 'components/Footer'
import useBreakpoint from 'hooks/useBreakpoint'
import { useInViewport } from 'hooks/useInViewport'

export default function Home() {
  const isDownMd = useBreakpoint('md')
  const figure3 = useRef(null)
  const isFigure3InView = useInViewport(figure3, '180px')

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
            variant="h1"
          >
            Providing Liquidity
            {!isDownMd && <br />} for your NFT swaps
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 20 },
              color: '#000000',
              textAlign: {
                xs: 'left',
                md: 'center'
              },
              margin: {
                xs: '16px 0 41px',
                md: '28px 0 41px'
              }
            }}
          >
            Swap NFT instant AMM liquidity mix liquidity between
            {!isDownMd && <br />} NFT and ERC-20 Build an economy around NFT
          </Typography>
          <SocialsSection />
        </Box>
      </Banner>
      <Box display="flex" flexDirection="column" alignItems="center">
        {!isDownMd && <CoverImage style={{ transform: 'translateY(-120px)' }} />}

        <About />
      </Box>
      <Footer height={750} copyright="Copyright©2022 Ladder Dao" />

      <Figure3
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          transform: isFigure3InView ? 'translate(0%,0%)' : 'translate(100%,100%)',
          transition: '0.5s'
        }}
        ref={figure3}
      />
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
              style={{
                '&:hover': {
                  opacity: 0.8
                }
              }}
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
        <Typography sx={{ fontSize: { xs: 24, md: 40 }, fontWeight: 700 }} variant="h5">
          About
        </Typography>
        <ReadWhitepaper />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 60, md: 174 }, width: '100%' }}>
        <Section0 />
        <Section1 />
        <Section2 />
      </Box>
    </Box>
  )
}

function Section0() {
  return (
    <Box width="100%">
      <SectionHeader
        title={'ERC-721'}
        description={
          'ERC-721 is the token standard that gave birth to NFTs - unique tokens to be managed, owned and traded.'
        }
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: {
            xs: 'center',
            md: 'flex-start'
          },
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          mt: {
            xs: 32,
            md: 60
          },
          gap: {
            xs: 60,
            md: 0
          }
        }}
      >
        {' '}
        <AboutCards0 sx={{ maxWidth: { md: 680 }, width: '100%' }} />
        <Box sx={{ width: '100%', position: 'relative', height: { xs: 300, sm: 550 } }}>
          <CompositeFigure0 sx={{ right: 0, top: 0 }} />
        </Box>
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
          'ERC-1155 is a token standard that enables the efficient transfer for fungible and non-fungible tokens in a single transaction.'
        }
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: {
            xs: 'center',
            md: 'flex-start'
          },
          justifyContent: 'space-between',
          flexDirection: {
            xs: 'column',
            md: 'row'
          },
          mt: {
            xs: 32,
            md: 60
          },
          gap: {
            xs: 60,
            md: 0
          }
        }}
      >
        <AboutCards1 sx={{ maxWidth: { md: 680 }, width: '100%' }} />
        <Box sx={{ width: '100%', position: 'relative', height: { xs: 300, sm: 550 } }}>
          <CompositeFigure1 sx={{ right: 0, top: 0 }} />
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
          'Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens. Unlike the traditional AMM where paired assets are all erc20, Ladder AMM supports non-fungible asset ERC1155 as the pair option.'
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
            md: 'row-reverse'
          },
          mt: {
            xs: 32,
            md: 60
          },
          gap: {
            xs: 60,
            md: 0
          }
        }}
      >
        <AboutCards2 sx={{ maxWidth: { md: 680 }, width: '100%' }} />
        <Box sx={{ width: '100%', position: 'relative', height: { xs: 300, sm: 550 } }}>
          <CompositeFigure2 />
        </Box>
      </Box>
    </Box>
  )
}

function SectionHeader({ title, description }: { title: string; description: string }) {
  const isDownMd = useBreakpoint('md')

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
        <Typography sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mr: 12.82 }} variant="h5">
          {title}
        </Typography>
        {!isDownMd && <Underline />}
      </Box>
      <Typography sx={{ fontSize: { xs: 20, md: 16 }, fontWeight: 400, maxWidth: 640 }}> {description}</Typography>
    </Box>
  )
}
