import React, { Component } from 'react'
import { connect } from 'react-redux'
class Login extends Component {
  render (){
    return (
      <button onClick={ this.props.handleLogin }>登录</button>
    )
  }
}
const mapStateToProps = (state) => {
  return {

  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleLogin: () => {
      //给仓库派发登录动作
      dispatch({
        type:'LOGIN',
      })
      // 登录之后要跳转到index页面
      console.log(props)
      props.history.replace('/index')
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
