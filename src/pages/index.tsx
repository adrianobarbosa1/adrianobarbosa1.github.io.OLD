import type { NextPage } from 'next'
import { Adriano } from '../components/Adriano';
import styles from './styles.module.scss'

const IndexPage: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background} />
        <Adriano />
      </div>
      <div className={styles.container}>
        <div className={styles.background} />
        <Adriano />
      </div>
      <div className={styles.container}>
        <div className={styles.background} />
        <Adriano />
      </div>
      <div className={styles.container}>
        <div className={styles.background} />
        <Adriano />
      </div>
      <div className={styles.container}>
        <div className={styles.background} />
        <Adriano />
      </div>
    </>
  )
}

export default IndexPage;