import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import {images} from '../lib/images'

function TravelTips<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.article2L} />
    </>
  );
}

export default TravelTips;
