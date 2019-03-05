import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import AvatarImageTemp from '../../constants/avatar.jpeg'
import ProfileCard from '../others/ProfileCard'

const styles = theme => ({
  root: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    display: 'flex',
    flexGrow: 1,
  },
  avatar: {
    height: 200,
    display: 'flex',
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    }
  },
  avatarImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 300,
      height: 300,
      borderRadius: 150,
    }
  },
  paper: {
    width: 300,
    padding: theme.spacing.unit * 2,
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 500,
    }
  },
  divider: {
    marginBottom: theme.spacing.unit * 2,
  },
  section: {
    height: '70vh',
  },
})

const ProfileScreen = props => {
  const { classes } = props

  return (
    <div className={classes.root}>

      <div className={classes.divider} />  
      
      <div className={classes.avatar}>
        <Grow in={true} timeout={1000}>
          <img className={classes.avatarImg} src={AvatarImageTemp} alt='github avatar' />
        </Grow>
      </div>

      <div className={classes.divider} />

      <div className={classes.flex}>
        <Grow in={true} timeout={2000}>
          <ProfileCard />
        </Grow>
      </div>
    </div>
  )
}

export default withStyles(styles)(ProfileScreen)
