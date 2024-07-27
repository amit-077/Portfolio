"use client";

import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Typed from "typed.js";
import { ArrowForwardIcon, DownloadIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Socials from "./miscellaneous/Socials";
import { BoltIcon, BulbIcon, CodeIcon, LaptopIcon } from "./utils/randomIcons";

// #5E3BE3

const Home = ({ lightMode, setLightMode }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Web Developer",
        "App Developer",
        "Software Engineer",
        "Blockchain Developer",
      ],
      typeSpeed: 100,
      smartBackspace: true,
      loop: true,
      backSpeed: 100,
      cursorChar: "",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [el]);

  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      bgColor={"#f5f5f5"}
      _before={{
        content: `""`,
        w: lightMode ? "0%" : "180%",
        h: lightMode ? "0%" : "180%",
        bgColor: "#2c2c2c",
        position: "absolute",
        left: 0,
        zIndex: -999,
        transition: "width 1s, height 1s",
        borderBottomRightRadius: "100%",
      }}
      position={"relative"}
      userSelect={"none "}
      draggable={false}
      zIndex={1}
      overflow={"hidden"}
    >
      <Box w={"100%"}>
        <Navbar lightMode={lightMode} setLightMode={setLightMode} />
      </Box>
      <Box pl={"5rem"} pr={"5rem"}>
        <HStack w={"100%"} h={"100%"} alignItems={"flex-start"}>
          {/* left side */}
          <Box w={"55%"} fontFamily={"Rubik"} pt={"4rem"} h={"100%"}>
            <Box>
              <Box display={"flex"}>
                <Text
                  fontSize={"2.7rem"}
                  fontWeight={"500"}
                  color={lightMode ? "#333" : "#f1f1f1"}
                  display={"flex"}
                >
                  Hi, I&apos;m{" "}
                </Text>
                <Text
                  color={"#5580E9"}
                  textShadow={lightMode ? "2px 2px 4px #c9c9c9" : null}
                  fontSize={"2.7rem"}
                >
                  &nbsp;Amit Kamat
                </Text>
                {/* Background Text */}
                <Box
                  position={"absolute"}
                  zIndex={-1}
                  left={"-1.1rem"}
                  bottom={"14.5rem"}
                >
                  <Text
                    fontWeight={"700"}
                    fontSize={"6.5rem"}
                    color={lightMode ? "#f1f1f1" : "#2d2d2d"}
                    transition={"0.7s all"}
                    textShadow={lightMode ? null : "0px 0px #5b5b5b"}
                  >
                    WEB DEV
                  </Text>
                </Box>
                {/* Background Text */}
              </Box>
              <Box display={"flex"} alignItems={"center"}>
                <Text
                  fontSize={"1.8rem"}
                  color={lightMode ? "#333" : "#f1f1f1"}
                >
                  A&nbsp;
                </Text>
                <Text
                  fontSize={"1.8rem"}
                  color={"#5580E9"}
                  ref={el}
                  display={"inline-block"}
                ></Text>
              </Box>
            </Box>
            {/* buttons */}
            <Box
              display={"flex"}
              alignItems={"center"}
              marginTop={"4rem"}
              gap={"2rem"}
            >
              <Box>
                <Button
                  colorScheme={"blue"}
                  px={"2rem"}
                  py={"1.3rem"}
                  position={"relative"}
                  transition={"0.7s all"}
                  bgColor={lightMode ? "#f5f5f5" : "#333"}
                  color={lightMode ? "#333" : "#f1f1f1"}
                  border={"1.5px solid #5580E9"}
                  zIndex={1}
                  boxShadow={
                    lightMode ? "2px 2px 3px #d5d5d5" : "2px 2px 3px #444"
                  }
                  overflow={"hidden"}
                  _before={{
                    content: `""`,
                    position: "absolute",
                    w: "100%",
                    height: "100%",
                    bgColor: "#5580E9",
                    right: "100%",
                    transition: "0.7s all",
                  }}
                  _hover={{
                    _before: { right: "0%", zIndex: -1 },
                    color: "#f5f5f5",
                    border: "1.5px solid #5580E9",
                  }}
                >
                  Hire Me
                </Button>
              </Box>
              <Box>
                <a href="/Resume.pdf" download="Amit_Resume.pdf">
                  <Button
                    bgColor={"#5580E9"}
                    color={"#f5f5f5"}
                    px={"1rem"}
                    py={"1.4rem"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    role="group"
                    boxShadow={
                      lightMode ? "1px 1px 7px #749bfc" : "1px 1px 7px #555"
                    }
                    _hover={{ bgColor: "#5a85f2" }}
                  >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      position={"relative"}
                      w={"90%"}
                      overflow={"hidden"}
                    >
                      <Box
                        display={"flex"}
                        position={"relative"}
                        left={"-12%"}
                        transition={"0.5s all"}
                        _groupHover={{ left: "0%" }}
                        justifyContent={"center"}
                      >
                        <DownloadIcon fontSize={"1.1rem"} />
                        &nbsp;&nbsp;&nbsp;
                        <Text>Download CV&nbsp;&nbsp;&nbsp;</Text>
                        <ArrowForwardIcon fontSize={"1.1rem"} />
                      </Box>
                    </Box>
                  </Button>
                </a>
              </Box>
            </Box>
            <Box mt={"3rem"}>
              <Socials lightMode={lightMode} setLightMode={setLightMode} />
            </Box>
          </Box>
          {/* right side */}
          <Box w={"45%"}>
            <Box>
              <Image
                class="homeImg"
                src={lightMode ? "/images/img1.png" : "/images/img1.png"}
                width={400}
                height={400}
                alt="Home Image"
              />
            </Box>
          </Box>
        </HStack>
      </Box>
      {/* Random icons */}
      <Box>
        <BoltIcon top={100} right={200} />
        <BulbIcon bottom={2} left={500} />
        <CodeIcon top={160} right={30} />
        <LaptopIcon top={440} left={680} />
      </Box>
    </Box>
  );
};

// linkedIn
// Github
// Whatsapp
// Email

export default Home;
