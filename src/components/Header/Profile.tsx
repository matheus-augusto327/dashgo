import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Augusto</Text>
        <Text color="gray.300" fontSize="small">
          matheus.augustoreal@gmail.com
        </Text>

      </Box>
      <Avatar size="md" name="Matheus Augusto" src="https://github.com/matheus-augusto327.png" />
    </Flex>
  )
}