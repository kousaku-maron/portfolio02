import React, { useState } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import ButtonImage from '../../assets/images/pink_button.png'

const PinkFluidButton = ({ onClick, color, size, children }) => {
  const [ hover, setHover ] = useState(false)
  
  return (
    <Container
      size={size || 130}
      color={color || colors.tertiary.main}
      onClick={onClick}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image src={ButtonImage} />
      {children}
    </Container>
  )
}

const Container = styled.div`
  display: flex
  justify-content: center
  align-items: center
  text-align: center
  position: relative
  width: ${({ size }) => size}px
  height: ${({ size }) => size}px
  font-size: ${({ size }) => size < 131? 12 : 18}px
  color: ${({ color }) => color}
  cursor: pointer
`

const Image = styled.img`
  position: absolute
  width: 100%
  z-index: -1
`

export default PinkFluidButton
