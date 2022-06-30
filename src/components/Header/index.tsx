import { AppBar, Box, Button, styled } from '@mui/material'
import { ReactComponent as Ladder } from 'assets/svg/ladder.svg'
import { ReactComponent as ArrowUpRight } from 'assets/svg/arrow-up-right.svg'
import { routes } from 'constants/routes'
import { NavLink } from 'react-router-dom'

const StyledAppBar = styled(AppBar)({
  background: 'transparent',
  borderBottom: '1px solid #E8E8E8',
  justifyContent: 'space-between',
  flexDirection: 'row',
  height: 109,
  boxShadow: 'none'
})

const StyledNavLink = styled(NavLink)({
  color: '#FFFFFF',
  lineHeight: '109px',
  textDecoration: 'none',
  fontSize: 16,
  fontWeight: 500
})

export default function Header() {
  return (
    <StyledAppBar position="absolute">
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRight: '1px solid #E8E8E8',
          padding: '37px 45px'
        }}
      >
        <Ladder />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          aligmItems: 'center',
          gap: 100,
          justifyContent: 'center'
        }}
      >
        <StyledNavLink to={routes.home}>Home</StyledNavLink>
        <StyledNavLink to={routes.home}>About</StyledNavLink>
        <StyledNavLink to={routes.home}>Docs</StyledNavLink>
        <StyledNavLink to={routes.home}>Community</StyledNavLink>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: 230,
          borderRadius: 0,
          background: 'linear-gradient(0deg, #FE1A5E, #FE1A5E), #D9D9D9;',
          boxShadow: 'none'
        }}
      >
        <Box display="flex" alignItems="center" gap={12}>
          LAUNCH APP
          <ArrowUpRight />
        </Box>
      </Button>
    </StyledAppBar>
  )
}
