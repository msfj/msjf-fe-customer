import React, { Component, Fragment } from 'react';
import { Layout, Collapse } from 'antd';
import classNames from "classnames"
import RelatedCompanyComponent from './component/RelatedCompanyComponent/index';
import EnterpriseInfoComponent from './component/EnterpriseInfoComponent/index';
import EnterpriseEstablishComponent from './component/EnterpriseEstablishComponent/index';
import MessageComponent from './component/Meassage/index';
import PersonInfo from './component/PersonInfo/index';
import EstablishmentComponent from './component/EstablishmentComponent';
import EstlCfmComponent from './component/EstlCfmComponent';
import styles from './index.scss';
import "../index.scss";

const {
  Sider, Content,
} = Layout;
const { Panel } = Collapse;

export default class Enterprise extends Component {

  state = {
    sideBarWidth: 200
  }

  componentDidMount() {
    this.setSideBarWidth();
    window.addEventListener("resize", this.setSideBarWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setSideBarWidth);
  }

  setSideBarWidth = () => {
    let width = Math.ceil((0.1667 * window.innerWidth - 200) / 8) * 8 + 200;
    if (width < 200) width = 200;
    if (width > 320) width = 320;
    this.setState({
      sideBarWidth: width
    });
  }

  render() {
    return (
      <div className={classNames(styles.enterpriseHome, "userBoard")} style={{ paddingTop: "60px" }}>
        <Layout>
          <Sider width={this.state.sideBarWidth}><SiderNode /></Sider>
          <Layout>
            <Content><EstablishmentComponent /></Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

class SiderNode extends Component {
  render() {
    return (
      <Fragment>
        <div className="sideContent" >
          <div className={styles.imgBlock}></div>
          <span className={styles.font24}>张家辉</span>
          <p className={styles.font10}>个人账户</p>
          <ul>
            <Collapse defaultActiveKey={['1']}>
              <Panel
                header={<div className="panel">
                  <img alt="" src={require("image/icon/relate-company.svg")} />
                  <span className={styles.font18}>企业服务</span>
                </div>}
                key="1">
                <ul>
                  <li className={styles.active}>
                    <img alt="" />
                    <span className={classNames(styles.font18, styles.active)}>企业变更</span>
                    <img alt="" src={require("image/icon/right.svg")} />
                    <div className={styles.activeTags} />
                  </li>
                  <li>
                    <img alt="" />
                    <span className={styles.font18}>企业迁入</span>
                  </li>
                  <li>
                    <img alt="" />
                    <span className={styles.font18}>企业注销</span>
                  </li>
                </ul>
              </Panel>
            </Collapse>
            <li>
              <img alt="" src={require("image/icon/setup-company-active.svg")} />
              <span className={classNames(styles.font18)}>企业设立</span>
              {/* <img alt="" src={require("image/icon/right.svg")} />
              <div className={styles.activeTags} /> */}
            </li>
            <li>
              <img alt="" src={require("image/icon/relate-company.svg")} />
              <span className={styles.font18}>相关企业</span>
            </li>
            <li>
              <img alt="" src={require("image/icon/message.svg")} />
              <span className={styles.font18}>我的消息</span>
            </li>
            <li>
              <img alt="" src={require("image/icon/person.svg")} />
              <span className={styles.font18}>个人中心</span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}