import { AppBar, Box, Button, styled } from '@mui/material'
import { ReactComponent as Ladder } from 'assets/svg/ladder.svg'
import { routes } from 'constants/routes'
import { NavLink } from 'react-router-dom'

const StyledAppBar = styled(AppBar)({
  background: 'transparent',
  borderBottom: '1px solid #ffffff',
  justifyContent: 'space-between',
  flexDirection: 'row'
})

export default function Header() {
  return (
    <StyledAppBar>
      <Box>
        <Ladder />
      </Box>
      <Box>
        <NavLink to={routes.home}>Home</NavLink>
        <NavLink to={routes.home}>About</NavLink>
        <NavLink to={routes.home}>Docs</NavLink>
        <NavLink to={routes.home}>Community</NavLink>
      </Box>
      <Button variant="contained">LAUNCH APP</Button>
    </StyledAppBar>
  )
}
