import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
import { Link } from 'react-router-dom'
class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      // userAccountInfo:props.userAccountInfo,
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
          <Button onClick={ this.props.handleLogin.bind(null,this.state.account,this.state.passWord,this.props.userAccountInfo) } type='primary'>登录</Button>
          <span style={{ visibility:'hidden' }}>----------</span>
          <Link to='register'>没有账号?去注册</Link>
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
    handleLogin: (account,passWord,userAccountInfo) => {
      let isAccount = false
      for(let item in userAccountInfo){
        if(userAccountInfo[item].name == account){
          if(userAccountInfo[item].password == passWord){
            isAccount = true
            alert('登录成功')
            dispatch({
              type:'LOGIN',
              props,
              account,
              passWord
            })
          } else {
            alert('密码输入有误')
            return
          }
          break;
        }
      }
      if(!isAccount){
        alert('账号不存在')
      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)
