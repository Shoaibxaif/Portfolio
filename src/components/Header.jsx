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
  Text,
  Spacer,
  Link,
  VStack,
  Divider,
} from "@chakra-ui/react";

import { FaBars } from "react-icons/fa";



const Header = () => {
  return (
    <>
      <HStack bgColor="#070707" p={3}>
        <Text color="#607B96" fontSize={"large"}  fontWeight={"semibold"}>
          _Shoaib
        </Text>

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

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent
          fontSize={"l"}
          bgColor="#607B96"
          color="#070707"
          fontWeight={"semibold"}
        >
          <DrawerHeader borderBottomWidth="1px" > Shoaib </DrawerHeader>
          <DrawerBody>
            <VStack
              alignItems={"flex-start"}
              style={{ textDecoration: "none" }}
            >
              <Link as={RouterLink} to="/" _hover={{ color: "white" }}>
                _Hello
              </Link>
              <Link as={RouterLink} to="/about" _hover={{ color: "white" }}>
                _About-me
              </Link>
              <Link as={RouterLink} to="/skill" _hover={{ color: "white" }}>
                _Skills
              </Link>
              <Link as={RouterLink} to="/project" _hover={{ color: "white" }}>
                _Projects
              </Link>
              <Link as={RouterLink} to="/contact" _hover={{ color: "white" }}>
                _Contact-me
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
