import * as React from 'react'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  card: {
    position: 'relative',
    width: 250,
    height: 200,
    [theme.breakpoints.up('sm')]: {
      width: 300,  
    }
  },
  date: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    left: theme.spacing.unit * 2,
  },
  controls: {
    position: 'absolute',
    bottom: theme.spacing.unit,
    right: theme.spacing.unit,
  },
})

const GithubRepoCard = ({
  title,
  language,
  url,
  created_at,
  updated_at,
  classes
}) => {

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant='subtitle2' component='h2'>{title}</Typography>
        <div className={language}>
          <Typography color='primary' variant='h4'>{language || '-'}</Typography>
        </div>
        <div className={classes.date}>
          <Typography  variant='caption'>投稿日: {moment(created_at).format('YYYY/MM/DD')}</Typography>
          <Typography  variant='caption'>更新日: {moment(updated_at).format('YYYY/MM/DD')}</Typography>
        </div>
      </CardContent>
      <CardActions className={classes.controls}>
        <Button
          size='small'
          color='primary'
          href={url}
          target='_blank'>
          View
        </Button>
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(GithubRepoCard)