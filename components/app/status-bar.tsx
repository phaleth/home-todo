import styles from './status-bar.module.scss';
import Filter from './status-bar/filter-nav';
import TaskCounter from './status-bar/task-counter';

export default ({ setFilter, setFilteredItems }): JSX.Element => {
  return (
    <section className={styles.statusBar}>
      <TaskCounter />
      <Filter setFilter={setFilter} setFilteredItems={setFilteredItems} />
    </section>
  )
}
