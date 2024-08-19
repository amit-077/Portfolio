"use client";

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const SkillBox = ({ icon, lightMode }) => {
  return (
    <Tilt options={defaultOptions}>
      <Box
        textAlign={"center"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
      >
        {/* Circle Icon */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          bgColor={icon.color ? icon.color : lightMode ? "#f1f1f1": "#2c2c2c"}
          py={5}
          px={0}
          borderRadius={"50%"}
          w={"5rem"}
          boxShadow={`0 0 7px ${icon.color || lightMode ? "#eaeaea": "#555"}`}
        >
          <Image src={icon.link} width={40} height={40} alt="Icon Link" />
        </Box>
        {/* Lower Text */}
        <Box mt={"0.2rem"} w={"6rem"} color={lightMode ? '#222': "#f5f5f5"}>
          <Text
            pt={
              icon.name.includes("Truffle") ||
              icon.name.includes("Hardhat") ||
              icon.name.includes("Etherjs") ||
              icon.name.includes("Langchain")
                ? "0.3rem"
                : "0"
            }
          >
            {icon.name}
          </Text>
        </Box>
      </Box>
    </Tilt>
  );
};

export default SkillBox;
