import styles     from './footer_simple.module.css'
import gl2        from '../../styles/gl2.module.css'
import animations from '../../styles/animations.module.css'
import Link       from 'next/link'

const __varGlobal = require('../../assets/variablesJS')
const copyright     = __varGlobal.variablesGlobal.copyright;

export default function FooterSimple() {
  return (
    <>
      <footer className={[gl2.div__centralize__tpnv, styles.footer].join(' ')}>
        <p className={styles.p}>{copyright}</p>
      </footer>
    </>
  )
}