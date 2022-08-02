import styles from './list-controls.module.scss';

export default (): JSX.Element => {
  return (
    <section className={styles.controls}>
      <section className={styles.dblCheckComplete}>
        <img className={styles.dblCheckMark} src='images/double-checkmark.png' />
        <button type="button" className={styles.complete}>Complete all tasks</button>
      </section>
      <button type="button" className={styles.clear}>Clear completed</button>
    </section>
  )
}
