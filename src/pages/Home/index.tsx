// import { useRef } from 'react'
import { Box, Button, Stack, styled, Typography, useTheme } from '@mui/material'
import Banner from 'components/Banner'
import { Socials } from 'constants/index'
import ExternalLink from 'components/ExternalLink'
import Image from 'components/Image'
import { ReactComponent as Section3CardIcon1 } from 'assets/svg/section3-card-icon1.svg'
import Section1CardIcon from 'assets/svg/section1-right-bg.svg'
import Section1CardHoverIcon from 'assets/svg/section1-right-hover-bg.svg'
import Section3Bg from 'assets/image/section3-bg.png'
import { ReactComponent as ArrowRight } from 'assets/svg/arrow-right.svg'
// import ReadWhitepaper from 'components/Button/ReadWhitepaper'
// import { CompositeFigure2, AboutCards2 } from 'pages/About'
import Footer from 'components/Footer'
import { Section2Card } from './children/Section2Card'
import { Section4Cards } from './children/Section4Card'
import useBreakpoint from 'hooks/useBreakpoint'
import BrcBg from 'assets/image/brc-bg.svg'
import BrcText from 'assets/image/BRC.svg'
import BrcDots from 'assets/image/dots.svg'
import ShareIcon from 'assets/image/share.svg'
import BoxUsdIcon from 'assets/image/box-usd.svg'
import RefreshIcon from 'assets/image/swap.svg'
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

const ButtonStyle = styled(Button)(() => ({
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
}))

const HoverSvg = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  height: '380px',
  width: '533px',
  borderRadius: '16.889px',
  filter: 'drop-shadow(0px 9px 18.5px rgba(0, 0, 0, 0.10))',
  '.hover-svg': {
    display: 'none'
  },
  '.default-svg': {
    marginTop: '20px',
    marginLeft: '20px'
  },
  // img: {
  //   width: '100%'
  // },
  ':hover': {
    // img: {
    //   width: '100% !important'
    // },
    '.hover-svg': {
      display: 'inline-block'
    },
    '.default-svg': {
      display: 'none'
    }
  },
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    width: '100%',
    '.default-svg': {
      width: '100%',
      marginTop: '0px',
      marginLeft: '0px'
    },
  }
}))

export default function Home() {
  // const isDownMd = useBreakpoint('md')
  // const figure3 = useRef(null)
  // const isFigure3InView = useInViewport(figure3, '180px')
  // const Year = new Date(Date.now()).getFullYear()

  return (
    <Box position='relative' overflow='hidden'>
      <Banner>
        <Box
          sx={{
            maxWidth: '1440px',
            height: '720px',
            margin: 'auto',
            padding: {
              xs: '153px 16px 44px',
              md: '200px 64px 80px'
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
              lineHeight: {
                xs: '30px',
                md: '103px'
              },
              fontFamily: 'Sora',
              fontWeight: '600',
              letterSpacing: { xs: 0, md: '-3.28px' },
              color: '#252525',
              maxWidth: 756
            }}
            variant='h1'
          >
            Instant liquidity for your NFTs
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, md: 20 },
              color: '#333',
              fontFamily: 'Poppins',
              fontWeight: 500,
              lineHeight: { xs: '20px', md: '30px' },
              textAlign: {
                xs: 'left',
                md: 'left'
              },
              margin: {
                xs: '16px 0 41px',
                md: '22px 0 60px'
              }
            }}
          >
            Channeling liquidity to where it matters most. Experience the<br /> pioneering NFT AMM dedicated to GameFi
            assets and the first cross-<br />chain NFT swap in the <CardHighLight>Bitcoin Ecosystem</CardHighLight>.
          </Typography>
          <SocialsSection />
        </Box>
      </Banner>
      <Box display='flex' flexDirection='column' alignItems='center'>
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
    <Box display='flex' gap={28} alignItems='center'>
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

const BrcBgBox = styled(Box)`
  background: url(${BrcBg}) center/cover no-repeat;
  display: flex;
  justify-content: center;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    padding-bottom: 300px;
  }
`

const CardTitle = styled(Typography)`
  font-size: 30px;
  line-height: 34px;
  font-weight: 600;
`

const CardHighLight = styled('span')`
  color: #FF7209;
`

