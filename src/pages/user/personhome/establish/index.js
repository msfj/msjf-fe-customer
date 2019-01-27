import React, { Component, PureComponent } from 'react';
import classNames from 'classnames';
import styles from './index.scss';
import { Tabs, Row, Col, Steps, Input, Icon, Button, Popover } from 'antd';
import CustomModal from 'component/CustomModal/index';
import Link from 'umi/link';
import router from 'umi/router';


const TabPane = Tabs.TabPane;
const Step = Steps.Step;

function TabName(props) {
  return (
    <div>
      <span className={styles.tabName}>{props.type}</span>
      <span className={styles.tabNameNum}>({props.num})</span>
    </div>
  );
}

function TabContent(props) {
  return (
    <div>
      <Row gutter={40}>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}>
            <TabContentInside {...props} type={'unsubmit'} />
          </div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}>
            <TabContentInside type={'checking'} />
          </div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}>
            <TabContentInside type={'checkin'} />
          </div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}>
            <TabContentInside type={'checked'} />
          </div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}>
            <TabContentInside type={'done'} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

class TabContentInside extends PureComponent {
  getOperateBlock = type => {
    const typeObj = {
      unsubmit: (
        <div className={styles.operateBlock}>
          <i className={styles.edit} />
          <span>编辑</span>
          <i className={styles.delete} />
          <span
            onClick={() => {
              this.props.deleteModal();
            }}
          >
            删除
          </span>
        </div>
      ),
      checking: (
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>
            <Link to="/user/personhome/enterpriseinfo">详情</Link>
          </span>
          <i className={styles.query} />
          <Popover trigger="click" placement="right" content={<Flow />}>
            <span>流程查询</span>
          </Popover>
          <i className={styles.refuse} />
          <span>申请退回</span>
        </div>
      ),
      checked: (
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>
            <Link to="/user/personhome/enterpriseinfo">详情</Link>
          </span>
          <i className={styles.query} />
          <Popover trigger="click" placement="right" content={<Flow />}>
            <span>流程查询</span>
          </Popover>
          <span onClick={() => {
            router.push('/user/personhome/estlcfm');
          }} className={styles.ensureButt}>申请确认设立</span>
        </div>
      ),
      checkin: (
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>
            <Link to="/user/personhome/enterpriseinfo">详情</Link>
          </span>
          <i className={styles.query} />
          <Popover trigger="click" placement="right" content={<Flow />}>
            <span>流程查询</span>
          </Popover>
        </div>
      ),
      done: (
        <div className={styles.operateBlock}>
          <i className={styles.info} />
          <span>
            <Link to="/user/personhome/enterpriseinfo">详情</Link>
          </span>
        </div>
      ),
    };
    return typeObj[type];
  };

  render() {
    const { type } = this.props;
    const companyType = 'normal';
    return (
      <div className={styles.tabContentInside}>
        {companyType === 'normal' ? (
          <img src={require('image/normal-partner.png')} alt="" />
        ) : (
          <img src={require('image/limited-partner.png')} alt="" />
        )}
        <div className={styles.tabContentInsideRight}>
          <div className={styles.tabContentInsideTop}>
            <span className={styles.titleName}>公司名称公司名称公司名称</span>
            <i className={styles[type]} />
            <span className={classNames(styles[type], styles.statusText)}>审批中</span>
          </div>
          <div className={styles.tabContentInsideBottom}>
            <button>拟设立</button>
            {this.getOperateBlock(type)}
          </div>
        </div>
      </div>
    );
  }
}

class Flow extends Component {
  render() {
    const data = [
      {
        title: '提交拟设立申请',
        highlight: '【张家辉】',
        des: '',
        desIcon: '',
        date: '2018/12/18 09:40:38',
      },
      {
        title: '招商部门对接人确认',
        highlight: '',
        des: '确认意见：内容准确无误，通过审核',
        desIcon: 'done',
        date: '2018/12/18 09:40:38',
      },
      {
        title: '招商部门分管领导确认',
        highlight: '',
        des: '确认意见：内容准确无误，通过审核',
        desIcon: 'done',
        date: '2018/12/18 09:40:38',
      },
      {
        title: '金融服务管理部确认',
        highlight: '',
        des: '等待审核',
        desIcon: 'checking',
        date: '',
      },
      {
        title: '金融服务管理部确认',
        highlight: '',
        des: '等待审核',
        desIcon: 'checking',
        date: '',
      },
      {
        title: '市场监督管理觉确认',
        highlight: '',
        des: '等待审核',
        desIcon: 'checking',
        date: '',
      },
      {
        title: '市场监督管理觉确认',
        highlight: '',
        des: '等待审核',
        desIcon: 'checking',
        date: '',
      },
      {
        title: '审核完成',
        highlight: '',
        des: '',
        desIcon: '',
        date: '',
      },
    ];

    const flowContent = data.map((item, index) => {
      return (
        <Step
          title={
            <div className={'flowTitle'}>
              <div>
                {item.title}
                <strong>{item.highlight}</strong>
              </div>
              <span className='fs-14'>{item.date}</span>
            </div>
          }
          description={
            <div className={'flowDes'}>
              {item.desIcon && <i className={item.desIcon} />}
              <span className='fs-14'>{item.des}</span>
            </div>
          }
        />
      );
    });

    return (
      <div className={'flowContentPop'}>
        <Steps direction="vertical" progressDot current={1}>
          {flowContent}
        </Steps>
      </div>
    );
  }
}

function SearchInput() {
  return (
    <div className={styles.searchBlock}>
      <Input
        className={styles.searchInput}
        placeholder="请输入公司名称"
        suffix={<Icon type="search" />}
      />
      <Link to="/user/personhome/newestablishmentstep">
      <Button type="primary" icon="plus">
        新增企业设立
      </Button>
      </Link>
    </div>
  );
}

export default class EnterpriseInfoComponent extends Component {
  state = {
    deleteModal: false,
  };

  deleteModal = () => {
    this.setState(previousState => ({
      deleteModal: !previousState.deleteModal,
    }));
  };

  render() {
    const deleteModal = this.deleteModal;
    const modalActionCol = { deleteModal };
    return (
      <div className={styles.establish}>
        <div className="fs-24">企业设立</div>
        <Tabs tabBarExtraContent={<SearchInput />} defaultActiveKey="1">
          <TabPane tab={<TabName type={'全部'} num={'14'} />} key="1">
            <TabContent {...modalActionCol} />
          </TabPane>
          <TabPane tab={<TabName type={'拟设立'} num={'4'} />} key="2">
            <TabContent {...modalActionCol} />
          </TabPane>
          <TabPane tab={<TabName type={'确认设立'} num={'4'} />} key="3">
            <TabContent {...modalActionCol} />
          </TabPane>
          <TabPane tab={<TabName type={'完成设立'} num={'4'} />} key="4">
            <TabContent {...modalActionCol} />
          </TabPane>
        </Tabs>
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
      </div>
    );
  }
}
