import React from "react";
import { Box, Flex, Heading, Button, Spacer } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Claude Particles
        </Heading>
      </Flex>
      <Spacer />
      <Box>
        <Button mr={4} colorScheme="teal" variant="outline">
          Sign Up
        </Button>
        <Button colorScheme="teal">Log In</Button>
      </Box>
    </Flex>
  );
};

export default Navbar;
