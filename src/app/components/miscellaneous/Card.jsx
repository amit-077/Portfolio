import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ tag, title, description, image, link, view }) => {
  return (
    <Box
      w={"14rem"}
      h={"19rem"}
      textAlign={"left"}
      bgColor={"#fff"}
      p={"0.8rem"}
      borderRadius={"0.5rem"}
      boxShadow={"0 0 4px #ededed"}
      pb={"1.3rem"}
      role="group"
    >
      <Box
        w={"100%"}
        h={"60%"}
        bgImage={`url('${image}')`}
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPos={"center"}
        borderRadius={"0.5rem"}
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"flex-end"}
        boxShadow={"0 0 3px #e8e8e8"}
        overflow={"hidden"}
      >
        {/* overflow */}
        <Box
          _groupHover={{
            bottom: "0%",
          }}
          transition={"0.7s all"}
          position={"absolute"}
          w={"100%"}
          h={"100%"}
          bgColor={"rgba(109, 108, 109, 0.5)"}
          bottom={"-100%"}
        >
          <Box
            display={"flex"}
            gap={"2.5rem"}
            alignItems={"center"}
            w={"100%"}
            h={"100%"}
            justifyContent={"center"}
          >
            <Button
              p={0}
              borderRadius={"full"}
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
            >
              <Text
                color={"#f1f1f1"}
                fontSize={"1.1rem"}
                bgColor={"rgba(0,0,0,0.4)"}
                transition={"0.3s all"}
                _hover={{ bgColor: "rgba(0,0,0,0.6)" }}
                p={"0.4rem 0.5rem 0.4rem 0.5rem"}
                borderRadius={"full"}
              >
                <Link href={view} isExternal>
                  <i class="fa-solid fa-eye"></i>
                </Link>
              </Text>
            </Button>
            <Button
              p={0}
              borderRadius={"full"}
              bgColor={"transparent"}
              _hover={{ bgColor: "transparent" }}
            >
              <Text
                color={"#f5f5f5"}
                fontSize={"1.4rem"}
                bgColor={"rgba(0,0,0,0.4)"}
                transition={"0.3s all"}
                _hover={{ bgColor: "rgba(0,0,0,0.6)" }}
                p={"0.15rem 0.5rem 0.15rem 0.5rem"}
                borderRadius={"full"}
              >
                <Link href={link} isExternal>
                  <i class="fa-brands fa-github"></i>
                </Link>
              </Text>
            </Button>
          </Box>
          <Text></Text>
        </Box>
        {/* overflow */}
        <Box position={"absolute"}>
          <Text
            bgColor={"#fff"}
            pl={"0.8rem"}
            pr={"0.8rem"}
            pt={"0.4rem"}
            color={"#777"}
            borderTopLeftRadius={"0.5rem"}
            borderTopRightRadius={"0.5rem"}
            fontSize={"0.8rem"}
          >
            {tag}
          </Text>
        </Box>
      </Box>
      <Box mt={"1rem"} w={"100%"} textAlign={"center"} fontWeight={"500"}>
        <Text>{title}</Text>
      </Box>
      <Box
        mt={"0.6rem"}
        w={"100%"}
        textAlign={"justify"}
        fontSize={"0.9rem"}
        color={"#777"}
      >
        <Text>{description}</Text>
      </Box>
    </Box>
  );
};

export default Card;
