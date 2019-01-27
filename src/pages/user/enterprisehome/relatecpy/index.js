import React, { Component, PureComponent } from 'react';
import { Row, Col, Form, Input, Tabs } from 'antd';
import CustomModal from 'component/CustomModal/index';
import outStyles from '../../index.scss'
import styles from './index.scss';

const TabPane = Tabs.TabPane;
const { Item } = Form;

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
            <button onClick={() => {
              this.props.deleteModal();
            }} className={styles.buttonTwo}>已关注</button>
          </div>
          <div className={styles.tabContentInsideBottom}>

            <div style={{ flex: 1 }} className={styles.items}>身&nbsp;&nbsp;&nbsp;&nbsp;份：<span>联络员</span></div>
            <div style={{ flex: 1 }} className={styles.items}>姓&nbsp;&nbsp;&nbsp;&nbsp;名：<span>联络员</span></div>
            <div style={{ flex: 1 }} className={styles.items}>手机号：<span>18702883201</span></div>
            <div style={{ flex: 2 }} className={styles.items}>证件类型：<span>身份证 - 411888888888888888</span></div>
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
          <div className={styles.tabContent}><TabContentInside {...props} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside {...props} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside {...props} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside {...props} /></div>
        </Col>
        <Col className={styles.col} span={24}>
          <div className={styles.tabContent}><TabContentInside {...props} /></div>
        </Col>
      </Row>
    </div>
  );
}

export default class RelatedCompanyComponent extends Component {
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
      <div className={styles.related}>
        <div className='fs-24'>相关企业</div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<TabName type={"已关注"} num={"14"} />} key="1"><TabContent {...modalActionCol} /></TabPane>
          <TabPane tab={<TabName type={"待处理"} num={"4"} />} key="2"><TabContent {...modalActionCol} /></TabPane>
        </Tabs>
        <CustomModal
          title="关注认证"
          visible={this.state.deleteModal}
          onOk={this.deleteModal}
          onCancel={this.deleteModal}
          okText={"关注认证"}
          cancelText={"取消"}
        >
          <div className='modalContent'>
            <Form className='formExtend' >
              <Item
                label="企业名称"
                colon={false}
                className='formExtend'
              >
                <Input size="large" placeholder="请输入企业名称" />
              </Item>
            </Form>
          </div>
        </CustomModal>
      </div>
    )
  }
}