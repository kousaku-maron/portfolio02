import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
})

const Github = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant='h4' gutterBottom>Github</Typography>
    </div>
  )
}

export default  withStyles(styles)(Github)
