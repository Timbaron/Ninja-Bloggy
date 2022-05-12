import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage Component</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum dolor sit amet, consectetur adip inc</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum dolor sit amet, consectetur adip inc Lorem ipsum dolor sit amet, consectetur adip inc</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
