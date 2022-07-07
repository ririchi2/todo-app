import {
  ChakraProvider,
  Box,
  theme,
  Button,
  useDisclosure} from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useEffect, useState } from "react";
import React from "react";
// 📏
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"
import { TodoList } from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";
import { DrawerMenu } from "./components/DrawerMenu";

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
    listname: 'Tasks',
  },
  {
    text: 'Write app',
    complete: true,
    listname: 'Tasks',
  },
];

// const initialList: List[] = [
//   {
//     listname: 'Tasks',
//     todos: initialTodos,
//   }
// ]


export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  // const [lists, setLists] = useState<List[]>(initialList);

  const btnRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

  // ❗ We check if there is data in localStorage
  useEffect(() => {
    if (localStorage.getItem('todos')) {
      console.log("found todos")
      // Instead if you are sure that these objects or fields exist, the
      // postfix ! lets you short circuit the nullability
      const savedTodos: Todo[] = JSON.parse(localStorage.getItem('todos')!)
      setTodos(savedTodos)
    } else {
      console.log("didnt found todos");
    }
  }, [])

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, listname: 'Tasks' };
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]))
  };

  const deleteTodo = (selectedTodo: Todo) => {
    const newTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))
  };

  // const filterTodosByListname = (listName: string) => {
  //   const filteredTodos = todos.filter((todo) => todo.listName === listName);
  //   return filteredTodos;
  // }

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" h="100vh" mx="4">
        <ColorModeSwitcher />
        <Button ref={btnRef.current} onClick={onOpen} variant="ghost" color="cur">
          <GiHamburgerMenu />
        </Button>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <AddTodoForm addTodo={addTodo} />
      </Box>
      <DrawerMenu todos={todos} isOpen={isOpen} onClose={onClose} />
    </ChakraProvider>
  )
}