import { Box, Stack, Typography } from '@mui/material'
// import { ReactComponent as Section4CardIcon1 } from 'assets/svg/section4-card-icon1.svg'
// import { ReactComponent as Section4CardIcon2 } from 'assets/svg/section4-card-icon2.svg'
// import { ReactComponent as Section4CardIcon3 } from 'assets/svg/section4-card-icon3.svg'
// import { ReactComponent as Section4CardIcon4 } from 'assets/svg/section4-card-icon4.svg'
// import { ReactComponent as Section4CardIcon5 } from 'assets/svg/section4-card-icon5.svg'
// import { ReactComponent as Section4CardIcon6 } from 'assets/svg/section4-card-icon6.svg'

// const CardList = [
// {

// Icon={<Section4CardIcon1 />}
// label="Verifiable Ownership"
// text={`NFTs are the backbone of decentralized digital ownership.`}
// ,
// {<Section4Card
// Icon={<Section4CardIcon2 />}
// label="Code is Law!"
// text={`Swaps are executed instantly and price is adjusted by the AMM smart contract.`}
// />
// }
// {<Section4Card
// Icon={<Section4CardIcon3 />}
// label="Instant Liquidity"
// text={`Listing waiting times are reduced to 0, as demand and offer are satisfied instantaneously.`}
// />},
// {<Section4Card
// Icon={<Section4CardIcon4 />}
// label="Stable Economies"
// text={`NFTs' innate illiquidity (and undercutting) can no longer impact the stability of in-game economies`}
// />},

// {<Section4Card
// Icon={<Section4CardIcon5 />}
// label={
//   <Typography
//     sx={{
//       color: '#252525',
//       fontFamily: 'Sora',
//       fontSize: '30px',
//       fontWeight: '600',
//       lineHeight: '32px'
//     }}
//   >
//     Additional <tr />
//     Revenue Streams
//   </Typography>
// }
// text={`Holders no longer need to exit their positions for profit, as they can stake their assets for protocol fee
// shares.`}
// />},
// {<Section4Card
// Icon={<Section4CardIcon6 />}
// label="Interoperability"
// text={`Seamlessly trade across different games within our ecosystem without the need to switch marketplaces`}
// />}

// ]

export function Section4Card({ Icon, label, text }: { Icon: JSX.Element; label: any; text: string }) {
  return (
    <Box
      sx={{
        width: 422,
        height: 300,
        borderRadius: '24px',
        background: '#F9F9FA',
        padding: '48px 25px 44px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px'
      }}
    >
      {Icon}
      <Stack spacing={18}>
        {typeof label === 'string' ? (
          <Typography
            sx={{
              color: '#252525',
              fontFamily: 'Sora',
              fontSize: '30px',
              fontWeight: '600',
              lineHeight: '34px'
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
