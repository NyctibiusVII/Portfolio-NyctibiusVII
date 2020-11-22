import styles     from './top_nav.module.css'
import animations from '../../styles/animations.module.css'
import Link       from 'next/link'

const logoSize = '10'
const __varGlobal = require('../../assets/variablesJS')
const srcLogo     = __varGlobal.srcLinks.__Logo,
      srcHome     = __varGlobal.srcLinks.__Home,
      srcProjects = __varGlobal.srcLinks.__Projects,
      srcAbout    = __varGlobal.srcLinks.__About,
      srcContact  = __varGlobal.srcLinks.__Contact

const github      = __varGlobal.links.github
const divStyle = {
  width: '100%',
  height: '45px'
}

export default function TopNav() {
  return (
    <>
      <header className={[styles.header, animations.animate_down].join(' ')}>
        <div style={divStyle}>
          <img className={styles.logo} src={srcLogo} alt="LOGO"  />

          <div className={[styles.menu__nav__links, animations.animate_appear].join(' ')}>
            <div className={styles.sub__nav}>
              <button className={[styles.sub__nav__btn, animations.hvr_hang].join(' ')}>Navegue<span>&nbsp;&#9660;</span></button>
              <div className={styles.sub__nav__content}>
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

          <Link className={styles.button} href={github}><a className={styles.a} target="_blank"><button className={[styles.button, animations.animate_appear].join(' ')}>Github</button></a></Link>
        </div>
      </header>
    </>
  )
}