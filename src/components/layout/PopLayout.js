import * as React from 'react'
import styled from 'styled-components'

const Layout = ({ children, handleMenuChange }) => (
  <div>
    <Header>
      <Menu onClick={() => handleMenuChange('profile')}>
        <span>Profile</span>
      </Menu>
      <Menu onClick={() => handleMenuChange('qiita')}>
        <span>Qiita</span>
      </Menu>
      <Menu onClick={() => handleMenuChange('github')}>
        <span>Github</span>
      </Menu>
      <Menu onClick={() => handleMenuChange('contacts')}>
        <span>Contacts</span>
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
  background-color: black
  color: white
  &:hover {
    background-color: gray
  }
`

export default Layout
