import * as React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import WelcomeDonChan from '../lottie/WelcomeDonChan'
import FluidButton from '../button/FluidButton'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'

const WelcomeScreen = ({ handleMenuChange, handleShowMenuToggle }) => {
  return (
    <Root>
      <Donchan>
        <WelcomeDonChan width={450} height={450}/>
      </Donchan>
      <Skill>
        <FluidButton
          outerColor={colors.priamry.main}
          onClick={() => {
            handleShowMenuToggle(true)
            handleMenuChange('profile')
          }}
        >
          彼の能力を知る
        </FluidButton>
      </Skill>
      <Price>
        <FluidButton
          outerColor={colors.priamry.main}
        >
          彼の単価を知る
        </FluidButton>
      </Price>
      <Apo>
        <FluidButton>
          コンタクトをとる<br/>(準備中)
        </FluidButton>
      </Apo>


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

const Apo = styled.div`
  position: fixed
  right: 48px
  bottom: 48px
`

const Skill = styled.div`
  position: fixed
  right: 648px
  bottom: 48px
`

const Price = styled.div`
  position: fixed
  right: 348px
  bottom: 48px
`

export default WelcomeScreen
