// import { useRef } from 'react'
import { Box, Typography, Button, Stack, styled } from '@mui/material'
import Banner from 'components/Banner'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import { ReactComponent as Section3CardIcon1 } from 'assets/svg/section3-card-icon1.svg'
import { ReactComponent as Section1CardIcon } from 'assets/svg/section-right-bg.svg'
import Section3Bg from 'assets/image/section3-bg.png'
import { ReactComponent as ArrowRight } from 'assets/svg/arrow-right.svg'
// import ReadWhitepaper from 'components/Button/ReadWhitepaper'
// import { CompositeFigure2, AboutCards2 } from 'pages/About'
import Footer from 'components/Footer'
import { Section2Card } from './children/Section2Card'
import { Section4Cards } from './children/Section4Card'
import useBreakpoint from 'hooks/useBreakpoint'
// import { useInViewport } from 'hooks/useInViewport'

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#252525',
  fontFamily: 'Sora',
  fontSize: 52,
  fontWeight: '600',
  textAlign: 'center',
  lineHeight: '66px',
  letterSpacing: '-2.08px',
  [theme.breakpoints.down('md')]: {
    fontSize: 36,
    lineHeight: 'normal'
  }
}))

const Section3TextStyle = styled(Typography)(() => ({
  color: '#444',
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: '400'
}))

export default function Home() {
  // const isDownMd = useBreakpoint('md')
  // const figure3 = useRef(null)
  // const isFigure3InView = useInViewport(figure3, '180px')
  // const Year = new Date(Date.now()).getFullYear()

  return (
    <Box position="relative" overflow="hidden">
      <Banner>
        <Box
          sx={{
            maxWidth: '1440px',
            margin: 'auto',
            padding: {
              xs: '153px 16px 44px',
              md: '358px 64px 80px'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', md: 'start' },
            position: 'relative',
            zIndex: 999
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: 27,
                md: 82
              },
              fontFamily: 'Sora',
              fontWeight: '600',
              letterSpacing: { xs: 0, md: '-3.28px' },
              color: '#252525',
              maxWidth: 756
            }}
            variant="h1"
          >
            Instant liquidity for your NFTs
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 20 },
              color: '#333',
              fontFamily: 'Poppins',
              fontWeight: 500,
              textAlign: {
                xs: 'left',
                md: 'center'
              },
              margin: {
                xs: '16px 0 41px',
                md: '22px 0 40px'
              }
            }}
          >
            Swap NFTs instantly, through our AMM liquidity pools.
          </Typography>
          <SocialsSection />
        </Box>
      </Banner>
      <Box display="flex" flexDirection="column" alignItems="center">
        {/* {!isDownMd && <CoverImage style={{ transform: 'translateY(-120px)' }} />} */}

        <About />
      </Box>
      <Footer height={360} copyright={`© Ladder All rights reserved`} />

      {/* <Figure3
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          transform: isFigure3InView ? 'translate(0%,0%)' : 'translate(100%,100%)',
          transition: '0.5s'
        }}
        ref={figure3}
      /> */}
    </Box>
  )
}

function SocialsSection() {
  return (
    <Box display="flex" gap={28} alignItems="center">
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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        background: '#fff'
      }}
    >
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Box>
  )
}

function Section1() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: { xs: 'aut', md: '1440px' },
        margin: 'auto',
        padding: { xs: '16px', md: '72px 64px 95px 64px' },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'unset' },
        justifyContent: 'space-between'
      }}
    >
      <Box>
        <Typography
          sx={{
            color: '#252525',
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: '500',
            maxWidth: 735
          }}
        >
          Ladder is a decentralized automated market maker protocol (AMM) that uses liquidity pools to provide instant
          swaps for NFTs.
          <br />
          While Ladder targets primarily the GameFi niche, we support every major token standard (i.e. ERC-721,
          ERC-1155, ERC-3525, ERC-20, etc.).
        </Typography>
        <Typography
          sx={{
            color: '#252525',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '400',
            maxWidth: 586,
            mt: 10,
            mb: 45
          }}
        >
          For projects and holders alike, Ladder unlocks new avenues of monetization for in-game assets.{' '}
        </Typography>
        <ExternalLink href="https://ladder-alltoken.netlify.app/swap">
          <Button
            variant="contained"
            sx={{
              display: 'inline-flex',
              paddingLeft: '25px',
              alignItems: 'center',
              gap: '11px',
              borderRadius: '200px',
              background: '#252525',
              height: '46px',
              fontFamily: 'Sora',
              width: 175,
              border: '1px solid #000',
              textTransform: 'capitalize',
              fontWeight: '600',
              fontSize: '16px',
              '&:hover': {
                boxShadow: 'none',
                background: '#fff',
                color: '#252525',
                gap: '19px',
                svg: {
                  path: {
                    fill: '#000'
                  }
                }
              }
            }}
            endIcon={<ArrowRight />}
          >
            Trade Now
          </Button>
        </ExternalLink>
      </Box>
      <Box
        sx={{
          svg: {
            width: { xs: '100%', md: 'auto' }
          }
        }}
      >
        <Section1CardIcon />
      </Box>
    </Box>
  )
}

