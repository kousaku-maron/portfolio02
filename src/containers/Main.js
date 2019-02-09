import { connect } from 'react-redux'
import drawerActions from '../actions/drawerActions'
import profileActions from '../actions/profileActions'
import qiitaActions from '../actions/qiitaActions'
import githubActions from '../actions/githubActions'
import Main from '../components/Main'

const mapDispatchToProps = (dispatch) => {
  return {
    handleDrawerToggle: () => dispatch(drawerActions.drawerToggle()),
    handleMenuChange: (label) => dispatch(drawerActions.menuChange(label)),
    getProfileInfo: () => dispatch(profileActions.getProfileInfo()),
    getQiitaInfo: () => dispatch(qiitaActions.getQiitaInfo()),
    getGithubInfo: () => dispatch(githubActions.getGithubInfo()),
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
