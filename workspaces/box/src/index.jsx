import React from 'react';

import styles from './box.module.css';

const Module = () => {
  return (
    <div className={styles.card}>
      <div className={styles.list}>
        <div className={styles.item} />
        <div className={styles.item} />
        <div className={styles.item} />
      </div>
      <span className={styles.description}>
        @nuz-demo/box (called in @nuz-demo/welcome)...
      </span>
    </div>
  );
};

export default Module;
