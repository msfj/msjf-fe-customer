import React, { Component, Fragment } from 'react';
import styles from './EnterpriseInfoComponent/index.scss';
import hmcss from '../index.scss';
import { Row, Col, Steps, Form, Input, Select, Button, Table } from 'antd';
import Link from 'umi/link';

const { Step } = Steps;
const { Item } = Form;
const { Option } = Select;
const { Group } = Input;

const InfoTitle = props => {
    return (
        <div style={props.style} className={`${styles.infoTitle} ${props.className}`}>
            <i />
            <span className={styles.font18}>{props.type}</span>
        </div>
    )
};

const Status = props => {
    const { status='none' } = props;
    const stobj = {
        '0': { ic: 'checking', tx: '审核中'},
        '1': { ic: 'checked', tx: '已认证'}
    };    
    const st = stobj[status];
    let nd = <span>/</span>;
    if(st) {
        nd = (
            <Fragment>
                <i className={st.ic}></i>
                <span>{st.tx}</span>
            </Fragment>
        );
    }
    return nd;
};

class FormTable extends Component {
    state = {};

    render() {
        const { columns, datas = [[]] } = this.props;
        const cle = columns.length;
        const edtObj = {
            input(opts) {
                const { placeholder='', name='' } = opts;
                return <Input placeholder={placeholder} name={name} />
            },
            select(opts) {
                const { placeholder='请选择', name='', options=[{val: 0, text: '0'}] } = opts;
                return (
                    <Select placeholder={placeholder} name={name}>
                        {
                            options.forEach(it => {
                                return <Option value={it.val}>{it.text}</Option>
                            })
                        }
                    </Select>
                );
            },
            btns(opts) {
                const { btns=[] } = opts;
                let bar = [];
                btns.forEach(btn => {
                    const {handle=(e) => {}, text=''} = btn;
                    bar.push(<Link to="#" onClick={(e) => {handle(e)}}>{text}</Link>);
                });
                if(bar.length > 0) {
                    return bar;
                } else {
                    return <span>/</span>;
                }
            },
            html(opts) {
                const { fmt = () => { return <span>/</span>} } = opts;

                return fmt(opts);
            }
        };
        const tds = (data, ind) => {
            let tdar = [];
            columns.forEach((col, i) => {
                const { type, title, key, opts={} } = col;
                let optsx = {...opts, data};

                tdar.push(<td key={i}>{edtObj[type](optsx)}</td>);
            });
            return <tr key={ind}>{tdar}</tr>;
        };
        const tbodys = () => {
            let rows = [];
            datas.forEach((data, ind) => {
                rows.push(tds(data, ind));
            });
            return rows;
        };
        const theads = () => {
            let ths = [];
            columns.forEach((el, i) => {
                const {width='', title} = el;
                ths.push(<th key={i} width={width}><span className="form-table-th">{title}</span></th>);
            });
            return ths;
        };
        return (
            <table className={`form-table ${this.props.className}`}>
                <thead>
                    <tr>
                        {theads()}
                    </tr>
                </thead>
                <tbody>
                    {tbodys()}
                </tbody>
            </table>
        );
    }
}

class Step1Form extends Component {

    render() {
        return (
            <Fragment>
                <InfoTitle type={"登记申请信息"} className="mt-40" />
                <Form onSubmit={this.props.handleSubmit}>
                    <Row gutter={16} className="bd-bm">
                        <Col span={8}>
                            <Item label="企业地区选择">
                                <Select size="large" placeholder="请选择地区">
                                    <Option value="0">眉山</Option>
                                </Select>
                            </Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Item label="申请企业名称">
                                <Input size="large" placeholder="请输入企业名称" />
                            </Item>
                        </Col>
                        <Col span={8}>
                            <Item label="企业类型">
                                <Select size="large" placeholder="请选择">
                                    <Option value="0">身份证</Option>
                                </Select>
                            </Item>
                        </Col>
                        <Col span={8}>
                            <Item label="企业分类">
                                <Select size="large" placeholder="请选择">
                                    <Option value="0">身份证</Option>
                                </Select>
                            </Item>
                        </Col>
                    </Row>
                    <Item>
                        <Button type="primary" htmlType="submit" size="large" className="btn-lg">下一步</Button>
                    </Item>
                </Form>
            </Fragment>
        )
    }
};

