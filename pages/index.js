//import React from 'react'
//import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core'
//
//import Timeline from '../components/Timeline'
//import Container from '../components/Container'
//import BlogPost from '../components/BlogPost'
//import Subscribe from '../components/Subscribe'
//import ProjectCard from '../components/ProjectCard'
//
//import { frontMatter as styleGuides } from './blog/style-guides-component-libraries-design-systems.mdx'
//import { frontMatter as stripeDesign } from './blog/how-stripe-designs-beautiful-websites.mdx'
//import { frontMatter as monorepo } from './blog/monorepo-lerna-yarn-workspaces.mdx'
//
//const Index = () => {
//  const { colorMode } = useColorMode();
//  const secondaryTextColor = {
//    light: 'gray.700',
//    dark: 'gray.400'
//  }
//
//  return (
//    <Container>
//      <Stack
//        as="main"
//        spacing={8}
//        justifyContent="center"
//        alignItems="flex-start"
//        m="0 auto 4rem auto"
//        maxWidth="700px"
//      >
//        <Flex
//          flexDirection="column"
//          justifyContent="flex-start"
//          alignItems="flex-start"
//          maxWidth="700px"
//        >
//          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
//            Hey, I’m Lee Robinson
//          </Heading>
//          <Text color={secondaryTextColor[colorMode]}>
//            I’m a developer, writer, and creator. I work at ▲Vercel as a
//            Solutions Architect. You’ve found my personal slice of the internet
//            – everything you want to know and more is here.
//          </Text>
//        </Flex>
//        <Flex
//          flexDirection="column"
//          justifyContent="flex-start"
//          alignItems="flex-start"
//          maxWidth="700px"
//          mt={8}
//        >
//          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
//            Most Popular
//          </Heading>
//          <BlogPost {...styleGuides} />
//          <BlogPost {...stripeDesign} />
//          <BlogPost {...monorepo} />
//        </Flex>
//        <Flex
//          flexDirection="column"
//          justifyContent="flex-start"
//          alignItems="flex-start"
//          maxWidth="700px"
//        >
//          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
//            Projects
//          </Heading>
//          <ProjectCard
//            title="React 2025"
//            description="Build and deploy a modern Jamstack application using the most popular open-source software."
//            href="https://react2025.com/"
//            icon="react2025"
//          />
//          <ProjectCard
//            title="Mastering Next.js"
//            description="A free video course for building static and server-side rendered applications with Next.js and React."
//            href="https://masteringnextjs.com/"
//            icon="nextjs"
//          />
//          <ProjectCard
//            title="jamstackfns"
//            description="The best serverless functions for JAMstack applications. Deploy to Vercel or Netlify for your static site."
//            href="https://jamstackfns.com/"
//            icon="jamstackfns"
//          />
//        </Flex>
//        <Timeline />
//        <Subscribe />
//      </Stack>
//    </Container>
//  )
//}
//
//export default Index


import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
const introduction = `Olá para quem está lendo, quem fala é um adolescente de 18 anos, me chamo Matheus de Oliveira Vidigal Peixoto Dias e… sim meu nome é grande kk, moro em São Paulo e fiz um curso técnico em uma ong chamada ceap pedreira onde estudei muitas linguagens e tecnologias que hoje são minha base.

Sou um desenvolvedor iniciante focado em web / mobile, atualmente estou estudando na Rocketseat sobre JS e SQL para aprimorar minhas skills, em meio a tudo isso desenvolvo meus projetos que podem ser visualizados na aba “/projects” ou no meu Github.
`

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>{introduction}</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <hr></hr>
            <h1>Home</h1>
            <h6>
                <Link href="/404">
                    <a>Ir para 404</a>
                </Link>
            </h6>
        </Layout>
    )
}