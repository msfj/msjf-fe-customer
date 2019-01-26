import css from './index.scss';
import React, { Component } from 'react';
import { connect } from 'dva';
import { LocaleProvider, Popover } from 'antd';
import Link from 'umi/link';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const namespace = 'global';
const mapStateToProps = (state) => {
  return state[namespace];
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout(param) {
      dispatch({
          type: `${namespace}/logout`,
          payload: param
      });
    },

  };
};
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
  render() {
    const { login, user, logout, location, children } = this.props;
    const isLoginPage = !['/', '/about'].includes(location.pathname);
    return (
      <LocaleProvider locale={zh_CN}>
        <div className={`${css.main} root`}>
          <Header isLoginPage={isLoginPage} headerStyle={this.state.headerStyle || location.pathname !== "/"} 
            pathname={location.pathname} isLogin={login} user={user} logout={logout}
          />
          {children}
          {
            isLoginPage ? <SimpleFooter /> : <Footer />
          }
        </div>
      </LocaleProvider>
    )
  }
}

function SimpleFooter() {
  return (
    <div className={css.simpleFooter}>
      <span>2018版权所有@金服科技  浙ICP备18030914号</span>
    </div>
  );
}

function Header(props) {
  const pic = props.headerStyle ? require("../assets/qrcodegray.svg") : require("../assets/qrcode.svg");
  return (
    <div className={`${css.head} ${props.headerStyle && `addbackground`}`}>
      <div className={css.headContainer}>
        <div className={css.logo}>
          <Link to="/">
            <i className={`${css.iconLogo} ${props.headerStyle && css.color}`}></i>
            <span style={{fontSize:'18px'}}>梅山金服</span>
            <span className={`${css.break} ${props.headerStyle && `lineGray`}`}></span>
            <span>宁波市类金融企业管理服务平台</span>
          </Link>
        </div>
        {
          !props.isLoginPage && <ul className={css.nav}>
            <li className={`${props.pathname === "/" && `active`}`}><Link to="/">首页</Link></li>
            <li><Link to="/">行业咨询</Link></li>
            <li><Link to="/">帮助中心</Link></li>
            <li className={`${props.pathname === "/about" && `active`}`}><Link to="/about">关于我们</Link></li>
          </ul>
        }
        <div className={css.right}>
          {
            props.isLogin ? <div className={css.headInfo}>
              <div>您好，<span className={css.blueFont}>{props.user.membername}</span>梅山金服欢迎您！</div>
              <i className={css.compass} />
              <span>指南</span>
              <span className={`${css.break} ${props.headerStyle && `lineGray`}`}></span>
              <i className={css.close} />
              <span onClick={()=>{props.logout()}}>退出</span>
            </div> : <Popover placement="bottom" content={<img className={css.hoverPic} src={require("../assets/qrcode.png")} alt="" />}>
                <img src={pic} alt="" />
                <span>关注二维码</span>
              </Popover>
          }
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={css.footer}>
      <div className={`${css.footercontainer} clearfix`}>
        <div className={css.footercol1}>
          <div className={css.footertitle}>电话&邮箱<i className={css.footerline}></i></div>
          <div className={css.footercontent}>
            <img className={css.footericon} src={require("../assets/ic-phone.svg")} alt="" />
            <a href="tel:0574-86708719">0574-86708719</a>
            <img className={`${css.footericon} ${css.ml28}`} src={require("../assets/ic-email.svg")} alt="" />
            <a href="mailto:jinfu512@163.com">jinfu512@163.com</a>
          </div>
          <div className={`${css.footertitle} ${css.mt30}`}>地址<i className={css.footerline}></i></div>
          <div className={css.footercontent}>
            <img className={css.footericon} src={require("../assets/ic-location.svg")} alt="" />
            <span>浙江省宁波市北仑区梅山大道商务中心八号办公楼1560室</span>
          </div>
        </div>
        <div className={css.footercol2}>
          <div className={css.footertitle}>友情链接<i className={css.footerline}></i></div>
          <ul className={`${css.footercontent} clearfix`}>
            <li className={css.li}>
              <a href="http://www.csrc.gov.cn/pub/ningbo/" target="_blank"  rel="noopener noreferrer">中国证券监督管理委员会宁波监管局</a>
            </li>
            <li className={css.li}>
              <a to="http://xxgk.msd.gov.cn/" target="_blank"  rel="noopener noreferrer">宁波梅山保税港区管委会</a>
            </li>
            <li className={css.li}>
              <a to="http://www.msd.gov.cn/" target="_blank"  rel="noopener noreferrer">宁波梅山国际物流产业集聚区管委会</a>
            </li>
            <li className={css.li}>
              <a to="http://www.zjzwfw.gov.cn/" target="_blank"  rel="noopener noreferrer">浙江政务服务网</a>
            </li>
            <li className={css.li}>
              <a to="http://www.aman.org.cn/" target="_blank"  rel="noopener noreferrer">宁波市证券投资基金业协会</a>
            </li>
            <li className={css.li}>
              <a to="http://www.amac.org.cn/" target="_blank"  rel="noopener noreferrer">中国证券投资基金业协会</a>
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
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicLayout);