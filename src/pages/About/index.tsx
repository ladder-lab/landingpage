import { Box, Typography, SxProps, Grid } from '@mui/material'
import Banner from 'components/Banner'
import ReadWhitepaper from 'components/Button/ReadWhitepaper'
import { ReactComponent as Figure1 } from 'assets/svg/figure1.svg'
import { ReactComponent as Figure2 } from 'assets/svg/figure2.svg'
import bg1 from 'assets/image/bg1.png'
import bg2 from 'assets/image/bg2.png'
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
          <Typography fontSize={42} color="#000000" mb={50}>
            About
          </Typography>
          <ReadWhitepaper />
        </Box>
      </Banner>
      <Box padding="130px 45px 135px" display="grid" gap={135}>
        <Box display="flex" justifyContent="space-between">
          <Box width={800}>
            <Typography fontSize={40} fontWeight={700} mb={40}>
              ERC-1155
            </Typography>
            <Typography mb={52} fontWeight={300} fontSize={18}>
              ERC-1155 is a token standard that enables the efficient transfer for fungible and non-fungible tokens in a
              single transaction.
            </Typography>
            <AboutCards1 />
          </Box>
          <CompositeFigure1 sx={{ transform: 'translateX(-60px)' }} />
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box width={800}>
            <Typography fontSize={40} fontWeight={700} mb={40}>
              Ladder AMM
            </Typography>
            <Typography mb={52} fontWeight={300} fontSize={18}>
              Ladder AMM is a hybrid AMM combining fungible and non-fungible tokens. Unlike the traditional AMM where
              paired assets are all erc20, Ladder AMM supports non-fungible asset ERC1155 as the pair option.
            </Typography>
            <AboutCards2 />
          </Box>
          <CompositeFigure3 sx={{ transform: 'translateX(40px)' }} />
        </Box>
      </Box>
    </>
  )
}

export function CompositeFigure1({ sx }: { sx?: SxProps }) {
  return (
    <Box position="relative" display="flex" alignItems="center" sx={sx}>
      <Figure1 style={{ zIndex: 1 }} />
      <Image src={bg1} style={{ position: 'absolute' }} />
    </Box>
  )
}

export function CompositeFigure2({ sx }: { sx?: SxProps }) {
  return (
    <Box position="relative" display="flex" alignItems="center" sx={sx}>
      <Figure2 style={{ zIndex: 1 }} />
      <Image src={bg2} style={{ position: 'absolute', left: -45 }} />
    </Box>
  )
}

export function CompositeFigure3({ sx }: { sx?: SxProps }) {
  return (
    <Box position="relative" display="flex" alignItems="center" sx={sx}>
      <Figure2 style={{ zIndex: 1 }} />
      <Image src={bg3} style={{ position: 'absolute' }} />
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
