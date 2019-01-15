import React, { PureComponent } from 'react';
import styles from './index.scss';
import { Modal } from 'antd';

export default class CustomModal extends PureComponent {

  render() {
    return (
      <Modal className={styles.customModal} {...this.props}/>
    );
  }
}