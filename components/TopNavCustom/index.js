import styles     from './top_nav.module.css'
import gl2        from '../../styles/gl2.module.css'
import animations from '../../styles/animations.module.css'
import Link       from 'next/link'

const logoSize = '60'
const __varGlobal = require('../../assets/variablesJS')
const srcLogo     = __varGlobal.srcLinks.__LogoIcon,
      srcHome     = __varGlobal.srcLinks.__Home,
      srcProjects = __varGlobal.srcLinks.__Projects,
      srcAbout    = __varGlobal.srcLinks.__About,
      srcContact  = __varGlobal.srcLinks.__Contact

const github      = __varGlobal.links.github

export default function TopNav() {
  return (
    <>
      <header className={[gl2.div__centralize__tpnv, styles.header].join(' ')}>
        
        <div className={styles.div__center}>

          <div className={[styles.nav__menu, animations.animate_appear].join(' ')}>
            <div className={styles.sub__nav__menu}>
              <button className={[styles.subsub__nav__btn, animations.hvr_hang_unique].join(' ')}>Navegue<span className={animations.span__arrow__down}>&nbsp;&#9660;</span></button>
              <div className={styles.subsub__nav__links__content}>
                <Link href={srcHome}    ><a className={styles.a}>Home</a></Link>
                <Link href={srcProjects}><a className={styles.a}>Projects</a></Link>
                <Link href={srcAbout}   ><a className={styles.a}>About</a></Link>
                <Link href={srcContact} ><a className={styles.a}>Contact</a></Link>
              </div>
            </div>
          </div>

          <nav className={[styles.nav, animations.animate_appear].join(' ')}>
            <ul className={styles.nav__links}>
              <li className={styles.li}><Link href={srcHome}    ><a className={styles.a}>Home</a></Link></li>
              <li className={styles.li}><Link href={srcProjects}><a className={styles.a}>Projects</a></Link></li>
              <li className={styles.li}><Link href={srcAbout}   ><a className={styles.a}>About</a></Link></li>
              <li className={styles.li}><Link href={srcContact} ><a className={styles.a}>Contact</a></Link></li>
            </ul>
          </nav>

        </div>
      </header>
    </>
  )
  /* - LUA
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
  */

  /* - SOL
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
  */
}