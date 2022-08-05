import { useState, createContext } from 'react';
import styles from './app.module.scss';
import NewTodo from './app/new-todo';
import ListControls from './app/list-controls';
import TodoList from './app/todo-list';
import StatusBar from './app/status-bar';
import { Item } from '../types/item';

export const ItemsContext = createContext(null);

export default (): JSX.Element => {
  const [items, setItems]: [Item[], Function] = useState([
    {done: false, text: 'Buy groceries'},
    {done: true, text: 'Walk the dog'},
  ]);

  const [filter, setFilter]: [string, Function] = useState('All');

  const [filteredItems, setFilteredItems]: [Item[], Function] = useState([...items]);

  return (
    <main className={styles.container}>
      <ItemsContext.Provider value={items}>
        <NewTodo setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
        <ListControls setItems={setItems} filter={filter} setFilteredItems={setFilteredItems} />
        <hr />
        <TodoList setItems={setItems} filter={filter} filteredItems={filteredItems} setFilteredItems={setFilteredItems} />
        <hr />
        <StatusBar setFilter={setFilter} setFilteredItems={setFilteredItems} />
      </ItemsContext.Provider>
    </main>
  )
}
