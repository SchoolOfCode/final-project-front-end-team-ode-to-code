import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import {images} from '../lib/images'
import styles from '../components/styles/Article.module.css';

function FeelingHot<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.article3L} />
      <h1 className={styles.heading}>Where's Hot Now?</h1>
    </>
  );
}

export default FeelingHot;
