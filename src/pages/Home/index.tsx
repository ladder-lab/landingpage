// import { useRef } from 'react'
import { Box, Typography, Button, Stack, styled } from '@mui/material'
import Banner from 'components/Banner'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import { ReactComponent as Section3CardIcon1 } from 'assets/svg/section3-card-icon1.svg'
import { ReactComponent as Section1CardIcon } from 'assets/svg/section-right-bg.svg'
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
  letterSpacing: '-2.08px',
  [theme.breakpoints.down('md')]: {
    fontSize: 36
  }
}))

const Section3TextStyle = styled(Typography)(() => ({
  color: '#CDCBCB',
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
        padding: { xs: '16px', md: '72px 64px 110px 64px' },
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
          {`Ladder is a decentralized automated market maker protocol (AMM) that uses liquidity pools to provide instant swaps for NFTs.While Ladder targets primarily the GameFi niche, we support every major token standard (i.e. ERC-721, ERC-1155, ERC-3525, ERC-20, etc.).`}
        </Typography>
        <Typography
          sx={{
            color: '#444',
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '400',
            maxWidth: 586,
            mt: 10,
            mb: 45
          }}
        >
          {`For projects and holders alike, Ladder unlocks new avenues of monetization for in-game assets.`}{' '}
        </Typography>
        <ExternalLink href="https://test.ladder.top/airdrop">
          <Button
            variant="contained"
            sx={{
              display: 'inline-flex',
              padding: '0 26px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '11px',
              borderRadius: '200px',
              background: '#252525',
              height: '46px',
              '&:hover': {
                boxShadow: 'none'
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
    <Box
      width="100%"
      sx={{
        maxWidth: '1440px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '16px', md: '0 64px' },
        gap: '40px'
      }}
    >
      <Box>
        <Typography
          sx={{
            color: '#333',
            fontFamily: 'Sora',
            fontSize: '16px',
            fontWeight: '400',
            textAlign: 'center'
          }}
        >
          Value Proposition
        </Typography>
        <SectionTitle maxWidth={'632px'}>Level up your web3 game with ladder</SectionTitle>
      </Box>
      <Section2Card />
    </Box>
  )
}

function Section3() {
  const isDownMd = useBreakpoint('md')
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 681 },
        borderRadius: { xs: '32px', md: '64px' },
        background: '#000',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'unset' },
        mt: { xs: 30, md: 80 },
        justifyContent: 'space-between',
        gap: { xs: '20px', md: 0 },
        padding: { xs: '20px', md: '125px 160px 125px 96px' },
        svg: {
          width: { xs: '100%', md: 'auto' }
        }
      }}
    >
      <Stack spacing={isDownMd ? 30 : 45}>
        <Stack spacing={10}>
          <Typography
            sx={{
              color: '#FFF',
              fontFamily: 'Sora',
              fontSize: '16px',
              fontWeight: '400'
            }}
          >
            How does Ladder work?
          </Typography>
          <SectionTitle
            sx={{
              color: '#FFF',
              lineHeight: { xs: 'auto', md: '65px' },
              maxWidth: '533px',
              textAlign: 'left'
            }}
          >
            Unlock the <tr /> true potential of NFTs
          </SectionTitle>
        </Stack>
        <Stack spacing={28}>
          <Section3TextStyle maxWidth={507}>
            Ladder is an AMM protocol for NFTs, which means that users buy from or sell into liquidity pools instead of
            directly trading between themselves. One can see it as Uniswap for NFTs with a profound GameFi focus.
          </Section3TextStyle>
          <Section3TextStyle maxWidth={507}>
            Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens. Unlike the traditional AMM where
            paired assets are all ERC-20, Ladder AMM supports non-fungible asset like ERC-721 & ERC-1155 as the pair
            option.
          </Section3TextStyle>
        </Stack>
      </Stack>
      <Section3CardIcon1 />
    </Box>
  )
}
function Section4() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '16px', md: '95px 64px 128px' },
        gap: { xs: '36px', md: '58px' }
      }}
    >
      <SectionTitle maxWidth={'507px'}>Our values</SectionTitle>
      <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center' }}>
        <Section4Cards />
      </Box>
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
