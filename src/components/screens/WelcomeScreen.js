import * as React from 'react'
import styled from 'styled-components'
// import colors from '../../constants/colors'
import WelcomeDonChan from '../lottie/WelcomeDonChan'

const WelcomeScreen = ({ handleMenuChange, handleShowMenuToggle }) => {
  return (
    <Root>
      <Container>
        <h1>ホーム</h1>
        <Donchan>
          <WelcomeDonChan width={450} height={450}/>
        </Donchan>
      </Container>
    </Root>
  )
}

const Root = styled.div`
  width: 100vw
  height: 100vh
`

const Container = styled.div`
  padding: 48px
`

const Donchan = styled.div`
  position: fixed
  bottom: 12px
  left: 12px
`

export default WelcomeScreen
