import { Box, Flex, Heading, HStack, Text, Image, Center } from "@chakra-ui/react";
import React from "react";

const WhyUs = () => {
  return (
 <Center w="100%" h="80vh"zIndex={2}>
 <Flex 
     my={12} 
     gap={"54px"} 
    justifyContent={'space-between'}
     alignItems="center" 
     flexDirection={["column", "row"]} 
     w="100%" 
     maxW="1400px"
 >
<Box>
  <Heading
    color="white"
    fontWeight="bold"
    fontSize="40px"
    lineHeight={"52px"}>
    Why CryptoVC?
  </Heading>
  <Box w={["100%", "70%"]}  mt={2}>
    <Text
      fontSize={"20px"}
      fontWeight={400}
      lineHeight={"28px"}
      color={"#E6DDF8"}
      alignSelf={'stretch'}
    >
     We Empower Startups with Decentralized Crowdfunding on the Celo Blockchain.We make your tech startup dreams become a reality. Take action now to shape the future and make it a reality.
    </Text>
  </Box>
</Box>

<HStack display={"flex"} flexDirection={"column"}>
  <Box>
    <Image src="/person.svg" alt="hero" objectFit={"cover"} />
    <Heading
      fontSize={"18px"}
      fontWeight={"bold"}
      lineHeight={"26px"}
      color={"white"}>
      Premium Security for you
    </Heading>
    <Text
      fontSize={"16px"}
      lineHeight={"22px"}
      fontWeight={"400"}
      color={"white"}
      w={["100%", "355px"]}>
      We host data on distributed network,and without the need for
      traditional financial intermediaries.’
    </Text>
  </Box>

  <HStack display={"flex"} flexDirection={"column"} mt={12}>
    <Box>
      <Image src="/person.svg" alt="hero" objectFit={"cover"} />
      <Heading
        fontSize={"18px"}
        fontWeight={"bold"}
        lineHeight={"26px"}
        color={"white"}>
      Fund and launch your start-up
      </Heading>
      <Text
        fontSize={"16px"}
        lineHeight={"22px"}
        fontWeight={"400"}
        color={"white"}
        w={["100%", "355px"]}>
       We help tech startups to get funds that enable them to launch projects
      </Text>
    </Box>
  </HStack>
</HStack>

<Box>

<HStack display={"flex"} flexDirection={"column"}>
  <Box>
    <Image src="/person.svg" alt="hero" objectFit={"cover"} />
    <Heading
      fontSize={"18px"}
      fontWeight={"bold"}
      lineHeight={"26px"}
      color={"white"}>
      Fund cutting-end
    </Heading>
    <Text
      fontSize={"16px"}
      lineHeight={"22px"}
      fontWeight={"400"}
      color={"white"}
      w={["100%", "355px"]}>
     We give you the chance to showcase your tech startup projects publicly to enable you 
     meet your goals.
    </Text>
  </Box>

  <HStack display={"flex"} flexDirection={"column"} mt={12}>
    <Box>
      <Image src="/person.svg" alt="hero" objectFit={"cover"} />
      <Heading
        fontSize={"18px"}
        fontWeight={"bold"}
        lineHeight={"26px"}
        color={"white"}>
       Levarages Blockchain
      </Heading>
      <Text
        fontSize={"16px"}
        lineHeight={"22px"}
        fontWeight={"400"}
        color={"white"}
        w={["100%", "355px"]}>
       We use blockchain technology to offer secure transactions and a reliable environment for managing funds and investor relationship
      </Text>
    </Box>
  </HStack>
</HStack>
</Box>
</Flex>
 </Center>
  );
};

export default WhyUs;
