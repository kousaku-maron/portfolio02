import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import colors from '../../constants/colors'

const white = colors.quaternary.main
const innerDefaultColor = colors.tertiary.main
const outerDefaultColor = colors.secondary.main

const FluidButton = ({ onClick, innerColor, outerColor, children }) => {
  const [ hover, setHover ] = useState(false)

  const _innerColor = innerColor || innerDefaultColor
  const _outerColor = outerColor || outerDefaultColor
  const _onClick = onClick || (() => {})

  const scaleUp = keyframes`
    from {
      transform: scale(1)
    }
    to {
      transform: scale(${hover? 1.05 : 1})
    }
  `

  const Container = styled.div`
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: 210px
    height: 210px
    disbled: true
  `

  const Outer = styled.div`
    position: absolute
    top: 0
    left: 0
    width: 210px
    height: 210px
    background: ${_outerColor}
    border-radius: 105px
    animation-name: ${scaleUp}
    animation-duration: 0.5s
    animation-timing-function: ease-in
    animation-iteration-count: infinite
    animation-direction: alternate
    z-index: -1
  `

  const Outer2 = styled.div`
    position: absolute
    top: 10px
    left: 10px
    width: 210px
    height: 210px
    background: ${_outerColor}
    border-radius: 105px
    animation-name: ${scaleUp}
    animation-duration: 0.5s
    animation-timing-function: ease-in
    animation-iteration-count: infinite
    animation-direction: alternate
    z-index: -1
  `

  const Inner = styled.div`
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    width: 200px
    height: 200px
    border-radius: 100px
    background: ${_innerColor}
    color: ${white}
    cursor: pointer

  `
  
  return (
    <Container>
      <Outer />
      <Inner
        onClick={_onClick}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {children}
      </Inner>
    </Container>
  )
}

export default FluidButton
