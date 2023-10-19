import {
  Box,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  Heading,
  Link,
  Button,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import "./Project.css";
import profile from "../Assests/profile.jpeg";
import commentIcon from "../Assests/comments-icon.svg";
import Star from "../Assests/Star.svg";

const Project = () => {
  //project array

  const reactProjects = [
    {
      id: 1,
      name: "Project 1",
      description: "Description for Project 1",
      image:
        "https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/1921326/pexels-photo-1921326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Project 2",
      description: "Description for Project 2",
      image:
        "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Project 3",
      description: "Description for Project 3",
      image:
        "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description for Project 4",
      image:
        "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description for Project 4",
      image:
        "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description for Project 4",
      image:
        "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description for Project 4",
      image:
        "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Project 4",
      description: "Description for Project 4",
      image:
        "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    
  ];

  return (
    <Container maxW="full" bgColor="#070707" py={5}>
      <Container maxW="100%"  position="relative">
        <HStack h={"60px"} p={2}>
          <Box flex="1">
            <HStack>
              <Image
                w={{ base: "30px", md: "50px" }}
                borderRadius={"50%"}
                border="2px solid black"
                src={profile}
              />
              <div>
                <Text color="#4D5BCE" fontSize={{ base: "10px", md: "18px" }}>
                  @shoaibxaif
                </Text>
                <Text
                  color="#607B96"
                  fontSize={{ base: "10px", md: "18px" }}
                  w={{ base: "150px", md: "full" }}
                >
                  created 5 min ago
                </Text>
              </div>
            </HStack>
          </Box>
          <Box flex="1">
            <Stack
              direction={{ base: "column", md: "row" }}
              fontSize={{ base: "10px", md: "16px" }}
              Style="display: flex; justify-content: flex-end;"
            >
              <HStack ml={{ base: "36px", md: "0" }}>
                <Image w={{ base: "10px", md: "30px" }} src={commentIcon} />{" "}
                <Text color="#607B96"> detail</Text>{" "}
              </HStack>
              <HStack ml={{ base: "36px", md: "0" }}>
                <Image w={{ base: "10px", md: "30px" }} src={Star} />{" "}
                <Text color="#607B96">stars</Text>{" "}
              </HStack>
            </Stack>
          </Box>
        </HStack>

        <Box
          bgColor="#011221"
          color="#607B96"
          borderRadius={10}
          padding={30}
          border="1px solid #1E2D3D"
          mt={2}
        >


<Container py={{ base: "2", md: "2" }} maxW={"container.xl"} >
            <Grid
              justifyContent="center" // Center the grid items horizontally
              alignItems="center" // Center the grid items vertically
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(4, 1fr)",
              }}
              gap={3}
            >
                {reactProjects.map((project) => (
                  <CustomCard key={project.id} project={project} />
                ))}
            </Grid>
          </Container>
         
        </Box>
      </Container>
    </Container>
  );
};

export const CustomCard = ({ project }) => {
  return (
    <Card maxW={"xl"}>
      <CardBody bgColor="#1E2D3D" borderRadius={5}>
        <Image src={project.image} borderRadius="lg" />
        <Stack
          mt="6"
          spacing="3"
          bgColor="transparent"
          border="1px #1E2D3D"
          color="#607B96"
        >
          <Heading size="md" bgColor="transparent">
            {project.name}
          </Heading>
          <Text bgColor="transparent">{project.description}</Text>
        </Stack>

        <Link
          ml={2}
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
        >
          <Button
            my={6}
            borderRadius={8}
            w="130px"
            colorScheme="green"
            variant="outline"
          >
            <Text ml={1}>Resume</Text>
          </Button>{" "}
        </Link>
      </CardBody>
    </Card>
  );
};

export default Project;
