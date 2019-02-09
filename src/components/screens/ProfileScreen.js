import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Spinner from '../others/Spinner'
import AvatarImageTemp from '../../constants/avatar.jpeg'
import ProfileCard from '../others/ProfileCard'

const styles = theme => ({
  root: {
    width: '100%',
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
  card: {
    display: 'flex',
    flexGrow: 1,
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

class ProfileScreen extends React.Component {
  componentDidMount() {
    this.props.getProfileInfo()
  }

  render() {
    const { github, classes } = this.props

    if(github.user.processing) {
      return <Spinner />
    }

    return (
      <div className={classes.root}>

              
        <div className={classes.divider} />

        {(github.user.contents && github.user.contents.avatar_url)?
          (
            <div className={classes.avatar}>
              <Grow in={!github.user.processing} timeout={1000}>
                <img className={classes.avatarImg} src={github.user.contents.avatar_url} alt='github avatar' />
              </Grow>
            </div>
          )
          : (
            <div className={classes.avatar}>
              <Grow in={!github.user.processing} timeout={1000}>
                <img className={classes.avatarImg} src={AvatarImageTemp} alt='github avatar' />
              </Grow>
            </div>
          )
        }

        <div className={classes.divider} />

        <div className={classes.card}>
          <Grow in={!github.user.processing} {...(!github.user.processing ? { timeout: 2000 } : {})}>
            <ProfileCard />
          </Grow>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(ProfileScreen)
