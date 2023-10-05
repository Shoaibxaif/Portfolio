import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
  Stack,
} from "@chakra-ui/react";
import { BiSolidDownload } from "react-icons/bi";
import cloudImage from "../Assests/cloud.png";
import TubeLand from "../Assests/TubeLand.png";
import LandComputer from "../Assests/LandAndComputer.png";
import Land from "../Assests/land.png";
import Land2 from "../Assests/land2.png";

import "./Home.css";

const Home = () => {
  return (
    <Container maxW="full" maxH="full" bgColor="#070707">
      <Flex justifyContent="flex-end">
        <Image
          src={cloudImage}
          alt="Cloud"
          w={["200px", "300px", "400px"]}
          h={["auto", "auto", "auto"]}
        />
      </Flex>

      <Stack direction={["column", "row"]} h={"100vh"}>
        <Box
          overflow="hidden"
          paddingX={{ base: "15px", md: "50px" }}
          flex="1"
          height="auto" 
          position="relative" 
        >
          <Text color="#ffffff" fontSize={{ base: "18px", md: "25px" }}>
            Hi all. I am
          </Text>
          <Text
            color="#ffffff"
            fontSize={{ base: "22px", md: "40px" }}
            fontWeight={"400"}
          >
            Mohammad Shoaib
          </Text>
          <Text
            color="#4D5BCE"
            fontSize={{ base: "14px", md: "30px" }}
            fontWeight={"400"}
          >
            {" "}
            &gt; Frontend developer <br />
            &gt; Prompt Engineer <br />
            &gt; UI/UX designer
          </Text>

          <Text
            marginTop={"20px"}
            color="#607B96"
            fontSize={{ base: "12px", md: "18px" }}
          >
            / / welcome to my portfolio, press Z <br />/ / you can also see my
            projects on my Github page
          </Text>
          <Text fontSize={{ base: "12px", md: "18px" }}>
            <Text as="span" color="#4D5BCE">
              const <span style={{ color: "#43D9AD" }}>githubLink</span>{" "}
              <span style={{ color: "#ffffff" }}> = </span>{" "}
              <span style={{ color: "#E99287" }}>
                <Link href="https://github.com/Shoaibxaif">
                  {" "}
                  "https://github.com/Shoaibxaif"{" "}
                </Link>
              </span>{" "}
            </Text>
          </Text>

          <Link
            ml={2}
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/10UUi0LdbW8GkEWhXEb06aPSrIg8IhJAI/view?usp=drive_link"
          >
            <Button
              my={6}
              borderRadius={50}
              w="130px"
              colorScheme="green"
              variant="outline"
            >
              {" "}
              <BiSolidDownload fontSize="20px" />
              <Text ml={1}>Resume</Text>
            </Button>{" "}
          </Link>

          <img
            src={TubeLand}
            width={"200px"}
            alt="TubeLand"
            class="left-image"
          />
        </Box>

        <Box flex="1" display={{ base: "none", md: "block" }}>
          <Image src={Land} position="absolute" mt={2} zIndex="1" />
          <Image
            src={Land2}
            position="absolute"
            className="land2-image"
            zIndex="1"
          />
          <Image
            src={cloudImage}
            w={"400px"}
            alt="Cloud"
            position="absolute"
            mt={"290px"}
            zIndex="0"
          />
          <Image
            src={LandComputer}
            width={"400px"}
            className="right-image"
            zIndex="2"
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
