import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Banner } from '@/components/Homepage/Banner'
import { GetStaticProps } from 'next'
import { HomepageProps, ServicesProps } from '@/type'
import NewsBlock, { NewsItemInterface } from '@/components/Homepage/NewsBlock'
import FloatContainer from '@/components/Homepage/FloatContainer'
import { ServicesBlock } from '@/components/Homepage/ServicesBlock'
import { Partners } from '@/components/Homepage/Partners'
// import DynamicPage from './[slug]'
import { VideoBlock } from '@/components/Homepage/VideoBlock'



const inter = Inter({ subsets: ['latin'] })

interface Props {
  dataHomepage: HomepageProps;
  news: NewsItemInterface[];
  dataServices: ServicesProps;
}

export default function Home({
  dataHomepage,
  news,
  dataServices
}: Props) {

  return (
    <>
      <Head>
        <title>Krik</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Banner bannerData={dataHomepage} />

      <FloatContainer floatContainerData={dataHomepage} />

      {/* Section 3  */}

      <div className="section-3 container-fluid py-4">
        <div className="row">
          <div className="col-12 d-lg-flex text-center justify-content-evenly">
            <p className='fs-100 fs-32 fw-800 orange'>320+</p>
            <p className='fs-100 fs-32 fw-800 orange'>580+</p>
            <p className='fs-100 fs-32 fw-800 orange'>320+</p>
          </div>
        </div>
      </div>

      <VideoBlock tutorial={dataHomepage} />

      <NewsBlock news={news} newsBlockData={dataHomepage} />

      <ServicesBlock servicesBlockData={dataHomepage} />

      <Partners partners={dataHomepage} />

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const bannerDataRes = await fetch("https://json-server-for-krik.onrender.com/homepage")
  const bannerData: HomepageProps = await bannerDataRes.json()

  const newsCardsRes = await fetch("https://json-server-for-krik.onrender.com/news_cards")
  const newsCardsData: NewsItemInterface = await newsCardsRes.json()

  return {
    props: {
      dataHomepage: bannerData,
      news: newsCardsData,
    }
  }
}
