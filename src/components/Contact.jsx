import { Box, Container, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./About.css";
import profile from "../Assests/profile.jpeg";
import commentIcon from "../Assests/comments-icon.svg";
import Star from "../Assests/Star.svg";
import TubeLand from "../Assests/TubeLand.png";
const Contact = () => {
  return (
    <Container maxW="full" maxH="120vh" bgColor="#070707" pt={5}>
      <Container maxW="80%" maxH="120vh" position="relative">
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
          <Text
            zIndex={1}
            color="#607B96"
            fontSize={{ base: "10px", md: "16px" }}
          >
            <Text as={"span"} color="#4D5BCE">
              {" "}
              import{" "}
              <Text as={"span"} color="#43D9AD">
                ContactMe
              </Text>{" "}
              from
            </Text>{" "}
            <Text as={"span"} color="#E99287">
              ‘./ContactMe’
            </Text>{" "}
            <br /> <br />
           <Stack w={"80%"} direction={{base:"column",md:"row"}}>

          

           <Text>
           .ContactMe {" "} &#123; <br/><br/>

            email : "mohammadshoaib7221@gmail.com",<br/>
            phoneNumber : +91 9927841705,<br/><br/>

            &#125; 
          </Text>
          <Spacer/>
           <Text>
          
           .SocialMedia {" "} &#123; <br/><br/>

            instagram : "@shoaibxaif",<br/>
            Twitter : "@shoaibxaif",<br/>
            Linkedin : "@shoaibxaif",<br/>
            Github : "@shoaibxaif",<br/><br/>
            

            &#125;
          </Text>
          
         
           

           </Stack>
          </Text>
        </Box>
        <Image
        mt={4}
          src={TubeLand}
          width={"200px"}
          alt="TubeLand"
          className="left-image"
       
        />
    
      </Container>
    </Container>
  );
};




export default Contact;
