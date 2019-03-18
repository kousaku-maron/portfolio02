import * as React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import WelcomeDonChan from '../lottie/WelcomeDonChan'
import FluidButton from '../button/FluidButton'
import { Transition } from 'react-transition-group'

const WelcomeScreen = ({ handleMenuChange, handleShowMenuToggle }) => {
  return (
    <Root>
      <Donchan>
        <WelcomeDonChan width={450} height={450}/>
      </Donchan>
    </Root>
  )
}

const Root = styled.div`
  width: 100vw
  height: 100vh
`

const Donchan = styled.div`
  position: fixed
  bottom: 12px
  left: 12px
`

export default WelcomeScreen
