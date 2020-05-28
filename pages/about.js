import * as nuz from '@nuz/core'
import React from 'react'

import Layout from '../components/Layout'

const Navigation = nuz.Loadable('@nuz-demo/navigation')

const IndexPage = () => {
  return (
    <Layout title="About - Nuz Demo">
      <header>
        <Navigation />
      </header>
      <main>
        <br />
        <center>
          <h1>About.</h1>
        </center>
      </main>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

export default IndexPage
