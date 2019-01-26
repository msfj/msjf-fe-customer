
import React, { PureComponent } from 'react';
import router from 'umi/router';
import styles from '../person/index.scss';
import { Button } from 'antd';

export default class SuccessBlock extends PureComponent {
  state = {
    bs: 3
  };
  tick() {
    const bs = this.state.bs - 1;
    this.setState({
      bs
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      if(this.props.visible) {
        if(this.state.bs <= 0) {
          clearInterval(this.timerID);
          router.push('/');
        } else {
          this.tick()
        }
      }
    }, 1000);
  }
  render() {
    const { visible, msg='恭喜您，注册完成' } = this.props;
    const style = visible ? { display: 'block' } : { display: 'none' };
    return (
      <div className={styles.successBlock} style={style}>
        <i />
        <span className={styles.successBlockTitle}>{msg}</span>
        <p>{this.state.bs}S后自动跳转回登录页面</p>
        <div className={styles.buttonBlock}>
          <Button style={{ width: '184px', marginTop: '112px' }} className={styles.button} type="primary"
            onClick={()=>{router.push('/')}}
          >立即登录</Button>
        </div>
      </div>
    );
  }
}