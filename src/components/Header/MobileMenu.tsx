import { Drawer, Box, styled } from '@mui/material'
import { Tabs } from '.'
import { NavLink } from 'react-router-dom'
import ExternalLink from 'components/ExternalLink'
import { CopyWriting } from 'components/Footer'

const StyledNavLink = styled(NavLink)({
  color: '#FFFFFF',
  textDecoration: 'none',
  fontSize: 28,
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'line-through'
  }
})

const StyledExternalLink = styled(ExternalLink)({
  color: '#FFFFFF',
  fontSize: 28,
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'line-through'
  }
})

export default function MobileMenu({ isOpen, onDismiss }: { isOpen: boolean; onDismiss: () => void }) {
  const Year = new Date(Date.now()).getFullYear()
  return (
    <Drawer
      open={isOpen}
      onClose={onDismiss}
      anchor="top"
      BackdropProps={{ sx: { backgroundColor: 'transparent' } }}
      PaperProps={{
        sx: {
          top: 88,
          background: '#000000',
          height: 'calc(100% - 88px)',
          padding: '60px 0'
        }
      }}
      sx={{
        zIndex: (theme) => theme.zIndex.appBar,
        overflow: 'hidden',
        top: 88
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" height="100%">
        <Box display="grid" gap={60}>
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
        <CopyWriting text={`Copyright©${Year || '2023'} Ladder DAO`} />
      </Box>
    </Drawer>
  )
}
