import React, { Component, PureComponent } from 'react';
import styles from './index.scss';
import outStyles from '../../index.scss'
import { Tabs } from 'antd';
import { Row, Col } from 'antd';
import { Steps } from 'antd';
import CustomModal from 'component/CustomModal/index';
import { Popover } from 'antd';

const TabPane = Tabs.TabPane;
const Step = Steps.Step;

function TabName(props) {
  return (
    <div><span className={styles.tabName}>{props.type}</span><span className={styles.tabNameNum}>({props.num})</span></div>
  );
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

class TabContentInside extends PureComponent {


  getOperateBlock = (type) => {
    const typeObj = {
      'unsubmit':
        <div className={styles.operateBlock}>
          <i className={styles.edit} />
          <span>编辑</span>
          <i className={styles.delete} />
          <span onClick={() => {
            this.props.deleteModal()
          }}>删除</span>
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
          <i className={styles.info} />
          <span>详情</span>
          <i className={styles.query} />
          <span>流程查询</span>
          <span className={styles.ensureButt}>申请确认设立</span>
        </div>,
      'checkin':
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>详情</span>
          <i className={styles.query} />
          <Popover trigger="click" placement="right" content={<Flow />}><span>流程查询</span></Popover>
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
            {
              this.getOperateBlock(type)
            }
          </div>
        </div>
      </div>
    );
  }

}

class Flow extends Component {

  flowTitle = () => {
    return(
      <div className={styles.flowTitle}>提交拟设立申请【张家辉】<span>2018/12/18 09:40:38</span></div>
    );
  }

  flowDes = () => {
    return(
      <div className={styles.flowDes}><i className={styles.checking}></i><span>提交拟设立申请【张家辉】</span></div>
    );
  }

  render() {
    const data = [{
      title: "提交拟设立申请【张家辉】", des: "", data: "2018/12/18 09:40:38"
    },
    { title: "提交拟设立申请【张家辉】", des: "", data: "2018/12/18 09:40:38" }]

    return (
      <div className={styles.flowContent}>
        <Steps direction="vertical" progressDot current={1}>
          <Step title={<this.flowTitle />} description={<this.flowDes />} />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>,
    </div>
    );
  }
}

export default class EnterpriseInfoComponent extends Component {
  state = {
    deleteModal: false
  }

  deleteModal = () => {
    this.setState((previousState) => ({
      deleteModal: !previousState.deleteModal
    }));
  }


  render() {
    const deleteModal = this.deleteModal
    const modalActionCol = { deleteModal };
    return (
      <div className={styles.establish}>
        <div className={outStyles.font24}>拟设立详情内容</div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<TabName type={"全部"} num={"14"} />} key="1"><TabContent {...modalActionCol} /></TabPane>
          <TabPane tab={<TabName type={"拟设立"} num={"4"} />} key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab={<TabName type={"确认设立"} num={"4"} />} key="3">Content of Tab Pane 3</TabPane>
          <TabPane tab={<TabName type={"完成设立"} num={"4"} />} key="4">Content of Tab Pane 3</TabPane>
        </Tabs>
        <CustomModal
          title="Basic Modal"
          visible={this.state.deleteModal}
          onOk={this.deleteModal}
          onCancel={this.deleteModal}
          okText={"删除"}
          cancelText={"取消"}
        >
          <div className={styles.modalContent}><i className={styles.warn} />确定要删除未提交的申请内容吗？</div>
        </CustomModal>
      </div>
    );
  }
}

