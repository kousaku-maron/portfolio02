import { createMuiTheme } from '@material-ui/core/styles'
import brown from '@material-ui/core/colors/brown'

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      light: brown[300],
      main: brown[500],
      dark: brown[700],
    },
  },
  typography: {
    useNextVariants: true,
  }
})

export default theme