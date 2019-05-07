import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { connect } from 'react-redux'
class HoldLogin extends Component{
  render (){
    const { component: Component, path, isLogin } = this.props;
    return (
      <Route
        path={ path }
        render={()=> {
          if(isLogin){
            return <Component></Component>
          } else {
            return <Redirect from={ path } to='/login'></Redirect>
          }
        }}
      ></Route>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    isLogin:state.components.isLogin
  }
}
export default connect (mapStateToProps,null)(HoldLogin)
