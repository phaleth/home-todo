import { useContext } from 'react';
import styles from './status-bar.module.scss';
import { ItemsContext } from '../app';
import Filter from './status-bar/filter-nav';
import TaskCounter from './status-bar/task-counter';

export default ({ setFilter, setFilteredItems }): JSX.Element => {
  const items = useContext(ItemsContext);

  return (
    <section className={styles.statusBar}>
      <TaskCounter />
      <Filter setFilter={setFilter} setFilteredItems={setFilteredItems} />
    </section>
  )
}
