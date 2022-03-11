import styles from './styles/Card.module.css';
import Link from 'next/link';

function Card({ name, image, linkedin, github, portfolio }: { name: string; image: string; linkedin: string; github: string; portfolio: string }) {
  return (
    <div className={styles.card}>
    <div className={styles.flipinner}>
      <div className={styles.flipfront}>
        <img
          className={styles.profile}
          src={image}
          alt="Profile Image"
          width="100%"
        />
      </div>
      <div className={styles.flipback}>
        <span className={styles.name}>{name}</span>
        <p><Link href={linkedin}>LinkedIn</Link></p>
        <p><Link href={github}>GitHub</Link></p>
        {portfolio.length > 0 && (<p><Link href={portfolio}>Portfolio</Link></p>)} 
      </div>
    </div>
    </div>
  );
}

export default Card;
