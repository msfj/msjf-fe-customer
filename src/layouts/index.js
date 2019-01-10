import css from './index.scss';
import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon, Popover } from 'antd';
import Link from 'umi/link';

class BasicLayout extends Component {

  state = {
    headerStyle: false
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (!document.querySelectorAll(".bannerContainer h2")[0]) return false;
      if (document.querySelectorAll(".bannerContainer h2")[0].offsetTop < document.documentElement.scrollTop + 60) {
        this.setState({ headerStyle: true });
      } else {
        this.setState({ headerStyle: false });
      }
    });
  }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll")
  // }

  // static getDerivedStateFromProps(nextProps, prevState) {

  // }

  render() {
    return (
      <div className={`${css.main} root`}>
        <Header headerStyle={this.state.headerStyle || this.props.location.pathname !== "/"} pathname={this.props.location.pathname}  />
        {this.props.children}
        <div className={css.footer}>
          <div className={`${css.footercontainer} clearfix`}>
            <div className={css.footercol1}>
              <div className={css.footertitle}>电话&邮箱<i className={css.footerline}></i></div>
              <div className={css.footercontent}>
                <Icon className={css.footericon} style={{ fontSize: '20px' }} type="phone" />
                {/* <img  src={require("../assets/ic-phone.svg")} alt="" /> */}
                <span>0574-86708719</span>
                <img className={`${css.footericon} ${css.ml28}`} src={require("../assets/ic-email.svg")} alt="" />
                <span>jinfu512@163.com</span>
              </div>
              <div className={`${css.footertitle} ${css.mt30}`}>地址<i className={css.footerline}></i></div>
              <div className={css.footercontent}>
                <img className={css.footericon} src={require("../assets/ic-location.svg")} alt="" />
                <span>浙江省·宁波市北仑区梅山保税港区行政商务中心512室</span>
              </div>
            </div>
            <div className={css.footercol2}>
              <div className={css.footertitle}>友情链接<i className={css.footerline}></i></div>
              <ul className={`${css.footercontent} clearfix`}>
                <li className={css.li}>
                  <Link to="#">中国证券监督管理委员会宁波监管局</Link>
                </li>
                <li className={css.li}>
                  <Link to="#">宁波梅山保税港区管委会</Link>
                </li>
                <li className={css.li}>
                  <Link to="#">宁波梅山国际物流产业集聚区管委会</Link>
                </li>
                <li className={css.li}>
                  <Link to="#">浙江政务服务网</Link>
                </li>
                <li className={css.li}>
                  <Link to="#">宁波市证券投资基金业协会</Link>
                </li>
                <li className={css.li}>
                  <Link to="#">中国证券投资基金业协会</Link>
                </li>
                <li className={css.li}>
                  <Link to="#">宁波市类金融企业服务管理平台</Link>
                </li>
                <li className={css.li}>
                  <Link to="#">壹融通云私募管理平台</Link>
                </li>
              </ul>
            </div>
            <div className={css.footercol3}>
              <div className={css.footertitle}>公众号<i className={css.footerline}></i></div>
              <img className={css.hoverPic} src={require("../assets/qrcode.png")} alt="" />
            </div>
          </div>
          <div className={css.footerbar}>
            <div className={`warp clearfix`}>
              <div className={css.footerlink}>
                <Link to="/aboutus">关于我们</Link>
                <i className={css.footersplit}>|</i>
                <Link to="/aboutus">服务协议</Link>
                <i className={css.footersplit}>|</i>
                <Link to="/aboutus">操作指南</Link>
                <i className={css.footersplit}>|</i>
                <Link to="/aboutus">常见问题</Link>
              </div>
              <div className={css.footercopy}>
                2018版权所有@金服科技  浙ICP备18030914号
            </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

function Header(props) {
  const pic = props.headerStyle ? require("../assets/qrcodegray.svg") : require("../assets/qrcode.svg");
  return (
    <div className={`${css.head} ${props.headerStyle && `addbackground`}`}>
      <div className={css.headContainer}>
        <div className={css.logo}>
          <i className={css.iconLogo}></i>
          <span>宁波梅山金服科技</span>
          <span className={css.break}></span>
          <span>宁波市类金融企业管理服务平台</span>
        </div>
        <ul className={css.nav}>
          <li className={`${props.pathname === "/" && `active`}`}><Link to="/">首页</Link></li>
          <li><Link to="/">行业咨询</Link></li>
          <li><Link to="/">帮助中心</Link></li>
          <li className={`${props.pathname === "/about" && `active`}`}><Link to="/about">关于我们</Link></li>
        </ul>
        <div className={css.right}>
          <Popover placement="bottom" content={<img className={css.hoverPic} src={require("../assets/qrcode.png")} alt="" />}>
            <img src={pic} alt="" />
            <span>关注二维码</span>
          </Popover>

        </div>
      </div>
    </div>
  );
}


export default BasicLayout;