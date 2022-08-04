import { filterItems } from './filter.service';

export const addTodo = (evt, items, setItems, filter, setFilteredItems) => {
  const todoTxtEl = evt.target.parentElement.querySelector('input');
  const todoTxt = todoTxtEl.value;
  if (!todoTxt) {
    alert('Item text is not defined');
  } else if (
    items.find((item) => item.text.toLowerCase() === todoTxt.toLowerCase())
  ) {
    alert('Item already exists');
  } else if (items.length == 10) {
    alert('List of items is already at maximum capacity of 10');
  } else if (todoTxt.length > 40) {
    alert('Item text cannot have more than 40 characters');
  } else {
    todoTxtEl.value = '';
    items.push({ done: false, text: todoTxt.trim() });
    setItems([...items]);
    filterItems(filter, items, setFilteredItems);
  }
};
