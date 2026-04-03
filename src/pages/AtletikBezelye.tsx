import React from 'react'
import styles from './AtletikBezelye.module.scss'

const AtletikBezelye: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Atletik Bezelye</h1>
        <p>Türkçe Rock Grubu</p>
        <a href="/">&larr; Back to Home</a>
      </header>
      <main className={styles.main}>
        <p>Atletik Bezelye rock band portfolio - content coming soon...</p>
      </main>
    </div>
  )
}

export default AtletikBezelye
