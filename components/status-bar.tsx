import styles from '../components/status-bar.module.scss';

export default () => {
  return (
    <section className={styles.statusBar}>
      <span>
        <strong className={styles.count}>3</strong> tasks left
      </span>
      <nav className={styles.filter}>
        <span className={styles.selectedFilter}>All</span>
        <span>Incomplete</span>
        <span>Complete</span>
      </nav>
    </section>
  )
}
