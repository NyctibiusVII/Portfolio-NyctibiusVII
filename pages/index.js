import TopNavCustom from '../components/TopNavCustom'

import styles       from '../styles/index.module.css'
import animations   from '../styles/animations.module.css'
import Image        from 'next/image'
import Link         from 'next/link'

const imgSize       = 200
const iconSize      = '10'
const __varGlobal   = require('../assets/variablesJS')
const authorPlusNickName = __varGlobal.variablesGlobal.authorPlusNickName

const srcImgProfile = __varGlobal.srcLinks.__ImgProfile,
      srcAbout      = __varGlobal.srcLinks.__About
//links https
const linkedin          = __varGlobal.links.linkedin,
      instagram         = __varGlobal.links.instagram,
      twitter           = __varGlobal.links.twitter,
      github            = __varGlobal.links.github
//links src
const ICON__linkedin    = __varGlobal.srcLinks.__linkedinSimple,
ICON__instagram         = __varGlobal.srcLinks.__instagramSimple,
ICON__twitter           = __varGlobal.srcLinks.__twitterSimple,
ICON__github            = __varGlobal.srcLinks.__githubSimple

const Home = ()=> {
    return (
        <>
            <TopNavCustom/>

            <div className={styles.bodyNewBackground}>
                <div className={styles.centralizeContent}>
                    <div className={styles.imgPerf}>
                        <Link href={srcAbout}><a><img className={styles.imgProfile} title="Go to About Page" src={srcImgProfile} width={imgSize} height={imgSize} alt="profile image"/></a></Link>
                    </div>
                    <div className={styles.divMyName}>
                        <span className={styles.myName}>- {authorPlusNickName} -</span>
                    </div>
                    <div className={styles.divProfession}>
                        <span className={styles.profession}>Web Developer / Photographer</span>
                    </div>
                    <div className={styles.divSocialNetworks}>
                        <div className={styles.div__icons}>
                            <Link href={github}     target="_blank"><a className={styles.a}><Image src={ICON__github}     width={iconSize} height={iconSize}  alt="icon-github"    /></a></Link>
                            <Link href={instagram}  target="_blank"><a className={styles.a}><Image src={ICON__instagram}  width={iconSize} height={iconSize}  alt="icon-instagram" /></a></Link>
                            <Link href={linkedin}   target="_blank"><a className={styles.a}><Image src={ICON__linkedin}   width={iconSize} height={iconSize}  alt="icon-linkedin"  /></a></Link>
                            <Link href={twitter}    target="_blank"><a className={styles.a}><Image src={ICON__twitter}    width={iconSize} height={iconSize}  alt="icon-twitter"   /></a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home