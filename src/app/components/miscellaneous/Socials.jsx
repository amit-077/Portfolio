import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Socials = ({ lightMode, setLightMode }) => {
  return (
    <VStack
      //   spacing={"1rem"}
      display={"flex"}
      flexDir={"row"}
      gap={"1.5rem"}
    >
      <Box
        bgColor={"#fff"}
        border={lightMode ? "0.01rem solid #d1d1d1" : "0.01rem solid #555"}
        px={3}
        py={1.5}
        borderRadius={"full"}
        boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #555"}
        transition={"0.3s all"}
        _hover={{
          bgColor: "#0077b5",
          color: "#f5f5f5",
          boxShadow: lightMode ? "1px 1px 2px lightblue" : "1px 1px 2px #222",
          border: "0.01rem solid 0077b5",
        }}
        color={lightMode ? "#77777E" : "#333"}
      >
        <Text fontSize={"1.2rem"}>
          <i class="fa-brands fa-linkedin-in"></i>
        </Text>
      </Box>
      <Box
        bgColor={"#fff"}
        border={lightMode ? "0.01rem solid #d1d1d1" : "0.01rem solid #555"}
        px={3}
        py={1.5}
        borderRadius={"full"}
        boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #555"}
        transition={"0.3s all"}
        _hover={{
          bgColor: "#353535",
          color: "#f5f5f5",
          boxShadow: lightMode ? "1px 1px 2px #454545" : "1px 1px 2px #222",
          border: "0.01rem solid #353535",
        }}
        color={lightMode ? "#77777E" : "#333"}
      >
        <Text fontSize={"1.2rem"}>
          <i class="fa-brands fa-github"></i>
        </Text>
      </Box>
      <Box
        bgColor={"#fff"}
        border={"0.01rem solid #d1d1d1"}
        px={3}
        py={2}
        borderRadius={"full"}
        boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #555"}
        transition={"0.3s all"}
        _hover={{
          bgColor: "#E04D3B",
          color: "#fff",
          boxShadow: "1px 1px 2px red",
          border: "0.01rem solid #E04D3B",
        }}
        color={"#77777E"}
      >
        <Text fontSize={"1.1rem"}>
          <i class="fa-solid fa-envelope"></i>
        </Text>
      </Box>
      <Box
        bgColor={"#fff"}
        border={"0.01rem solid #d1d1d1"}
        px={3}
        py={1.5}
        borderRadius={"full"}
        boxShadow={lightMode ? "2px 2px 2px #d1d1d1" : "2px 2px 2px #555"}
        transition={"0.3s all"}
        _hover={{
          bgColor: "#00D25C",
          color: "#fff",
          boxShadow: "1px 1px 2px lightgreen",
          border: "0.01rem solid #00D25C",
        }}
        color={"#77777E"}
      >
        <Text fontSize={"1.2rem"}>
          <i class="fa-brands fa-whatsapp"></i>
        </Text>
      </Box>
    </VStack>
  );
};

export default Socials;
