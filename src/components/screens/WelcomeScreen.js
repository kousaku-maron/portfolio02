import * as React from 'react'
import styles from 'styled-components'
import WelcomeDonChan from '../lottie/WelcomeDonChan'

const WelcomeScreen = ({ handleMenuChange }) => {
  return (
    <Root>
      <Donchan>
        <WelcomeDonChan width={450} height={450}/>
      </Donchan>
      {/* <HeaderButton>
        <span>hello world</span>
      </HeaderButton> */}
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
