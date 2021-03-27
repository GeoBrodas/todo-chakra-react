import { HStack, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function Addtodolist({ addTodo }) {
  const [Content, setContent] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    //console.log(Content)
    const todo = {
      id: nanoid(),
      name: Content,
    }
    addTodo(todo)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Enter todo item"
          value={Content}
          onChange={(e) => {
            setContent(e.target.value)
          }}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add ToDo
        </Button>
      </HStack>
    </form>
  )
}

export default Addtodolist
