import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Center, Text, Image, Flex } from "@chakra-ui/react";


export default function FundedCard({
  title,
  description,
  icon,
  funds,
  ongoing,
  link = false,
  onClick,
}) {
 
  return (
    <Box
      w={["100%", "32%"]}
      bgColor={"#011B32"}
      borderWidth="1px"
      borderRadius="12px"
      overflow="hidden"
      borderColor={"#F8F8FA"}
      onClick={onClick}
    >
      <Center>
        <Center color={"white"}>
          <Image src={`${icon}`} objectFit={"contain"} />
        </Center>
      </Center>
      <Box p="13px">
        <Text fontSize="lg" pt={"8px"}>
          {title}
        </Text>
        {ongoing &&
          <Box
            as="button"
            height="24px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="1px"
            px="8px"
            borderRadius="50px"
            fontSize="14px"
            fontWeight="semibold"
            bg="#f5f6f7"
            borderColor="#ccd0d5"
            color="#4b4f56"
            _hover={{ bg: "#ebedf0" }}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            mb={2}
            // onClick={() => {
            //   link ? history(link) : onClick();
            // }}
            >
            ongoing
          </Box>
        }
        <Text fontSize="xs" pt={"3px"} color={"#F8F8FA"} paddingTop={3}>
          {description}
        </Text>
       <Box display={'flex'} alignSelf={'center'} justifyContent={'center'} border={'1px solid #F8F8FA'} my={6}/>
        <Flex gap="3" direction={["row", "row"]} justify={'space-between'}>
          <Text color="#00D1FC" fontSize={16}>
            Total raised
          </Text>
          <Text fontSize={16}>$1,231,004</Text>
        </Flex>

        <Flex gap="3" direction={["row", "row"]} paddingTop={3} justify={'space-between'}>
          <Text color="#00D1FC" fontSize={16}>
            {funds ? "Participants" : "Fundraising goal"}
          </Text>
          <Text fontSize={16}>$12,491,432</Text>
        </Flex>
        {ongoing && (
          <Flex direction={["row", "row"]} paddingTop={3} justify={'space-between'}>
            <Text color="#00D1FC" fontSize={16}>
              Starting Date
            </Text>
            <Text fontSize={16}>Sep 9</Text>
          </Flex>
        )}
      </Box>
      {funds && (
        <Box background={"#160736"} p={2}>
          <Text textAlign={"center"} fontSize={16}>
            Token Sales
          </Text>
        </Box>
      )}
    </Box>
  );
}
