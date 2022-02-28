import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import {images} from '../lib/images'
import styles from '../components/styles/Article.module.css';

function TravelTips<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.article2L} />
      <h1 className={styles.heading}>Travel Tips</h1>
    </>
  );
}

export default TravelTips;
