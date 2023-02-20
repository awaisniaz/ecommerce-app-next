/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import HeaderMenu from '@/components/header-menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marketo</title>
        <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900,900italic%7cMontserrat:400,700%7cOxygen:400,300,700' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="../assets/css/bootstrap.css" />

        <link rel="stylesheet" href="../assets/css/animate.css" />

        <link rel="stylesheet" href="../assets/css/icon-fonts.css" />

        <link rel="stylesheet" href="../assets/css/main.css" />

        <link rel="stylesheet" href="../assets/css/responsive.css" />
      </Head>
      <body>
        <Header />
        <script src="../assets/js/jquery.js"></script>
        <script src="../assets/js/plugins.js"></script>
        <script src="../assets/js/jquery.main.js"></script>

      </body>


    </>
  )
}
