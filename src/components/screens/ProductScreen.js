import * as React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%',
  },
  divider: {
    marginBottom: theme.spacing.unit * 2,
  },
})

class ProductScreen extends React.Component {
  render() {
    const { qiita, classes } = this.props

    return (
      <div className={classes.root}>
        <Typography variant='h4' gutterBottom>Product</Typography>
        <div className={classes.divider} />
        <Typography>hello world</Typography>
      </div>
    )
  }
}

export default  withStyles(styles)(ProductScreen)
