import * as React from 'react'
import Layout from './layout/PopLayout'
import WelcomeScreen from './screens/WelcomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import PriceScreen from './screens/PriceScreen'
import ContactScreen from './screens/ContactScreen'

const Main = (props) => {
  return (
    <Layout
      handleMenuChange={props.handleMenuChange}
      showMenu={props.drawer.showMenu}
    >
      {props.drawer.menu === 'welcome'?
        <WelcomeScreen
          handleShowMenuToggle={props.handleShowMenuToggle}
          handleMenuChange={props.handleMenuChange}
        />
        : null
      }

      {props.drawer.menu === 'profile'? 
        <ProfileScreen/> 
        : null
      }

      {props.drawer.menu === 'price'?
        <PriceScreen/>
        : null
      }
      {props.drawer.menu === 'contacts'?
        <ContactScreen />
        : null
      }
    </Layout>
  )
}

export default Main
