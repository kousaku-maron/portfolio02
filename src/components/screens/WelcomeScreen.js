import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    marginBottom: theme.spacing.unit * 2,
  },
})

const WelcomeScreen = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <p>aaa</p>
      <p>bbbb</p>
    </div>
  )
}

export default withStyles(styles)(WelcomeScreen)
