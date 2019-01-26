import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';
import styles from './index.scss';
import '../index.scss';
import Link from 'umi/link';

const { Sider, Content } = Layout;

export default class Person extends Component {
  state = {
    sideBarWidth: 200,
  };

  componentDidMount() {
    this.setSideBarWidth();
    window.addEventListener('resize', this.setSideBarWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSideBarWidth);
  }

  setSideBarWidth = () => {
    let width = Math.ceil((0.1667 * window.innerWidth - 200) / 8) * 8 + 200;
    if (width < 200) width = 200;
    if (width > 320) width = 320;
    this.setState({
      sideBarWidth: width,
    });
  };

  actionWithPath = () => {
    let pathname = this.props.location.pathname && this.props.location.pathname.split("/")[3];
    if (pathname === "enterpriseinfo") {
      pathname = "establish";
    }
    return pathname;
  }


  render() {
    let activeItem = this.actionWithPath();
    return (
      <div
        className={classNames(styles.enterpriseHome, 'userBoard')}
        style={{ paddingTop: '60px' }}
      >
        <Layout>
          <Sider width={this.state.sideBarWidth}>
            <SiderNode
              activeItem={activeItem}
            />
          </Sider>
          <Layout>
            <Content>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

class SiderNode extends Component {
  render() {
    const { activeItem } = this.props;
    const activeTgas = (
      <Fragment>
        <img alt="" src={require('image/icon/right.svg')} />
        <div className='activeTags' />
      </Fragment>
    );
    return (
      <Fragment>
        <div className="sideContent">
          <div className="imgBlock" />
          <span className={styles.font24}>张家辉</span>
          <p className={styles.font10}>个人账户</p>
          <ul>
            <li>
              <Link to="/user/personhome/establish">
                <img
                  alt=""
                  src={
                    activeItem === 'establish'
                      ? require('image/icon/setup-company-active.svg')
                      : require('image/icon/setup-company.svg')
                  }
                />
                <span className={classNames('fs-18', activeItem === 'establish' && 'fc-primary')}>
                  企业设立
              </span>
                {activeItem === 'establish' && activeTgas}
              </Link>
            </li>
            <li>
              <Link to="/user/personhome/relatecompany">
                <img
                  alt=""
                  src={
                    activeItem === 'relatecompany'
                      ? require('image/icon/relate-company-active.svg')
                      : require('image/icon/relate-company.svg')
                  }
                />
                <span className={classNames('fs-18', activeItem === 'relatecompany' && 'fc-primary')}>
                  相关企业
              </span>
                {activeItem === 'relatecompany' && activeTgas}
              </Link>
            </li>
            <li>
              <Link to="/user/personhome/message">
                <img
                  alt=""
                  src={
                    activeItem === 'message'
                      ? require('image/icon/message-active.svg')
                      : require('image/icon/message.svg')
                  }
                />
                <span className={classNames('fs-18', activeItem === 'message' && 'fc-primary')}>
                  我的消息
              </span>
                {activeItem === 'message' && activeTgas}
              </Link>
            </li>
            <li>
              <Link to="/user/personhome/personcenter">
                <img
                  alt=""
                  src={
                    activeItem === 'personcenter'
                      ? require('image/icon/person-active.svg')
                      : require('image/icon/person.svg')
                  }
                />
                <span className={classNames('fs-18', activeItem === 'personcenter' && 'fc-primary')}>
                  个人中心
              </span>
                {activeItem === 'personcenter' && activeTgas}
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
