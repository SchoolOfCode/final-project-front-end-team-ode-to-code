import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import {images} from '../lib/images'

function FeelingHot<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.article3L} />
    </>
  );
}

export default FeelingHot;
