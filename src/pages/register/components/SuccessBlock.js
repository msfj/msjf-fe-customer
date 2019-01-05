
import React, { PureComponent } from 'react';
import styles from '../person/index.scss';
import { Button } from 'antd';

export default class SuccessBlock extends PureComponent {
  render() {
    const { visible } = this.props;
    const style = visible ? { display: 'block' } : { display: 'none' };
    return (
      <div className={styles.successBlock} style={style}>
        <i />
        <span className={styles.successBlockTitle}>恭喜您，注册完成</span>
        <p>3S后自动跳转回登录页面</p>
        <div className={styles.buttonBlock}>
          <Button style={{ width: '184px', marginTop: '112px' }} className={styles.button} type="primary">立即登录</Button>
        </div>
      </div>
    );
  }
}