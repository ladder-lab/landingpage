import {
  createTheme,
  styled,
  ThemeProvider as MuiThemeProvider
} from '@mui/material/styles'

interface Height {
  header: string
  mobileHeader: string
  footer: string
}
interface Width {
  sidebar: string
  maxContent: string
  minContent: string
}

declare module '@mui/material/styles' {
  interface Theme {
    height: Height
    width: Width
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    height: Height
    width: Width
  }
  interface Theme {
    height: Height
    width: Width
  }
}

export const theme = {
  palette: {
    primary: {
      light: '#FE1A5E',
      main: '#FE1A5E',
      dark: '#FE1A5E',
      contrastText: '#ffffff'
    },
    error: {
      main: '#D15526',
      light: '#FCC09E'
    },
    warning: {
      main: '#487284'
    },
    info: {
      main: '#80A0AD'
    },
    success: {
      main: '#31B047'
    },
    background: {
      default: '#000000',
      paper: 'rgba(255, 255, 255, 0.26)'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFFFFF',
      disabled: '#DDE3ED'
    },
    action: {
      disabledOpacity: 0.8
    }
  },
  height: {
    header: '75px',
    mobileHeader: '51px',
    footer: '70px'
  },
  width: {
    sidebar: '250px',
    maxContent: '1110px',
    minContent: '300px'
  },
  shape: {
    border: '1px solid',
    borderRadius: 15
  },
  spacing: (factor: number) => `${1 * factor}px`
}

export const override: any = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: theme.palette.background.default,
        fontSize: 16
      },
      'html, input, textarea, button, body': {
        fontFamily: 'Helvetica, sans-serif',
        fontDisplay: 'fallback'
      },
      '@supports (font-variation-settings: normal)': {
        'html, input, textarea, button, body': {
          fontFamily: 'Helvetica, sans-serif',
          fontDisplay: 'fallback'
        }
      }
    }
  }
}

export const HideOnMobile = styled(
  'div',
  {}
)<{ breakpoint?: 'sm' | 'md' }>(({ theme, breakpoint }) => ({
  [theme.breakpoints.down(breakpoint ?? 'sm')]: {
    display: 'none'
  }
}))

export const ShowOnMobile = styled(
  'div',
  {}
)<{ breakpoint?: 'sm' | 'md' }>(({ theme, breakpoint }) => ({
  display: 'none',
  [theme.breakpoints.down(breakpoint ?? 'sm')]: {
    display: 'block'
  }
}))

const THEME = createTheme({
  ...theme,
  components: {
    ...override
  },
  typography: {
    allVariants: {
      fontFamily: 'Helvetica, sans-serif'
    }
  }
})

export function ThemeProvider({ children }: any) {
  return <MuiThemeProvider theme={THEME}>{children}</MuiThemeProvider>
}

export default THEME
