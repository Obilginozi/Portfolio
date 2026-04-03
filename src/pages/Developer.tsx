import React from 'react'
import styles from './Developer.module.scss'

const Developer: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Oğuzhan Alfred Bilgin</h1>
        <p>Full-Stack Developer | Backend Specialist</p>
        <a href="/">&larr; Back to Home</a>
      </header>
      <main className={styles.main}>
        <p>Developer portfolio page - content coming soon...</p>
      </main>
    </div>
  )
}

export default Developer
