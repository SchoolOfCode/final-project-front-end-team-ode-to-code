import styles from './styles/ContentTile.module.css';

function ContentTile({
  src,
  destination,
  text,
}: {
  src: string;
  destination: string;
  text: string;
}): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.headers1}>{destination}</h1>
      <div className={styles.imagecontainer}>
        <img className={styles.image} src={src} alt={destination} />
        <p className={styles.paragraphs}>{text}</p>
      </div>
    </div>
  );
}

export default ContentTile;
