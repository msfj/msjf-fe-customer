import React, { Component, Fragment } from 'react';
import styles from './enterpriseinfo/index.scss';
import './index.scss';
import { Row, Col, Steps, Form, Input, Select, Button, Upload, Icon } from 'antd';
import Link from 'umi/link';

const { Step } = Steps;
const { Item } = Form;
const { Option } = Select;
const { Group, TextArea } = Input;

const InfoTitle = props => {
    return (
        <div style={props.style} className={`${styles.infoTitle} ${props.className}`}>
            <i />
            <span className={styles.font18}>{props.type}</span>
        </div>
    )
};


const SelfForm = props => {
    const props2 = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        className: 'upload-list-inline',
    };
    return (
        <Fragment>
            <InfoTitle type={"其他信息"} />
            <Form onSubmit={props.handleSubmit} className="estl-form">
                <Row gutter={16}>
                    <Col span={6}>
                        <Item label="申请企业名称">
                            <Input size="large" placeholder="请输入" defaultValue="梅山保税港区平谷有限公司" />
                        </Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Item label="名称核准书">
                            <Upload {...props2}>
                                <Button type="primary" size="large" className="mr-20"><Icon type="folder-open" /> 上传文件</Button>
                                <span className="fc-gray"><Icon type="exclamation-circle" theme="filled" className="fc-warning mr-10" />支持扩展：rar. zip. doc. docx. pdf. jpg…</span>
                            </Upload>
                        </Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={18}>
                        <Item label="注册地址">
                            <Group compact>
                                <Select size="large" placeholder="请选择" style={{ width: '30%' }}>
                                    <Option value="0">浙江省/宁波市/北仑区</Option>
                                </Select>
                                <Input size="large" placeholder="请输入详细地址" style={{ width: '70%' }} />
                            </Group>
                        </Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Item label="注册地址租赁协议">
                            <Upload {...props2}>
                                <Button type="primary" size="large" className="mr-20"><Icon type="folder-open" /> 上传文件</Button>
                                <span className="fc-gray"><Icon type="exclamation-circle" theme="filled" className="fc-warning mr-10" />支持扩展：rar. zip. doc. docx. pdf. jpg…</span>
                            </Upload>
                        </Item>
                    </Col>
                </Row>
                <Item>
                    <Button type="primary" htmlType="submit" size="large" className="btn-lg">提交确认设立申请</Button>
                </Item>
            </Form>
        </Fragment>
    )
};

const EstlForm = Form.create()(SelfForm);

class EstlCfmComponent extends Component {
    state = {
    };

    handleSubmit = (e) => {

    };

    render() {
        return (
            <div className={styles.insideContent}>
                <div className={styles.tips}>
                    <img alt="" src={require("image/icon/back.svg")} />
                    <span className={styles.font14}>返回 / 确认设立</span>
                </div>
                <div className={styles.detailContent}>
                    <EstlForm handleSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

export default EstlCfmComponent