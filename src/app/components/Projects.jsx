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
import {
  BoltIcon,
  BranchIcon,
  BugIcon,
  FolderIcon,
  LaptopIcon,
  NodeIcon,
} from "./utils/randomIcons";

const Projects = ({lightMode}) => {
  return (
    <Box
      id="projects"
      w={"100vw"}
      minH={"110vh"}
      bgColor={lightMode ? "#f5f5f5": "#2c2c2c"}
      pl={"5rem"}
      pr={"5rem"}
      pt={"4rem"}
      fontFamily={"Rubik"}
      position={"relative"}
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
        <Text fontSize={"2.5rem"} fontWeight={"700"} color={lightMode ? "#000": "#f1f1f1"}>
          WORKFOLIO
        </Text>
      </Box>
      <TabsComponent lightMode={lightMode}/>
      <Box>
        <BoltIcon top={200} right={150} />
        <LaptopIcon top={180} left={200} pos={"absolute"} />
        <BranchIcon top={280} left={370} />
        <NodeIcon right={360} bottom={130} />
        <BugIcon bottom={2} left={450} />
      </Box>
    </Box>
  );
};

export default Projects;
