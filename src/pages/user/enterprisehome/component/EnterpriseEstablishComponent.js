import React, { Component, PureComponent } from 'react';
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
        <Col className={styles.col} span={24}>
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
 
class TabContentInside extends Component {


  getOperateBlock = (type) => {
    const typeObj = {
      'unsubmit':
        <div className={styles.operateBlock}>
          <i className={styles.edit} />
          <span>编辑</span>
          <i className={styles.delete} />
          <span>删除</span>
        </div>,
      'checking':
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>详情</span>
          <i className={styles.query} />
          <span>流程查询</span>
          <i className={styles.refuse} />
          <span>申请退回</span>
        </div>,
      'checked':
        <div className={styles.operateBlock}>
          <i className={styles.edit} />
          <span>编辑</span>
          <i className={styles.delete} />
          <span>删除</span>
        </div>,
      'checkin':
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>详情</span>
          <i className={styles.query} />
          <span>流程查询</span>
        </div>,
      'done':
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>详情</span>
        </div>,
    };
    return typeObj[type]
  }

  render() {
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
            <i className={styles.checking} />
            <span className={styles.checking}>审批中</span>
          </div>
          <div className={styles.tabContentInsideBottom}>
            <button>拟设立</button>
            {
              this.getOperateBlock("checking")
            }
          </div>
        </div>
      </div>
    );
  }

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
