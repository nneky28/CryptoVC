import React, { useState } from "react";
import { Box, Center, Text, Heading, Flex } from "@chakra-ui/react";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import Header from "../Components/Header";
import FundedCard from "../Components/FundedCard";
import Projects from "../Components/Projects";
import projects from "../Utils/Dummydata";
import { Link, useNavigate } from "react-router-dom";
import WhyUs from "../Components/WhyUs";

export default function Home() {
  const [data] = useState(projects);
  const navigate = useNavigate();

  
  return (
    <Box
      w="100%"
      h="auto"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      overflowX={"hidden"}
      zIndex={2}
      position={"relative"}
    >
      <NavBar home />
      <Box bg={"#011B32"}>
        <Header />
        <Box px={"140px"} zIndex={2} position={"relative"}>
          <WhyUs />

          <Box mt={10} color="white" id="ongoing">
            <Flex alignItems={"center"} justifyContent={"space-between"} my={8}>
              <Box>
                <Heading
                  fontSize={"40px"}
                  lineHeight={"52px"}
                  fontWeight={"bold"}
                  color={"#F8F8FA"}
                >
                  Ongoing Projects
                </Heading>
                <Text
                  fontSize={"20px"}
                  lineHeight={"28px"}
                  fontWeight={"400"}
                  color={"#F8F8FA"}
                >
                  List of ongoing projects to invest in
                </Text>
              </Box>

              <Text
                fontSize={"20px"}
                lineHeight={"28px"}
                fontWeight={"400"}
                color={"#5387FF"}
              >
                View More
              </Text>
            </Flex>

        
              <Flex
                gap="5"
                flexWrap="wrap"
                justifyContent="center"
                direction={["column", "row"]}
                marginTop={3}
                w={"100%"}
              >
                {[
                  {
                    title: "Robinhood",
                    value: "003",
                    icon: "robin.svg",
                    description:
                      "Offers commission-free trading for stocks, cryptocurrencies, and ETFs. Robinhood aims to provide easy access to financial markets",
                  },
                  {
                    title: "CryptoHub",
                    value: "003",
                    icon: "cytohub.svg",
                    description:
                      "CryptoHub offers secure storage solutions, real-time market data, and user-friendly tools to help navigate the cryptocurrency ecosystem.",
                  },
                  {
                    title: "GitLab",
                    value: "003",
                    icon: "git.svg",
                    description:
                      "Provides an integrated DevOps platform that facilitates software development and collaboration.",
                  },
                ].map((project, index) => (
                  <FundedCard
                    key={index}
                    title={project.title}
                    value={project.value}
                    icon={project.icon}
                    description={project.description}
                    ongoing
                    flexBasis={{ base: "100%", md: "30%" }}
                    onClick={() => navigate('/details', { state: project })}
                  />
                ))}
              </Flex>
   
          </Box>

          <Box mt={32} color="white">
            <Flex alignItems={"center"} justifyContent={"space-between"} my={8}>
              <Box>
                <Heading
                  fontSize={"40px"}
                  lineHeight={"52px"}
                  fontWeight={"bold"}
                  color={"#F8F8FA"}
                >
                  Funded Projects
                </Heading>
                <Text
                  fontSize={"20px"}
                  lineHeight={"28px"}
                  fontWeight={"400"}
                  color={"#F8F8FA"}
                >
                  Successful projects that have been funded through the platform
                </Text>
              </Box>

              <Text
                fontSize={"20px"}
                lineHeight={"28px"}
                fontWeight={"400"}
                color={"#5387FF"}
              >
                View More
              </Text>
            </Flex>

            <Flex
              gap="20px"
              justifyContent="center"
              direction={["column", "row"]}
              flexWrap="wrap"
              marginTop={2}
              padding={{ base: "20px", md: "0px" }}
            >
              {[
                {
                  icon: "nuro.svg",
                  title: "Nuro",
                  value: "003",
                  description:
                    "Designs and deploys autonomous delivery vehicles specifically for local goods transportation. ",
                },
                {
                  icon: "path.svg",
                  title: "UIPath",
                  value: "003",
                  description:
                    "UiPath provides a comprehensive platform that enables organizations to design, deploy, and manage software",
                },
                {
                  icon: "space.svg",
                  title: "SpaceX",
                  value: "003",
                  description:
                    "Aims to revolutionize space travel with innovations in space exploration and rocket technology.",
                },
              ].map((project, index) => (
                <FundedCard
                  key={index}
                  icon={project.icon}
                  title={project.title}
                  value={project.value}
                  description={project.description}
                  flexBasis={{ base: "100%", md: "30%" }}
                />
              ))}
            </Flex>
          </Box>

          <Box mt={32} id="discover">
            <Heading
              fontSize={"40px"}
              lineHeight={"56px"}
              color={"#F8F8FA"}
              textAlign={"center"}
              fontWeight={"bold"}
            >
              Projects, Restrictions and Caveat
            </Heading>
            <Text
              fontWeight={"400"}
              textAlign="center"
              fontSize={"20px"}
              lineHeight={"28px"}
              color={"#F8F8FA"}
            >
              Find more information about projects, restrictions and caveat
            </Text>

            <Box
              bg={"#01203D"}
              my={24}
              borderRadius={"12px"}
              p={22}
              color={"white"}
              h={"120vh"}
            >
              <Projects />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
