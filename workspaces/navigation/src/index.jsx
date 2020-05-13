import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux'

import styles from './navigation.module.css';

const Module = () => {
  const dispatch = useDispatch()
  const onChange = useCallback((e) => {
    dispatch({
      type: 'SET_NAME',
      name: e.target.value,
    });
  }, []);

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <span className={styles.logo}>@nuz-demo</span>
        <div className={styles.action}>
          <label>Hi, </label>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter your name"
            onChange={onChange}
          />
          !
        </div>
      </div>
    </nav>
  );
};

export default Module;
