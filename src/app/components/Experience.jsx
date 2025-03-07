import { Box, Text } from '@chakra-ui/react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import React from 'react'
import { experiences } from './miscellaneous/experience';
import ExperienceCard from './ExperienceCard';
import 'react-vertical-timeline-component/style.min.css';

const Experience = ({lightMode}) => {
  return (
     <Box
        id="experience"
        w={{base: "100vw", md: "100vw", lg: "100vw"}}
        minH={"110vh"}
        bgColor={lightMode ? "#f5f5f5": "#2c2c2c"}
        pl={["1.5rem", "3rem", "5rem"]}
        pr={["1.5rem", "3rem", "5rem"]}
        pt={"4rem"}
        fontFamily={"Rubik"}
        position={"relative"}
        >
        <Box display={'flex'} flexDir={'column'} gap={'5rem'}>
            <Box
                w={"100%"}
                display={"flex"}
                justifyContent={"left"}
                flexDir={'column'}
                position={"relative"}
                _before={{
                    content: `""`,
                    position: "absolute",
                    bottom: 0,
                    left: [-4, -7, -10],
                    height: "7%",
                    width: "35%",
                    bgColor: "#5580E9",
                    borderRadius: "1rem",
                }}
                gap={'3rem'}
            >
                <Text fontSize={"2.5rem"} fontWeight={"700"} color={lightMode ? "#000": "#f1f1f1"} id='workExperience'>
                    WORK EXPERIENCE
                </Text>
            </Box>
                <Box className='timelineBox'>
                    <VerticalTimeline animate={true} lineColor={'#5580e9'}>
                        {experiences.map((experience, index) => (
                            <ExperienceCard key={index} experience={experience} lightMode={lightMode}/>
                        ))}
                    </VerticalTimeline>
                </Box>
            </Box>
        </Box>
  )
}

export default Experience