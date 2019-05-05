import React from 'react';
import { Layout } from 'antd';
import Sider from './common/components/Sider';
import Header from './common/components/Header';
import Content from './common/components/Content';
import Footer from './common/components/Footer';

function App() {
  return (
    <Layout>
      <Sider />
      <Layout style={{ marginLeft: 200 }}>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Layout>
  );
}

export default App;
