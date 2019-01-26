import React, { Component, Fragment } from 'react';
import { Layout, Collapse } from 'antd';
import classNames from 'classnames';
import RelatedCompanyComponent from './component/RelatedCompanyComponent/index';
import EnterpriseInfoComponent from './component/EnterpriseInfoComponent/index';
import EnterpriseEstablishComponent from './component/EnterpriseEstablishComponent/index';
import MessageComponent from './component/Meassage/index';
import PersonInfo from './component/PersonInfo/index';
import EstablishmentComponent from './component/EstablishmentComponent';
import EstlCfmComponent from './component/EstlCfmComponent';
import styles from './index.scss';
import '../index.scss';

const { Sider, Content } = Layout;
const { Panel } = Collapse;

export default class Person extends Component {
  state = {
    sideBarWidth: 200,
    activeItem: 'establish',
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

  sideBarAction = () => {
    // if ()
  };

  changeActiveItem = item => {
    this.setState({
      activeItem: item,
    });
  };

  render() {
    let contentNode = <EnterpriseEstablishComponent />
    if(this.state.activeItem === "establish") {contentNode = <EnterpriseEstablishComponent />}
    if(this.state.activeItem === "message") {contentNode = <MessageComponent />}
    if(this.state.activeItem === "personcenter") {contentNode = <PersonInfo />}
    if(this.state.activeItem === "relatecpy") {contentNode = <RelatedCompanyComponent />}
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
              <EstablishmentComponent />
              {/* {contentNode} */}
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
            <li
              onClick={() => {
                changeActiveItem('establish');
              }}
            >
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
            </li>
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
