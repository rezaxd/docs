import { Fragment } from 'react'

import './style.css'
import './fontiran.css'
import Head from 'next/head'

import Sidebar from '../Sidebar'

export default ({ children }) => (
  <Fragment>
    <Head>
      <meta name="theme-color" content="#000000" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>

    <div className="top-bar"></div>
    <div className="wrapper">
      <Sidebar />
      <article className="article">{children}</article>
    </div>
  </Fragment>
)
