import './personInfo.scss';
import React, { Fragment, Component, PureComponent } from 'react';
import { Form, Input, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const { Group } = Input;
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

class PersonInfo extends Component {
    state = {
        visible: false
    };
    render() {
        return (
            <Fragment>
                <div className="persif">
                    <div className="persif-banner">
                        <div className="persif-wela">欢迎加入宁波类金融企业服务管理平台</div>
                        <div className="persif-welb"><Icon type="exclamation-circle" theme="filled" /> 你好！为不影响您的使用，请补全个人基本信息。</div>
                    </div>
                    <Form className="persif-form">
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
                                        <Select style={{ width: '28%' }} size="large" disabled defaultValue="身份证">
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
                    </Form>
                </div>
            </Fragment>
        );
    }

}

export default PersonInfo;
