import TopNav     from '../components/TopNav'
import styles     from '../components/TopNav/top_nav.module.css'
import animations from '../styles/animations.module.css'
import Link       from 'next/link'

const __varGlobal = require('../assets/variablesJS')
const srcDiaNoiteJS = __varGlobal.srcLinks.__DiaNoiteJS,
      srcLaser_SS   = __varGlobal.srcLinks.__Laser_SS,
      srcNLW_2      = __varGlobal.srcLinks.__NLW_2,
      srcNLW_3      = __varGlobal.srcLinks.__NLW_3

export default function Projects() {
    return (
        <>
            <TopNav/>
            <span>projetos</span>
            <br></br><br></br>
            <nav className={[styles.nav, animations.animate_appear].join(' ')}>
            <ul className={styles.nav__links}>
              <li className={styles.li}><Link href={srcDiaNoiteJS} ><a className={styles.a}>DiaNoiteJS</a></Link></li>
              <li className={styles.li}><Link href={srcLaser_SS}   ><a className={styles.a}>Sistema de segurança a laser</a></Link></li>
              <li className={styles.li}><Link href={srcNLW_2}      ><a className={styles.a}>NLW-2</a></Link></li>
              <li className={styles.li}><Link href={srcNLW_3}      ><a className={styles.a}>NLW-3</a></Link></li>
            </ul>
          </nav>
        </>
    )
}