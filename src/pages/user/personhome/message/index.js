import React, { Component } from 'react';
import styles from '../../enterprisehome/message/index.scss';
import { Collapse,Input,Icon } from 'antd';

const Panel = Collapse.Panel;

function PanelHeader() {
  return (
    <div className={styles.panelHeader}>
      <div className={styles.titleBlock}>
        <p>梅山金服科技公司</p>
        <span>你的拟设立申请已审批完成，请及时申请确认设立操作。</span>
      </div>
      <div className={styles.timeBlock}>
        <i className={styles} />
        <span>2018-12-29 14:20</span>
      </div>
    </div>
  );
}

export default class MessageComponent extends Component {
  render() {
    const customPanelStyle = {
      padding: '0px 30px 0px 30px',
      background: '#FFFFFF',
      boxShadow: '0 3px 5px 0 rgba(0,0,0,0.10)',
      borderRadius: 4,
      marginBottom: 20,
      border: 0,
      overflow: 'hidden',
    };

    return (
      <div className={styles.message}>
        <div className='fs-24'>我的消息</div>
        <div className={styles.messageBlock}>
          <div className={styles.messageNum}>
            共<span>2</span>条，其中未读消息<strong>1</strong>条
          </div>
          <Input
            className={styles.searchInput}
            placeholder="请输入关键词"
            suffix={<Icon type="search" />}
          />
        </div>
        <Collapse style={{ backgroundColor: '#f0f2f5' }} bordered={false} defaultActiveKey={['1']}>
          <Panel header={<PanelHeader />} key="1" style={customPanelStyle}>
            <p className={styles.mainContent}>    你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认</p>
          </Panel>
          <Panel header={<PanelHeader />} key="2" style={customPanelStyle}>
            <p>你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认</p>
          </Panel>
          <Panel header={<PanelHeader />} key="3" style={customPanelStyle}>
            <p>你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认设立操作你的拟设立申请已审批完成，请及时申请确认</p>
          </Panel>
        </Collapse>,
      </div>
    );
  }
}
