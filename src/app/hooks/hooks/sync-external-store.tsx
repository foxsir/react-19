'use client'

import {useSyncExternalStore} from 'react';
import { todosStore } from './todoStore.js';
import AddButton from "@/app/hooks/hooks/add-button";

export default function SyncExternalStore() {
  const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot, todosStore.getSnapshot);

  return (
    <>
      <AddButton />
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
