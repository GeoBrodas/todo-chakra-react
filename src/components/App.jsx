import React from 'react'
import { useState } from 'react'
import { Heading, VStack, IconButton } from '@chakra-ui/react'
import { FaSun } from 'react-icons/fa'
import Todolist from './Todolist'
import Addtodolist from './Addtodolist'

function App() {
  const initialTodos = [
    {
      id: '1',
      name: 'Buy Paper',
    },
    {
      id: '2',
      name: 'Buy Milk',
    },
    {
      id: '3',
      name: 'Buy Eggs',
    },
  ]

  const [todos, setTodos] = useState(initialTodos)

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(newTodos)
  }

  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        ToDo Application
      </Heading>
      <Todolist todos={todos} deleteTodo={deleteTodo} />
      <Addtodolist addTodo={addTodo} />
    </VStack>
  )
}

export default App
