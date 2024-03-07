import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import SwitchIcon from "./miscellaneous/switchIcon";

const Navbar = ({ lightMode, setLightMode }) => {
  return (
    <Box
      w={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pl={"5rem"}
      pr={"5rem"}
      pt={"1rem"}
      pb={"0.5rem"}
      fontFamily={"Open Sans"}
      userSelect={"none "}
    >
      <Box>
        <Box overflow={"hidden"}>
          <Text
            fontSize={"2rem"}
            color={"#5580E9"}
            fontWeight={"700"}
            fontFamily={"Poppins"}
            position={"relative"}
          >
            <Link>
              <Image src="/images/Logo3.png" height={"3rem"} width={"3rem"} />
            </Link>
            {/* Logo */}
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={"3rem"} alignItems={"center"}>
        <Box cursor={"pointer"}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
            color={"#5580e9"}
          >
            <Link _hover={{ textDecoration: "none" }}>Home</Link>
          </Text>
        </Box>
        <Box cursor={"pointer"}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            <Link _hover={{ textDecoration: "none" }} href="#about">
              About
            </Link>
          </Text>
        </Box>
        {/* <Box cursor={"pointer"}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
          >
            Education
          </Text>
        </Box> */}
        <Box cursor={"pointer"}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            <Link _hover={{ textDecoration: "none" }} href="#skills">
              Skills
            </Link>
          </Text>
        </Box>
        <Box cursor={"pointer"}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            <Link _hover={{ textDecoration: "none" }} href="#projects">
              Projects
            </Link>
          </Text>
        </Box>
        <Box cursor={"pointer"}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            <Link _hover={{ textDecoration: "none" }} href="#contact">
              Contact
            </Link>
          </Text>
        </Box>
        <Box>
          <SwitchIcon lightMode={lightMode} setLightMode={setLightMode} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
