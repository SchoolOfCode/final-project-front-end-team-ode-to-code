import Image from 'next/image';
import styles from './styles/WaveImage.module.css';

export default function WaveImage({ imageUrl }: { imageUrl: string }): JSX.Element {
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
