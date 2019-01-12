import css from './index.scss';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <div className={`${css.main} root`}>
      { props.children }
      <div className={css.footer}>
        <div className={`${css.footercontainer} clearfix`}>
          <div className={css.footercol1}>
            <div className={css.footertitle}>电话&邮箱<i className={css.footerline}></i></div>
            <div className={css.footercontent}>
              <img className={css.footericon} src={require("../assets/ic-phone.svg")} alt="" />
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
            <div className={css.footercontent}>
              <img src={require('../assets/footer-qr.png')} alt=""/>
            </div>
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
  );
}

export default BasicLayout;
