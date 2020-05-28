import Head from 'next/head'

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <meta name="description" content="Demo basic features of Nuz project using Next.js" />
        <meta name="image" content="https://demo.nuz.app/static/thumbnail.png" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Demo basic features of Nuz project using Next.js" />
        <meta property="og:image" content="https://demo.nuz.app/static/thumbnail.png" />
        <meta property="og:url" content="https://demo.nuz.app" />
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/normalize.css@8.0.1/normalize.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" />
      </Head>
      {children}
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

export default Layout