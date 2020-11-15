import Head       from 'next/head'

const year = '2020'

const __varGlobal = require('../assets/variablesJS')
const author      = __varGlobal.variablesGlobal.author
const nickname    = __varGlobal.variablesGlobal.nickname
const description = __varGlobal.variablesGlobal.description

const titleDesc   = __varGlobal.variablesGlobal.siteTitleDesc
const ImageLogo   = __varGlobal.srcLinks.__Logo

const title       = __varGlobal.variablesGlobal.siteTitle
const icon        = __varGlobal.srcLinks.__SiteMiniLogoIcon

export default function HeadCompacted() {
return (
    <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="content-language" content="pt-br, en-US"/>
        <meta http-equiv="content-type" content="text/html; charset=iso-8859-1"/>
        <meta http-equiv="pragma" content="no-cache"/>

        <meta name="robots" content="index,follow"/>
        <meta name="copyright" content={"©"+" "+year+" "+author+" - ("+nickname+")"}/>
        <meta name="security" content="high"/>

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="MobileOptimized" content="320"/>

        <meta name="keywords" content="NyctibiusVII, JavaScript, nextJS, react, projetos, projects, portfólio, portfolio, github"/>
        <meta name="subject" content={description}/>

        <meta name="coverage" content="Worldwide"/>
        <meta name="distribution" content="Global"/>
        <meta name="rating" content="general"/>

        <meta name="author" content={author}/>
        <meta name="description" content={description}/>

        <meta property="og:image" content={ImageLogo}/>
        <meta property="og:title" content={titleDesc}/>
        <meta property="og:description" content={description}/>

        <meta name="twitter:title" content={titleDesc}/>

        <title>{title}</title>
        <link rel="icon" href={icon} alt="icon"/>
    </Head>
  )
}