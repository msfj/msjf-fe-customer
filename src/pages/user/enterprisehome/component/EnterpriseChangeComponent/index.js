import React, { Component, PureComponent } from 'react';
import styles from './index.scss';
import outStyles from '../../index.scss'
import { Tabs } from 'antd';
import { Row, Col, Input, Icon, Button } from 'antd';
import { Steps } from 'antd';
import CustomModal from 'component/CustomModal/index';
import { Popover } from 'antd';

const Step = Steps.Step;


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

  getTypeName = (type) => {
    const typeObj = {
      'unsubmit': "未提交",
      'checking': "审批中",
      'checkin': "登记办理",
      'done': "变更完成"
    }
    return typeObj[type]
  }

  getEtpImg = (etpType) => {
    const typeObj = {
      'limitedPtn' : <img src={require("image/limited-partner.png")} alt="有限合伙"/>,
      'normalPtn' : <img src={require("image/normal-partner.png")} alt="有限合伙"/>,
      'limitedCmp' : <img src={require("image/limited-company.png")} alt="有限合伙"/>,
    }
    return typeObj[etpType];
  }

  render() {
    const { getOperateBlock, getTypeName, getEtpImg } = this;
    const { type,etpType } = this.props;
    return (
      <div className={styles.tabContentInside}>
        {getEtpImg(etpType)}
        <div className={styles.tabContentInsideRight}>
          <div className={styles.tabContentInsideTop}>
            <span className={styles.titleName}>公司名称公司名称公司名称</span>
            <i className={styles[type]} />
            <span className={`${styles[type]} ${styles.statusText}`}>{getTypeName(type)}</span>
          </div>
          <div className={styles.tabContentInsideBottom}>
            <button>企业变更</button>
            {
              getOperateBlock(type)
            }
          </div>
        </div>
      </div>
    );
  }

}

class Flow extends Component {

  flowTitle = () => {
    return (
      <div className={styles.flowTitle}>提交拟设立申请【张家辉】<span>2018/12/18 09:40:38</span></div>
    );
  }

  flowDes = () => {
    return (
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
      <div className={styles.etpchange}>
        <div className={styles.etpHead}>
          <p className='fs-24 '>企业变更</p>
          <Input
            className={styles.searchInput}
            placeholder="请输入公司名称"
            suffix={<Icon type="search" />}
          />
          <Button type="primary" icon="file-done">变更记录</Button>
        </div>
        <div>
          <Row gutter={40}>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside etpType={'limitedPtn'} type={'unsubmit'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside etpType={'limitedCmp'} type={'checking'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside etpType={'limitedPtn'} type={'checkin'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside etpType={'normalPtn'} type={'done'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside etpType={'limitedCmp'} type={'done'} /></div>
            </Col>
          </Row>
        </div>
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

