// "use client";

import { Box, Text } from "@chakra-ui/react";
import React from "react";
import SkillBox from "./miscellaneous/SkillBox";
import { iconsArr } from "./miscellaneous/icons";
import { BranchIcon, BugIcon, FolderIcon, NodeIcon } from "./utils/randomIcons";

const Skills = ({lightMode}) => {
  return (
    <Box
      id="skills"
      w={"100vw"}
      minH={"100vh"}
      bgColor={lightMode ? "#f5f5f5" : "#2c2c2c"}
      fontFamily={"Rubik"}
      pl={"5rem"}
      pr={"5rem"}
      userSelect={"none"}
      draggable={"false"}
      position={"relative"}
    >
      <Box
        pt={"2rem"}
        w={"100%"}
        fontWeight={"700"}
        fontSize={"2.5rem"}
        color={lightMode ? "#000": "#f1f1f1"}
        position={"relative"}
        _before={{
          content: `""`,
          position: "absolute",
          bottom: 0,
          left: -10,
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
        display={"flex"}
        flexWrap={"wrap"}
        gap={"2rem"}
        rowGap={"2rem"}
      >
        {iconsArr.map((icon, index) => {
          return <SkillBox icon={icon} key={index} lightMode={lightMode}/>;
        })}
      </Box>
    </Box>
  );
};

export default Skills;
