import Image from 'next/image';
import styles from './styles/WaveImage.module.css';
import { useMediaQuery } from 'react-responsive';

export default function WaveImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div>
      <Image
        src={imageUrl}
        alt="header image"
        className={styles.clip}
        height={600}
        width={4000}
      />
    </div>
  );
}
