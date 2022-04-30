import type { NextPage } from 'next'
import { Adriano } from '../components/Adriano';
import styles from './styles.module.scss'

const IndexPage: NextPage = () => {
  return (
    <>
      <div >
        <div className={styles.container} />
        <Adriano />
      </div>
    </>
  )
}

export default IndexPage;