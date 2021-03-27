import { HStack, Button, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function Addtodolist({ addTodo }) {
  const [Content, setContent] = useState('')
  const toast = useToast()

  function handleSubmit(event) {
    event.preventDefault()

    if (!Content) {
      toast({
        title: 'Empty Input',
        description: 'Please enter an input',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }

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
