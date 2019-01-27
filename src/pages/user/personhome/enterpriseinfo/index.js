import React, { Component } from 'react';
import styles from './index.scss';
import { Row, Col } from 'antd';
import classNames from 'classnames';

function InfoTitle(props) {
  return (
    <div style={props.style} className={classNames(styles.infoTitle, props.className)}>
      <i />
      <span className="fs-18">{props.type}</span>
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
          <p className="fs-16">{item.title}</p>
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
      <div className={styles.newEtpInfo}>
        <div className={styles.tips}>
          <img alt="" src={require('image/icon/back.svg')} />
          <span className="fs-14">退出/查看详情</span>
        </div>
        <div className={styles.titleBlock}>
          <img src={require('image/general-partner.png')} alt="" />
          <div className={styles.breakLine} />
          <span className="fs-24">公司名称公司名称公司名称</span>
          <div className={classNames(styles.typeBlock, 'fs-14')}>拟设立</div>
          <i />
          <p>审批中</p>
        </div>
        <div className="fs-24">拟设立详情内容</div>
        <div className={styles.detailContent}>
          {/* 登记申请信息 */}
          <InfoTitle type={'登记申请信息'} />
          <Row gutter={20} className={styles.row}>
            {this.setInfo([
              ['企业地址选择：', '浙江省宁波市眉山区'],
              ['申请企业名称：', '我是申请企业的名称'],
              ['企业类型：', '有限'],
              ['企业分类：', '企业分类内容'],
            ])}
          </Row>
          {/* 基本信息 */}
          <InfoTitle
            type={'基本信息'}
            style={{ paddingTop: '20px' }}
            className={styles.rowBorder}
          />
          <Row gutter={20} className={styles.row}>
            {this.setInfo([
              ['招商对接人：', '张某某'],
              ['办理流程', '全电子'],
              ['经营年限（年）：', '30年'],
              ['缴付期限（年）：', '4年'],
              ['注册资本认缴出资额：', '10,000,000'],
              ['币种：', '人民币'],
              ['企业电话：', '0574-86708719'],
              ['企业邮箱：', 'jinfu512@163.com']
            ])}
          </Row>
          <Row gutter={20} className={styles.row}>
            <Col className={styles.col} span={12}>
              <div>经营范围：</div>
              <div className={styles.right}>显示具体填写的经营范围内容</div>
            </Col>
            <Col className={styles.col} span={12}>
              <div>企业联系地址：</div>
              <div className={styles.right}>
                显示具体的地址内容显示具体的地址内容显示具体的地址内容
              </div>
            </Col>
          </Row>
          {/*邀请认证*/}
          <InfoTitle
            type={'邀请认证'}
            style={{ paddingTop: '20px' }}
            className={styles.rowBorder}
          />
          <Row gutter={20} className={styles.row}>
            <Col className={styles.col} span={12}>
              <div>执行事务合伙人类型：</div>
              <div className={styles.right}>类型类型类型</div>
            </Col>
            <Col className={styles.col} span={12}>
              <div>执行事务合伙人名称：</div>
              <div className={styles.right}>合伙人名称</div>
            </Col>
          </Row>
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
          <p className={classNames('fs-16', 'mb-10')}>主要负责人（1）从业经历介绍</p>
          <div className={classNames(styles.grayBlock, 'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16', 'mb-10')}>主要负责人（2）从业经历介绍</p>
          <div className={classNames(styles.grayBlock, 'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16', 'mb-10')}>其他主要负责人介绍</p>
          <div className={classNames(styles.grayBlock, 'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16', 'mb-10')}>股东背景介绍</p>
          <div className={classNames(styles.grayBlock, 'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <p className={classNames('fs-16', 'mb-10')}>关注的项目阶段</p>
          <div className={classNames(styles.grayBlock, 'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
          <Row gutter={20} className={styles.row}>
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
          <p className={classNames('fs-16', 'mb-10')}>备注</p>
          <div className={classNames(styles.grayBlock, 'fs-14')}>
            <Row gutter={20} className={styles.row}>
              <Col className={styles.col} span={24}>
                具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
              </Col>
            </Row>
          </div>
        </div>
        <div className="fs-24">确认设立内容</div>
        <div className={styles.detailContent}>
          <Row gutter={20} className={styles.row}>
            <Col className={styles.col} span={12}>
              <div>申请企业名称：</div>
              <div className={styles.right}>我是申请的企业名称</div>
            </Col>
            <Col className={styles.col} span={12}>
              <div>注册地址：</div>
              <div className={styles.right}>具体的地址名称内容具体的地址名称内容</div>
            </Col>
            <Col className={styles.col} span={12}>
              <div>名称核准书：</div>
              <div className={styles.right}>我是申请的企业名称</div>
            </Col>
            <Col className={styles.col} span={12}>
              <div>注册地址租赁协议：</div>
              <div className={styles.right}>具体的地址名称内容具体的地址名称内容</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
