import React, { Component } from 'react';
import styles from './index.scss';
import { Button } from 'antd';

export default class AccountType extends Component {
  render() {
    return (
      <div className={styles.registerType}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>选择注册账号类型</div>
            <div className={styles.block}>
              <div className={styles.separation} />
              {/* 个人账户 */}
              <div className={styles.left}>
                <img className={styles.headPortrait} src={require("../../../assets/personaccountimg.png")} alt="" />
                <p className={styles.medium}>个人账号</p>
                <p className={`${styles.des} ${styles.subhead}`}>适用于个人公司企业申请业务</p>
                <p className={`${styles.small} ${styles.desTitle}`}>注册所需资料</p>
                <ul className={styles.desBlock}>
                  <li class={styles.desItem}><span className={styles.des}>申请人证件号（身份证/港澳通行证/护照/台胞证）</span></li>
                  <li class={styles.desItem}><span className={styles.des}>个人银行卡</span></li>
                  <li class={styles.desItem}><span className={styles.des}>手机号</span></li>
                </ul>
                <Button className={styles.button} type="primary">注册</Button>
              </div>
              {/* 企业账户 */}
              <div className={styles.right}>
                <img className={styles.headPortrait} src={require("../../../assets/enterpriseaccountimg.png")} alt="" />
                <p className={styles.medium}>企业账号</p>
                <p className={`${styles.des} ${styles.subhead}`}>适用于个人公司企业申请业务</p>
                <p className={`${styles.small} ${styles.desTitle}`}>注册所需资料</p>
                <ul className={styles.desBlock}>
                  <li class={styles.desItem}><span className={styles.des}>企业信息（企业名称和企业营业执照号码）</span></li>
                  <li class={styles.desItem}><span className={styles.des}>企业法人证件号（身份证/港澳通行证/护照/台胞证）</span></li>
                  <li class={styles.desItem}><span className={styles.des}>企业法人手机号</span></li>
                </ul>
                <Button className={styles.button} type="primary">注册</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}