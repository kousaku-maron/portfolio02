import * as React from 'react'
import styles from 'styled-components'
import WelcomeDonChan from '../lottie/WelcomeDonChan'
import { Button } from '@material-ui/core';

const WelcomeScreen = ({ handleMenuChange, handleShowMenuToggle }) => {
  return (
    <Root>
      <Donchan>
        <WelcomeDonChan width={450} height={450}/>
      </Donchan>
    </Root>
  )
}

const Root = styles.div`
  width: 100vw
  height: 100vh
`

const Donchan = styles.div`
  position: fixed
  bottom: 12px
  left: 12px
`

export default WelcomeScreen
