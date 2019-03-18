import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
// import { Transition } from 'react-transition-group'
import colors from '../../constants/colors'
import FluidButton from '../button/FluidButton'

const Layout = ({ children, menu, handleMenuChange }) => {
  const [ welcomeElement, setWelcomeElement ] = useState(null)
  const [ skillElement, setSkillElement ] = useState(null)
  const [ priceElement, setPriceElement ] = useState(null)
  const [ apoElement, setApoElement ] = useState(null)
  
  // const [ circlePos, setCirclePos ] = useState({ top: 0, right: 0, bottom: 0, left: 0 })
  // const [ circleSize, setCircleSize ] = useState({ width: 0, height: 0 })
  
  const [ animate, setAnimate ] = useState(false)
  useEffect(() => {
    setAnimate(true)
  }, [menu])

  // const switching = element => {
  //   const { top, right, bottom, left, width, height } = element.getBoundingClientRect()
  //   setCirclePos({ top, right, bottom, left })
  //   setCircleSize({ width, height })
  // }
  
  return (
    <div>
      {children}
      <Welcome ref={(el) => setWelcomeElement(el)}>
        <FluidButton
          outer={colors.priamry.main}
          size={100}
          onClick={() => {
            // switching(welcomeElement)
            handleMenuChange('welcome')
          }}
        >
          ホームに戻る
        </FluidButton>
      </Welcome>
      <Skill ref={(el) => setSkillElement(el)}>
        <FluidButton
          outer={colors.priamry.main}
          size={100}
          onClick={() => {
            // switching(skillElement)
            handleMenuChange('profile')
          }}
        >
          彼の能力を知る
        </FluidButton>
      </Skill>
      <Price ref={(el) => setPriceElement(el)}>
        <FluidButton
          outer={colors.priamry.main}
          size={100}
          onClick={() => {
            // switching(priceElement)
            handleMenuChange('price')
          }}
        >
          彼の単価を知る
        </FluidButton>
      </Price>
      <Apo ref={(el) => setApoElement(el)}>
        <FluidButton
          size={120}
          onClick={() => {
            // switching(apoElement)
            handleMenuChange('contact')
          }}
        >
          コンタクトをとる<br/>(準備中)
        </FluidButton>
      </Apo>

      {/* <Transition in={animate} timeout={500}>
        {(state) => {
          return (
            <Circle state={state} position={circlePos} size={circleSize} />
          )
        }}
      </Transition> */}
    </div>
  )
}

const Apo = styled.div`
  position: fixed
  right: 48px
  bottom: 48px
`

const Price = styled.div`
  position: fixed
  right: 198px
  bottom: 48px
`

const Skill = styled.div`
  position: fixed
  right: 328px
  bottom: 48px
`

const Welcome = styled.div`
  position: fixed
  right: 458px
  bottom: 48px
`

const scaleUp = keyframes`
  from {
    transform: scale(1)
  }
  to {
    transform: scale(10)
  }
`

const Stop = keyframes`
from {
  transform: scale(0)
}
to {
  transform: scale(0)
}
`

// const Circle = styled.div`
//   position: absolute
//   top: ${({ position }) => position.top}px
//   right: ${({ position }) => position.right}px
//   bottom: ${({ position }) => position.bottom}px
//   left: ${({ position }) => position.left}px
//   width: ${({ size }) => size.width}px
//   height: ${({ size }) => size.height}px
//   border-radius: ${({ size }) => size.width/2}px
//   background: black
//   z-index: -1
//   animation-name: ${({ state }) => state === 'enterd' || state === 'entering'? scaleUp : Stop}
//   animation-duration: 0.5s
//   animation-timing-function: ease-in
//   animation-iteration-count: 1
// `

export default Layout
