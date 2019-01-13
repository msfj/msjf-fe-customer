import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import Loginmd from '../component/loginMD';
import Lxy from '../util/lxy';
import Tagball from '../util/tag';

const namespace = 'index';

const mapStateToProps = (state) => {
  return state[namespace];
};

const mapDispatchToProps = (dispatch) => {
  return {
    openLogin: (t) => {
      dispatch({
		type: `${namespace}/openLogin`,
		payload: t
      });
    },
  };
};

class Index extends Component {
	componentDidMount() {
		setTimeout(() => {
			Lxy.init();
			Tagball.init();
		}, 500);
	}
	render() {
		return (
			<Fragment>
				<div className={styles.viewpage}>
					<div className={styles.wrap}>
						<div className={styles.banner}>
							<canvas id="canvas" className={styles.canvas}></canvas>
							<div className={styles.bannerContainer}>
								<h2>防范金融风险&nbsp;&nbsp;打造金融生态圈</h2>
								<img className={styles.silkRoad} src={require("../assets/silk-road.png")} alt="" />
								<div className={styles.gradual}>
									<span className={styles.samllFont}>打造产业与资本对接撮合的APP平台，形成私募基金管理人募投管退的生态圈</span>
								</div>
								<div className={styles.loginContainer}>
									<a className={`${styles.indexButt} ${styles.personLogin}`} onClick={this.props.openLogin.bind(this, 0)}>个人账户登录</a>
									<a className={styles.indexButt} onClick={this.props.openLogin.bind(this, 1)}>企业账户登录</a><br />
									<img alt="" className={styles.mouse} src={require("../assets/mouse.svg")} />
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
								<img src={require("../assets/triangle.png")} alt="" className={styles.triangle} />
							</div>
						</div>
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
						<div className={styles.gradientBlock}>
							<div className={styles.gradient} />
						</div>
						<div className={styles.TagsBlock}>
							<Title chnName={"欢迎入驻"} engName={"WELCOME TO SETTLE IN"} chnNameColor={"#212121"} engNameColor={"#91989E"} opacity={1} />
							<TagsBlock />
							{/* <TagsBall/> */}
						</div>
					</div>
				</div>
				<Loginmd visible={this.props.loginvs} loginType={this.props.loginType} />
			</Fragment>
		);
	}
}

function Title({ chnName, engName, chnNameColor, engNameColor, opacity }) {

	const chnNameStyle = { color: chnNameColor };
	const engNameStyle = { color: engNameColor, opacity: opacity };
	return (
		<div style={{ textAlign: 'center' }}>
			<div style={chnNameStyle} className={styles.chnName}>{chnName}</div>
			<div style={engNameStyle} className={styles.engName}>{engName}</div>
		</div>
	);
}

function TagsBall() {
	const items = [
		'融资租赁', '基金项目产品企业', '企业持股平台', '企业自有资金投顾', '私募基金管理企业', '其他类', '个人自由资产投资'
	];

	return (
		<div className={styles.tagsBall} id="tagball">
			{items.map((it, i) => 
				<span className={styles.tagsItem} key={i}>{it}</span>
			)}
		</div>
	)
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
	const keyframesCollection = itemsStyleData.reduce((pre, next, currentIndex) => {
		function judgeLeft(obj) {
			return obj.left ? "left" : "right";
		}
		if (currentIndex === 1) {
			return `@keyframes Keyframes0 { from { ${judgeLeft(pre)}: ${pre.left || pre.right}px;} to { ${judgeLeft(pre)}: ${(pre.left || pre.right) - 2}px;} }
			@keyframes Keyframes${currentIndex} { from { ${judgeLeft(next)}: ${next.left || next.right}px;} to { ${judgeLeft(next)}: ${(next.left || next.right) - 2}px;} }`;
		}
		return `${pre}
		@keyframes Keyframes${currentIndex} { from { ${judgeLeft(next)}: ${next.left || next.right}px;} to { ${judgeLeft(next)}: ${(next.left || next.right) - 2}px;} }`;
	});
	var newHead = document.getElementsByTagName('head')[0];
	var newStyle = document.createElement('style');
	newHead.appendChild(newStyle);
	newStyle.innerHTML = keyframesCollection;
	return (
		<Fragment>
			{itemsStyleData.map((item, index) => <TagsItem key={`${index}TagsBlock`} keyframesName={`Keyframes${index}`} {...item} />)}
		</Fragment>
	)
}

function TagsItem(props) {
	const { width, height, borderRadius, top, fontSize, text, left, right, opacity, filter, keyframesName } = props;
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
		animation: `${keyframesName} 1s ease-in-out 3s infinite alternate`,
		textAlign: 'center'
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);