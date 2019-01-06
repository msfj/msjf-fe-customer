import { Layout } from 'antd';
import React, { Component } from 'react';

const {
  Header, Footer, Sider, Content,
} = Layout;

export default class Test extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}