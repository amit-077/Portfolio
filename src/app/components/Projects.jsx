import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import TabsComponent from "./miscellaneous/TabsComponent";

const Projects = () => {
  return (
    <Box
      id="projects"
      w={"100vw"}
      h={"110vh"}
      bgColor={"#f5f5f5"}
      pl={"5rem"}
      pr={"5rem"}
      pt={"4rem"}
      fontFamily={"Rubik"}
    >
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"left"}
        position={"relative"}
        _before={{
          content: `""`,
          position: "absolute",
          bottom: 0,
          left: -10,
          height: "7%",
          width: "35%",
          bgColor: "#5580E9",
          borderRadius: "1rem",
        }}
      >
        <Text fontSize={"2.5rem"} fontWeight={"700"} color={"#000"}>
          WORKFOLIO
        </Text>
      </Box>
      <TabsComponent />
    </Box>
  );
};

export default Projects;
