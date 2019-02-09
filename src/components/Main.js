import * as React from 'react'
import Layout from './layout/Layout'
import ProfileScreen from './screens/ProfileScreen'
import QiitaScreen from './screens/QiitaScreen'
import GithubScreen from './screens/GithubScreen'
import ProductScreen from './screens/ProductScreen'
import Contacts from './screens/Contacts'

const Main = (props) => {
  return (
    <Layout
      drawerOpen={props.drawer.open}
      handleDrawerToggle={props.handleDrawerToggle}
      handleMenuChange={props.handleMenuChange}
    >
      {props.drawer.menu === 'profile'? 
        <ProfileScreen
          getProfileInfo={props.getProfileInfo}
          github={props.github}
        /> 
        : null
      }
      {props.drawer.menu === 'product'?
        <ProductScreen/>
        : null
      }
      {props.drawer.menu === 'qiita'?
        <QiitaScreen
          getQiitaInfo={props.getQiitaInfo}
          qiita={props.qiita}
        />
        : null
      }
      {props.drawer.menu === 'github'?
        <GithubScreen
          getGithubInfo={props.getGithubInfo}
          github={props.github}
        /> 
        : null
      }
      {props.drawer.menu === 'contacts'? <Contacts /> : null}
    </Layout>
  )
}

export default Main