import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
    bgColor={"#607B96"}
    minH={"20"}
    px={"16"}
    py={["16", "8"]}
  >
    <Stack  alignItems={"center"}>
      
        <Text fontWeight={"bold"}>Made By  Mohammad Shoaib</Text>

      
    </Stack>
  </Box>
  )
}

export default Footer
