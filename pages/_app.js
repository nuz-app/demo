import * as nuz from '@nuz/core'
import React from 'react'
import ReactDOM from 'react-dom'
import * as ReactRedux from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import { withRedux } from '../lib/redux'

const { App } = nuz.reactHelpersFactory({
  React,
  ReactDOM,
})

nuz.bootstrap({
  registry: 'nuz-demo',
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
    <App injectHead={Head}>
      <Component {...pageProps} />
    </App>
  )
}


export default withRedux(MyApp)