const Step2Form = props => {
    return (
        <Fragment>
            <InfoTitle type={"填写基本信息"} className="mt-40" />
            <Form onSubmit={props.handleSubmit}>
                <Row gutter={16}>
                    <Col span={6}>
                        <Item label="招商对接人">
                            <Select size="large" placeholder="请选择">
                                <Option value="0">眉山</Option>
                            </Select>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item label="办理流程">
                            <Select size="large" defaultValue="0">
                                <Option value="0">全电子</Option>
                            </Select>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item label="经营期限（年）">
                            <Input size="large" placeholder="请输入对应的经营年限" />
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item label="缴付期限（年）">
                            <Input size="large" placeholder="请输入对应的缴付年限" />
                        </Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6}>
                        <Item label="注册资本认缴出资额">
                            <Input size="large" placeholder="请输入对应的缴付年限" suffix="万元" />
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item label="币种">
                            <Select size="large" placeholder="请选择">
                                <Option value="0">人民币</Option>
                            </Select>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item label="企业电话">
                            <Input size="large" placeholder="请输入企业电话" />
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item label="企业邮箱">
                            <Input size="large" placeholder="请输入企业邮箱" />
                        </Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Item label="企业联系地址">
                            <Group compact>
                                <Select style={{ width: '33%' }} size="large" defaultValue="0">
                                    <Option value="0">浙江省/宁波市/北仑区</Option>
                                </Select>
                                <Input style={{ width: '67%' }} size="large" placeholder="请输入详细地址" />
                            </Group>
                        </Item>
                    </Col>
                    <Col span={12}>
                        <Item label="经营范围">
                            <Input size="large" placeholder="请输入企业的主要经营范围" />
                        </Item>
                    </Col>
                </Row>
                <Item>
                    <Button size="large" className="btn-lg mr-20" onClick={props.goback}>上一步</Button>
                    <Button size="large" className="btn-lg mr-20">保存</Button>
                    <Button type="primary" htmlType="submit" size="large" className="btn-lg">下一步</Button>
                </Item>
            </Form>
        </Fragment>
    )
};

const Step3Form = props => {
    const columns = [{
        title: '身份',
        type: 'input',
        key: 'identity',
        width: '15%',
        opts: { placeholder:'请输入身份' }
      },{
        title: '姓名',
        type: 'input',
        key: 'name',
        width: '15%',
        opts: { placeholder:'请输入姓名' }
      },{
        title: '手机号码',
        type: 'input',
        key: 'phone',
        width: '15%',
        opts: { placeholder:'请输入手机号码' }
      },{
        title: '证件类型',
        type: 'select',
        key: 'cardType',
        width: '15%',
        opts: { }
      },{
        title: '证件号码',
        type: 'input',
        key: 'cardID',
        width: '15%',
        opts: { placeholder:'请输入证件号码' }
      },{
        title: '状态',
        type: 'html',
        key: 'status',
        width: '11%',
        fmt(dt) {
            if(dt) {
                return <Status status={dt}/>
            } else {
                return <span>/</span>;
            }
        }
      },{
        title: '操作',
        type: 'btns',
        key: 'btns',
        width: '11%',
      }];
    const data = [];
    return (
        <Fragment>
            <InfoTitle type={"邀请认证"} className="mt-40" />
            <Form onSubmit={props.handleSubmit}>
                <Row gutter={16} className="bd-bm">
                    <Col span={6}>
                        <Item label="执行事务合伙人类型">
                            <Select size="large" placeholder="请选择">
                                <Option value="0">眉山</Option>
                            </Select>
                        </Item>
                    </Col>
                    <Col span={6}>
                        <Item label="执行事务合伙人名称">
                            <Select size="large" placeholder="请选择">
                                <Option value="0">眉山</Option>
                            </Select>
                        </Item>
                    </Col>
                </Row>
                {/* <Table columns={columns} dataSource={data} /> */}
                <FormTable columns={columns} className="mt-20"/>
                <div className="mt-24">
                    <Button size="large" className="btn-lg mr-20" onClick={props.goback}>上一步</Button>
                    <Button size="large" className="btn-lg mr-20">保存</Button>
                    <Button type="primary" htmlType="submit" size="large" className="btn-lg">下一步</Button>
                </div>
            </Form>
        </Fragment>
    )
};

const Step4Form = props => {
    return (
        <Fragment>
            <div>4</div>
        </Fragment>
    )
};

const [Step1, Step2, Step3, Step4] = [Form.create()(Step1Form), Form.create()(Step2Form), Form.create()(Step3Form), Form.create()(Step4Form)];

class EstablishmentComponent extends Component {
    state = {
        step: 0
    };

    perStep = (e) => {
        this.setState({
            step: this.state.step - 1
        });
    }

    nextStep = (e) => {
        e.preventDefault();
        this.setState({
            step: this.state.step + 1
        });
    }

    render() {
        const show = i => {
            return this.state.step === i ? '' : 'hide';
        };
        return (
            <div className={styles.insideContent}>
                <div className={styles.tips}>
                    <img alt="" src={require("image/icon/back.svg")} />
                    <span className={styles.font14}>返回 / 新增企业设立</span>
                </div>
                <div className={styles.detailContent}>
                    <Steps progressDot current={this.state.step}>
                        <Step title="第一步" description="登记申请信息" />
                        <Step title="第二步" description="基本信息" />
                        <Step title="第三步" description="邀请认证" />
                        <Step title="第四步" description="其他信息" />
                    </Steps>
                    <img alt="" src={require('../../../../assets/register-separation.png')} />
                    <div className={show(0)}><Step1 handleSubmit={this.nextStep} wrappedComponentRef={(inst) => this.formRef = inst} /></div> 
                    <div className={show(1)}><Step2 handleSubmit={this.nextStep} goback={this.perStep}/></div>
                    <div className={show(2)}><Step3 handleSubmit={this.nextStep} goback={this.perStep}/></div>
                    <div className={show(3)}><Step4 handleSubmit={this.nextStep} goback={this.perStep}/></div>
                </div>
            </div>
        )
    }
}

export default EstablishmentComponent