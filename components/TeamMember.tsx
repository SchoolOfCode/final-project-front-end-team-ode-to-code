import styles from './styles/TeamMember.module.css';
import Link from 'next/link';

function TeamMember({ Name, LinkedIn, Portfolio, GitHub }: { Name: string, LinkedIn: string, Portfolio: string , GitHub: string }) {
  return (<><span className={styles.name}>{Name}: </span>
  <Link href={LinkedIn}>LinkedIn </Link> 
  <Link href={GitHub}>* GitHub </Link>
  {Portfolio.length > 0 && <Link href={Portfolio}>* Portfolio </Link>}
  </>)
}

export default TeamMember;
