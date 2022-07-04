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
  const isDownMd = useBreakpoint('md')

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
          }
          // overflow: 'hidden'
        }}
      >
        <Section1 />
        <Section2 />
      </Box>
    </>
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
      <Box maxWidth={800} sx={{ mb: { xs: 60, md: 0 } }}>
        <Typography sx={{ fontSize: { xs: 20, md: 40 }, fontWeight: 700, mb: { xs: 12, md: 40 } }}>ERC-1155</Typography>
        <Typography sx={{ mb: { xs: 32, md: 52 }, fontWeight: 300, fontSize: 18 }}>
          ERC-1155 is a token standard that enables the efficient transfer for fungible and non-fungible tokens in a
          single transaction.
        </Typography>
        <AboutCards1 />
      </Box>
      <CompositeFigure1 />
    </Box>
  )
}

function Section2() {
  const isDownMd = useBreakpoint('md')

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Box maxWidth={800}>
        <Typography sx={{ fontSize: { xs: 20, md: 40 }, fontWeight: 700, mb: { xs: 12, md: 40 } }}>
          Ladder AMM
        </Typography>
        <Typography sx={{ mb: { xs: 32, md: 52 }, fontWeight: 300, fontSize: 18 }}>
          Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens. Unlike the traditional AMM where paired
          assets are all erc20, Ladder AMM supports non-fungible asset ERC1155 as the pair option.
        </Typography>
        <AboutCards2 />
      </Box>
      {isDownMd ? <CompositeFigure2 /> : <CompositeFigure3 />}
    </Box>
  )
}

export function CompositeFigure1({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Box position="relative" sx={sx}>
      <AnimatedSvg fileName="levitate" />
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
    <Box position="relative" sx={sx}>
      <AnimatedSvg fileName="coins" />
      <Image
        src={isDownMd ? bg2sm : bg2}
        style={{ position: 'absolute', top: isDownMd ? -100 : -220, left: isDownMd ? -16 : -45, zIndex: -1 }}
      />
    </Box>
  )
}

export function CompositeFigure3({ sx }: { sx?: SxProps }) {
  return (
    <Box position="relative" sx={sx}>
      <AnimatedSvg fileName="coins" />
      <Image src={bg3} style={{ position: 'absolute', top: -220, right: -45, zIndex: -1 }} />
    </Box>
  )
}

export function AboutCards1({ sx }: { sx?: SxProps }) {
  const isDownMd = useBreakpoint('md')

  return (
    <Grid container spacing={20} sx={sx}>
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
    <Grid container spacing={20} sx={sx}>
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
