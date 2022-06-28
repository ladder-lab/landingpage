import { Box, Typography } from '@mui/material'
import Banner from 'components/Banner'

export default function Home() {
  return (
    <>
      <Banner>
        <Box
          sx={{
            paddingTop: 190,
            paddingBottom: 258,
            display: 'flex',
            flexDirection: 'column',
            alignItems: ' center'
          }}
        >
          <Typography fontSize={42} color="#000000" width={1008}>
            A financial infrastructure dedicated to NFT Swap, bringing fungible and non-fungible tokens together
          </Typography>
          <Typography fontSize={20} color="#000000" width={552} mt={28}>
            Swap ERC-1155 instant AMM liquidity MIX liquidity between ERC-1155 and ERC-20 Build an economy around
            ERC-1155
          </Typography>
        </Box>
      </Banner>
    </>
  )
}
