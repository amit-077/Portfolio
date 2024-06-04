import { Box, Button, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      bgGradient={"linear-gradient(to top left,#f2f3f2 50%, #f5f5f5 50%)"}
      fontFamily={"Rubik"}
      userSelect={"none"}
      draggable={"false"}
      position={"relative"}
      id="about"
    >
      <HStack w={"100%"} display={"flex"} alignItems={"flex-start"}>
        {/* Left */}
        <Box
          w={"50%"}
          h={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={"/images/about.png"}
            width={460}
            height={410}
            alt="About image"
          />
        </Box>
        {/* Right */}
        <Box w={"50%"} h={"100%"} pt={"3.5rem"}>
          <Box w={"100%"} h={"100%"} color={"#000"}>
            <Text fontWeight={"700"} fontSize={"2.5rem"}>
              LET ME
            </Text>
            <Text fontWeight={"700"} fontSize={"2.5rem"}>
              INTRODUCE MYSELF
            </Text>
            {/* <Text fontWeight={'700'} fontSize={'2.5rem'}>INTRO</Text> */}
          </Box>
          <Box mt={"1.2rem"} w={"75%"} fontFamily={"Roboto"} color={"#777"}>
            <Text lineHeight={"26px"}>
              Hey, I&apos;m Amit Kamat, just breezing through my third year as
              an IT student. Embracing the tech vibes and keeping it laid-back.
            </Text>
            <Text mt={"1.2rem"} lineHeight={"26px"}>
              When I&apos;m not in lecture survival mode, you&apos;ll find me
              getting creative with web and app development – my kind of digital
              playground. Oh, and I&apos;ve got a soft spot for tinkering with
              blockchain too. Always up for learning something new, because, you
              know, the tech world never stands still.
            </Text>
          </Box>
          <Box mt={"2.5rem"} w={"75%"} fontFamily={"Rubik"}>
            <a href="/Resume.pdf" download="Amit_Resume.pdf">
              <Button
                px={"3rem"}
                py={"1.5rem"}
                bgColor={"#5580E9"}
                color={"#f5f5f5"}
                variant={"solid"}
                border={"2px solid #5580E9"}
                boxShadow={"2px 2px 7px #749bfc"}
                transition={"0.2s all"}
                _hover={{
                  border: "2px solid #5580E9",
                  bgColor: "#f5f5f5",
                  color: "#515151",
                  boxShadow: "none",
                }}
              >
                GET CV
              </Button>
            </a>
          </Box>
        </Box>
      </HStack>
      {/* Background Icons */}
      <Box>
        <Box>
          <Text
            color={"#C1F8AB"}
            position={"absolute"}
            top={50}
            right={300}
            fontSize={"1.3rem"}
          >
            <i class="fa-solid fa-folder-open"></i>
          </Text>
        </Box>
        <Box>
          <Text
            color={"violet"}
            position={"absolute"}
            top={150}
            left={600}
            fontSize={"1.3rem"}
            opacity={"0.4"}
          >
            <i class="fa-solid fa-code-branch"></i>
          </Text>
        </Box>
        <Box>
          <Text
            color={"#FFDBB0"}
            position={"absolute"}
            bottom={130}
            right={150}
            fontSize={"1.3rem"}
          >
            <i class="fa-solid fa-circle-nodes"></i>
          </Text>
        </Box>
        <Box>
          <Text
            color={"black"}
            position={"absolute"}
            bottom={5}
            left={450}
            fontSize={"1.4rem"}
            opacity={"0.2"}
          >
            <i class="fa-solid fa-bug"></i>
          </Text>
        </Box>
      </Box>
      {/* Background Icons */}
    </Box>
  );
};

export default About;
