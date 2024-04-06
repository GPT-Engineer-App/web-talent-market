import React, { useState } from "react";
import { Box, Heading, Text, Stack, Input, Button, Grid, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    technologies: ["React", "Node.js", "JavaScript"],
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London, UK",
    technologies: ["Angular", ".NET", "C#"],
  },
  {
    id: 3,
    name: "Mike Johnson",
    location: "Sydney, Australia",
    technologies: ["Vue.js", "Go", "JavaScript"],
  },
  // Add more developers here
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredDevelopers = developers.filter((developer) => developer.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleContactClick = (developer) => {
    setSelectedDeveloper(developer);
    onOpen();
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Claude Particles
      </Heading>
      <Text fontSize="xl" mb={8}>
        Discover and connect with top software talent specializing in web technologies like React, Node.js, .NET, Go, and JavaScript.
      </Text>

      <Stack direction="row" mb={8}>
        <Input placeholder="Search developers..." value={searchTerm} onChange={handleSearch} />
        <Button leftIcon={<FaSearch />} colorScheme="blue">
          Search
        </Button>
      </Stack>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
        {filteredDevelopers.map((developer) => (
          <Box key={developer.id} borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h2" size="md" mb={2}>
              {developer.name}
            </Heading>
            <Text mb={2}>{developer.location}</Text>
            <Stack direction="row" mb={4}>
              {developer.technologies.map((tech) => (
                <Badge key={tech} colorScheme="green">
                  {tech}
                </Badge>
              ))}
            </Stack>
            <Button colorScheme="blue" onClick={() => handleContactClick(developer)}>
              Contact
            </Button>
          </Box>
        ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Developer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedDeveloper && (
              <Box>
                <Text>
                  Send a message to <strong>{selectedDeveloper.name}</strong>:
                </Text>
                <FormControl id="message" mt={4}>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Enter your message..." />
                </FormControl>
                <Button mt={4} colorScheme="blue">
                  Send Message
                </Button>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
