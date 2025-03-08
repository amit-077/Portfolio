import { Box, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import SwitchIcon from "./miscellaneous/SwitchIcon";

const Navbar = ({ lightMode, setLightMode }) => {
  return (
    <Box
      w={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pl={["0.25rem", "3rem", "5rem"]}
      pr={["1rem", "3rem", "5rem"]}
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
              <Image
                src= {lightMode ? "/images/logox.png": "/images/logox_dark.png"}
                height={"auto"}
                width={"auto"}
                transform={'scale(0.65)'}
                alt="Logo"
              />
            </Link>
             {/* <Text display={"flex"} pl={"0.5rem"} pr={"0.5rem"}>
                <Text textShadow={"-3px -3px #e7e7e7"}>a</Text>
                <Text textShadow={"-3px -3px #e7e7e7"}>M</Text>
                <Text textShadow={"-3px -3px #e7e7e7"}>i</Text>
                <Text
                  textShadow={"-3px -3px #e7e7e7"}
                  transform={"rotate(10deg)"}
                >
                  T
                </Text> */}
              {/* </Text> */}
            {/* Logo */}
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} gap={"3rem"} alignItems={"center"}>
        <Box cursor={"pointer"} display={['none', 'block', 'block']}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
            color={"#5580e9"}
          >
            <Link _hover={{ textDecoration: "none" }} href="#home">Home</Link>
          </Text>
        </Box>
        <Box cursor={"pointer"} display={['none', 'block', 'block']}>
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
        <Box cursor={"pointer"} display={['none', 'block', 'block']}>
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
        <Box cursor={"pointer"} display={['none', 'block', 'block']}>
          <Text
            fontWeight={"500"}
            _hover={{ color: "#5580e9" }}
            transition={"0.3s all"}
            _active={{ opacity: 0.6 }}
            color={lightMode ? "#333" : "#f1f1f1"}
          >
            <Link _hover={{ textDecoration: "none" }} href="#experience">Experience</Link>
          </Text>
        </Box>
        <Box cursor={"pointer"} display={['none', 'block', 'block']}>
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
        <Box cursor={"pointer"} display={['none', 'block', 'block']}>
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
