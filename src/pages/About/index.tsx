import { Box, Typography, SxProps, Grid } from '@mui/material'
import Banner from 'components/Banner'
import ReadWhitepaper from 'components/Button/ReadWhitepaper'
import bg1 from 'assets/image/bg1.png'
import bg1sm from 'assets/image/bg1sm.png'
import bg2 from 'assets/image/bg2.png'
import bg2sm from 'assets/image/bg2sm.png'
import bg3 from 'assets/image/bg3.png'
import Image from 'components/Image'
import InfoCard from 'components/Card/InfoCard'
import { ReactComponent as CardIcon1 } from 'assets/svg/card-icon1.svg'
import { ReactComponent as CardIcon2 } from 'assets/svg/card-icon2.svg'
import { ReactComponent as CardIcon3 } from 'assets/svg/card-icon3.svg'
import { ReactComponent as CardIcon4 } from 'assets/svg/card-icon4.svg'
import { ReactComponent as CardIcon5 } from 'assets/svg/card-icon5.svg'
import { ReactComponent as CardIcon6 } from 'assets/svg/card-icon6.svg'
import { ReactComponent as CardIcon7 } from 'assets/svg/card-icon7.svg'
import useBreakpoint from 'hooks/useBreakpoint'
import AnimatedSvg from 'components/AnimatedSvg'

export default function About() {
  return (
    <>
      <Banner>
        <Box
          sx={{
            paddingTop: 190,
            paddingBottom: 72,
            display: 'flex',
            flexDirection: 'column',
            alignItems: ' center'
          }}
        >
          <Typography fontSize={42} color="#000000" mb={50} variant="h1">
            About
          </Typography>
          <ReadWhitepaper />
        </Box>
      </Banner>
      <Box
        sx={{
          padding: { xs: '50px 16px', md: '130px 45px 135px' },
          display: 'flex',
          flexDirection: 'column',
          gap: {
            xs: 100,
            md: 135
          },
          overflow: 'hidden'
        }}
      >
        <Section0 />
        <Section1 />
        <Section2 />
      </Box>
    </>
  )
}

function Section0() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box sx={{ maxWidth: { md: 680, lg: 800 }, mb: { xs: 60, md: 0 } }}>
        <Typography sx={{ fontSize: { xs: 20, md: 40 }, fontWeight: 700, mb: { xs: 12, md: 40 } }}>ERC-721</Typography>
        <Typography sx={{ mb: { xs: 32, md: 52 }, fontWeight: 300, fontSize: 18 }}>
          ERC-721 is the token standard that gave birth to NFTs - unique tokens to be managed, owned and traded.
        </Typography>
        <AboutCards1 />
      </Box>
      <Box sx={{ width: { xs: '100%', md: 550 }, position: 'relative', height: { xs: 300, sm: 550 } }}>
        <CompositeFigure0 sx={{ right: 0, top: 36 }} />
      </Box>
    </Box>
  )
}

function Section1() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box sx={{ maxWidth: { md: 680, lg: 800 }, mb: { xs: 60, md: 0 } }}>
        <Typography sx={{ fontSize: { xs: 20, md: 40 }, fontWeight: 700, mb: { xs: 12, md: 40 } }}>ERC-1155</Typography>
        <Typography sx={{ mb: { xs: 32, md: 52 }, fontWeight: 300, fontSize: 18 }}>
          ERC-1155 is a token standard that enables the efficient transfer for fungible and non-fungible tokens in a
          single transaction.
        </Typography>
        <AboutCards1 />
      </Box>
      <Box sx={{ width: { xs: '100%', md: 550 }, position: 'relative', height: { xs: 300, sm: 550 } }}>
        <CompositeFigure1 sx={{ right: 0, top: 36 }} />
      </Box>
    </Box>
  )
}

function Section2() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box sx={{ maxWidth: { md: 680, lg: 800 } }}>
        <Typography sx={{ fontSize: { xs: 20, md: 40 }, fontWeight: 700, mb: { xs: 12, md: 40 } }}>
          Ladder AMM
        </Typography>
        <Typography sx={{ mb: { xs: 32, md: 52 }, fontWeight: 300, fontSize: 18 }}>
          Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens. Unlike the traditional AMM where paired
          assets are all ERC-20, Ladder AMM supports non-fungible asset like ERC-721 & ERC-1155 as the pair option.
        </Typography>
        <AboutCards2 />
      </Box>
      <Box sx={{ width: { xs: '100%', md: 550 }, position: 'relative', height: { xs: 360, sm: 550 } }}>
        <CompositeFigure3 sx={{ left: { xs: 0, md: 'none' }, right: { md: 0 }, top: 36 }} />
      </Box>
    </Box>
  )
}

