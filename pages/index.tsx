import type { NextPage } from 'next'
import Head from 'next/head'
import Brand from '@/components/Brand'
import Layout from '@/components/Layout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>medeiro.tech</title>
        <meta name="description" content="Meu portoflio novo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="w-full h-full container mx-auto px-6">
          <Brand />
        </main>
      </Layout>
    </>
  )
}

export default Home
