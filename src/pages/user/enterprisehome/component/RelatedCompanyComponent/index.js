import React, { Component, PureComponent } from 'react';
import styles from '../EnterpriseEstablishComponent/index.scss';
import outStyles from '../../index.scss'
import { Tabs } from 'antd';
import { Row, Col } from 'antd';

const TabPane = Tabs.TabPane;

function TabName(props) {
  return (
    <div><span className={styles.tabName}>{props.type}</span><span className={styles.tabNameNum}>({props.num})</span></div>
  );
}

class TabContentInside extends PureComponent {

  render() {
    const { type } = this.props;
    const companyType = "normal";
    return (
      <div className={styles.tabContentInside}>
        {
          companyType === "normal" ?
            <img src={require("image/normal-partner.png")} alt="" />
            :
            <img src={require("image/limited-partner.png")} alt="" />
        }
        <div className={styles.tabContentInsideRight}>
          <div className={styles.tabContentInsideTop}>
            <span className={styles.titleName}>公司名称公司名称公司名称</span>
            <i className={styles[type]} />
            <span className={`${styles[type]} ${styles.statusText}`}>审批中</span>
          </div>
          <div className={styles.tabContentInsideBottom}>
            <button>拟设立</button>
          </div>
        </div>
      </div>
    );
  }

}

function TabContent(props) {
  return (
    <div>
      <Row gutter={40}>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside {...props} type={'unsubmit'} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside type={'checking'} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside type={'checkin'} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside type={'checked'} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside type={'done'} /></div>
        </Col>
      </Row>
    </div>
  );
}

export default class RelatedCompanyComponent extends Component {
  render() {
    return (
      <div className={styles.related}>
        <div className={outStyles.font24}>相关企业</div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<TabName type={"已关注"} num={"14"} />} key="1"><TabContent /></TabPane>
          <TabPane tab={<TabName type={"待处理"} num={"4"} />} key="2">Content of Tab Pane 2</TabPane>
        </Tabs>

      </div>
    )
  }
}