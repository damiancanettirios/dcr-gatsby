import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import 'typeface-poppins'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20BF55',
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

function withRoot(Component) {
  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div style={{ backgroundColor: `#1D1E2C` }}>
          <Component {...props} />
        </div>
      </MuiThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
