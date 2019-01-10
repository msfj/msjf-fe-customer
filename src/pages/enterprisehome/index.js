import React, { Component, Fragment } from 'react';
import styles from './index.scss';
import { Row, Col, Layout } from 'antd';

const {
  Header, Footer, Sider, Content,
} = Layout;

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
      <div>
        <Layout>
          <Sider width={this.state.sideBarWidth}><SiderNode /></Sider>
          <Layout>
            <Content><ContentNode /></Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

class ContentNode extends Component {

  infoTitle(props) {
    return (
      <div style={props.style} className={styles.infoTitle}>
        <i />
        <span className={styles.font18}>{props.type}</span>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.insideContent}>
        <div className={styles.tips}>
          <img alt="" src={require("../../assets/icon/back.svg")} />
          <span className={styles.font14}>退出/查看详情</span>
        </div>
        <div className={styles.titleBlock}>
          <img src={require("../../assets/general-partner.png")} alt="" />
          <div className={styles.breakLine} />
          <span className={styles.font24}>公司名称公司名称公司名称</span>
          <div className={`${styles.typeBlock} ${styles.font14}`}>拟设立</div>
          <i />
          <p>审批中</p>
        </div>
        <div className={styles.font24}>拟设立详情内容</div>
        <div className={styles.detailContent}>
          <this.infoTitle type={"登记申请信息"}/>
          {/* 登记申请信息 */}
          <Row gutter={20} className={`${styles.row} ${styles.rowBorder}`}>
            <Col className={styles.col} span={6}>
              <div>企业地区选择：</div>
              <div className={styles.right}>浙江省宁波市梅山区</div>
            </Col>
            <Col className={styles.col} span={6}>
              <div>申请企业名称：</div>
              <div className={styles.right}>我是申请企业的名称</div>
            </Col>
            <Col className={styles.col} span={6}>
              <div>企业类型：</div>
              <div className={styles.right}>有限</div>
            </Col>
            <Col className={styles.col} span={6}>
              <div>企业分类：</div>
              <div className={styles.right}>企业分类内容</div>
            </Col>
          </Row>
          <this.infoTitle type={"基本信息"} style={{marginTop:'20px'}}/>
          {/* 基本信息 */}

        </div>
      </div>
    );
  }
}

class SiderNode extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.sideContent}>
          <div className={styles.imgBlock}></div>
          <span className={styles.font24}>张家辉</span>
          <p className={styles.font10}>个人账户</p>
          <ul>
            <li className={styles.active}>
              <img alt="" src={require("../../assets/icon/setup-company-active.svg")} />
              <span className={styles.font18 + " " + styles.active}>企业设立</span>
              <img alt="" src={require("../../assets/icon/right.svg")} />
              <div className={styles.activeTags} />
            </li>
            <li>
              <img alt="" src={require("../../assets/icon/relate-company.svg")} />
              <span className={styles.font18}>相关企业</span>
            </li>
            <li>
              <img alt="" src={require("../../assets/icon/message.svg")} />
              <span className={styles.font18}>我的消息</span>
            </li>
            <li>
              <img alt="" src={require("../../assets/icon/person.svg")} />
              <span className={styles.font18}>个人中心</span>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}