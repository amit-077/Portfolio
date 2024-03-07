"use client";

import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import AnimatedCursor from "react-animated-cursor";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const page = () => {
  const [lightMode, setLightMode] = useState(true);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={20}
        color="85,128,233"
        innerScale={1.2}
        outerScale={2}
      />
      <Home lightMode={lightMode} setLightMode={setLightMode} />
      <About lightMode={lightMode} setLightMode={setLightMode} />
      <Skills lightMode={lightMode} setLightMode={setLightMode} />
      <Projects lightMode={lightMode} setLightMode={setLightMode} />
    </>
  );
};

export default page;
