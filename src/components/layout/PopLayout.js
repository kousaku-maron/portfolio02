import * as React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const Layout = ({ children, showMenu, handleMenuChange }) => (
  <div>
    <Header style={{ display: showMenu? 'flex' : 'none' }}>
      <Menu onClick={() => handleMenuChange('profile')}>
        <span>彼の能力を知る</span>
      </Menu>
      <Menu onClick={() => handleMenuChange('price')}>
        <span>彼の単価を知る</span>
      </Menu>
    </Header>
    {children}
  </div>
)

const Header = styled.div`
  display: flex
  flex-grow: 1
  justify-content: center
  align-items: center
  height: 50px
`

const Menu = styled.div`
  display: flex
  justify-content: center
  align-items: center
  width: 200px
  height: 40px
  margin-left: 10px
  margin-right: 10px
  border-radius: 20px
  background-color: ${colors.tertiary.main}
  color: ${colors.quaternary.main}
  cursor: pointer
  &:hover {
    opacity: 0.7
  }
`

export default Layout
