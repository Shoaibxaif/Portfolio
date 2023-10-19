import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  HStack,
  Spacer,
  Link,
  VStack,
  Divider,
  Image,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";

import Logo from "../Assests/Logo.svg"
import LogoB from "../Assests/Logo_black.svg"

const Header = () => {
  return (
    <>
      <HStack bgColor="#070707" p={3}>
        <Image  h={"20px"} src={Logo}/>

        <Spacer />
        <PlacementExample />
      </HStack>
      <Divider/>
    </>
  );
};

export function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        style={{
          background: "none",
          border: "none",
          outline: "none",
          cursor: "pointer",
        }}
      >
        <FaBars color="#607B96" />
      </Button>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}  bgColor="#607B96">
        <DrawerOverlay />
        <DrawerContent
          fontSize={"l"}
          bgColor="#607B96"
          color="#070707"
          fontWeight={"semibold"}
        >
          <DrawerHeader borderBottomWidth="1px" > <Image  h={"20px"} src={LogoB}/> </DrawerHeader>
          <DrawerBody>
            <VStack
              alignItems={"flex-start"}
              style={{ textDecoration: "none" }}
            >
              <Link as={RouterLink} to="/" _hover={{ color: "white" }}>
                Hello
              </Link>
              <Link as={RouterLink} to="/about" _hover={{ color: "white" }}>
                About-me
              </Link>
              <Link as={RouterLink} to="/skill" _hover={{ color: "white" }}>
                Skills
              </Link>
              <Link as={RouterLink} to="/project" _hover={{ color: "white" }}>
                Projects
              </Link>
              <Link as={RouterLink} to="/contact" _hover={{ color: "white" }}>
                Contact-me
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
