import { MainSection } from '@/pageComponents';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contentWrapper}>
        <MainSection />
      </div>
    </div>
  );
}


export default Home;