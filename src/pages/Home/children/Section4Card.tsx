import { Box, Stack, Typography, styled } from '@mui/material'
// import { ReactComponent as Section4CardIcon1 } from 'assets/svg/section4-card-icon1.svg'
// import { ReactComponent as Section4CardIcon2 } from 'assets/svg/section4-card-icon2.svg'
// import { ReactComponent as Section4CardIcon3 } from 'assets/svg/section4-card-icon3.svg'
// import { ReactComponent as Section4CardIcon4 } from 'assets/svg/section4-card-icon4.svg'
// import { ReactComponent as Section4CardIcon5 } from 'assets/svg/section4-card-icon5.svg'
// import { ReactComponent as Section4CardIcon6 } from 'assets/svg/section4-card-icon6.svg'
import Section4CardIcon1 from 'assets/image/section4-card-icon1.png'
import Section4CardIcon2 from 'assets/image/section4-card-icon2.png'
import Section4CardIcon3 from 'assets/image/section4-card-icon3.png'
import Section4CardIcon4 from 'assets/image/section4-card-icon4.png'
import Section4CardIcon5 from 'assets/image/section4-card-icon5.png'
import Section4CardIcon6 from 'assets/image/section4-card-icon6.png'
import Image from 'components/Image'

interface CardPops {
  Icon: JSX.Element
  label: string | JSX.Element
  text: string
  isDiff?: boolean
  isEndEle?: boolean
}

const ImagesStyle = styled(Image)(({ theme }) => ({
  width: 48,
  height: 48,
  [theme.breakpoints.down('md')]: {
    width: 40,
    height: 40
  }
}))

const IconsStyle = styled(Box)(({ theme }) => ({
  svg: {
    width: 'auto',
    height: 'auto'
  },
  [theme.breakpoints.down('md')]: {
    svg: {
      width: '30px',
      height: '30px'
    }
  }
}))

const CardList: CardPops[] = [
  {
    Icon: (
      <IconsStyle mb={{ xs: 16, md: 32 }}>
        <ImagesStyle src={Section4CardIcon1} />
      </IconsStyle>
    ),
    label: 'Verifiable Ownership',
    text: `NFTs are the backbone of decentralised digital ownership.`
  },
  {
    Icon: (
      <IconsStyle mb={{ xs: 16, md: 32 }}>
        <ImagesStyle src={Section4CardIcon2} />
      </IconsStyle>
    ),
    label: 'Code is Law!',
    text: `Swaps are executed instantly and price is adjusted by the AMM smart contract.`
  },

  {
    Icon: (
      <IconsStyle mb={{ xs: 16, md: 32 }}>
        <ImagesStyle src={Section4CardIcon3} />
      </IconsStyle>
    ),
    label: 'Instant Liquidity',
    text: `Listing waiting times are reduced to 0, as demand and offer are satisfied instantaneously.`
  },
  {
    Icon: (
      <IconsStyle mb={{ xs: 16, md: 32 }}>
        <ImagesStyle src={Section4CardIcon4} />
      </IconsStyle>
    ),
    label: 'Stable Economies',
    text: `NFTs' innate illiquidity (and undercutting) can no longer impact the stability of in-game economies.`
  },
  {
    Icon: (
      <IconsStyle mb={{ xs: 16, md: 19 }}>
        <ImagesStyle src={Section4CardIcon5} />
      </IconsStyle>
    ),
    label: (
      <Typography
        sx={{
          color: '#252525',
          fontFamily: 'Sora',
          fontSize: '30px',
          fontWeight: '600',
          lineHeight: '32px'
        }}
      >
        Additional <tr />
        Revenue Streams
      </Typography>
    ),
    text: `Holders no longer need to exit their positions for profit, as they can stake their assets for protocol fee shares.`,
    isDiff: true
  },
  {
    Icon: (
      <IconsStyle mb={{ xs: 16, md: 42 }}>
        <ImagesStyle src={Section4CardIcon6} />
      </IconsStyle>
    ),
    label: 'Interoperability',
    text: `Seamlessly trade across different games within our ecosystem without the need to switch marketplaces.`,
    isDiff: true,
    isEndEle: true
  }
]

export function Section4Cards() {
  return (
    <>
      {CardList.map((item) => (
        <>
          <Section4Card
            Icon={item.Icon}
            label={item.label}
            text={item.text}
            isDiff={item.isDiff}
            isEndEle={item.isEndEle}
          />
        </>
      ))}
    </>
  )
}

function Section4Card({ Icon, label, text, isDiff, isEndEle }: CardPops) {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 422 },
        height: { xs: '230px', md: 300 },
        borderRadius: '24px',
        background: '#F9F9FA',
        padding: { xs: '16px', md: isDiff ? '38px 36px 44px 24px' : '48px 36px 44px 24px' },
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {Icon}
      <Stack spacing={isDiff && !isEndEle ? 12 : 18}>
        {typeof label === 'string' ? (
          <Typography
            sx={{
              color: '#252525',
              fontFamily: 'Sora',
              fontSize: { xs: '24px', md: '30px' },
              fontWeight: '600',
              lineHeight: isDiff && !isEndEle ? '32px' : '34px'
            }}
          >
            {label}
          </Typography>
        ) : (
          label
        )}
        <Typography
          sx={{
            color: '#444',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: '400'
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  )
}
