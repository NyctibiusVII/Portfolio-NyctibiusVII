import TopNav           from '../components/TopNav'
import FooterSimple     from '../components/FooterSimple'

import Image            from 'next/image'
import Link             from 'next/link'

import styles     from '../styles/404.module.css'
import animations from '../styles/animations.module.css'

const iconSize = '20'
const iconSize_L = '40'
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
      ICON__stack_overflow    = __varGlobal.srcLinks.__stack_overflow,    // - Not used
      ICON__instagram         = __varGlobal.srcLinks.__instagram,
      ICON__instagram_design  = __varGlobal.srcLinks.__instagram_design,  // - Not used
      ICON__twitter           = __varGlobal.srcLinks.__twitter,
      ICON__discord           = __varGlobal.srcLinks.__discord,
      ICON__donate            = __varGlobal.srcLinks.__donate,
      ICON__email_dev         = __varGlobal.srcLinks.__email_dev,         // - Not used
      ICON__github            = __varGlobal.srcLinks.__github

const author                  = __varGlobal.variablesGlobal.author
const nickname                = __varGlobal.variablesGlobal.nickname
const tel                     = __varGlobal.variablesGlobal.tel
const logo404                 = __varGlobal.srcLinks.__Logo404
const miniLogoIcon            = __varGlobal.srcLinks.__MiniLogoIcon

const backgroundImage = '../background-404.png'
const divBackgroundStyle = {
  width: '100vw',
  height: '90vh',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
}
const div100 = {
  width: '100%'
}

export default function FirstPost() {
  return (
    <>
      <TopNav/>
      <div className={styles.div__background} style={divBackgroundStyle} layout='fill'>
        <div className={styles.div__centralize}>
            <div className={styles.div__between}>
                <div className={styles.div__top} style={div100}>
                  <div className={styles.title__desktop__image}>
                    <Image src={logo404} width={902} height={150} alt="404: Page Not Found"/>
                  </div>
                  <p className={styles.title__mobile}>404: Page Not Found</p>
                  <p className={styles.p__subtitle}>This page does not exist.</p>
                </div>

                <div className={styles.div__bottom}>
                  <div className={styles.div__table}>
                    <table>
                      <tbody>
                        <tr>
                          <td className={styles.td} rowSpan="2"><Image src={miniLogoIcon} width={iconSize_L} height={iconSize_L} alt="mini-logo-icon"/></td>
                          <td className={styles.td}><p>{author}</p></td>
                          <td className={styles.td}><p><Link href={email_dev}target="_blank"><a className={styles.table__email}>{emailName}</a></Link></p></td>
                        </tr>
                        <tr>
                          <td className={styles.td}><p>@{nickname}</p></td>
                          <td className={styles.td}><p>{tel}</p></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className={styles.div__icons}>
                    <Link href={github}     target="_blank"><a className={styles.a}><Image src={ICON__github}     width={iconSize} height={iconSize}  alt="icon-github"    /></a></Link>
                    <Link href={discord}    target="_blank"><a className={styles.a}><Image src={ICON__discord}    width={iconSize} height={iconSize}  alt="icon-discord"   /></a></Link>
                    <Link href={instagram}  target="_blank"><a className={styles.a}><Image src={ICON__instagram}  width={iconSize} height={iconSize}  alt="icon-instagram" /></a></Link>
                    <Link href={rocketseat} target="_blank"><a className={styles.a}><Image src={ICON__rocketseat} width={iconSize} height={iconSize}  alt="icon-rocketseat"/></a></Link>
                    <Link href={linkedin}   target="_blank"><a className={styles.a}><Image src={ICON__linkedin}   width={iconSize} height={iconSize}  alt="icon-linkedin"  /></a></Link>
                    <Link href={twitter}    target="_blank"><a className={styles.a}><Image src={ICON__twitter}    width={iconSize} height={iconSize}  alt="icon-twitter"   /></a></Link>
                    <Link href={donate}     target="_blank"><a className={styles.a}><Image src={ICON__donate}     width={iconSize} height={iconSize}  alt="icon-donate"    /></a></Link>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
//<FooterSimple/>