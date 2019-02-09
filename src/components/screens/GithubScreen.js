import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Spinner from '../others/Spinner'
import GithubRepoCard from '../others/GithubRepoCard'

const styles = theme => ({
  root: {
    width: '100%',
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

class GithubScreen extends React.Component {
  componentDidMount() {
    this.props.getGithubInfo()
  }
  
  render() {
    const { github, classes } = this.props

    if(github.repo.processing) {
      return <Spinner />
    }

    return (
      <div className={classes.root}>
        <Typography variant='h4' gutterBottom>Github</Typography>

        <div className={classes.divider} />

        <Grid container spacing={24}>
          {(github.repo.contents && github.repo.contents.length > 1)?
            (
              github.repo.contents.map((content, index) => {
                return (
                  <Grow
                    key={content.id}
                    className={classes.item}
                    in={!github.repo.processing}
                    timeout={1000}
                  >
                    <Grid item xs={12} sm={6} md={4}>
                      <GithubRepoCard
                        title={content.full_name}
                        language={content.language}
                        url={content.html_url}
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

export default  withStyles(styles)(GithubScreen)
