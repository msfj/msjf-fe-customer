import React, { Component, PureComponent, Fragment } from 'react';
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
          <Popover trigger="click" placement="right" content={<Flow />}><span>流程查询</span></Popover>
          <i className={styles.refuse} />
          <span onClick={() => {
            this.props.refundModal()
          }}>申请退回</span>
        </div>,
      'checked':
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>详情</span>
          <i className={styles.query} />
          <Popover trigger="click" placement="right" content={<Flow />}><span>流程查询</span></Popover>
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
        </div>
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
      'limitedPtn': <img src={require("image/limited-partner.png")} alt="有限合伙" />,
      'normalPtn': <img src={require("image/normal-partner.png")} alt="有限合伙" />,
      'limitedCmp': <img src={require("image/limited-company.png")} alt="有限合伙" />,
    }
    return typeObj[etpType];
  }

  render() {
    const { getOperateBlock, getTypeName, getEtpImg } = this;
    const { type, etpType } = this.props;
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

function ModifyRecord() {
  const data = [{
    title: "申请企业第三次变更", des: ["1、变更企业名称为：没闪金元宝科技有限公司","2、变更企业的执行董事为：张显明"], date: "2018/12/18 09:40:38",
  }, {
    title: "申请企业第二次变更", des: ["1、变更企业名称为：没闪金元宝科技有限公司","2、变更企业的执行董事为：张显明"], date: "2018/12/18 09:40:38",
  },{
    title: "申请企业第一次变更", des: ["1、变更企业名称为：没闪金元宝科技有限公司","2、变更企业的执行董事为：张显明"], date: "2018/12/18 09:40:38",
  }];

  const flowContent = data.map((item, index) => {
    return (
      <Step className="modifyRecodeStep"
        title={<div className={'flowTitle'}><div>{item.title}</div><span>{item.date}</span></div>}
        description={<div className={'flowDes modifyDes'}>{item.des.map((desItem,index) => <Fragment><span>{desItem}</span></Fragment>)}</div>} />
    )
  });

  return (
    <div className={'flowContentPop'}>
      <Steps direction="vertical" progressDot current={-1}>
        {flowContent}
      </Steps>
    </div>
  )

}

function Flow() {

  const data = [{
    title: "提交拟设立申请", highlight: "【张家辉】", des: "", desIcon: "", date: "2018/12/18 09:40:38"
  }, {
    title: "招商部门对接人确认", highlight: "", des: "确认意见：内容准确无误，通过审核", desIcon: "done", date: "2018/12/18 09:40:38"
  }, {
    title: "招商部门分管领导确认", highlight: "", des: "确认意见：内容准确无误，通过审核", desIcon: "done", date: "2018/12/18 09:40:38"
  }, {
    title: "金融服务管理部确认", highlight: "", des: "等待审核", desIcon: "checking", date: ""
  }, {
    title: "金融服务管理部确认", highlight: "", des: "等待审核", desIcon: "checking", date: ""
  }, {
    title: "市场监督管理觉确认", highlight: "", des: "等待审核", desIcon: "checking", date: ""
  }, {
    title: "市场监督管理觉确认", highlight: "", des: "等待审核", desIcon: "checking", date: ""
  }, {
    title: "审核完成", highlight: "", des: "", desIcon: "", date: ""
  }]

  const flowContent = data.map((item, index) => {
    return (
      <Step
        title={<div className={'flowTitle'}><div>{item.title}<strong>{item.highlight}</strong></div><span>{item.date}</span></div>}
        description={<div className={'flowDes'}>{item.desIcon && <i className={item.desIcon}></i>}<span>{item.des}</span></div>} />
    )
  });

  return (
    <div className={'flowContentPop'}>
      <Steps direction="vertical" progressDot current={1}>
        {flowContent}
      </Steps>
    </div>
  );
}

export default class EnterpriseInfoComponent extends Component {
  state = {
    deleteModal: false,
    refundModal: false,
  }

  deleteModal = () => {
    this.setState((previousState) => ({
      deleteModal: !previousState.deleteModal
    }));
  }

  refundModal = () => {
    this.setState((previousState) => ({
      refundModal: !previousState.refundModal
    }));
  }


  render() {
    const { deleteModal, refundModal } = this;
    const modalActionCol = { deleteModal, refundModal };
    return (
      <div className={styles.etpchange}>
        <div className={styles.etpHead}>
          <p className='fs-24 '>企业变更</p>
          <Input
            className={styles.searchInput}
            placeholder="请输入公司名称"
            suffix={<Icon type="search" />}
          />
          <Popover trigger="click" placement="bottom" content={<ModifyRecord />}><Button type="primary" icon="file-done">变更记录</Button></Popover>
        </div>
        <div>
          <Row gutter={40}>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside {...modalActionCol} etpType={'limitedPtn'} type={'unsubmit'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside {...modalActionCol} etpType={'limitedCmp'} type={'checking'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside {...modalActionCol} etpType={'limitedPtn'} type={'checkin'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside {...modalActionCol} etpType={'normalPtn'} type={'done'} /></div>
            </Col>
            <Col className={styles.col} span={24}>
              <div className={styles.tabContent}><TabContentInside {...modalActionCol} etpType={'limitedCmp'} type={'done'} /></div>
            </Col>
          </Row>
        </div>
        <CustomModal
          title="删除提示"
          visible={this.state.deleteModal}
          onOk={this.deleteModal}
          onCancel={this.deleteModal}
          okText={'删除'}
          cancelText={'取消'}
        >
          <div className="modalContent">
            <i className="m-warn" />
            确定要删除未提交的申请内容吗？
          </div>
        </CustomModal>
        <CustomModal
          title="退回"
          visible={this.state.refundModal}
          onOk={this.refundModal}
          onCancel={this.refundModal}
          okText={'确定'}
          cancelText={'取消'}
        >
          <div className="modalContent">
            <i className="m-warn" />
            确定要“申请退回”已提交的企业变更申请？
          </div>
        </CustomModal>
      </div>
    );
  }
}

