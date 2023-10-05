import { Box, Container, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./About.css";
import profile from "../Assests/profile.jpeg";
import commentIcon from "../Assests/comments-icon.svg";
import Star from "../Assests/Star.svg";
const About = () => {
  return (
    <Container maxW="full" maxH="full" bgColor="#070707" mt={5} mb={20}>
      <Container maxW="90%" maxH="full">
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
        >
          <Text zIndex={1} color="#607B96" fontSize={{ base: "10px", md: "16px" }} >
            <Text as={"span"} color="#4D5BCE">
              {" "}
              import{" "}
              <Text as={"span"} color="#43D9AD">
                aboutMe
              </Text>{" "}
              from
            </Text>{" "}
            <Text as={"span"} color="#E99287">
              ‘./portfolio’
            </Text>{" "} 
            <br /> <br /> 
            I'm Mohammad Shoaib, a passionate second-year undergraduate
            Computer Science student at JNU Jaipur University with expertise in
            graphic design, UI/UX design, and web development. <br /> <br />

            

            With a strong background in both front-end development and graphic
            design, I have experience in developing web applications that
            combine both aesthetics and functionality. My proficiency in C++
            programming and a 5-star rating on Hackerrank have honed my
            algorithmic problem-solving skills. <br /> <br />

            My skillset includes C, HTML, CSS, Photoshop, Illustrator, Canva,
            Figma, JavaScript, and proficiency in the Bootstrap framework. I'm
            constantly striving to improve my skills and seek out new
            challenges, and I'm particularly interested in exploring the
            potential of back-end development. <br /> <br />

            As a creative and motivated individual, I'm always on the lookout
            for exciting opportunities to apply my knowledge and skills. If
            you're looking for a reliable, detail-oriented designer and
            developer, feel free to connect with me.
          </Text>
        </Box>
      </Container>
    </Container>
  );
};

export default About;
