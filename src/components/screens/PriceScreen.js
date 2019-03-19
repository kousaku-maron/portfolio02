import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
})

const Contacts = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography variant='h4' gutterBottom>Price</Typography>
    </div>
  )
}

export default  withStyles(styles)(Contacts)
