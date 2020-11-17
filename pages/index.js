import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          This is an image optimization test using the new Next.js Image Component!
        </p>

        <div className={styles.grid}>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/iphone-1.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/handshake-1.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/analysis.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/ideation.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/bulb.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/ux-1.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/mobile.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/mobile-2.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/mobile-desktop.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/ux-notes-1.jpg"/>
          <img src="http://y6v1zkmr.cdn.imgeng.in/2020/08/prototyping.jpg"/>
    
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
