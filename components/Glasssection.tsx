import GlassCard from './Glasscard';
import { images } from '../lib/images'

import styles from './styles/Glasssection.module.css';

export default function Glasscection() {
  return (
    <section className={styles.section}>
      <GlassCard
        text="Top 2022 Destinations"
        imageUrl={images.article1}
      />
      <GlassCard
        text="Travel Tips"
        imageUrl={images.article2}
      />
      <GlassCard
        text="Where's hot now?"
        imageUrl={images.article3}
      />
    </section>
  );
}
