{
  /*
    * Individual Glass Card Component *
    -- Props:
      -- imageUrl: takes in a image URL for the background image
    
      */
}

import styles from './styles/Glasscard.module.css';

export default function Glasscard({
  text,
  imageUrl,
}: {
  text: string;
  imageUrl: string;
}): JSX.Element {
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
