import { HStack, Button, Input } from '@chakra-ui/react'
import React from 'react'

function Addtodolist() {
  function handleSubmit(event) {}

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input variant="filled" placeholder="Enter todo item" />
        <Button colorScheme="pink" px="8" type="submit">
          Add ToDo
        </Button>
      </HStack>
    </form>
  )
}

export default Addtodolist
