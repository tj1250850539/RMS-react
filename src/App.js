import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Sider from './common/components/Sider';
import Header from './common/components/Header';
import Content from './common/components/Content';
import Footer from './common/components/Footer';

class App extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      pathName:1,
      path:props.location.pathname
    }
  }
  componentWillMount () {
    this.getPathName()
  }
  getPathName () {
    switch (this.state.path) {
      case '/index':
        this.setState({pathName:'1'})
        break;
      case '/dataadmin':
        this.setState({pathName:'2'})
        break;
      case '/account':
        this.setState({pathName:'3'})
        break;
    }
  }
  render () {
    return (
      <Layout>
        <Sider pathName = { this.state.pathName }/>
        <Layout style={{ marginLeft: 200 }}>
          <Header />
          <Content />
          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(App);
