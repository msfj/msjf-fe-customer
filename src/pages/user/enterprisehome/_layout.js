import React, { Component, Fragment } from 'react';
import { Layout, Collapse, Icon } from 'antd';
import Link from 'umi/link';
import classNames from 'classnames';
import styles from './index.scss';
import '../index.scss';

const { Sider, Content } = Layout;
const { Panel } = Collapse;

export default class Enterprise extends Component {
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
      pathname = "etpchange";
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
          <Sider width={276}>
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
        <div className="activeTags" />
      </Fragment>
    );
    return (
      <Fragment>
        <div className="sideContent">
          <div className='imgBlock' />
          <span className={styles.font24}>张家辉</span>
          <p className={styles.font10}>个人账户</p>
          <ul>
            <Collapse defaultActiveKey={['1']}>
              <Panel
                showArrow={false}
                header={
                  <div className="panel">
                    <img alt="" src={require('image/icon/relate-company.svg')} />
                    <span className={styles.font18}>企业服务</span>
                    <Icon type="caret-up" />
                  </div>
                }
                key="1"
              >
                <ul>
                  <li>
                    <Link to="/user/enterprisehome/etpchange">
                    <img alt="" />
                    <span
                      className={classNames('fs-18', activeItem === 'etpchange' && 'fc-primary')}
                    >
                      企业变更
                    </span>
                    {activeItem === 'etpchange' && activeTgas}
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/enterprisehome/etpsettle">
                    <img alt="" />
                    <span
                      className={classNames('fs-18', activeItem === 'etpsettle' && 'fc-primary')}
                    >
                      企业迁入
                    </span>
                    {activeItem === 'etpsettle' && activeTgas}
                    </Link>
                  </li>
                  <li>
                    <Link to="/user/enterprisehome/etpoff">
                    <img alt="" />
                    <span className={classNames('fs-18', activeItem === 'etpoff' && 'fc-primary')}>
                      企业注销
                    </span>
                    {activeItem === 'etpoff' && activeTgas}
                    </Link>
                  </li>
                </ul>
              </Panel>
            </Collapse>
            <li>
              <Link to="/user/enterprisehome/relatecpy">
              <img
                alt=""
                src={
                  activeItem === 'relatecpy'
                    ? require('image/icon/relate-company-active.svg')
                    : require('image/icon/relate-company.svg')
                }
              />
              <span className={classNames('fs-18', activeItem === 'relatecpy' && 'fc-primary')}>
                相关企业
              </span>
              {activeItem === 'relatecpy' && activeTgas}
              </Link>
            </li>
            <li>
              <Link to="/user/enterprisehome/message">
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
              <Link to="/user/enterprisehome/personcenter">
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
