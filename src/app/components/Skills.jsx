// "use client";

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SkillBox from "./miscellaneous/SkillBox";
import { iconsArr } from "./miscellaneous/icons";
import { BranchIcon, BugIcon, FolderIcon, NodeIcon } from "./utils/randomIcons";

const Skills = ({ lightMode }) => {
  return (
    <Box
      id="skills"
      w={{base: "100vw", md: "100vw", lg: "100vw"}}
      minH={'80vh'}
      maxH={"200vh"}
      bgColor={lightMode ? "#f5f5f5" : "#2c2c2c"}
      fontFamily={"Rubik"}
      pl={["1.5rem", "3rem", "5rem"]}
      pr={["1.5rem", "3rem", "5rem"]}
      userSelect={"none"}
      draggable={"false"}
      position={"relative"}
    >
      <Box
        pt={["4rem", "3rem", "2rem"]}
        w={"100%"}
        fontWeight={"700"}
        fontSize={"2.5rem"}
        color={lightMode ? "#000" : "#f1f1f1"}
        position={"relative"}
        _before={{
          content: `""`,
          position: "absolute",
          bottom: 0,
          left: [-4, -7, -10],
          height: "5%",
          width: "35%",
          bgColor: "#5580E9",
          borderRadius: "1rem",
        }}
      >
        <Text fontSize={"2.4rem"}>SKILLS</Text>
      </Box>
      <Box
        mt={"3rem"}
        width={'100%'}
        display={"flex"}
        justifyContent={{base: 'space-between', md: "left", lg: 'left'}}
        alignItems={'center'}
        flexWrap={"wrap"}
        gap={"2rem"}
        columnGap={["0.5rem", "2rem", "2rem"]}
      >
        {iconsArr.map((icon, index) => {
          return <SkillBox icon={icon} key={index} lightMode={lightMode} />;
        })}
      </Box>
    </Box>
  );
};

export default Skills;
