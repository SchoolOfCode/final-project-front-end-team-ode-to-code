import type { NextPage } from 'next';
import WaveImage from '../components/WaveImage';
import {images} from '../lib/images'

function TopDestinations<NextPage>() {
  return (
    <>
      <WaveImage imageUrl={images.article1L} />
    </>
  );
}

export default TopDestinations;
