import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  
  return (
    <div className="h-screen">
      <Head>
        <title>Festiv&apos;App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Modal />
      <Header/>

      {/* Feed */}
      <Feed />

      {/* Modal */}
    </div>
  )
}

export default Home
