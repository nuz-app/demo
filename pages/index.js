import * as nuz from '@nuz/core'
import React from 'react'

import Layout from '../components/Layout'

const Navigation = nuz.Loadable('@nuz-demo/navigation')
const Welcome = nuz.Loadable('@nuz-demo/welcome')

const IndexPage = () => {
  return (
    <Layout title="Home - Nuz Demo">
      <header>
        <Navigation />
      </header>
      <main>
        <Welcome />
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
