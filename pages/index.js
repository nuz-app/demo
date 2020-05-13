import * as nuz from '@nuz/core'

import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { withRedux } from '../lib/redux'

const Navigation = dynamic(
  () => nuz.resolve('@nuz-demo/navigation'), 
  { nuz: true },
)
const Welcome = dynamic(
  () => nuz.resolve('@nuz-demo/welcome'), 
  { nuz: true },
)

const IndexPage = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />
      </Head>
      <header>
        <Navigation />
      </header>
      <main>
        <Welcome />
      </main>
      <style>{`
        body {
          background: #fff;
          font-family: Lato, sans-serif;
          font-weight: 400;
          color: #222;
        }
      `}</style>
    </>
  )
}

export default withRedux(IndexPage)
