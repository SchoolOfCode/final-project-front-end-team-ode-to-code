import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import {images} from '../lib/images'
import styles from '../components/styles/Article.module.css';

function TopDestinations<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.article1L} />
      <h1 className={styles.heading}>Top 2022 Destinations</h1>
    </>
  );
}

export default TopDestinations;
