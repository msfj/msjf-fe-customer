import React from 'react';
import styles from './index.scss';

export default function () {
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
							<img src={require("../assets/qrcode.svg")} alt="" />
							<span>关注二维码</span>
						</div>
					</div>
				</div>
				<div className={styles.wrap}>
					<div className={styles.banner}>
						<div className={styles.bannerContainer}>
							<h2>防范金融风险&nbsp;&nbsp;打造金融生态圈</h2>
							<img src={require("../assets/silk-road.png")} alt="" />
							<div className={styles.gradual}>
								<span className={styles.samllFont}>打造产业与资本对接撮合的APP平台，形成私募基金管理人募投管退的生态圈</span>
							</div>
							<div className={styles.loginContainer}>
								<a className={`${styles.indexButt} ${styles.personLogin}`}>个人账户登录</a>
								<a className={styles.indexButt}>企业账户登录</a><br />
								<img alt="" className={styles.mouse} src={require("../assets/mouse.svg")} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.itemBlock}>
					<Title chnName={"共享计划"} engName={"SHARING PLAN"} chnNameColor={"#FFFFFF"} engNameColor={"#FFFFFF"} opacity={0.8}/>
					<ul>
						<li className={styles.desBlock}>
							<img src={require('../assets/enterpriseService.png')} alt="" />
							<h2>企业服务</h2>
							<p>提供一站式电子化企业设立，企业迁入，企业变更，企业税务等全流程服务</p>
						</li>
						<li className={styles.desBlock}>
							<img src={require('../assets/informationSecurity.png')} alt="" />
							<h2>信息安全</h2>
							<p>提供系统化数据安全保障机制，保障数据安全防泄漏，让企业信息更安全</p>

						</li>
						<li className={styles.desBlock}>
							<img src={require('../assets/enterpriseFigure.png')} alt="" />
							<h2>企业画像</h2>
							<p>提供360度全方位企业画像，为加强金融基础设施的统筹监管和互联互通</p>
						</li>
					</ul>
				</div>
				<div className={styles.regionalStatus}>
					<Title chnName={"地区现状"} engName={"REGIONAL STATUS"} chnNameColor={"#212121"} engNameColor={"#91989E"} opacity={1}/>
					<div className={styles.regionalNumber}>
						<div className={styles.leftNumber}>
							<h2>25000+</h2>
							<p>目前类金融企业入驻已多达(家)</p>
						</div>
						<div className={styles.line}></div>
						<div className={styles.rightNumber}>
							<h2>800+</h2>
							<p>私募基金管理人已多达(家)</p>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</React.Fragment>
	);
}

function Title({ chnName, engName, chnNameColor, engNameColor, opacity}) {
	
	const chnNameStyle={color:chnNameColor};
	const engNameStyle={color:engNameColor,opacity:opacity};
	return (
		<div>
			<div style={chnNameStyle} className={styles.chnName}>{chnName}</div>
			<div style={engNameStyle} className={styles.engName}>{engName}</div>
		</div>
	);
}
