import './personInfo.scss';
import React, { Fragment, Component, PureComponent } from 'react';
import { Form, Input, Icon, message, Select, Row, Col, Radio, Upload, Button } from 'antd';

const { Group, TextArea } = Input;
const { Option } = Select;
const { Item } = Form;
const RadioGroup = Radio.Group;

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
    const isImg = imgar.indexOf(file.type)===-1;
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
                    <Icon type={this.state.loading ? 'loading' : 'plus'} style={{fontSize: '40px'}} />
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
                {imageUrl ? <img src={imageUrl} alt="avatar" /> : <UploadButton text={this.props.ldtx}/>}
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
        return (
            <Fragment>
                <div className="persif">
                    <div className="persif-banner">
                        <div className="persif-wela">欢迎加入宁波类金融企业服务管理平台</div>
                        <div className="persif-welb"><Icon type="exclamation-circle" theme="filled" /> 你好！为不影响您的使用，请补全个人基本信息。</div>
                    </div>
                    <Form className="persif-form" onSubmit={this.handleSubmit}>
                        <Pertt title="基本信息" small="（同步注册时填写的信息）"></Pertt>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Item label="个人姓名">
                                    <Input size="large" disabled value="大黄蜂" />
                                </Item>
                            </Col>
                            <Col span={12}>
                                <Item label="个人姓名">
                                    <Group compact>
                                        <Select style={{ width: '28%' }} size="large" disabled defaultValue="0">
                                            <Option value="0">身份证</Option>
                                        </Select>
                                        <Input style={{ width: '72%' }} size="large" disabled value="411291888888888888" />
                                    </Group>
                                </Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Item label="手机号">
                                    <Input size="large" disabled value="188 8888 8888" />
                                </Item>
                            </Col>
                        </Row>
                        <Pertt title="补全基本信息"></Pertt>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Item label="学历">
                                    <Select placeholder="请选择" size="large">
                                        <Option value="lucy">lucy</Option>
                                    </Select>
                                </Item>
                            </Col>
                            <Col span={12}>
                                <Item label="邮箱">
                                    {getFieldDecorator('email', {
                                        rules: [{ required: true, message: '请输入邮箱地址' }],
                                    })(
                                        <Input size="large" placeholder="请输入邮箱地址" />
                                    )}
                                </Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Item label="从业经历">
                                    <TextArea rows={5}  placeholder="请输入工作经历（如2018年，在**公司，主要从事相关的工作）" />
                                </Item>
                            </Col>
                            <Col span={12}>
                                <Item label="投资经历">
                                    <TextArea rows={5}  placeholder="请输入相关的投资经历" />
                                </Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Item label="是否拥有基金资格证">
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
                        <Item label="证件照片">
                            <span className="fc-gray">请上传基本信息中对应的证件照片（可添加JPG、PNG、PDF 档案格式）</span>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Avatar ldtx="上传证件（正面）"/>
                                </Col>
                                <Col span={12}>
                                    <Avatar ldtx="上传证件（背面）"/>
                                </Col>
                            </Row>
                        </Item>
                        <div className="text-center">
                            <div className="persif-btip">我们将为你提供多种服务能力，包括企业设立，相关企业等多种业务</div>
                            <Button type="primary" size="large" htmlType="submit">提交基本信息</Button>
                        </div>
                    </Form>
                </div>
            </Fragment>
        );
    }

}



export default Form.create()(PersonInfo);
