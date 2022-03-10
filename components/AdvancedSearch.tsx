import styles from './styles/AdvancedSearch.module.css';

export default function AdvancedSearch() {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h4 className={styles.modalTitle}>Modal title</h4>
        </div>
        <div className={styles.modalBody}>This is modal content</div>
        <div className={styles.modalFooter}>
          <button className={styles.button}></button>
        </div>
      </div>
    </div>
  );
}
