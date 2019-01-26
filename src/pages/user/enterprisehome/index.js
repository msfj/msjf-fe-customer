import React, { Component, Fragment } from 'react';
import { Layout, Collapse, Icon } from 'antd';
import classNames from 'classnames';
import RelatedCompanyComponent from './component/RelatedCompanyComponent/index';
import EnterpriseInfoComponent from './component/EnterpriseInfoComponent/index';
import EnterpriseChangeComponent from './component/EnterpriseChangeComponent/index';
import MessageComponent from './component/Meassage/index';
import PersonInfo from './component/PersonInfo/index';
import EstablishmentComponent from './component/EstablishmentComponent';
import EstlCfmComponent from './component/EstlCfmComponent';
import styles from './index.scss';
import '../index.scss';

const { Sider, Content } = Layout;
const { Panel } = Collapse;

export default class Enterprise extends Component {
  state = {
    sideBarWidth: 200,
    activeItem: 'etpchange',
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

  changeActiveItem = item => {
    this.setState({
      activeItem: item,
    });
  };

  render() {
    let contentNode = <EnterpriseChangeComponent />;
    if (this.state.activeItem === 'etpchange') {
      contentNode = <EnterpriseChangeComponent />;
    }
    if (this.state.activeItem === 'message') {
      contentNode = <MessageComponent />;
    }
    if (this.state.activeItem === 'personcenter') {
      contentNode = <PersonInfo />;
    }
    if (this.state.activeItem === 'relatecpy') {
      contentNode = <RelatedCompanyComponent />;
    }
    return (
      <div
        className={classNames(styles.enterpriseHome, 'userBoard')}
        style={{ paddingTop: '60px' }}
      >
        <Layout>
          <Sider width={this.state.sideBarWidth}>
            <SiderNode
              changeActiveItem={this.changeActiveItem}
              activeItem={this.state.activeItem}
            />
          </Sider>
          <Layout>
            <Content>
              {/* <EstablishmentComponent /> */}
              {contentNode}
            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

class SiderNode extends Component {
  render() {
    const { activeItem, changeActiveItem } = this.props;
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
                  <li
                    onClick={() => {
                      changeActiveItem('etpchange');
                    }}
                  >
                    <img alt="" />
                    <span
                      className={classNames('fs-18', activeItem === 'etpchange' && 'fc-primary')}
                    >
                      企业变更
                    </span>
                    {activeItem === 'etpchange' && activeTgas}
                  </li>
                  <li
                    onClick={() => {
                      changeActiveItem('etpsettle');
                    }}
                  >
                    <img alt="" />
                    <span
                      className={classNames('fs-18', activeItem === 'etpsettle' && 'fc-primary')}
                    >
                      企业迁入
                    </span>
                    {activeItem === 'etpsettle' && activeTgas}
                  </li>
                  <li
                    onClick={() => {
                      changeActiveItem('etpoff');
                    }}
                  >
                    <img alt="" />
                    <span className={classNames('fs-18', activeItem === 'etpoff' && 'fc-primary')}>
                      企业注销
                    </span>
                    {activeItem === 'etpoff' && activeTgas}
                  </li>
                </ul>
              </Panel>
            </Collapse>
            <li
              onClick={() => {
                changeActiveItem('relatecpy');
              }}
            >
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
            </li>
            <li
              onClick={() => {
                changeActiveItem('message');
              }}
            >
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
            </li>
            <li
              onClick={() => {
                changeActiveItem('personcenter');
              }}
            >
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
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
