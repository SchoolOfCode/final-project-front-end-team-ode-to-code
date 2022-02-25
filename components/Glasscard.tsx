{
  /*
    * Individual Glass Card Component *
    -- Props:
      -- imageUrl: takes in a image URL for the background image
    
      */
}

import styles from './styles/GlassCard.module.css';

export default function GlassCard({
  text,
  imageUrl,
}: {
  text: string;
  imageUrl: string;
}) {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className={styles.card}
    >
      <div className={styles.glass}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}
