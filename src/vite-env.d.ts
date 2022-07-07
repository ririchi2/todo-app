/// <reference types="vite/client" />

interface Todo {
  text: string;
  complete: boolean;
  listname?: string;
}

interface List {
  listname: string;
  todos: Todo[];
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;

type DeleteTodo = (selectedTodo: Todo) => void;

// type FilterTodo = (listName: string) => Todo[];