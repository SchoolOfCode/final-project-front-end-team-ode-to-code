import Image from 'next/image';
import styles from './styles/WaveBeach.module.css';

export default function WaveImage({imageUrl}: {imageUrl: string}) {
  return (
    <div className={styles.beach}>
      <Image
        src={imageUrl}
        alt="beach"
        className={styles.clip}
        height={600}
        width={4000}
      />
    </div>
  );
}
