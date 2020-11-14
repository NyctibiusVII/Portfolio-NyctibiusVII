import animations from '../styles/animations.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
        <Head>
            <title>NyctibiusVII</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={animations.loader}></div>

        <div>
          <h1>404</h1>
          <h5>page not found</h5>
        </div>
        <div>
          <img src="../public/images/404.png" alt="ERROR 404 __image" className="__404" />
        </div>
    </>
  )
}