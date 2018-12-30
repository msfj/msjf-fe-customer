import React, { Fragment } from 'react';
import styles from './index.scss';
import Link from 'umi/link';

export default function () {
	return (
		<Fragment>
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
							<li><Link to="/aboutus">关于我们</Link></li>
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
					<Title chnName={"共享计划"} engName={"SHARING PLAN"} chnNameColor={"#FFFFFF"} engNameColor={"#FFFFFF"} opacity={0.8} />
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
					<Title chnName={"地区现状"} engName={"REGIONAL STATUS"} chnNameColor={"#212121"} engNameColor={"#91989E"} opacity={1} />
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
				<div className={styles.enterWelcome}>
					<div className={styles.gradient} />
					<div className={styles.TagsBlock}>
						<Title chnName={"地区现状"} engName={"REGIONAL STATUS"} chnNameColor={"#212121"} engNameColor={"#91989E"} opacity={1} />
						<TagsBlock />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

function Title({ chnName, engName, chnNameColor, engNameColor, opacity }) {

	const chnNameStyle = { color: chnNameColor };
	const engNameStyle = { color: engNameColor, opacity: opacity };
	return (
		<div>
			<div style={chnNameStyle} className={styles.chnName}>{chnName}</div>
			<div style={engNameStyle} className={styles.engName}>{engName}</div>
		</div>
	);
}

function TagsBlock() {
	const itemsStyleData = [
		{ width: "179px", height: "56px", borderRadius: "27.5px", text: "融资租赁", top: 188, left: 300, opacity: 0.4 },
		{ width: "294px", height: "56px", borderRadius: "27.5px", text: "基金项目产品企业", top: 214, right: 200, filter: 'blur(1px)' },
		{ width: "283.2px", height: "67.2px", borderRadius: "33px", text: "企业持股平台", top: 280, fontSize: "31.2px", left: 397 },
		{ width: "287px", height: "56px", borderRadius: "27.5px", text: "企业自有资金投顾", top: 326, left: 30, filter: 'blur(1px)' },
		{ width: "287px", height: "56px", borderRadius: "27.5px", text: "私募基金管理企业", top: 326, right: 90, opacity: 0.6 },
		{ width: "160px", height: "56px", borderRadius: "27.5px", text: "其他类", top: 382, right: 370, opacity: 0.2 },
		{ width: "258px", height: "56px", borderRadius: "27.5px", text: "个人自由资产投资", top: 428, left: 337, opacity: 0.3, filter: 'blur(2px)' },
	];
	return (
		<Fragment>
			{itemsStyleData.map((item) => <TagsItem {...item} />)}
		</Fragment>
	)
}

function TagsItem(props) {
	const { width, height, borderRadius, top, fontSize, text, left, right, opacity, filter } = props;
	const style = {
		width: width,
		height: height,
		borderRadius: borderRadius,
		lineHeight: height,
		fontSize: fontSize ? fontSize : "26px",
		textalign: "center",
		backgroundColor: "#0072D2",
		color: "#ffffff",
		position: "absolute",
		top: top,
		left: left && left,
		right: right && right,
		filter: filter ? filter : 'blur(0px)',
		boxShadow: '0 10px 20px 0 rgba(0,114,210,0.20)',
		animation: 'mymove 1.3s ease-in-out 2.7s infinite alternate'
	};
	const opacityStyle = {
		width: width,
		height: height,
		borderRadius: borderRadius,
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: "#ffffff",
		opacity: opacity ? opacity : 0
	}
	return (
		<div style={style}>
			<div style={opacityStyle}></div>
			{text}
		</div>
	)
}


