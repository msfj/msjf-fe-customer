import React, { Fragment, Component } from 'react';
import styles from './index.scss';
import { Input } from 'antd';

function FormExtend(props) {
  const { title, ...newProps } = props;
  return (
    <div className={styles.formExtend}>
      <p>{title}</p>
      <Input {...newProps} />
    </div>
  );
}

export default FormExtend;