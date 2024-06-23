import { MainSection } from '@/pageComponents';
import styles from '../styles/Home.module.scss';
import { getFilesByPath } from '@/api';
import { MainPageProps } from '@/types';
import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/Layout/Layout';


const Home = ({ files }: MainPageProps) => {
  const router = useRouter();

  useEffect(() => {
    const path = window.location.href;
    if (!path.includes('path=')) {
      router.push('/?path=')
    }
  }, [router]);
  return (
    <Layout>
      <div className={styles.pageWrapper}>
        <div className={styles.contentWrapper}>
          <MainSection files={files} />
        </div>
      </div>
    </Layout>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const path = context.query.path;
  try {
    const cookies = context.req.headers.cookie;
    const files = await getFilesByPath(path, cookies);
    
    return {
      props: {
        files
      }
    };
  } catch (error) {
    console.error("Error fetching files:", error);

    return {
      props: {
        files: { message: "Internal server error" }
      }
    };
  }
};