import {
  Text,
  Box,
  Heading,
  Flex,
  Button,
  Image,
  Circle,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Routes/UserContext";

export default function Header() {
  const navigate = useNavigate();
  const { userType } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("users"));


  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      pt={"10%"}
      gap={"10px"}
      h={"120vh"}
      bgGradient="linear(to-r, #011B32 50%, #027DE4)"
    >
   <Box
    position="absolute"
    top="0"
    left="0"
    w="100%"
    h="100%"
    bg="rgba(0, 0, 0, 0.5)" 
    zIndex="1"
  />
      <Heading mb={4} fontSize={"48px"} color="white" zIndex={2}>
        Fuel Your Startup Journey
      </Heading>
      <Text fontSize={"18px"} color="white" textAlign={"center"} w={"34%"}  zIndex={2}>
        Connect with investors to launch your tech startup. Deliver compelling
        pitches, highlight your potential, and step into the spotlight. Launch
        Project Explore more
      </Text>
      <Flex gap={5} display={["none", "flex"]} mt={8}  zIndex={2}>
        <Button
          bg="linear-gradient(120.81deg, #027DE4 50.32%, #00D1FC 99.84%)"
          borderRadius="8px"
          width="184px"
          color={"white"}
          onClick={() => userType === "startup" || user?.[0]?.userType? navigate("/CreateProject") : null}>
          Launch project
        </Button>
        <Button background="transparent" variant="outline" color={"white"}>
          Explore more
        </Button>
      </Flex>

      <Circle
       zIndex={2}
        mt={"68px"}
        bgGradient="linear(to-r, #1AD6FF 100%, #496BE4 60%, #1F3CA3 100%)"
        size={"280px"}
        position="relative"
        overflow="hidden">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.5)"
          zIndex={1}
        />
        <Image src="/hero.svg" alt="hero" objectFit={"cover"} zIndex={2} />
      </Circle>

      {/* <Box
      width="100%" 
      height="68vh"
      backgroundImage="url('/wave.svg')"
      backgroundSize= "cover" 
      backgroundRepeat="no-repeat"
      backgroundPosition='initial'
      flexShrink={0}
      backgroundBlendMode="plus-lighter" 
      // backgroundSize="100% 233.135%" 
      /> */}
    </Box>
  );
}
