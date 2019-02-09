import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { drawerWidth } from '../../constants/drawer'

const size = 200

const styles = theme => ({
  root: {
    position: 'absolute',
    top: `calc(50% - ${size/2}px)`,
    left: `calc(50% - ${size/2}px)`,
    [theme.breakpoints.up('sm')]: {
      left: `calc(50% - ${size/2}px + ${drawerWidth/2}px)`,
    }
  },
  paper: {
    display: 'flex',
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Spinner = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.paper}>
        <CircularProgress size={54} color='secondary' />
      </div>
    </div>
  )
}

export default  withStyles(styles)(Spinner)
