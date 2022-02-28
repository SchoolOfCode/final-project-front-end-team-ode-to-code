import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import { images } from '../lib/images';
import styles from '../components/styles/Article.module.css';
import HomeLayout from '../components/HomeLayout';

function TravelTips<NextPage>() {
  return (
    <>
      <HomeLayout imageUrl={images.article1L}>
        <h1 className={styles.heading}>Travel Tips</h1>
      </HomeLayout>
    </>
  );
}

export default TravelTips;
