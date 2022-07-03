import { AppBar, Box, Button, styled, IconButton } from '@mui/material'
import { ReactComponent as Ladder } from 'assets/svg/ladder.svg'
import { ReactComponent as LadderSm } from 'assets/svg/ladder-sm.svg'
import { ReactComponent as ArrowUpRight } from 'assets/svg/arrow-up-right.svg'
import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg'
import { routes } from 'constants/routes'
import { NavLink } from 'react-router-dom'
import useBreakpoint from 'hooks/useBreakpoint'

const StyledAppBar = styled(AppBar)({
  background: 'transparent',
  borderBottom: '1px solid #E8E8E8',
  justifyContent: 'space-between',
  flexDirection: 'row',
  height: 109,
  boxShadow: 'none'
})

const StyledMobileAppBar = styled(AppBar)({
  background: 'transparent',
  borderBottom: '1px solid #E8E8E8',
  height: 88,
  boxShadow: 'none',
  width: '100%'
})

const StyledNavLink = styled(NavLink)({
  color: '#FFFFFF',
  lineHeight: '109px',
  textDecoration: 'none',
  fontSize: 16,
  fontWeight: 500
})

export default function Header() {
  const isDownSm = useBreakpoint('sm')

  if (isDownSm) {
    return mobileHeader
  }

  return (
    <StyledAppBar position="absolute">
      <BrandLogo />
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
        <StyledNavLink to={routes.about}>About</StyledNavLink>
        <StyledNavLink to={routes.home}>Docs</StyledNavLink>
        <StyledNavLink to={routes.community}>Community</StyledNavLink>
      </Box>
      <LaunchApp />
    </StyledAppBar>
  )
}

const mobileHeader = (
  <StyledMobileAppBar position="absolute">
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%'
      }}
    >
      <BrandLogo />
      <LaunchApp />
      <MenuBtn />
    </Box>
  </StyledMobileAppBar>
)

function BrandLogo() {
  const isDownSm = useBreakpoint('sm')

  return (
    <Box
      width={80}
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: '1px solid #E8E8E8',
        padding: '37px 45px',
        width: {
          xs: 80,
          md: 230
        },
        background: {
          xs: '#8A7392',
          md: 'transparent'
        }
      }}
    >
      <NavLink to={routes.home}>{isDownSm ? <LadderSm /> : <Ladder />}</NavLink>
    </Box>
  )
}

function LaunchApp() {
  return (
    <Button
      variant="contained"
      sx={{
        height: '100%',
        width: {
          md: 230
        },
        borderRadius: 0,
        background: 'linear-gradient(0deg, #FE1A5E, #FE1A5E), #D9D9D9;',
        boxShadow: 'none',
        flexGrow: 1
      }}
      endIcon={<ArrowUpRight />}
    >
      LAUNCH APP
    </Button>
  )
}

function MenuBtn() {
  return (
    <Box
      sx={{
        borderLeft: '1px solid #E8E8E8',
        width: 80,
        height: '100%',
        background: '#3BBDAC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <IconButton>
        <MenuIcon />
      </IconButton>
    </Box>
  )
}
