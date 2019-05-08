import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      userAccountInfo:props.userAccountInfo,
      account:'',
      passWord:''
    }
    this.getAccountText = this.getAccountText.bind(this)
    this.getPassWordText = this.getPassWordText.bind(this)
  }
  render (){
    return (
        <div style={{ width:300,margin:'auto', marginTop:200 }}>
          <Input type="text" placeholder='账号' value={ this.state.account } onChange = { this.getAccountText }/>
          <p style={{ visibility:'hidden' }}>-----------------------</p>
          <Input type="password" placeholder='密码' value={ this.state.passWord } onChange = { this.getPassWordText }/>
          <p style={{ visibility:'hidden' }}>-----------------------</p>
          <Button onClick={ this.props.handleRegister.bind(null,this.state.account,this.state.passWord,this.state.userAccountInfo) } type='primary'>注册</Button>
        </div>
    )
  }
  getAccountText(e){
    this.setState({
      account: e.target.value
    })
  }
  getPassWordText(e){
    this.setState({
      passWord: e.target.value
    })

  }
}
const mapStateToProps = (state) => {
  return {
    userAccountInfo:state.account.data
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    handleRegister: (account,passWord,userAccountInfo) => {
      for(let item in userAccountInfo){
        if(userAccountInfo[item].name != account){
          dispatch({
            type:'REGISTERACCOUNT',
            account,
            passWord,
            props
          })
          break;
        } else {
          console.log('该账号已存在')
        }
      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register)
