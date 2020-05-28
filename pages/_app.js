import * as nuz from '@nuz/core'
import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactRedux from 'react-redux'
import Link from 'next/link'
import dynamic from 'next/dynamic'

import { withRedux } from '../lib/redux'

nuz.reactIntegrate()

nuz.bootstrap({
  compose: 'nuz-demo',
  ssr: true,
  // Link only run on development mode
  linked: {
    port: 4000,
  },
  vendors: {
    '@nuz/core': nuz,
    'react': React,
    'react-dom': ReactDOM,
    'react-redux': ReactRedux,
    'next/link': Link,
    'next/dynamic': dynamic,
  },
  preload: [
    '@nuz-demo/navigation',
  ],
})

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}


export default withRedux(MyApp)