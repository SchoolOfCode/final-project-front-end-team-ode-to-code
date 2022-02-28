import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import {images} from '../lib/images'
import styles from '../components/styles/Article.module.css';

function TopDestinations<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.article1L} />
      <h1 className={styles.heading}>Top 2022 Destinations</h1>
      <h3>Want to know where to go this year?</h3>
      <br/>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati natus sapiente cum a ab tempora culpa, iste sit sunt consectetur porro consequuntur, recusandae voluptas laboriosam, consequatur minus hic debitis aliquid.</p>
    </>
  );
}

export default TopDestinations;
