import * as nuz from '@nuz/core'
import React from 'react'
import * as ReactRedux from 'react-redux'
import Link from 'next/link'

import { withRedux } from '../lib/redux'

nuz.bootstrap({
  compose: 'nuz-demo',
  ssr: true,
  // Only use workspace dev mode in `development` mode
  linked: {
    port: 4000,
  },
  vendors: {
    'react-redux': ReactRedux,
    'next/link': Link,
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