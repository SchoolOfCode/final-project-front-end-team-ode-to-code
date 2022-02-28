import Image from 'next/image';
import styles from './styles/WaveBeach.module.css';
import { useMediaQuery } from 'react-responsive';

export default function WaveImage({imageUrl}: {imageUrl: string}) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className={styles.beach}>
        {isMobile ? <Image
        src={imageUrl}
        alt="header image"
        height={600}
        width={4000}
      /> : <Image
        src={imageUrl}
        alt="header image"
        className={styles.clip}
        height={600}
        width={4000}
      />
        }
    </div>
  );
}
