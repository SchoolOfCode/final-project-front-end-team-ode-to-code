import Image from 'next/image';
import styles from './styles/WaveBeach.module.css';
import { images } from '../lib/images'

// const beachImg =
//   'https://ik.imagekit.io/wletmmv9huf/beach1_tso8BrGOJG.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645614950170';

export default function WaveImage() {
  return (
    <div className={styles.beach}>
      <Image
        src={images.homepage}
        alt="beach"
        className={styles.clip}
        height={600}
        width={4000}
      />
    </div>
  );
}
