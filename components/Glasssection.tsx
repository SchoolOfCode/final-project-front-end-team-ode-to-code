import GlassCard from './GlassCard';
import styles from './styles/GlassSection.module.css';

export default function GlassSection() {
  return (
    <section className={styles.section}>
      <GlassCard
        text="Top 2022 Destinations"
        imageUrl="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80"
      />
      <GlassCard
        text="Visit Paris"
        imageUrl="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80"
      />
      <GlassCard
        text="Visit Paris"
        imageUrl="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1496&q=80"
      />
    </section>
  );
}
