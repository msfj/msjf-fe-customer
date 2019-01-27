import './personInfo.scss';
import React, { Fragment, Component, PureComponent } from 'react';
import { Form, Input, Icon, message, Select, Row, Col, Upload, Button, DatePicker, Cascader } from 'antd';
import router from 'umi/router';

const { Group, TextArea } = Input;
const { Option } = Select;
const { Item } = Form;

class Pertt extends PureComponent {
  render() {
    const { title, small } = this.props;
    return (
      <h2 className="persif-title">
        <strong>{title}</strong>
        <small>{small}</small>
      </h2>
    );
  }
}

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


class Avatar extends React.Component {
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

class PersonInfo extends Component {
  state = {
    visible: false,
    hasCfa: 1
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  cfaChange = (e) => {
    this.setState({
      hasCfa: e.target.value
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const options = [{
      value: '浙江',
      label: '浙江',
      children: [{
        value: '宁波',
        label: '宁波',
        children: [{
          value: '梅山',
          label: '梅山',
        }],
      }],
    }];
    return (
      <Fragment>
        <div className="persif">
          <div className="persif-banner">
            <div className="persif-wela">欢迎加入宁波类金融企业服务管理平台</div>
            <div className="persif-welb"><Icon type="exclamation-circle" theme="filled" /> 你好！为不影响您的使用，请补全个人基本信息。</div>
          </div>
          <Form className="persif-form" onSubmit={this.handleSubmit}>
            <Pertt title="企业账号信息" small="（同步注册时填写的信息）"></Pertt>
            <Row gutter={16}>
              <Col span={12}>
                <Item label="企业名称">
                  <Input size="large" disabled value="大黄蜂" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="企业类型">
                  <Input size="large" disabled value="有限公司" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="证件号码">
                  <Group compact>
                    <Select style={{ width: '45%' }} size="large" defaultValue="0">
                      <Option value="0">统一社会信用代码</Option>
                    </Select>
                    <Input style={{ width: '55%' }} size="large" value="888888888888888888" />
                  </Group>
                </Item>
              </Col>
              <Col span={12}>
                <Item label="法人姓名">
                  <Input size="large" disabled value="李某某" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Item label="手机号">
                  <Input size="large" disabled value="188 8888 8888" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="法人身份证号">
                  <Input size="large" disabled value="411291888888888888" />
                </Item>
              </Col>
            </Row>
            <Pertt title="企业其他信息"></Pertt>
            <Row gutter={16}>
              <Col span={12}>
                <Item label="联系人姓名">
                  <Input size="large" placeholder="请输入联系人姓名" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="手机号">
                  <Input size="large" placeholder="请输入手机号" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="联系人身份证号">
                  <Input size="large" placeholder="请输入联系人身份证号" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="成立时间">
                  <DatePicker placeholder="请选择成立时间" style={{ width: '100%' }} />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Item label="企业邮箱">
                  <Input size="large" placeholder="请输入邮箱地址" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="币种">
                  <Select placeholder="请选择" size="large">
                    <Option value="lucy">人民币</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={12}>
                <Item label="注册资金（万元）">
                  <Input size="large" placeholder="请输入注册资金" />
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Item label="注册地址">
                  <Group compact>
                    <Cascader style={{ width: '50%' }} size="large" options={options} placeholder="请选择地区" />
                    <Input style={{ width: '50%' }} size="large" value="请输入详细地址" />
                  </Group>
                </Item>
              </Col>
              <Col span={24}>
                <Item label="联系地址">
                  <Group compact>
                    <Cascader style={{ width: '50%' }} size="large" options={options} placeholder="请选择地区" />
                    <Input style={{ width: '50%' }} size="large" value="请输入详细地址" />
                  </Group>
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Item label="经营范围">
                  <TextArea rows={5} placeholder="请输入经营范围" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="公司简介">
                  <TextArea rows={5} placeholder="请输入公司简介" />
                </Item>
              </Col>
            </Row>
            <Pertt title="附属信息" />
            <Row gutter={16}>
              <Col span={12}>
                <Item label="挂牌情况">
                  <Select placeholder="请选择" size="large">
                    <Option value="lucy">地方股权</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={12}>
                <Item label="投资来源">
                  <Select placeholder="请选择" size="large">
                    <Option value="lucy">内资</Option>
                  </Select>
                </Item>
              </Col>
              <Col span={12}>
                <Item label="企业成分">
                  <Select placeholder="请选择" size="large">
                    <Option value="lucy">民营</Option>
                  </Select>
                </Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Item label="具体业务">
                  <TextArea rows={5} placeholder="请输入具体业务" />
                </Item>
              </Col>
              <Col span={12}>
                <Item label="盈利模式">
                  <TextArea rows={5} placeholder="请输入具体内容" />
                </Item>
              </Col>
              <Col span={24}>
                <Item label="资金来源">
                  <TextArea rows={5} placeholder="请输入具体内容" />
                </Item>
              </Col>
            </Row>
            <Item label="证件照片">
              <span className="fc-gray">请上传营业执照照片（可添加JPG、PNG、PDF档案格式）</span>
              <Row gutter={16}>
                <Col span={12}>
                  <Avatar ldtx="上传营业执照照片" />
                </Col>
                <Col span={12}>
                  <Avatar ldtx="上传营业执照照片" />
                </Col>
              </Row>
            </Item>
            <div className="text-center">
              <div className="persif-btip">我们将为你提供多种服务能力，包括企业设立，相关企业等多种业务</div>
              <Button onClick={() => {
                router.push('user/enterprisehome/etpchange');
              }} type="primary" size="large" htmlType="submit">提交基本信息</Button>
            </div>
          </Form>
        </div>
      </Fragment>
    );
  }

}



export default Form.create()(PersonInfo);