function Section2() {
  return (
    <Stack
      id="about"
      spacing={{ xs: 30, md: 48 }}
      width="100%"
      sx={{
        maxWidth: '1440px',
        margin: 'auto',
        alignItems: 'center',
        padding: { xs: '16px', md: '0 64px' }
      }}
    >
      <Stack spacing={6}>
        <Typography
          sx={{
            color: '#333',
            fontFamily: 'Sora',
            fontSize: { xs: 18, md: '26px' },
            fontWeight: '400',
            textAlign: 'center',
            lineHeight: { xs: 'normal', md: '24px' }
          }}
        >
          Value Proposition
        </Typography>
        <SectionTitle maxWidth={'632px'}>Level up your web3 game with ladder</SectionTitle>
      </Stack>
      <Section2Card />
    </Stack>
  )
}

function Section3() {
  const isDownMd = useBreakpoint('md')
  return (
    <Box
      id="tech"
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 660 },
        backgroundImage: `url(${Section3Bg})`,
        backgroundSize: '100% 100%',
        mt: { xs: 30, md: 140 }
      }}
    >
      <Box
        sx={{
          maxWidth: '1440px',
          margin: 'auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'unset' },
          justifyContent: 'space-between',
          gap: { xs: '20px', md: 0 },
          padding: { xs: '20px', md: '110px 150px 115px 65px' },
          svg: {
            width: { xs: '100%', md: 'auto' }
          }
        }}
      >
        <Stack spacing={isDownMd ? 30 : 45}>
          <Stack spacing={14}>
            <Typography
              sx={{
                color: '#252525',
                fontFamily: 'Sora',
                fontSize: '16px',
                fontWeight: '400'
              }}
            >
              How does Ladder work?
            </Typography>
            <SectionTitle
              sx={{
                color: '#252525',
                maxWidth: '533px',
                textAlign: 'left'
              }}
            >
              Unlock the <tr /> true potential of NFTs
            </SectionTitle>
          </Stack>
          <Stack spacing={28}>
            <Section3TextStyle maxWidth={507}>
              Ladder is an AMM protocol for NFTs, which means that users buy from or sell into liquidity pools instead
              of trading peer-to-peer. One can think of it as the Uniswap for NFTs, with a profound GameFi focus.
            </Section3TextStyle>
            <Section3TextStyle maxWidth={534}>
              Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens. Unlike a traditional AMM where
              paired assets are all ERC-20, Ladder AMM supports non-fungible asset like ERC-721 & ERC-1155 as the pair
              option.
            </Section3TextStyle>
          </Stack>
        </Stack>
        <Section3CardIcon1 />
      </Box>
    </Box>
  )
}

function Section4() {
  return (
    <Box
      id="values"
      sx={{
        width: '100%'
      }}
    >
      <Stack
        spacing={{ xs: '36px', md: '58px' }}
        sx={{
          width: '100%',
          maxWidth: '1440px',
          margin: 'auto',
          alignItems: 'center',
          padding: { xs: '16px', md: '118px 64px 135px' }
        }}
      >
        <SectionTitle maxWidth={'507px'}>Our Values</SectionTitle>
        <Box
          sx={{
            width: '100%',
            margin: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'center'
          }}
        >
          <Section4Cards />
        </Box>
      </Stack>
    </Box>
  )
}

// function SectionHeader({ title, description }: { title: string; description: string }) {
//   const isDownMd = useBreakpoint('md')

//   return (
//     <Box
//       sx={{
//         width: '100%',
//         display: 'flex',
//         gap: 17.82,
//         flexDirection: { xs: 'column', md: 'row' },
//         alignItems: 'flex-start'
//       }}
//     >
//       <Box display="flex" alignItems="center">
//         <Typography sx={{ fontSize: { xs: 24, md: 32 }, fontWeight: 700, mr: 12.82 }} variant="h5">
//           {title}
//         </Typography>
//         {!isDownMd && <Underline />}
//       </Box>
//       <Typography sx={{ fontSize: { xs: 16, md: 20 }, fontWeight: 400, maxWidth: 640 }} variant="h5">
//         {' '}
//         {description}
//       </Typography>
//     </Box>
//   )
// }
