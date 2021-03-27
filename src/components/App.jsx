import React, { useEffect } from 'react'
import { useState } from 'react'
import { Heading, VStack, IconButton, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Todolist from './Todolist'
import Addtodolist from './Addtodolist'
import Footer from './Footer'

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
    //instead of rendering everytime uneccesarily we call it only once
  )

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  //calls only when the todos array is changed and sets to localstorage

  const { colorMode, toggleColorMode } = useColorMode()

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
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
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
      <Footer />
    </VStack>
  )
}

export default App
