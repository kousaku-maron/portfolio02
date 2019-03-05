import React, { useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grow from '@material-ui/core/Grow'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Spinner from '../others/Spinner'
import GithubRepoCard from '../others/GithubRepoCard'
import { githubReposCollection } from '../../modules/firebase'

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

const GithubScreen =  props => {
  useEffect(() => {
    githubReposCollection.orderBy('updated_at').onSnapshot(querySnapshot => {
      const repos = []
      querySnapshot.forEach(doc => {
        repos.push({ id: doc.id, ...doc.data() })
      })
      repos.reverse()
      props.handleSetGithubRepos(repos)
    })
  }, [])

  const { github, classes } = props

  if(github.repos.processing) {
    return <Spinner />
  }

  return (
    <div className={classes.root}>
      <Typography variant='h4' gutterBottom>Github</Typography>

      <div className={classes.divider} />

      <Grid container spacing={24}>
        {(github.repos.contents && github.repos.contents.length > 1)?
          (
            github.repos.contents.map((content, index) => {
              return (
                <Grow
                  key={content.id}
                  className={classes.item}
                  in={!github.repos.processing}
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

export default  withStyles(styles)(GithubScreen)