const BrcCardContent = [
  {
    icon: RefreshIcon,
    title: <CardTitle>Explore <br /><CardHighLight>Seamless Swaps</CardHighLight></CardTitle>,
    desc: 'With both Ordinals and BRC-20 tokens being non-fungible, they face similar liquidity challenges as NFTs. Ladder\'s AMM protocol addresses this by enhancing price stability and impact through robust liquidity pools.'
  },
  {
    icon: BoxUsdIcon,
    title: <CardTitle>Mine Liquidity,<br /> <CardHighLight>Reap Rewards</CardHighLight></CardTitle>,
    desc: 'Ladder transforms liquidity provision into an additional profit opportunity for Bitcoin ecosystem supporters. Amplify your holdings and earn rewards as you contribute to the vibrant liquidity pool.'
  }, {
    icon: ShareIcon,
    title: <CardTitle>Pioneer <CardHighLight>Multi-Chain</CardHighLight> Future</CardTitle>,
    desc: 'Ladder is setting the stage for a unified multi-chain future by incorporating both Ordinals and BRC-20 tokens. Our innovative liquidity pools are designed to connect and streamline liquidity across previously isolated networks.'
  }
]

function Brc() {
  const isSm = useBreakpoint('sm')
  const theme = useTheme()
  return (
    <BrcBgBox>
      <Box maxWidth={1440} width={'100%'}>
        <Box sx={{
          position: 'relative'
        }}>
          <img src={BrcDots} alt='' />
          <img src={BrcText} alt='' style={{
            position: 'absolute',
            left: isSm ? 16 : 60,
            bottom: isSm ? 220 : 0,
            width: isSm ? '80%' : 'inherit'
          }} />
          <Box sx={{
            width: '640px',
            position: 'absolute',
            right: 30,
            top: 100,
            [theme.breakpoints.down('md')]: {
              left: 16,
              top: 30,
              width: '100%'
            }
          }}>
            <Typography fontSize={isSm ? 24 : 52} fontWeight={600} lineHeight={isSm ? '30px' : '65px'}>
              Pioneering cross-chain swaps for <span style={{ color: '#FF7209', fontWeight: 700 }}>BRC20</span> NFTs
            </Typography>
            <Typography mt={28} fontSize={26} fontWeight={500} lineHeight={'32px'} color={'#FF7209'}>
              Coming Soon...
            </Typography>
            <Typography mt={20} fontSize={18} lineHeight={'27px'}>
              Bitcoin is the most battle-tested and secure blockchain, but it lacks smart contracts. We want to provide
              liquidity for Ordinals and BRC-20 tokens, while also allowing EVM users to dive into Bitcoin’s newly found
              ecosystem.
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          zIndex: 2,
          margin: '-20px 60px 0',
          position: 'relative',
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            margin: '-220px 16px',
            gap: '14px'
          }
        }}>
          {BrcCardContent.map(({ icon, title, desc }) => (
            <Box
              sx={{
                width: '421px',
                height: '407px',
                background: 'white',
                borderRadius: '24px',
                gap: '16px',
                display: 'grid',
                padding: '40px 20px',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-32px)'
                },
                [theme.breakpoints.down('md')]: {
                  width: '100%'
                }
              }}>
              <img src={icon} alt='' />
              {title}
              <Typography sx={{
                fontSize: '16px',
                lineHeight: '24px'
              }}>{desc}</Typography>
            </Box>
          ))}</Box>
      </Box>
    </BrcBgBox>
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
      <Brc />
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
        padding: { xs: '32px 16px', md: '70px 88px 150px 64px' },
        display: 'flex',
        gap: { xs: 20, md: 0 },
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'unset' },
        justifyContent: 'space-between'
      }}
    >
      <Box paddingTop={{ xs: 0, md: 10 }}>
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
            minHeight: { xs: 'unset', md: 58 },
            mt: { xs: 10, md: 30 },
            mb: 45
          }}
        >
          For projects and holders alike, Ladder unlocks new avenues of monetization for in-game assets.{' '}
        </Typography>
        <ExternalLink href='https://ladder-alltoken.netlify.app/swap'>
          <ButtonStyle variant='contained' endIcon={<ArrowRight />}>
            Trade Now
          </ButtonStyle>
        </ExternalLink>
      </Box>
      <HoverSvg>
        <Image src={Section1CardIcon} alt='png' className='default-svg' />
        <Image src={Section1CardHoverIcon} alt='png' className='hover-svg' />
      </HoverSvg>
    </Box>
  )
}

function Section2() {
  return (
    <Stack
      id='about'
      spacing={{ xs: 30, md: 48 }}
      width='100%'
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
      id='tech'
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
      id='values'
      sx={{
        width: '100%'
      }}
    >
      <Stack
        spacing={{ xs: '30px', md: '58px' }}
        sx={{
          width: '100%',
          maxWidth: '1440px',
          margin: 'auto',
          alignItems: 'center',
          padding: { xs: '32px 16px', md: '118px 64px 135px' }
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
