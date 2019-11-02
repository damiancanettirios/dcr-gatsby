import { createMuiTheme } from '@material-ui/core/styles'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20BF55',
      dark: '#137233',
      contrastText: '#fff',
    },
    secondary: {
      main: '#C6C7C4',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: ['Poppins', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
  },
})

export default theme
