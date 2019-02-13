import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'

import { drawerWidth, drawerWidthPc, items } from '../../constants/drawer'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidthPc,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: drawerWidthPc
    }
  },
  appBar: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidthPc}px)`,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
    marginLeft: -12,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing.unit * 3,
    },
  },
  toolbar: theme.mixins.toolbar,
})

const Menu = ({ handleMenuChange }) => {
  return (
  <div>
    <List>
      {items.map((item, index) => (
        <ListItem
          key={item.id}
          button
          onClick={() => handleMenuChange(item.id)}
        >
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  </div>
  )
}

const Layout = ({
  drawerOpen,
  handleDrawerToggle,
  handleMenuChange,
  classes,
  children
}) => {
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='fixed'>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color='inherit'
            aria-label='Menu'
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.grow} variant='h6' color='inherit'>
            Kosaku Kurino Portfolio
          </Typography>
          {/* <Button color='inherit'>Login</Button> */}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden xsDown implementation='css'>
          <Drawer
            open={true}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Menu handleMenuChange={handleMenuChange} />
          </Drawer>
        </Hidden>
        <Hidden smUp implementation='css'>
          <Drawer
            open={drawerOpen}
            onClose={handleDrawerToggle}
            variant='temporary'
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Menu handleMenuChange={handleMenuChange} />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default  withStyles(styles)(Layout)
