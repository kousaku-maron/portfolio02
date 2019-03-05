import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    width: 250,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 500,
    }
  },
})

const ProfileCard = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='h6' gutterBottom>Kosaku Kurino</Typography>
        <Typography variant='body2'>25</Typography>
        <Typography variant='body2'>フロントエンド/サーバーサイド/Unityエンジニア</Typography>

        <div className={classes.divider} />
              
        <Typography variant='subtitle2'>得意言語</Typography>
        <Typography variant='body2'>
          node.js/python/C#(Unity)
        </Typography>
      </CardContent>
    </Card>
  )
}

export default withStyles(styles)(ProfileCard)