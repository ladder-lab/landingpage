import { ReactComponent as Section2CardIcon4 } from 'assets/svg/section2-card-icon4.svg'
import { ReactComponent as Section2CardIcon1 } from 'assets/svg/section2-card-icon1.svg'
import { ReactComponent as Section2CardIcon2 } from 'assets/svg/section2-card-icon2.svg'
import { ReactComponent as Section2CardIcon3 } from 'assets/svg/section2-card-icon3.svg'
import { Box, Stack, Typography } from '@mui/material'
import styled from '@emotion/styled'

const CardTitle = styled(Typography)(() => ({
  color: '#252525',
  fontFamily: 'Sora',
  fontSize: '32px',
  fontWeight: '600',
  letterSpacing: '-1.28px',
  textTransform: 'capitalize'
}))

export function Section2Card() {
  return (
    <Box
      sx={{
        display: { xs: 'grid', md: 'flex' },
        gap: '32px'
      }}
    >
      <Stack spacing={32}>
        <Card1
          Icon={<Section2CardIcon1 />}
          title="For Users"
          children={
            <>
              <RowLabel label={'Instant Liquidity:'} text={`no more waiting for buyers.`} />
              <RowLabel label={'Low Commissions: '} text="starting from 0.3%." />
              <RowLabel label={'Minimal Slippage:'} text="no more volatility." />
            </>
          }
        />
        <Card1
          Icon={<Section2CardIcon2 />}
          title="For Builders"
          children={
            <>
              <RowLabel
                label={'Additional Revenue Stream:'}
                text={` >50% protocol revenues return to liquidity providers.`}
              />
              <RowLabel label={'Predictable Price Action:'} text="sustainable in-game economies." />
              <RowLabel
                label={'eferral Programs (e.g. SBT):'}
                text="reward and incentivise your
              community!"
              />
            </>
          }
        />
      </Stack>
      <Card2 />
    </Box>
  )
}

function Card1({ Icon, title, children }: { Icon: JSX.Element; title: string; children: JSX.Element }) {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 831 },
        height: { xs: 'auto', md: 310 },
        borderRadius: '24px',
        background: '#F9F9FA',
        padding: '20px 32px 30px'
      }}
    >
      <Stack spacing={2}>
        {Icon}
        <Stack spacing={10}>
          <CardTitle> {title}</CardTitle>
          <Stack spacing={5}>{children}</Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

function Card2() {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 449 },
        height: { xs: '310px', md: '652px' },
        borderRadius: '24px',
        background: '#F3F3F3',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 99
        }}
      >
        <Section2CardIcon3 />
        <Stack spacing={13}>
          <CardTitle>For Both</CardTitle>
          <Stack spacing={5} maxWidth={322}>
            <RowLabel label={` Seamless Trading: `} text={`direct game integration of Ladder AMM widget.`} />
            <RowLabel label={` 1-Click Swaps.`} />
          </Stack>
        </Stack>
      </Box>

      <Box
        style={{
          position: 'absolute',
          bottom: '-6px',
          right: '0'
        }}
      >
        <Section2CardIcon4 />
      </Box>
    </Box>
  )
}

function RowLabel({ label, text }: { label: string; text?: string }) {
  return (
    <>
      <Typography
        sx={{
          color: '#333',
          fontFamily: 'Poppins',
          fontSize: '18px',
          fontWeight: '400',
          letterSpacing: '-0.72px'
        }}
      >
        &bull; &nbsp; <b style={{ fontWeight: 600 }}>{label}</b> {text}
      </Typography>
    </>
  )
}