export function CompositeFigure1({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Box position="absolute" sx={sx}>
      <AnimatedSvg fileName="levitate" sx={{ mr: 'auto' }} />
      <Image
        src={isDownMd ? bg1sm : bg1}
        style={{ position: 'absolute', top: isDownMd ? -80 : -220, zIndex: -1, right: isDownMd ? -16 : -45 }}
      />
    </Box>
  )
}

export function CompositeFigure0({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Box position="absolute" sx={sx} height="100%" width="100%">
      <AnimatedSvg fileName="erc721" height="100%" />
      <Image
        src={isDownMd ? bg1sm : bg1}
        style={{ position: 'absolute', top: isDownMd ? -80 : -220, zIndex: -1, right: isDownMd ? -16 : -45 }}
      />
    </Box>
  )
}

export function CompositeFigure2({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Box position="absolute" sx={sx}>
      <AnimatedSvg fileName="coins" />
      <Image
        src={isDownMd ? bg2sm : bg2}
        style={{ position: 'absolute', top: isDownMd ? -100 : -220, left: isDownMd ? -16 : -45, zIndex: -1 }}
      />
    </Box>
  )
}

export function CompositeFigure3({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')
  return (
    <Box position="absolute" sx={sx}>
      <AnimatedSvg fileName="coins" />
      <Image
        src={isDownMd ? bg2sm : bg3}
        style={{
          position: 'absolute',
          top: isDownMd ? -100 : -220,
          right: isDownMd ? 0 : -45,
          left: isDownMd ? -45 : 'none',
          zIndex: -1
        }}
      />
    </Box>
  )
}
export function AboutCards0({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Grid container spacing={isDownMd ? 10 : 20} sx={sx}>
      <Grid item xs={6}>
        <InfoCard
          height={isDownMd ? 200 : 280}
          icon={<CardIcon4 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          text={'NFTs are distinguishable and ownership of each one must be tracked separately'}
          type="upper-left"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard
          height={isDownMd ? 200 : 280}
          text={'Tokenize anything that is unique and verify proof of ownership'}
          icon={<CardIcon2 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="upper-right"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard
          height={isDownMd ? 200 : 280}
          text={'NFTs represent digital objects that can be moved between different platforms and protocols'}
          icon={<CardIcon1 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="lower-left"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard
          height={isDownMd ? 200 : 280}
          text={'Giving rise to new business models with novel use cases'}
          icon={<CardIcon3 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="lower-right"
        />
      </Grid>
    </Grid>
  )
}

export function AboutCards1({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Grid container spacing={isDownMd ? 10 : 20} sx={sx}>
      <Grid item xs={6}>
        <InfoCard
          text={'Multiple items stored in a single smart contract'}
          icon={<CardIcon1 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="upper-left"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard
          text={'Simple reclaim function'}
          icon={<CardIcon2 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="upper-right"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard
          text={'Infinite number of items'}
          icon={<CardIcon3 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="lower-left"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard
          text={'Single transaction with multiple recipients'}
          icon={<CardIcon4 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="lower-right"
        />
      </Grid>
    </Grid>
  )
}

export function AboutCards2({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Grid container spacing={isDownMd ? 10 : 20} sx={sx}>
      <Grid item xs={6}>
        <InfoCard
          text={'Contribute liquidity as a holder'}
          icon={<CardIcon5 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="upper-left"
        />
      </Grid>
      <Grid item xs={6}>
        <InfoCard
          text={'Smart Routing'}
          icon={<CardIcon6 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="upper-right"
        />
      </Grid>
      <Grid item xs={12}>
        <InfoCard
          text={'Trading ERC1155 with defi infrastructure'}
          icon={<CardIcon7 style={{ transform: isDownMd ? 'scale(0.7)' : 'none' }} />}
          type="lower"
          height={isDownMd ? 72 : 90}
        />
      </Grid>
    </Grid>
  )
}
