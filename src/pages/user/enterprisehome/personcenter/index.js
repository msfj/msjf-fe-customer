import React, { Component, Fragment } from 'react';
import classNames from 'classnames'
import { Form, Input, Icon, message, Select, Row, Col, Radio, Upload, Button } from 'antd';
import { ModifyModal, ChangePhoneModal } from './component/modal';
import styles from './index.scss';
import outStyles from '../../index.scss';

const { TextArea } = Input;
const { Option } = Select;
const { Item } = Form;
const RadioGroup = Radio.Group;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const beforeUpload = (file) => {
  const imgar = ['image/jpeg', 'image/png', 'image/pdf'];
  const isImg = imgar.indexOf(file.type) === -1;
  console.log(isImg)
  if (isImg) {
    message.error('只能上传jpg、png、pdf格式图片');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('图片必须小于2MB!');
  }
  return !isImg && isLt2M;
}

class Avatar extends Component {
  state = {
    loading: false,
    imageUrl: null
  };

  handleChange = (info) => {
    console.log(info)
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }

  render() {
    const UploadButton = (props) => {
      return (
        <div>
          <Icon type={this.state.loading ? 'loading' : 'plus'} style={{ fontSize: '40px' }} />
          <div className="ant-upload-text">{this.state.loading ? '正在上传' : props.text}</div>
        </div>
      );
    }
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" /> : <UploadButton text={this.props.ldtx} />}
      </Upload>
    );
  }
}

class Edit extends Component {
  state = {
    visible: false,
    hasCfa: 1
  };

  cfaChange = (e) => {
    this.setState({
      hasCfa: e.target.value
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Row gutter={20}>
          <Col span={6}>
            <Item label="学历" colon={false}>
              <Select placeholder="请选择" size="large" style={{ width: '100%' }}>
                <Option value="0">本科</Option>
                <Option value="1">硕士</Option>
                <Option value="3">其他</Option>
              </Select>
            </Item>
          </Col>
          <Col span={6}>
            <Item label="邮箱" colon={false}>
              {getFieldDecorator('email', {
                rules: [{ required: false, message: '请输入邮箱地址' }],
              })(
                <Input size="large" placeholder="请输入邮箱地址" />
              )}
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Item label="是否拥有基金资格证" colon={false}>
              <RadioGroup name="radiogroup" defaultValue={1} onChange={(e) => {
                this.cfaChange(e);
              }}>
                <Radio value={1}>是</Radio>
                <Radio value={0}>否</Radio>
              </RadioGroup>
              {this.state.hasCfa === 1 ? <Input size="large" placeholder="请输入基金资格证编码" /> : null}
            </Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Item label="从业经历" colon={false}>
              <TextArea rows={5} placeholder="请输入工作经历（如2018年，在**公司，主要从事相关的工作）" />
            </Item>
          </Col>
          <Col span={24}>
            <Item label="投资经历" colon={false}>
              <TextArea rows={5} placeholder="请输入相关的投资经历" />
            </Item>
          </Col>
        </Row>
        <Item label="证件照片">
          <span className="fc-gray">请上传基本信息中对应的证件照片（可添加JPG、PNG、PDF 档案格式）</span>
          <div style={{ display: 'flex' }}>
            <Avatar ldtx="上传证件（正面）" />
            <Avatar ldtx="上传证件（背面）" />
          </div>
        </Item>
        <div style={{ display: 'flex' }}>
          <Button style={{ width: '184px', marginRight: '20px' }} size="large" htmlType="submit">取消</Button>
          <Button style={{ width: '184px', backgroundColor: '#0072D2' }} type="primary" size="large" htmlType="submit">保存</Button>
        </div>
      </Fragment>
    );
  }
}
const EditWrapper = Form.create()(Edit);

function Info() {
  return (
    <Fragment>
      <Row gutter={20} className={styles.row}>
        <Col className={styles.col} span={5}>
          <div>学历：</div>
          <div className={styles.right}>本科</div>
        </Col>
        <Col className={styles.col} span={7}>
          <div>邮箱：</div>
          <div className={styles.right}>meishan@jinfu.com</div>
        </Col>
        <Col className={styles.col} span={12}>
          <div>是否拥有基金资格证：</div>
          <div className={styles.right}>是 - 证书编码 8909009988</div>
        </Col>
      </Row>
      <p className={classNames(outStyles.font14, outStyles.mb10, outStyles.shadowgray)}>从业经历：</p>
      <div className={`${styles.grayBlock} ${outStyles.font14}`}>
        <Row gutter={20} className={styles.row}>
          <Col className={styles.col} span={24}>
            具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
            </Col>
        </Row>
      </div>
      <p className={classNames(outStyles.font14, outStyles.mb10, outStyles.shadowgray)}>从业经历：</p>
      <div className={`${styles.grayBlock} ${outStyles.font14}`}>
        <Row gutter={20} className={styles.row}>
          <Col className={styles.col} span={24}>
            具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域具体的介绍内容展示区域
            </Col>
        </Row>
      </div>
      <p className={classNames(outStyles.font14, outStyles.mb10, outStyles.shadowgray)}>证件照片：</p>
      <div>
        <div className={styles.idcard}></div>
        <div className={styles.idcard}></div>
      </div>
    </Fragment>
  );
}

function InfoTitle(props) {
  return (
    <div style={props.style} className={classNames(styles.infoTitle, props.className)}>
      <span className={outStyles.font18}>{props.type}</span>
      {props.leftNode}
    </div>
  );
}



export default class PersonInfoComponent extends Component {

  modifyModalRef = React.createRef();
  changePhoneModalRef = React.createRef();

  render() {
    return (
      <div className={styles.personInfo}>
        {/*修改密码弹出框*/}
        <ModifyModal ref={this.modifyModalRef} />
        {/*换绑弹出框*/}
        <ChangePhoneModal ref={this.changePhoneModalRef} />
        <div className={classNames('font24', "mb-20", styles.topTitle)}>
          个人中心
          <div style={{ display: 'flex' }}>
            <i className={classNames(styles.edit, styles.icon)} />
            <span onClick={() => {
              this.modifyModalRef.current.modifyModal();
            }} className={styles.underline}>修改密码</span>
          </div>
        </div>
        <div className={styles.detailContent}>
          <InfoTitle type={"登记申请信息"} />
          <Row gutter={20} className={styles.row}>
            <Col className={styles.col} span={5}>
              <div>姓名：</div>
              <div className={styles.right}>张家辉</div>
            </Col>
            <Col className={styles.col} span={7}>
              <div>证件类型：</div>
              <div className={styles.right}>身份证 - 411888888888888888</div>
            </Col>
            <Col className={styles.col} span={6}>
              <div>手机号：</div>
              <div className={styles.right}>18788889097 <small onClick={() => {
                this.changePhoneModalRef.current.displayModal();
              }} style={{ marginLeft: "10px" }} className={styles.underline}>换绑</small></div>
            </Col>
            <Col className={styles.col} span={6}>
              <div>银行卡号：</div>
              <div className={styles.right}>6898999999998987</div>
            </Col>
          </Row>
          <InfoTitle
            type={"其他信息"}
            style={{ paddingTop: '20px' }}
            className={styles.rowBorder}
            leftNode={<Fragment><i className={classNames(styles.edit, styles.icon)} /><small className={styles.underline}>编辑</small></Fragment>} />
          <EditWrapper />
        </div>
      </div>
    );
  }
}
