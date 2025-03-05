import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Text,
  Textarea,
  useTab,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Tilt } from "react-tilt";
import {
  BoltIcon,
  BranchIcon,
  BugIcon,
  BulbIcon,
  FolderIcon,
  LaptopIcon,
  NodeIcon,
} from "./utils/randomIcons";

const Contact = ({ lightMode, setLightMode }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 25, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const sendEmail = async () => {
    try {
      setLoading(true);
      if (!name || !mail || !message) {
        toast({
          title: "Please fill all the fields",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        return;
      }

      let data = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: "service_qhc37xl",
          template_id: "template_lqks0l9",
          user_id: "68bfaMEzMqBKD440P",
          template_params: {
            name: name,
            mail: mail,
            message: message,
          },
        }
      );

      console.log(data);
      if (data.status === 200) {
        toast({
          title: "Message sent!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setName("");
        setMail("");
        setMessage("");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      id="contact"
      w={"100vw"}
      h={["85vh", "100vh", "110vh"]}
      bgColor={lightMode ? "#f5f5f5" : "#2c2c2c"}
      pl={["1rem", "3rem", "5rem"]}
      pr={["1rem", "3rem", "5rem"]}
      pt={'3rem'}
      fontFamily={"Rubik"}
      position={"relative"}
    >
      <Tilt options={defaultOptions}>
        <Box
          // bgColor={"rgb(85,128,233)"}
          bgGradient={
            "linear-gradient(90deg, rgba(85,128,233,0.2) 20%, rgba(85,128,233,0.4) 45%, rgba(85,128,233,0.2) 100%);"
          }
          pt={"1rem"}
          pb={"2rem"}
          borderRadius={"1rem"}
          boxShadow={lightMode ? "0 0 4px #dfdfdf" : "0 0 7px #343c51"}
        >
          <Box w={"100%"} display={"flex"} justifyContent={"center"}>
            <Text
              fontSize={"2.5rem"}
              fontWeight={"700"}
              position={"relative"}
              color={lightMode ? "#333" : "#f1f1f1"}
              _before={{
                content: `""`,
                position: "absolute",
                bottom: 0,
                left: 10,
                height: "7%",
                width: "70%",
                bgColor: "#5580E9",
                borderRadius: "1rem",
              }}
            >
              Get In Touch
            </Text>
          </Box>

          {/* Name Email Message Boxes */}
          <Box
            display={"flex"}
            pt={"3rem"}
            flexDir={"column"}
            justifyContent={"center"}
            w={["75%", "90%", "50%"]}
            alignItems={"center"}
            gap={"2rem"}
            margin={"auto"}
          >
            <Box w={"100%"}>
              <Input
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                bgColor={lightMode ? "#EDF1F7" : "#333"}
                _focusVisible={{ borderColor: lightMode ? "#e1e1e1" : "#333" }}
                borderColor={lightMode ? "#f1f1f1" : "#2c2c2c"}
                color={lightMode ? "#333" : "#d1d1d1"}
              />
            </Box>
            <Box w={"100%"}>
              <Input
                value={mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
                placeholder="Your Email"
                bgColor={lightMode ? "#EDF1F7" : "#333"}
                _focusVisible={{ borderColor: lightMode ? "#e1e1e1" : "#333" }}
                borderColor={lightMode ? "#f1f1f1" : "#2c2c2c"}
                color={lightMode ? "#333" : "#d1d1d1"}
              />
            </Box>
            <Box w={"100%"}>
              <Textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                placeholder="Your Message"
                bgColor={lightMode ? "#EDF1F7" : "#333"}
                _focusVisible={{ borderColor: lightMode ? "#e1e1e1" : "#333" }}
                borderColor={lightMode ? "#f1f1f1" : "#2c2c2c"}
                color={lightMode ? "#333" : "#d1d1d1"}
                rows={5}
                resize={"none"}
              />
            </Box>

            <Box>
              <Button
                px={"2.5rem"}
                py={"1.3rem"}
                isLoading={loading}
                bgColor={"rgba(85,128,233, 0.6)"}
                color={"#f5f5f5"}
                variant={"solid"}
                border={"2px solid rgba(85,128,233, 0.2)"}
                boxShadow={"0px 0px 8px rgba(85,128,233, 0.5)"}
                transition={"0.8s all"}
                _hover={{
                  bgColor: "rgba(85,128,233, 0.8)",
                }}
                onClick={sendEmail}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
        <Box display={['none', 'none', 'block']}>
          <BulbIcon bottom={400} left={150} />
          <BranchIcon top={430} left={300} />
          <NodeIcon right={150} bottom={230} />
          <BugIcon bottom={5} left={750} />
          <LaptopIcon top={50} left={750} />
        </Box>
      </Tilt>
    </Box>
  );
};

export default Contact;
