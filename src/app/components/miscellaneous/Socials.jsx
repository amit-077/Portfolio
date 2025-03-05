import { Box, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Socials = ({ lightMode, setLightMode }) => {
  return (
    <VStack
      display={"flex"}
      flexDir={"row"}
      gap={"1.5rem"}
    > 
    <Link href={'https://www.linkedin.com/in/amitkamat918'} target="_blank">
      <Box
        bgColor={lightMode ? "#fff" : "#333"}
        border={lightMode ? "0.01rem solid #d1d1d1" : "0.01rem solid #555"}
        px={3}
        py={1.5}
        borderRadius={"full"}
        boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #333"}
        transition={"0.3s all"}
        color={lightMode ? "#77777E" : "#aaa"}
        _hover={{
          bgColor: "#0077b5",
          color: "#f5f5f5",
          boxShadow: lightMode ? "1px 1px 2px lightblue" : "1px 1px 2px #222",
          border: "0.01rem solid 0077b5",
        }}
      >
        <Text fontSize={"1.2rem"}>
          <i className="fa-brands fa-linkedin-in"></i>
        </Text>
        </Box>
      </Link>
      <Link href={'https://www.github.com/amit-077'} target="_blank">
        <Box
          bgColor={lightMode ? "#fff" : "#333"}
          border={lightMode ? "0.01rem solid #d1d1d1" : "0.01rem solid #555"}
          px={3}
          py={1.5}
          borderRadius={"full"}
          boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #333"}
          transition={"0.3s all"}
          color={lightMode ? "#77777E" : "#aaa"}
          _hover={{
            bgColor: "#353535",
            color: "#f5f5f5",
            boxShadow: lightMode ? "1px 1px 2px #454545" : "1px 1px 2px #222",
            border: "0.01rem solid #353535",
          }}
        >
          <Text fontSize={"1.2rem"}>
            <i className="fa-brands fa-github"></i>
          </Text>
        </Box>
      </Link>
      <Link href={'mailto:amitkamat918@gmail.com'} target="_blank">
        <Box
          bgColor={lightMode ? "#fff" : "#333"}
          border={lightMode ? "0.01rem solid #d1d1d1" : "0.01rem solid #555"}
          px={3}
          py={1.5}
          borderRadius={"full"}
          boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #333"}
          transition={"0.3s all"}
          color={lightMode ? "#77777E" : "#aaa"}
          _hover={{
            bgColor: "#E04D3B",
            color: "#fff",
            boxShadow: "1px 1px 2px red",
            border: "0.01rem solid #E04D3B",
          }}
        >
          <Text fontSize={"1.1rem"}>
            <i className="fa-solid fa-envelope"></i>
          </Text>
        </Box>
      </Link>
      <Link href={'https://wa.me/7758900785'} target="_blank">
        <Box
          bgColor={lightMode ? "#fff" : "#333"}
          border={lightMode ? "0.01rem solid #d1d1d1" : "0.01rem solid #555"}
          px={3}
          py={1.5}
          borderRadius={"full"}
          boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #333"}
          transition={"0.3s all"}
          color={lightMode ? "#77777E" : "#aaa"}
          _hover={{
            bgColor: "#00D25C",
            color: "#fff",
            boxShadow: "1px 1px 2px lightgreen",
            border: "0.01rem solid #00D25C",
          }}
        >
          <Text fontSize={"1.2rem"}>
            <i className="fa-brands fa-whatsapp"></i>
          </Text>
        </Box>
      </Link>
    </VStack>
  );
};

export default Socials;
