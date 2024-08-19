import React, { useContext, useEffect, useState } from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import Header from "../Components/Header";
import FundedCard from "../Components/FundedCard";
import Projects from "../Components/Projects";
import projects from "../Utils/Dummydata";
import { useNavigate } from "react-router-dom";
import WhyUs from "../Components/WhyUs";
import { UserContext } from "../Routes/UserContext";
import { WalletContext } from "../Utils/WalletContext";

export default function Home() {
  const [data] = useState(projects);
  const navigate = useNavigate();
  const { userType } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const { contract } = useContext(WalletContext);

  const [projectsData, setProjectsData] = useState([
    {
      id: 1,
      title: "Robinhood",
      value: "003",
      icon: "robin.svg",
      description:
        "Offers commission-free trading for stocks, cryptocurrencies, and ETFs. Robinhood aims to provide easy access to financial markets",
      progressPercentage: 65, 
      fundraisingGoal: '',
      totalRaised: '',
      startDate: "August 19",
    },
    {
      id: 2,
      title: "CryptoHub",
      value: "003",
      icon: "cytohub.svg",
      description:
        "CryptoHub offers secure storage solutions, real-time market data, and user-friendly tools to help navigate the cryptocurrency ecosystem.",
      progressPercentage: 55,
      fundraisingGoal: '',
      totalRaised: '',
      startDate: "Sep 9",
    },
    {
      id: 4,
      title: "GitLab",
      value: "003",
      icon: "git.svg",
      description:
        "Provides an integrated DevOps platform that facilitates software development and collaboration.",
      progressPercentage: 60,
      fundraisingGoal: '',
      totalRaised: '',
      startDate: "Oct 11",
    },
  ]);

  useEffect(() => {
    if (contract) {
      const fetchCampaignData = async () => {
        const updatedProjects = await Promise.all(
          projectsData.map(async (project) => {
            try {
              const campaign = await contract.getCampaign(project.id);
              return {
                ...project,
                fundraisingGoal: campaign[1], 
                totalRaised: campaign[5], 
              };
            } catch (error) {
              console.error('Error getting campaign info:', error);
              return project; 
            }
          })
        );
        setProjectsData(updatedProjects);
      };

      fetchCampaignData();
    }
  }, [contract, projectsData]);


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
                {projectsData.map((project, index) => (
                  <FundedCard
                    key={index}
                    title={project.title}
                    value={project.value}
                    icon={project.icon}
                    description={project.description}
                    ongoing
                    funds={project.funds}
                    progressPercentage={project.progressPercentage}
                    fundraisingGoal={project.fundraisingGoal}
                    totalRaised={project.totalRaised}
                    startDate={project.startDate}
                    flexBasis={{ base: "100%", md: "30%" }}
                    onClick={() =>!user && !userType === 'startup' ? null : navigate('/details', { state: project })}
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
                  description:"Designs and deploys autonomous delivery vehicles specifically for local goods transportation. ",
                  fundraisingGoal: '1,204,512',
                  totalRaised:'1287'
                },
                {
                  icon: "path.svg",
                  title: "UIPath",
                  value: "003",
                  description:"UiPath provides a comprehensive platform that enables organizations to design, deploy, and manage software",
                  fundraisingGoal: '1,231,004',
                  totalRaised:'2232'
                },
                {
                  icon: "space.svg",
                  title: "SpaceX",
                  value: "003",
                  description:"Aims to revolutionize space travel with innovations in space exploration and rocket technology.",
                  fundraisingGoal: '1,204,512',
                  totalRaised:'232'
                },
              ].map((project, index) => (
                <FundedCard
                  key={index}
                  icon={project.icon}
                  title={project.title}
                  value={project.value}
                  fundraisingGoal={project.fundraisingGoal}
                  totalRaised={project.totalRaised}
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
