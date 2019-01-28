import React, { Component, Fragment } from 'react';
import { Form, Input, Select, Row, Col, Button } from 'antd';

const { Group } = Input;
const { Option } = Select;
const { Item } = Form;

class BasisEdit extends Component {
  render() {
    return (
      <Fragment>
        <Row gutter={20}>
          <Col span={12}>
            <Item label="企业名称" colon={false}>
              <Input size="large" disabled value={'企业名称文本企业名'} />
            </Item>
          </Col>
          <Col span={12}>
            <Item label="企业类型" colon={false}>
              <Select disabled value="0" placeholder="请选择" size="large" style={{ width: '100%' }}>
                <Option value="0">本科</Option>
                <Option value="1">硕士</Option>
                <Option value="3">其他</Option>
              </Select>
            </Item>
          </Col>
          <Col span={12}>
            <Item label="统一社会信用代码" colon={false}>
              <Input size="large" disabled value={'123456789012345678'} />
            </Item>
          </Col>
          <Col span={12}>
            <Item label="手机号" colon={false}>
              <Input size="large" disabled value={'18888888888'} />
            </Item>
          </Col>
          <Col span={12}>
            <Item label="法人姓名" colon={false}>
              <Input size="large" value={'李某某'} />
            </Item>
          </Col>
          <Col span={12}>
            <Item label="证件类型" colon={false}>
              <Group compact>
                <Select style={{ width: '28%' }} size="large" defaultValue="0">
                  <Option value="0">身份证</Option>
                </Select>
                <Input style={{ width: '72%',borderLeft: '0px'}} maxLength={11} size="large" placeholder="请输入手机号码" />
              </Group>
            </Item>
          </Col>
        </Row>
        <div className='mb-20' style={{ display: 'flex' }}>
          <Button
            onClick={() => {
              this.props.edit();
            }}
            style={{ width: '184px', marginRight: '20px' }}
            size="large"
            htmlType="submit"
          >
            取消
          </Button>
          <Button
            onClick={() => {
              this.props.edit();
            }}
            style={{ width: '184px', backgroundColor: '#0072D2' }}
            type="primary"
            size="large"
            htmlType="submit"
          >
            保存
          </Button>
        </div>
      </Fragment>
    );
  }
}
export default Form.create()(BasisEdit);
