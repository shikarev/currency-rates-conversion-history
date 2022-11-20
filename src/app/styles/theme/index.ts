import { createTheme } from '@mui/material'

export const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'Open Sans',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 10,
    h1: {
      fontSize: 54,
      fontWeight: 700,
    },
    h2: {
      fontSize: 30,
      fontWeight: 700,
    },
    h3: {
      fontSize: 20,
      fontWeight: 700,
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
    },
    h5: {
      fontSize: 20,
      fontWeight: 400,
    },
    body1: {
      fontSize: 20,
    },
    body2: {
      fontSize: 14,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#BCC2C7 #FFF0',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: '#FFF0',
            width: 8,
            paddingRight: '1rem',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#BCC2C7',
            minHeight: 24,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#BCC2C7',
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#BCC2C7',
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#BCC2C7',
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#BCC2C7',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          fontSize: '16px',
          fontWeight: 400,
          height: 40,
          borderRadius: 20,
          boxShadow: 'none',
          '&:hover': {
            background: '#232FA9',
            boxShadow: 'none',
          },
          '&:active': {
            background: '#111755',
            boxShadow: 'none',
          },
          textTransform: 'unset',
        },
        outlinedPrimary: {
          fontSize: '16px',
          fontWeight: 400,
          height: 40,
          borderRadius: 20,
          border: '1px solid #1A237E',
          textTransform: 'unset',
        },
      },
    },
  },
  palette: {
    primary: { main: '#1A237E', light: '#232FA9', dark: '#111755' },
    background: { default: '#FFFFFF' },
  },
})
