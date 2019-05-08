import React from 'react';
import { Layout, PageHeader, Button } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
const { Header } = Layout

function HeaderComponent (props) {
  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <PageHeader
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
        style={{ float:'left' }}
      />
      <Link to='/login'>
        <Button type="danger" onClick={props.onChange} icon="poweroff" style={{ float:'right',margin:'15px 20px 0 0' }}>退出登录</Button>
      </Link>
    </Header>
  )
}


const mapDispathToProps = (dispatch) =>{
  return {
    onChange: () =>{
      dispatch({
        type:'onChange'
      })
    }
  }
}


export default connect(null,mapDispathToProps)(HeaderComponent)
