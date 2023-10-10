import {
  Box,
  Container,
  HStack,
  Image,
  Stack,
  Text,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import "./About.css";
import profile from "../Assests/profile.jpeg";
import commentIcon from "../Assests/comments-icon.svg";
import Star from "../Assests/Star.svg";
import TubeLand from "../Assests/TubeLand.png";
import html from "../Assests/html.png";
const Skill = () => {
  const skillItem = [
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
    {
      id: 1,
      imageSrc: html,
    },
  ];

  return (
    <Container maxW="full" maxH="120vh" bgColor="#070707" pt={5}>
      <Container  maxH="120vh"  mt={5}>
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
          position="relative"
          bgColor="#011221"
          color="#607B96"
          borderRadius={10}
          padding={30}
          border="1px solid #1E2D3D"
          mt={2}
          h={{ base: "80%", md: "100%" }}
        >
          <Container py={{ base: "2", md: "5" }}>
            <Grid
              justifyContent="center" // Center the grid items horizontally
              alignItems="center" // Center the grid items vertically
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(5, 1fr)",
              }}
              gap={3}
            >
              {skillItem.map((i) => (
                <Image key={i.id} src={i.imageSrc} />
              ))}
            </Grid>
          </Container>
        </Box>
        <Image
          mt="24%"
          src={TubeLand}
          width={"200px"}
          alt="TubeLand"
          className="left-image"
        />
      </Container>
    </Container>
  );
};

export default Skill;
