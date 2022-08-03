import styles from './list-controls.module.scss';

export default ({ items, setItems }): JSX.Element => {
  const handleCompleteAllClick = () => {
    items.map(item => item.done = true);
    setItems([...items]);
  }

  const handleClearCompletedClick = () => {
    items = items.filter(item => !item.done);
    setItems([...items]);
  }

  return (
    <section className={styles.controls}>
      <section className={styles.dblCheckComplete}>
        <img className={styles.dblCheckMark} src='images/double-checkmark.png' />
        <button type="button" className={styles.complete} onClick={handleCompleteAllClick}>Complete all tasks</button>
      </section>
      <button type="button" className={styles.clear} onClick={handleClearCompletedClick}>Clear completed</button>
    </section>
  )
}
