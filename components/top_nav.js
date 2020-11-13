import styles from './top_nav.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
const github = 'https://github.com/NyctibiusVII/'

export default function TopNav() {
return (
    <>
      <header id="headerTN" className={styles.header}>
        <img className={styles.logo} src="public/images/logo.png" alt="LOGO" />

        <div className={styles.menu__nav__links}>
          <div className={styles.subnav}>
            <button className={styles.subnavbtn}>Navegue<span>&nbsp;&#9660;</span></button>
            <div className={styles.subnav_content}>
              <Link href="/"        ><a className={styles.a}>Home</a></Link>
              <Link href="/projects"><a className={styles.a}>Projects</a></Link>
              <Link href="/about"   ><a className={styles.a}>About</a></Link>
              <Link href="/contact" ><a className={styles.a}>Contact</a></Link>
            </div>
          </div>
        </div>

        <nav>
          <ul className={styles.nav__links}>
            <li className={styles.li}><Link href="/"        ><a className={styles.a}>Home</a></Link></li>
            <li className={styles.li}><Link href="/projects"><a className={styles.a}>Projects</a></Link></li>
            <li className={styles.li}><Link href="/about"   ><a className={styles.a}>About</a></Link></li>
            <li className={styles.li}><Link href="/contact" ><a className={styles.a}>Contact</a></Link></li>
          </ul>
        </nav>
        <Link className={styles.button} target="_blank" href={github}><a className={styles.a}><button className={styles.button}>Github</button></a></Link>
      </header>
    </>
  )
}