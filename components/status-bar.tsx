import styles from '../components/status-bar.module.scss';
import Filter from './filter';

export default ({ items, setFilter, setFilteredItems }): JSX.Element => {
  return (
    <section className={styles.statusBar}>
      <span>
        <strong className={styles.counter}>3</strong> tasks left
      </span>
      <Filter items={items} setFilter={setFilter} setFilteredItems={setFilteredItems} />
    </section>
  )
}
