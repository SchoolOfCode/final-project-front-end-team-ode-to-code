import styles from './styles/Tile.module.css';

function Tile({ src, destination, text }: { src: string; destination: string; text: string }) {
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

export default Tile;