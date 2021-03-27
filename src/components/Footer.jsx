import React from 'react'
import { Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { MdCopyright } from 'react-icons/md'

const year = new Date().getFullYear()

function Footer() {
  return (
    <VStack p={4}>
      <Divider />
      <Text>~ Built by Georgey ~</Text>
      <Text>
        <HStack>
          <MdCopyright />
          <span>{year}</span>
        </HStack>
      </Text>
    </VStack>
  )
}

export default Footer
