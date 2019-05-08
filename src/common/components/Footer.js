import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout

function FooterComponent () {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Made with <span style={{ color:'red' }}>❤</span> byAFX
    </Footer>
  )
}
export default FooterComponent
