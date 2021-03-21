import React from "react";
import { Heading, VStack, IconButton } from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";
import Todolist from "./Todolist";
import Addtodolist from "./Addtodolist";

function App() {
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
      <Todolist />
      <Addtodolist />
    </VStack>
  );
}

export default App;
