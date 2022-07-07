import { Box, Button, VStack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';

interface Props {
  isOpen: boolean;
  onClose: VoidFunction;
  todos: Todo[]
}

export const DrawerMenu = ({ isOpen, onClose, todos }: Props) => {

  const arrayOfListNames = todos.map((todo) => todo.listname);

  const arrayOfUniqueListNames = arrayOfListNames.filter((element, index) => arrayOfListNames.indexOf(element) === index)

  return (
  <Drawer isOpen={isOpen} onClose={onClose} placement="left">
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>ToDo</DrawerHeader>

      <DrawerBody>
        {/* <form
          id='my-form'
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submitted');
          }}
        >
          <Input name='nickname' placeholder='Type here...' />
        </form> */}
        <VStack>
          {
            arrayOfUniqueListNames.map((todo) => (
              <Box borderRadius='md' bg='gray.400' color='white' px={4} py={2} w="full"><p>{todo}</p></Box>
            ))
          }
        </VStack>
      </DrawerBody>

      {/* <DrawerFooter>
        <Button type='submit' form='my-form'>
          Save
        </Button>
      </DrawerFooter> */}
    </DrawerContent>
  </Drawer>
  )
}
