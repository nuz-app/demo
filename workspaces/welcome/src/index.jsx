import * as nuz from '@nuz/core'
import React, { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

import memoize from 'memoize-one';

import styles from './welcome.module.css'

const Box = nuz.Loadable('@nuz-demo/box');

console.log({ memoize });

const Module = () => {
  const [component, setComponent] = useState(null)
  const name = useSelector((state) => state.name || 'friend')

  const loadComponent = useCallback(() => {
    if (!component) {
      (async function() {
        const loaded = await import(
          './components/Secret'
        )
        setComponent(loaded.default)
      })()
    }
  }, [])

  return (
    <div className={styles.welcome}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h3 className={styles.name}>Hello, {name}.</h3>
          <h4 className={styles.description}>
            Welcome to @nuz-demo. This is module @nuz-demo/welcome.
          </h4>
          {component || (
            <div onClick={loadComponent} className={styles.button}>
              Click to lazy-load content there!
            </div>
          )}
        </div>
        <Box />
      </div>
    </div>
  );
}

export default Module
