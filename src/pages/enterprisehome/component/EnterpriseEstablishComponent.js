import React, { Component, Fragment } from 'react';
import styles from '../index.scss';
import { Tabs } from 'antd';
import { Row, Col } from 'antd';

const TabPane = Tabs.TabPane;

function TabName(props) {
  return (
    <div><span className={styles.tabName}>{props.type}</span><span className={styles.tabNameNum}>({props.num})</span></div>
  );
}

function TabContent() {
  return (
    <div>
      <Row gutter={40}>
        <Col className={styles.col} span={12}>
          <div className={styles.tabContent}><TabContentInside /></div>
        </Col>
        <Col className={styles.col} span={12}>
          <div className={styles.tabContent}><TabContentInside /></div>
        </Col>
        <Col className={styles.col} span={12}>
          <div className={styles.tabContent}><TabContentInside /></div>
        </Col>
        <Col className={styles.col} span={12}>
          <div className={styles.tabContent}><TabContentInside /></div>
        </Col>
      </Row>
    </div>
  );
}

function TabContentInside() {
  return (
    <div className={styles.tabContentInside}>
        <img src={require("../../../assets/normal-partner.png")} alt=""/>
        <div className={styles.tabContentInsideRight}>
          <div className={styles.tabContentInsideTop}>
            <span className={styles.titleName}>公司名称公司名称公司名称</span>
            <i className={styles.iconChecking}/>
            <span className={styles.checking}>未提交</span>
          </div>
          <div className={styles.tabContentInsideBottom}>
            <button>拟设立</button>
            <div className={styles.operateBlock}>
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default class EnterpriseInfoComponent extends Component {
  render() {
    return (
      <div className={styles.establish}>
        <div className={styles.font24}>拟设立详情内容</div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<TabName type={"全部"} num={"14"} />} key="1"><TabContent /></TabPane>
          <TabPane tab={<TabName type={"拟设立"} num={"4"} />} key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab={<TabName type={"确认设立"} num={"4"} />} key="3">Content of Tab Pane 3</TabPane>
          <TabPane tab={<TabName type={"完成设立"} num={"4"} />} key="4">Content of Tab Pane 3</TabPane>
        </Tabs>
      </div>
    );
  }
}
