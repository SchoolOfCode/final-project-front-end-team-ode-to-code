import GlassCard from './Glasscard';
import { images } from '../lib/images'
import Link from 'next/link'

import styles from './styles/Glasssection.module.css';

export default function Glasssection() {
  return (
    <section className={styles.section}>
      <Link href="/topdestinations"><a>
      <GlassCard
        text="Top 2022 Destinations"
        imageUrl={images.article1}
      />
      </a></Link>
      <Link href="/traveltips"><a>
      <GlassCard
        text="Travel Tips"
        imageUrl={images.article2}
      />
      </a></Link>
      <Link href="/feelinghot"><a>
      <GlassCard
        text="Where's hot now?"
        imageUrl={images.article3}
      />
      </a></Link>
    </section>
  );
}
