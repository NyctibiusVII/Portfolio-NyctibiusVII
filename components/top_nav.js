import styles from './top_nav.module.css'
import animations from '../styles/animations.module.css'
import Link from 'next/link'
const github = 'https://github.com/NyctibiusVII/'

export default function TopNav() {
return (
    <>
      <header id="headerTN" className={[styles.header, animations.animate_down].join(' ')}>
        <img className={styles.logo} src="public/images/logo.png" alt="LOGO" />

        <div className={[styles.menu__nav__links, animations.animate_appear].join(' ')}>
          <div className={styles.sub__nav}>
            <button className={[styles.sub__nav__btn, animations.hvr_hang].join(' ')}>Navegue<span>&nbsp;&#9660;</span></button>
            <div className={styles.sub__nav__content}>
              <Link href="/"        ><a className={styles.a}>Home</a></Link>
              <Link href="/projects"><a className={styles.a}>Projects</a></Link>
              <Link href="/about"   ><a className={styles.a}>About</a></Link>
              <Link href="/contact" ><a className={styles.a}>Contact</a></Link>
            </div>
          </div>
        </div>

        <nav className={[styles.nav, animations.animate_appear].join(' ')}>
          <ul className={styles.nav__links}>
            <li className={styles.li}><Link href="/"        ><a className={styles.a}>Home</a></Link></li>
            <li className={styles.li}><Link href="/projects"><a className={styles.a}>Projects</a></Link></li>
            <li className={styles.li}><Link href="/about"   ><a className={styles.a}>About</a></Link></li>
            <li className={styles.li}><Link href="/contact" ><a className={styles.a}>Contact</a></Link></li>
          </ul>
        </nav>
        <Link className={styles.button} href={github}><a className={styles.a} target="_blank"><button className={[styles.button, animations.animate_appear].join(' ')}>Github</button></a></Link>
      </header>
    </>
  )
}