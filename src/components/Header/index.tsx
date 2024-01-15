import { useCallback, useEffect, useState } from 'react'
import { AppBar, Box, Button, IconButton, Popper, styled, useTheme } from '@mui/material'
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
  hover?: string
}

export const Tabs: Tab[] = [
  // { title: 'Home', route: routes.home },
  // { title: 'About', route: routes.about },
  // { title: 'Docs', link: DocLink },
  // { title: 'Community', route: routes.community },
  { title: 'Ordinals NFT 🔥', route: '#', hover: 'coming soon...' },
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
  background: 'rgba(255,255,255,0.5)',
  // borderBottom: '1px solid #E8E8E8',
  height: 67,
  boxShadow: 'none',
  width: '100%',
  padding: '0 16px'
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
    textDecoration: 'underline'
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
  const [isPopperOpen, setPopperOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setPopperOpen(true)
    setAnchorEl(event.currentTarget)
  }

  const handleMouseLeave = () => {
    setPopperOpen(false)
  }

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
              gap: '70px'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 50,
                maxHeight: 50
              }}
            >
              {Tabs.map(({ title, route, link, hover }, idx) =>
                hover ? (
                  <StyledNavLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} key={idx} href={route}>
                    {title}
                  </StyledNavLink>
                ) : route ? (
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
            <Popper
              open={isPopperOpen}
              anchorEl={anchorEl}
              sx={{
                background: 'white',
                borderRadius: '8px',
                padding: '8px 13px',
                zIndex: 99
              }}
            >
              Coming soon...
            </Popper>
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
          <Box display={'flex'} gap={20}>
            <LaunchApp />
            <MenuBtn isOpen={isOpen} onClick={onClick} />
          </Box>
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
        justifyContent: 'center',
        a: {
          display: 'flex'
        }
      }}
    >
      <NavLink to={routes.home}>{isDownMd ? <LadderSm /> : <Ladder />}</NavLink>
    </Box>
  )
}

function LaunchApp() {
  const theme = useTheme()
  return (
    <Box display={'flex'} gap={20}>
      <ExternalLink href="https://app.ladder.top/swap">
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
            textTransform: 'capitalize',
            border: '1px solid #252525',
            '&:hover': {
              boxShadow: 'none',
              background: '#fff',
              color: '#252525'
            },
            [theme.breakpoints.down('md')]: {
              height: 32,
              width: '130px',
              borderRadius: '148px',
              fontSize: '11.848px',
              padding: '0',
              fontFamily: 'Sora'
            }
          }}
        >
          Launch App
        </Button>
      </ExternalLink>
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
            textTransform: 'capitalize',
            border: '1px solid #252525',
            '&:hover': {
              boxShadow: 'none',
              background: '#fff',
              color: '#252525'
            },
            [theme.breakpoints.down('md')]: {
              height: 32,
              width: '130px',
              borderRadius: '148px',
              fontSize: '11.848px',
              padding: '0',
              fontFamily: 'Sora'
            }
          }}
        >
          Testnet
        </Button>
      </ExternalLink>
    </Box>
  )
}

function MenuBtn({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <Box
      sx={{
        // borderLeft: '1px solid #E8E8E8',
        // width: 80,
        height: '100%',
        // background: '#3BBDAC',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <IconButton sx={{ padding: 0 }} onClick={onClick}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Box>
  )
}
