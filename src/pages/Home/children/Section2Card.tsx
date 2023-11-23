// import { ReactComponent as Section2CardIcon4 } from 'assets/svg/section2-card-icon4.svg'
import { ReactComponent as Section2CardIcon1 } from 'assets/svg/section2-card-icon1.svg'
import { ReactComponent as Section2CardIcon2 } from 'assets/svg/section2-card-icon2.svg'
import { ReactComponent as Section2CardIcon3 } from 'assets/svg/section2-card-icon3.svg'
import { Box, Stack, Typography, styled } from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'

const CardTitle = styled(Typography)(({ theme }) => ({
  color: '#252525',
  fontFamily: 'Sora',
  fontSize: 30,
  fontWeight: '600',
  letterSpacing: '-1.2px',
  lineHeight: '38px',
  textTransform: 'capitalize',
  [theme.breakpoints.down('md')]: {
    fontSize: 24,
    lineHeight: 'normal'
  }
}))

export function Section2Card() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '24px',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: { xs: 'grid', md: 'flex' },
          gap: 24,
          width: '100%'
        }}
      >
        <Card1
          Icon={<Section2CardIcon1 />}
          title="For Users"
          children={
            <>
              <RowLabel
                label={'Instant Liquidity:'}
                text={`no more waiting for buyers.`}
                lineHeight="36px"
                BoldFontWeight={'600'}
              />
              <RowLabel
                label={'Low Commissions:'}
                text="starting from 0.3%."
                lineHeight="36px"
                BoldFontWeight={'600'}
              />
              <RowLabel
                label={'Minimal Slippage:'}
                text="Negligible buy & sell price variance"
                lineHeight="36px"
                BoldFontWeight={'600'}
              />
            </>
          }
        />
        <Card1
          Icon={<Section2CardIcon2 />}
          title="For Builders"
          children={
            <>
              <RowLabel
                label={'Earn on Volumes:'}
                text={`Over 50% of protocol revenues returned to liquidity providers`}
                lineHeight="29px"
              />
              <RowLabel label={'Smooth Price Action:'} text="Benefits balanced in-game economies" lineHeight="29px" />
              <RowLabel
                label={'Referral Program:'}
                text="Reward and incentivize partners' communities"
                lineHeight="29px"
              />
            </>
          }
        />
      </Box>
      <Card2 />
    </Box>
  )
}

function Card1({ Icon, title, children }: { Icon: JSX.Element; title: string; children: JSX.Element }) {
  const IsDownMd = useBreakpoint('md')

  return (
    <Box
      sx={{
        width: { xs: 'auto', md: 644 },
        minHeight: { xs: 'auto', md: 300 },
        height: '100%',
        borderRadius: '24px',
        background: '#F9F9FA',
        padding: { xs: 16, md: '31px 30px 35px' },
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Stack spacing={20}>
        <CardTitle> {title}</CardTitle>
        <Stack maxWidth={{ xs: 'auto', md: 470 }}>{children}</Stack>
      </Stack>
      {!IsDownMd && Icon}
    </Box>
  )
}

function Card2() {
  const IsDownMd = useBreakpoint('md')
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', md: 190 },
        borderRadius: '24px',
        background: '#F9F9FA',
        padding: { xs: 16, md: 30 },
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Stack spacing={13}>
        <CardTitle>For Both</CardTitle>
        <Stack>
          <RowLabel
            label={`Convenient User Journey:`}
            text={`Trade in-game assets without leaving the game or opening a marketplace`}
            lineHeight="32px"
          />
          <RowLabel
            label={`1-Click Trade:`}
            text="In comparison to 3+ clicks at other marketplaces, trading with AMM becomes seamless"
            lineHeight="32px"
          />
        </Stack>
      </Stack>
      {!IsDownMd && <Section2CardIcon3 />}
    </Box>
  )
}

function RowLabel({
  label,
  text,
  lineHeight,
  BoldFontWeight
}: {
  label: string
  text?: string
  lineHeight?: string
  BoldFontWeight?: string
}) {
  return (
    <>
      <Typography
        sx={{
          color: '#333',
          fontFamily: 'Poppins',
          fontSize: { xs: 16, md: 18 },
          fontWeight: '400',
          letterSpacing: '-0.72px',
          lineHeight: { xs: 'normal', md: lineHeight || 'normal' }
        }}
      >
        &bull; &nbsp; <b style={{ fontWeight: BoldFontWeight || 700 }}>{label}</b> {text}
      </Typography>
    </>
  )
}
