import HeadCompacted    from '../components/head.js'
import TopNav           from '../components/top_nav.js'
import Link             from 'next/link'

import styles     from '../styles/404.module.css'
import animations from '../styles/animations.module.css'

const iconSize = '16'
const __varGlobal = require('../assets/variablesJS')
//links https
const linkedin          = __varGlobal.links.linkedin,
      rocketseat        = __varGlobal.links.rocketseat,
      stack_overflow    = __varGlobal.links.stack_overflow,
      instagram         = __varGlobal.links.instagram,
      instagram_design  = __varGlobal.links.instagram_design,
      twitter           = __varGlobal.links.twitter,
      discord           = __varGlobal.links.discord,
      donate            = __varGlobal.links.donate,
      email_dev         = __varGlobal.links.email_dev,
      emailName         = 'mathueus.dev.07@gmail.com',
      github            = __varGlobal.links.github,
      githubName        = 'Github'
//links src
const ICON__linkedin          = __varGlobal.srcLinks.__linkedin,
      ICON__rocketseat        = __varGlobal.srcLinks.__rocketseat,
      ICON__stack_overflow    = __varGlobal.srcLinks.__stack_overflow,
      ICON__instagram         = __varGlobal.srcLinks.__instagram,
      ICON__instagram_design  = __varGlobal.srcLinks.__instagram_design,
      ICON__twitter           = __varGlobal.srcLinks.__twitter,
      ICON__discord           = __varGlobal.srcLinks.__discord,
      ICON__donate            = __varGlobal.srcLinks.__donate,
      ICON__email_dev         = __varGlobal.srcLinks.__email_dev, // - Not used
      ICON__github            = __varGlobal.srcLinks.__github     // - Not used

const nickname                = __varGlobal.variablesGlobal.nickname
const logo404                 = __varGlobal.srcLinks.__Logo404
const miniLogoIcon            = __varGlobal.srcLinks.__MiniLogoIcon

const backgroundImage = '../background-404.jpg'
const divBackgroundStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover'
}

export default function FirstPost() {
  return (
    <>
      <TopNav/>
      <HeadCompacted/>
      <div className={styles.div__background} style={divBackgroundStyle}>
        <div className="div__centralize">
            <div className="div__between">
                <div className="div__top">
                  <img src={logo404} alt="404: Page Not Found" width="16" height="16"/>
                  <h6>this page does not exist.</h6>
                </div>

                <div className="div__bottom div__bottom__flex__between">
                  <div>
                    <table>
                      <tbody>
                        <tr>
                          <td className={styles.td__logo} rowSpan="2"><img src={miniLogoIcon} alt="mini-logo-icon" width={iconSize} height={iconSize}/></td>
                          <td><h6>@{nickname}</h6></td>
                        </tr>
                        <tr>
                          <td><h6><Link href={github}   target="_blank"><a>{githubName}</a></Link></h6></td>
                          <td><h6><Link href={email_dev}target="_blank"><a>{emailName} </a></Link></h6></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className={styles.div__icons}>
                    <Link href={linkedin}        target="_blank"><a className={styles.a}><img src={ICON__linkedin}        alt="icon-linkedin"        width={iconSize} height={iconSize}/></a></Link>
                    <Link href={rocketseat}      target="_blank"><a className={styles.a}><img src={ICON__rocketseat}      alt="icon-rocketseat"      width={iconSize} height={iconSize}/></a></Link>
                    <Link href={stack_overflow}  target="_blank"><a className={styles.a}><img src={ICON__stack_overflow}  alt="icon-stack_overflow"  width={iconSize} height={iconSize}/></a></Link>
                    <Link href={instagram}       target="_blank"><a className={styles.a}><img src={ICON__instagram}       alt="icon-instagram"       width={iconSize} height={iconSize}/></a></Link>
                    <Link href={instagram_design}target="_blank"><a className={styles.a}><img src={ICON__instagram_design}alt="icon-instagram_design"width={iconSize} height={iconSize}/></a></Link>
                    <Link href={twitter}         target="_blank"><a className={styles.a}><img src={ICON__twitter}         alt="icon-twitter"         width={iconSize} height={iconSize}/></a></Link>
                    <Link href={discord}         target="_blank"><a className={styles.a}><img src={ICON__discord}         alt="icon-discord"         width={iconSize} height={iconSize}/></a></Link>
                    <Link href={donate}          target="_blank"><a className={styles.a}><img src={ICON__donate}          alt="icon-donate"          width={iconSize} height={iconSize}/></a></Link>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}