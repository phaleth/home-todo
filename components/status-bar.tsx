import { useContext } from 'react';
import styles from '../components/status-bar.module.scss';
import { ItemsContext } from './app';
import Filter from './filter';
import TaskCounter from './task-counter';

export default ({ setFilter, setFilteredItems }): JSX.Element => {
  const items = useContext(ItemsContext);

  return (
    <section className={styles.statusBar}>
      <TaskCounter />
      <Filter setFilter={setFilter} setFilteredItems={setFilteredItems} />
    </section>
  )
}
