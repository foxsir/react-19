import { todosStore } from './todoStore.js';

export default function AddButton() {
  return (
    <button onClick={() => todosStore.addTodo()}>Add todo</button>
  );
}
