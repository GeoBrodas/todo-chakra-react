import React from 'react'
import {
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
  Badge,
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

function Todolist({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
        Yay! No todos
      </Badge>
    )
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems="stretch"
    >
      {todos.map((todo, index) => (
        <HStack key={index}>
          <Text>{todo.name}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => {
              deleteTodo(todo.id)
            }}
          />
        </HStack>
      ))}
    </VStack>
  )
}

export default Todolist
