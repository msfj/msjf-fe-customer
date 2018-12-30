import React from 'react';
import styles from './index.scss';

export default function() {
  return (
		<React.Fragment>
			<div className={styles.viewpage}>
				<div className={styles.head}>
					<div className={styles.container}>
						<div className={styles.logo}>
							<i className={styles.iconLogo}></i>
							<span>宁波梅山金服科技</span>
							<span className={styles.break}></span>
							<span>宁波市类金融企业管理服务平台</span>
						</div>
						<ul className={styles.nav}>
							<li>首页</li>
							<li>行业咨询</li>
							<li>帮助中心</li>
							<li>关于我们</li>
						</ul>
						<div className={styles.right}>
							<img src={require("../assets/qrcode.svg")} alt=""/>
							<span>关注二维码</span>
						</div>
					</div>
				</div>
				<div className={styles.wrap}>
					<div className={styles.banner}>
						<div className={styles.bannerContainer}>
							<h2>防范金融风险&nbsp;&nbsp;打造金融生态圈</h2>
							<img src={require("../assets/silk-road.png")} alt=""/>
							<div className={styles.gradual}>
								<span className={styles.samllFont}>打造产业与资本对接撮合的APP平台，形成私募基金管理人募投管退的生态圈</span>
							</div>
							<div className={styles.loginContainer}>
								<a className={`${styles.indexButt} ${styles.personLogin}`}>个人账户登录</a>
								<a className={styles.indexButt}>企业账户登录</a><br/>
								<img alt="" className={styles.mouse} src={require("../assets/mouse.svg")}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
  );
}
