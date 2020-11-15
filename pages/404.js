import HeadCompacted    from '../components/head.js'
import TopNav           from '../components/top_nav.js'
import Link       from 'next/link'

import styles     from '../styles/404.module.css'
import animations from '../styles/animations.module.css'

const __varGlobal = require('../assets/variablesJS')
const title       = __varGlobal.variablesGlobal.siteTitle
const emailName   = 'mathueus.dev.07@gmail.com'
const email       = __varGlobal.links.email_dev
const githubName  = 'Github'
const github      = __varGlobal.links.github

export default function FirstPost() {
  return (
    <>
        <TopNav/>
        <HeadCompacted/>

        
    </>
  )
}