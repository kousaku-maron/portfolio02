import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Main from './containers/Main'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CssBaseline />
        <Main />
      </div>
    );
  }
}

export default App
