import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import QiitaCard from '../others/QiitaCard'
import Spinner from '../others/Spinner'

const styles = theme => ({
  root: {
    width: '100%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    marginBottom: theme.spacing.unit * 2,
  },
})

class QiitaScreen extends React.Component {
  componentDidMount() {
    this.props.getQiitaInfo()
  }

  render() {
    const { qiita, classes } = this.props

    if(qiita.user.processing) {
      return <Spinner />
    }

    return (
      <div className={classes.root}>
        <Typography variant='h4' gutterBottom>Qiita</Typography>

        <div className={classes.divider} />

        <Grid container spacing={24}>
          {(qiita.user.contents && qiita.user.contents.length > 1)?
            (
              qiita.user.contents.map((content, index) => {
                return (
                  <Grow
                    key={content.id}
                    className={classes.item}
                    in={!qiita.user.processing}
                    timeout={1000}
                  >
                    <Grid item xs={12} sm={6} md={4}>
                      <QiitaCard
                        image={'http://cdn.qiita.com/assets/qiita-rectangle-71910ff07b744f263e4a2657e2ffd123.png'}
                        title={content.title}
                        url={content.url}
                        created_at={content.created_at}
                        updated_at={content.updated_at}
                      />
                    </Grid>
                  </Grow>
                )
              })
            )
            : null
           }
        </Grid>
      </div>
    )
  }
}

export default  withStyles(styles)(QiitaScreen)
