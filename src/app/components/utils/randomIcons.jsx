"use client";

import { Box, Text } from "@chakra-ui/react";
import React from "react";

const BoltIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"#C1F8AB"}
        position={"absolute"}
        top={top}
        right={right}
        fontSize={"1.3rem"}
      >
        <i className="fa-solid fa-bolt"></i>
      </Text>
    </Box>
  );
};

const BulbIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"#C1F8AB"}
        position={"absolute"}
        bottom={bottom}
        left={left}
        fontSize={"1.3rem"}
      >
        <i className="fa-regular fa-lightbulb"></i>
      </Text>
    </Box>
  );
};

const CodeIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"#FFDBB0"}
        position={"absolute"}
        top={top}
        right={right}
        fontSize={"1.3rem"}
      >
        <i className="fa-solid fa-code"></i>
      </Text>
    </Box>
  );
};

const LaptopIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"#854EEE"}
        position={"absolute"}
        top={top}
        left={left}
        fontSize={"1.3rem"}
        opacity={"0.6"}
      >
        <i className="fa-solid fa-laptop-code"></i>
      </Text>
    </Box>
  );
};

const FolderIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"#C1F8AB"}
        position={"absolute"}
        top={top}
        right={right}
        fontSize={"1.3rem"}
      >
        <i className="fa-solid fa-folder-open"></i>
      </Text>
    </Box>
  );
};

const BranchIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"violet"}
        position={"absolute"}
        top={top}
        left={left}
        fontSize={"1.3rem"}
        opacity={"0.4"}
      >
        <i className="fa-solid fa-code-branch"></i>
      </Text>
    </Box>
  );
};

const NodeIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"#FFDBB0"}
        position={"absolute"}
        bottom={bottom}
        right={right}
        fontSize={"1.3rem"}
      >
        <i className="fa-solid fa-circle-nodes"></i>
      </Text>
    </Box>
  );
};

const BugIcon = ({ top, bottom, left, right, pos }) => {
  return (
    <Box>
      <Text
        color={"black"}
        position={"absolute"}
        bottom={bottom}
        left={left}
        fontSize={"1.4rem"}
        opacity={"0.2"}
      >
        <i className="fa-solid fa-bug"></i>
      </Text>
    </Box>
  );
};

export {
  BoltIcon,
  BulbIcon,
  CodeIcon,
  LaptopIcon,
  FolderIcon,
  BranchIcon,
  NodeIcon,
  BugIcon,
};
