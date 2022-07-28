import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ReactPlayer from 'react-player'
import React from 'react'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Watch2Earn</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className={styles.title}>
          Watch2Earn
        </h1>
        <p>
          You current reward balance: $$$
        </p>
        <p>
          Watch an ad and earn $$$
        </p>
        <h2>NextJs VideoPlayer - GeeksforGeeks</h2>
        <ReactPlayer url='https://www.youtube.com/watch?v=kEOzBqOjWGU'/>

        <p>Rewarded</p>
        <p>$$$</p>
        <Link href="/checkout">
          <a className='button'> Check Out </a>
        </Link>
    </div>
  )
}
