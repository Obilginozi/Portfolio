import React from 'react'
import styles from './Home.module.scss'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Portfolio</h1>
        <p>Choose a page to explore:</p>
      </header>
      <nav className={styles.nav}>
        <a href="/Developer" className={styles.link}>
          <div className={styles.card}>
            <h2>👨‍💻 Developer</h2>
            <p>Software Development & Portfolio</p>
          </div>
        </a>
        <a href="/IvyMontgomery" className={styles.link}>
          <div className={styles.card}>
            <h2>🎵 Ivy Montgomery</h2>
            <p>Music & Artist Portfolio</p>
          </div>
        </a>
        <a href="/AtletikBezelye" className={styles.link}>
          <div className={styles.card}>
            <h2>🎸 Atletik Bezelye</h2>
            <p>Rock Band & Music</p>
          </div>
        </a>
      </nav>
    </div>
  )
}

export default Home
