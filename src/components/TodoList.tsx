import { Heading, VStack } from '@chakra-ui/react';
import { TodoListItem } from './TodoListItem'

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoList = ({ todos, toggleTodo, deleteTodo }: Props) => {

  return (
    <VStack
      h="85%"
      overflowY="scroll"
      pr={'2'}
      sx={{
        '&::-webkit-scrollbar': {
          width: '6px',
          backgroundColor: `rgba(0, 0, 0, 0.00)`,
          scrollbarWidth: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '8px',
          backgroundColor: `rgba(0, 0, 0, 0.20)`,
        },
      }}
      
    >
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </VStack>
  );
};