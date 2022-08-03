import styles from '../components/filter.module.scss';

export default (): JSX.Element => {
  const filters = [
    {selected: true, label: 'All'},
    {selected: false, label: 'Incomplete'},
    {selected: false, label: 'Complete'},
  ];

  return (
    <nav className={styles.filter}>
      {filters.map((filter, i) => (
        <span key={i} className={filter.selected ? styles.selectedFilter : ''}>{filter.label}</span>
      ))}
    </nav>
  )
}
