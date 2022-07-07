import { Box, Button, Checkbox, HStack, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons'
import useSound from 'use-sound';
import clickSfx from '../sounds/click.mp3';
import clickUiSfx from '../sounds/clickui.mp3';




interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  deleteTodo: DeleteTodo;
}

export const TodoListItem = ({ todo, toggleTodo, deleteTodo }: Props) => {
  const [playClickSfx] = useSound(clickSfx);
  const [playClickUi] = useSound(clickUiSfx);


  return (
    <Box borderRadius='md' bg='gray.400' color='white' px={4} py={2} w="full">
      <HStack
        style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        justify="space-between"
      >
        <Checkbox isChecked={todo.complete} onChange={() => { toggleTodo(todo);playClickUi(); }} />
        <Text>{todo.text}</Text>
        <Button onClick={() => {deleteTodo(todo);playClickSfx(); }}><DeleteIcon /></Button>
      </HStack>
    </Box>
  );
};