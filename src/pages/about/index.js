import css from './about.scss';
import React, { Component } from 'react';
import Loginmd from '../../component/loginMD';


class About extends Component {
  state = {
    visible: false
  };
  render() {
    return (
      <React.Fragment>
        <div className={css.about}>
          <div className={css.banner}>
            <div className={`${css.info} warp`}>
              <h2 className={css.title}>公司简介</h2>
              <p>梅山(宁波）金服科技有限公司成立于2017年12月，是由梅山岛开发投资有限公司、西藏麒麟资本管理有限公司等共同出资设立的金融服务科技平台。</p>
              <p>公司的定位“金融、科技”，向政府部门提供大数据风险监测服务，向商业银行、证券公司、私募基金等金融机构提供智能化投行、投融资对接、资产管理等服务，积极推动金融服务实体经济，促进新兴产业发展。</p>
            </div>
          </div>
          <div className={`${css.content} warp`}>
            <h3 className={css.title}>战略发展</h3>
            <ul className={`${css.itemBox} clearfix`}>
              <li className={css.item}>
                <img className={css.img} src={require("../../assets/about-01.png")} alt="1" />
                <h4 className={css.subtitle}>私募基金综合外包服务</h4>
                <p className={css.text}>提供私募基金管理人登记、私募基金产品备案、私募基金产品信息披露等一站式综合外包服务，解决私募基金管理人运营成本高企的难题，提升私募基金管理人合规经营的水平，免除合规之忧。</p>
              </li>
              <li className={css.item}>
                <img className={css.img} src={require("../../assets/about-02.png")} alt="2" />
                <h4 className={css.subtitle}>大数据综合服务</h4>
                <p className={css.text}>为政府部门、金融机构及其他行业提供大数据监测、风险控制及产业化解决方案等大数据综合服务，解决政府部门、金融机构及其他行业的痛点问题，提升决策效率。</p>
              </li>
              <li className={css.item}>
                <img className={css.img} src={require("../../assets/about-03.png")} alt="3" />
                <h4 className={css.subtitle}>智能化投行服务</h4>
                <p className={css.text}>基于大数据、人工智能等技术，全面多维度来刻画企业画像分析报告，自动化生成企业的最新研究报告，提供给商业银行、证券公司及私募基金等金融机构，解决传统投行成本高、时效性弱等缺陷。</p>
              </li>
              <li className={css.item}>
                <img className={css.img} src={require("../../assets/about-04.png")} alt="4" />
                <h4 className={css.subtitle}>募投管退平台服务</h4>
                <p className={css.text}>对接商业银行、证券公司及各地政府部门项目资源，借助人工智能、大数据等技术，打造产业与资本对接撮合平台，利用智能化投行体系服务PE和VC的投后管理，推出合伙企业份额（LP份额）转让与质押服务，形成私募基金募投管退的生态圈。</p>
              </li>
            </ul>
          </div>
          <div className={`${css.partner} warp`}>
            <h2 className={css.title}>合作伙伴</h2>
            <span className={css.subtitle}>PARTNER</span>
            <ul className={`${css.list} ${css.ulGap}`}>
              <li><img className={css.img} src={require("../../assets/partner/1.png")} alt="1" /></li>
              <li><img className={css.img} src={require("../../assets/partner/2.jpg")} alt="2" /></li>
              <li><img className={css.img} src={require("../../assets/partner/3.png")} alt="3" /></li>
            </ul>
            <ul className={`${css.list}`}>
              <li><img className={css.img} src={require("../../assets/partner/4.png")} alt="4" /></li>
              <li><img className={css.img} src={require("../../assets/partner/5.png")} alt="5" /></li>
              <li><img className={css.img} src={require("../../assets/partner/6.png")} alt="6" /></li>
            </ul>
          </div>
          <Loginmd visible={this.state.visible} />
        </div>
      </React.Fragment>
    );
  }

}

export default About;
