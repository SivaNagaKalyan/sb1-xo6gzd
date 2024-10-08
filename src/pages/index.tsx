import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hack Interview AI - Your Interview Copilot</title>
        <meta name="description" content="Master your tech interviews with AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col bg-white dark:bg-black text-gray-800 dark:text-green-400 transition-colors duration-200">
        <Navbar />
        <div className="flex-grow">
          <Hero />
        </div>
        <Footer />
      </main>
    </>
  )
}