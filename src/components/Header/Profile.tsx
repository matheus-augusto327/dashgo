import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Matheus Augusto</Text>
          <Text color="gray.300" fontSize="small">
            matheus.augustoreal@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Matheus Augusto" src="https://github.com/matheus-augusto327.png" />
    </Flex>
  )
}