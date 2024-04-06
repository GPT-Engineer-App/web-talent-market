import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt={8} py={4} borderTopWidth={1} borderTopColor="gray.200" textAlign="center">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} Claude Particles. All rights reserved.
      </Text>
      <Text fontSize="sm" mt={2}>
        <Link href="/about" mr={4}>About Us</Link>
        <Link href="/contact" mr={4}>Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </Text>
    </Box>
  );
};

export default Footer;