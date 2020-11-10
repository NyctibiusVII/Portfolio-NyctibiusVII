import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
        <Head>
            <title>NyctibiusVII</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>404</h1>
        <img src="../public/images/404.png" alt="ERROR 404 __image" className="__404" />
    </Layout>
  )
}