import styles from '../components/status-bar.module.scss';
import Filter from './filter';
import TaskCounter from './task-counter';

export default ({ items, setFilter, setFilteredItems }): JSX.Element => {
  return (
    <section className={styles.statusBar}>
      <TaskCounter items={items} />
      <Filter items={items} setFilter={setFilter} setFilteredItems={setFilteredItems} />
    </section>
  )
}
