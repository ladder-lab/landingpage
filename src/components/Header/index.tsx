import { useState, useCallback, useEffect } from 'react'
import { AppBar, Box, Button, styled, IconButton } from '@mui/material'
import { ReactComponent as Ladder } from 'assets/svg/ladder.svg'
import { ReactComponent as LadderSm } from 'assets/svg/ladder-sm.svg'
import { ReactComponent as MenuIcon } from 'assets/svg/menu.svg'
import { routes } from 'constants/routes'
import { NavLink, useLocation } from 'react-router-dom'
import useBreakpoint from 'hooks/useBreakpoint'
import ExternalLink from 'components/ExternalLink'
import MobileMenu from './MobileMenu'
import { ReactComponent as CloseIcon } from 'assets/svg/close.svg'
// import { DocLink } from 'constants/index'

interface Tab {
  title: string
  route?: string
  link?: string
}

export const Tabs: Tab[] = [
  // { title: 'Home', route: routes.home },
  // { title: 'About', route: routes.about },
  // { title: 'Docs', link: DocLink },
  // { title: 'Community', route: routes.community },
  { title: 'About', route: '#about' },
  { title: 'Tech', route: '#tech' },
  { title: 'Values', route: '#values' },
  { title: 'Community', route: '#community' }
]

const StyledAppBar = styled(AppBar)({
  padding: '38px 30px 0',
  background: 'transparent',
  flexDirection: 'row',
  boxShadow: 'none'
})

const StyledMobileAppBar = styled(AppBar)({
  background: 'transparent',
  borderBottom: '1px solid #E8E8E8',
  height: 88,
  boxShadow: 'none',
  width: '100%'
})

const StyledNavLink = styled('a')({
  textDecoration: 'none',
  color: '#252525',
  fontFamily: 'Sora',
  fontSize: '16px',
  fontWeight: '400',
  textTransform: 'capitalize',
  lineHeight: '43px',
  '&:hover': {
    textDecoration: 'line-through'
  }
})

const StyledExternalLink = styled(ExternalLink)({
  color: '#252525',
  fontFamily: 'Sora',
  fontSize: '16px',
  fontWeight: '400',
  textTransform: 'capitalize',
  lineHeight: '43px',
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
      <Box
        sx={{
          maxWidth: '1440px',
          width: '100%',
          margin: 'auto',
          padding: '0 30px'
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            borderRadius: '100px',
            background: 'rgba(255,255,255,0.5)',
            height: '72px',
            alignItems: 'center',
            padding: '0 28px 0 34px'
          }}
        >
          <BrandLogo />
          <Box
            sx={{
              display: 'flex',
              gap: '120px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                aligmItems: 'center',
                gap: 96,
                justifyContent: 'center'
              }}
            >
              {Tabs.map(({ title, route, link }, idx) =>
                route ? (
                  <StyledNavLink key={idx} href={route}>
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
          </Box>
        </Box>
      </Box>
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
            height: '100%',
            alignItems: 'center'
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
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <NavLink to={routes.home}>{isDownMd ? <LadderSm /> : <Ladder />}</NavLink>
    </Box>
  )
}

function LaunchApp() {
  return (
    <ExternalLink href="https://test.ladder.top/airdrop">
      <Button
        variant="contained"
        sx={{
          height: '43px',
          display: 'inline-flex',
          padding: '0 23px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '4px',
          borderRadius: '200px',
          background: '#252525',
          color: '#FFF',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '600',
          textTransform: 'uppercase',
          '&:hover': {
            boxShadow: 'none'
          }
        }}
      >
        Launch Testnet
      </Button>
    </ExternalLink>
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
