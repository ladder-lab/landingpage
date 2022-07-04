import { useState, useCallback, useEffect } from 'react'
import { AppBar, Box, Button, styled, IconButton } from '@mui/material'
import { ReactComponent as Ladder } from 'assets/svg/ladder.svg'
import { ReactComponent as LadderSm } from 'assets/svg/ladder-sm.svg'
import { ReactComponent as ArrowUpRight } from 'assets/svg/arrow-up-right.svg'
import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg'
import { routes } from 'constants/routes'
import { NavLink, useLocation } from 'react-router-dom'
import useBreakpoint from 'hooks/useBreakpoint'
import ExternalLink from 'components/ExternalLink'
import MobileMenu from './MobileMenu'
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg'

interface Tab {
  title: string
  route?: string
  link?: string
}

export const Tabs: Tab[] = [
  { title: 'Home', route: routes.home },
  { title: 'About', route: routes.about },
  { title: 'Docs', link: '/' },
  { title: 'Community', route: routes.community }
]

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
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'line-through'
  }
})

const StyledExternalLink = styled(ExternalLink)({
  color: '#FFFFFF',
  lineHeight: '109px',
  '&:hover': {
    textDecoration: 'line-through'
  }
})

export default function Header() {
  const isDownMd = useBreakpoint('md')
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const handleMenuDismiss = useCallback(() => {
    setMenuOpen(false)
  }, [])

  if (isDownMd) {
    return (
      <MobileHeader
        isOpen={menuOpen}
        onDismiss={handleMenuDismiss}
        onClick={() => {
          setMenuOpen((open) => !open)
        }}
      />
    )
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
        {Tabs.map(({ title, route, link }, idx) =>
          route ? (
            <StyledNavLink key={idx} to={route}>
              {title}
            </StyledNavLink>
          ) : link ? (
            <StyledExternalLink key={idx} href={link}>
              {title}
            </StyledExternalLink>
          ) : null
        )}
      </Box>
      <LaunchApp />
    </StyledAppBar>
  )
}

function MobileHeader({ isOpen, onDismiss, onClick }: { isOpen: boolean; onDismiss: () => void; onClick: () => void }) {
  return (
    <>
      <MobileMenu isOpen={isOpen} onDismiss={onDismiss} />
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
          <MenuBtn isOpen={isOpen} onClick={onClick} />
        </Box>
      </StyledMobileAppBar>
    </>
  )
}

function BrandLogo() {
  const isDownMd = useBreakpoint('md')

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
          xs: '#00000026',
          md: 'transparent'
        },
        '&:hover': {
          background: '#000000'
        }
      }}
    >
      <NavLink to={routes.home}>{isDownMd ? <LadderSm /> : <Ladder />}</NavLink>
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
        flexGrow: 1,
        '&:hover': {
          boxShadow: 'none',
          background: 'linear-gradient(0deg, #000000, #000000), #000000;'
        }
      }}
      endIcon={<ArrowUpRight />}
    >
      LAUNCH APP
    </Button>
  )
}

function MenuBtn({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
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
      <IconButton onClick={onClick}>{isOpen ? <CloseIcon /> : <MenuIcon />}</IconButton>
    </Box>
  )
}
