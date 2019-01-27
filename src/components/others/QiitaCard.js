import * as React from 'react'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  card: {
    position: 'relative',
    width: 300,
    height: 280,
  },
  media: {
    height: 150,
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

const QiitaCard = ({
  image,
  title,
  url,
  created_at,
  updated_at,
  classes
}) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant='subtitle2' component='h2'>{title}</Typography>
        <Typography className={classes.date} variant='caption'>投稿日: {moment(created_at).format('YYYY/MM/DD')}</Typography>
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

export default withStyles(styles)(QiitaCard)