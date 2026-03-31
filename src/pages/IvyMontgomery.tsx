import React from 'react'
import styles from './IvyMontgomery.module.scss'

const IvyMontgomery: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Ivy Montgomery</h1>
        <p>Dublin-based Irish Vocalist & Singer-Songwriter</p>
        <a href="/">&larr; Back to Home</a>
      </header>
      <main className={styles.main}>
        <p>Ivy Montgomery music portfolio - content coming soon...</p>
      </main>
    </div>
  )
}

export default IvyMontgomery
