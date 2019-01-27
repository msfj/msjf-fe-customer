import React, { Component } from 'react';
import styles from './index.scss';
import classNames from 'classnames';
import { Row, Col } from 'antd';
import router from 'umi/router';

function InfoTitle(props) {
  return (
    <div style={props.style} className={classNames(styles.infoTitle,props.className)}>
      <i />
      <span className='fs-16-t'>{props.type}</span>
    </div>
  );
}

export default class EnterpriseInfoComponent extends Component {

  setInfo(data) {
    return data.map((item, index) => (
      <Col className={styles.col} span={12} xxl={6}>
        <div>{item[0]}</div>
        <div className={styles.right}>{item[1]}</div>
      </Col>
    ));
  }

  setPersonInfo(data) {
    return data.map((item, index) => (
      <Col className={styles.col} span={12} xxl={8}>
        <div className={styles.staffItem}>
          <p className='fs-16'>{item.title}</p>
          <div className={styles.staffItemDetail}>
            <div className={styles.items}>
              <img alt="" src={require('image/icon/user.svg')} />
              <div className={styles.breakLine} />
              <span>{item.name}</span>
            </div>
            <div className={styles.items}>
              <img alt="" src={require('image/icon/mobile.svg')} />
              <div className={styles.breakLine} />
              <span>{item.phone}</span>
            </div>
            <div className={styles.items}>
              <img alt="" src={require('image/icon/interface.svg')} />
              <div className={styles.breakLine} />
              <span>{item.idcard}</span>
            </div>
          </div>
        </div>
      </Col>
    ));
  }

  render() {
    return (
      <div className={styles.changeEtpInfo}>
        <div className={styles.tips}>
          <img alt="" src={require('image/icon/back.svg')} />
          <span onClick={() => {
            router.goBack();
          }} className='fs-14 pointer'>退出 / 查看详情</span>
        </div>
        <div className={styles.titleBlock}>
          <img src={require('image/general-partner.png')} alt="" />
          <div className={styles.breakLine} />
          <span className='fs-24'>公司名称公司名称公司名称</span>
          <button onClick={() => {
            router.push("/user/enterprisehome/changeestablishmentstep");
          }} className={styles.shadowButt}>申请企业变更</button>
        </div>
        <div className={styles.detailContent}>
          {/* 登记申请信息 */}
          <InfoTitle type={'登记申请信息'} />
          <Row gutter={20} className={styles.row}>
            {this.setInfo([
              ['申请企业名称：', '我是申请的企业名称'],
              ['企业类型', '有限公司'],
              ['企业分类', '基金管理人企业'],
              ['经营范围', '内容文本'],
              ['招商对接人：', '张某某'],
              ['办理流程', '全电子'],
              ['经营年限（年）：', '30年'],
              ['缴付期限（年）：', '30年'],
              ['注册资本认缴出资额：', '10,000,000'],
              ['币种：', '人民币'],
              ['注册地址：', '广东省深圳市南山区南海大道粤海路动漫园2栋204-205室'],
              ['联系地址：', '广东省深圳市南山区南海大道粤海路动漫园2栋204-205室'],
            ])}
          </Row>
          <Row gutter={20} className={styles.row}>
            <Col className={styles.col} span={12}>
              <div>注册地址租赁协议：</div>
            </Col>
            <Col className={styles.col} span={12}>
              <div>名称准和书：</div>
            </Col>
            <Col className={styles.col} span={12}>
              <img
                className={styles.agreementImg}
                src={require('image/static/license-static.jpg')}
                alt="注册地址租赁协议"
              />
            </Col>
            <Col className={styles.col} span={12}>
              <img
                className={styles.agreementImg}
                src={require('image/static/license-static.jpg')}
                alt="名称准和书"
              />
            </Col>
          </Row>
          {/*邀请认证*/}
          <InfoTitle
            type={'邀请认证'}
            style={{ paddingTop: '20px' }}
            className={styles.rowBorder}
          />
          <Row className={styles.staffBlock} gutter={20}>
            {this.setPersonInfo([
              {
                title: '联络员',
                name: '刘辉',
                phone: '187****5789',
                idcard: '身份证 - 430528********4587',
              },
              {
                title: '财务负责人',
                name: '刘辉',
                phone: '187****5789',
                idcard: '身份证 - 430528********4587',
              },
              {
                title: '法定代表人/执行事务合伙人',
                name: '刘辉',
                phone: '187****5789',
                idcard: '身份证 - 430528********4587',
              },
              {
                title: '经理',
                name: '刘辉',
                phone: '187****5789',
                idcard: '身份证 - 430528********4587',
              },
              {
                title: '执行董事',
                name: '刘辉',
                phone: '187****5789',
                idcard: '身份证 - 430528********4587',
              },
              {
                title: '监事长',
                name: '刘辉',
                phone: '187****5789',
                idcard: '身份证 - 430528********4587',
              },
            ])}
          </Row>
          <p className='fs-16'>投资人信息</p>
          <div className={styles.grayBlock}>
            <Row gutter={20} className={styles.row}>
              {this.setInfo([
                ['投资人姓名：', '张某某'],
                ['证件类型', '身份证 - 430528********4587'],
                ['承担责任方式：', '方式文本'],
                ['出资方式：', '货币'],
                ['认缴出资额：', '10,000,000'],
                ['认缴出资额比例：', '比例文本'],
                ['缴付期限：', '期限文本'],
                ['住所', '显示具体的地址内容'],
              ])}
            </Row>
          </div>
          {/*其他信息*/}
          <InfoTitle
            type={'其他信息'}
            style={{ paddingTop: '20px' }}
            className={styles.rowBorder}
          />
          <p className={classNames('fs-16','mb-10')}>主要负责人（1）从业经历介绍</p>
          <div className={classNames(styles.grayBlock,'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16','mb-10')}>主要负责人（2）从业经历介绍</p>
          <div className={classNames(styles.grayBlock,'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16','mb-10')}>其他主要负责人介绍</p>
          <div className={classNames(styles.grayBlock,'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16','mb-10')}>股东背景介绍</p>
          <div className={classNames(styles.grayBlock,'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16','mb-10')}>关注的项目阶段</p>
          <div className={classNames(styles.grayBlock,'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <Row gutter={50} className={styles.row}>
            <Col className={styles.col} span={24}>
              <div style={{ width: '168px' }}>从业人员数量：</div>
              <div className={styles.right}>235人</div>
            </Col>
            <Col className={styles.col} span={24}>
              <div style={{ width: '168px' }}>投资所关注行业市场类型：</div>
              <div className={styles.right}>类型类型类型</div>
            </Col>
            <Col className={styles.col} span={24}>
              <div style={{ width: '168px' }}>投资获得收益方式：</div>
              <div className={styles.right}>方式方式</div>
            </Col>
            <Col className={styles.col} span={24}>
              <div style={{ width: '168px' }}>附件：</div>
              <div className={classNames(styles.right,styles.attachment)}>
                <Row gutter={20}>
                  <Col span={6}><img src={require("image/static/static-attachment.jpg")} alt="附件"/></Col>
                  <Col span={6}><span className={styles.attachmentName}><i className={styles.word}/>文档.doc</span></Col>
                  <Col span={6}><span className={styles.attachmentName}><i className={styles.pdf}/>文档.pdf</span></Col>
                  <Col span={6}><span className={styles.attachmentName}><i className={styles.xls}/>文档.xls</span></Col>
                </Row>
              </div>
            </Col>
          </Row>
          <p className={classNames('fs-16','mb-10')}>备注</p>
          <div className={classNames(styles.grayBlock,'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
