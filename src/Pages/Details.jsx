import React, { useContext } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
  Progress,
  SimpleGrid,
  useDisclosure,
  Input,
  FormLabel,
  FormControl,
  Textarea,
  AvatarGroup,
  Avatar,
} from "@chakra-ui/react";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import TeamCard from "../Components/TeamCard";
import CustomCard from "../Components/CustomCard";
import ImageSlider from "../Components/Slider";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../Routes/UserContext";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import DonatorModal from "../Components/DonatorModal";
import { WalletContext } from "../Utils/WalletContext";
import projects from "../Utils/Dummydata";

export default function Details() {
  const { userType } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const project = location.state ?? projects;
  const { defaultAccount } = useContext(WalletContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const investor = JSON.parse(localStorage.getItem("investor"));
  const navigate = useNavigate();


  const persons = [
    {
      img: "jessica.png",
      name: "Jessica Wong",
      role: "Lead Engineer",
      desc: "Jessica Wong, the lead engineer atRoboWorks, has over 10 years of experience designing and building robotic systems. She holds a bachelor's degree in mechanical engineering from MIT and a master's degree in robotics from Carnegie Mellon University. Before joining RoboWorks, she worked at Boston Dynamics and developed some of the company's most advanced robots, including the Atlas humanoid robot and the Spot quadruped robot.",
    },
    {
      img: "patel.png",
      name: "Micheal Patel",
      role: "Software developer",
      desc: "Michael Patel, the software developer at RoboWorks, is a computer science graduate from Stanford University. He has extensive experience in software development, having previously worked at Google and Amazon. He specializes in developing algorithms and control systems for robotics applications.",
    },
    {
      img: "kim.png",
      name: "Sarah Kim",
      role: "Mechanical Designer",
      desc: "Sarah Kim, the mechanical designer at RoboWorks, has a background in industrial design and mechanical engineering. She holds a bachelor's degree in mechanical engineering from Georgia Tech and a master's degree in industrial design from the Rhode Island School of Design. She previously worked at IDEO and designed products for clients in various industries, including healthcare and consumer electronics.David Lee, the electrical engineer at RoboWorks, has a degree in electrical engineering from the University of California, Berkeley. He has experience in designing and building custom electronics systems for robotics and automation applications. Prior to joining RoboWorks, he worked at Tesla and contributed to the development of the company's electric vehicle powertrain.Together, the team at RoboWorks brings a diverse set of skills and experiences to the table, enabling them to design and build cutting-edge robotics solutions for a wide range of industries.",
    },
    {
      img: "lee.png",
      name: "David Lee",
      role: "Electrical Engineer",
      desc: "David Lee, the electrical engineer at RoboWorks, has a degree in electrical engineering from the University of California, Berkeley. He has experience in designing and building custom electronics systems for robotics and automation applications. Prior to joining RoboWorks, he worked at Tesla and contributed to the development of the company's electric vehicle powertrain.Together, the team at RoboWorks brings a diverse set of skills and experiences to the table, enabling them to design and build cutting-edge robotics solutions for a wide range of industries.",
    },
    {
      img: "emily.png",
      name: "Emily Chen",
      role: "Project Manager",
      desc: "Emily Chen, the project manager at RoboWorks, has a degree in engineering management from the University of California, Berkeley. She has experience managing large-scale engineering projects and brings a strong track record of delivering projects on time and within budget. Before joining RoboWorks, she worked at Boeing and managed several aircraft development projects.",
    },

    {
      img: "rodri.png",
      name: "Juan Rodriguez",
      role: "Control System Engineer",
      desc: "Juan Rodriguez, the control systems engineer at RoboWorks, holds a master's degree in electrical engineering from Stanford University. He has expertise in control systems theory and has previously worked at NASA's Jet Propulsion Laboratory, where he contributed to the development of autonomous control systems for space exploration missions.",
    },
  ];

  return (
    <Box
      h="auto"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      bgGradient="linear(to-r, #011B32 50%, #027DE4)"
      overflow={"hidden"}
      w="auto"
    >
      <NavBar />
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="1"
      />

      <Flex
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={6}
        mt={"10%"}
        zIndex={2}
        px={"120px"}
      >
        <Text fontSize={"36px"} color="white">
          {project?.title}
        </Text>

        {userType === "Investor" ? (
          <Button
            onClick={() => {
              onOpen();
            }}
            bg={
              investor || defaultAccount
                ? "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                : "gray"
            }
            disabled={investor && defaultAccount}
            color={"white"}
            p={"10px 20px"}
          >
            Donate
          </Button>
        ) : (
          <Button
            onClick={() => navigate("/withdraw", { state: project })}
            bg={
              user || defaultAccount
                ? "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                : "gray"
            }
            disabled={user && defaultAccount}
            color={"white"}
            p={"10px 20px"}
          >
            Withdraw
          </Button>
        )}
      </Flex>
      <Box
        position={"relative"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        zIndex={2}
      >
        <Box
          mx={"auto"}
          px={"130px"}
          mt={8}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius="lg"
          zIndex={2}
          w={"100%"}
          minHeight={"400px"}
        >
          <ImageSlider image={project?.icon} />
        </Box>

        <Box
          p={{ base: "10px", md: "30px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          zIndex={2}
        >
          <Tabs variant="unstyled" px={"80px"}>
            <TabList
              mb={5}
              color={"gray"}
              display="flex"
              justifyContent={{ base: "space-between", md: "flex-start" }}
              flexWrap={{ base: "wrap", md: "nowrap" }}
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              fontSize={"28px"}
              flexShrink={0}
              maxWidth="100%"
              overflowX="auto"
              lineHeight={"36px"}
            >
              <Tab
                _selected={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                minWidth="200px"
              >
                Project Overview
              </Tab>
              <Tab
                _selected={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                minWidth="200px"
              >
                Team members
              </Tab>
              <Tab
                _selected={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                minWidth="200px"
              >
                Reward/incentives
              </Tab>
              <Tab
                _selected={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                minWidth="200px"
              >
                Contact information
              </Tab>
              <Tab
                _selected={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                minWidth="200px"
              >
                Community
              </Tab>
              <Tab
                _selected={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                minWidth="200px"
              >
                Update
              </Tab>
              <Tab
                _selected={{
                  color: "#FFFFFF",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Security
              </Tab>
            </TabList>
            <TabPanels color="white">
              <TabPanel>
                <Flex
                  my={12}
                  justify={"space-between"}
                  direction={["column", "row"]}
                >
                  <Box w={{ base: "100%", md: "45%" }}>
                    <Text fontSize={"sm"} lineHeight={8} textAlign={"left"}>
                      {project?.description} is a tech start-up that designs and
                      builds robots for a variety of industries, including
                      manufacturing, construction, and logistics. The company's
                      mission is to help businesses increase efficiency, reduce
                      costs, and improve safety by leveraging robotic
                      technology. RoboWorks offers a range of robotic solutions,
                      from robotic arms and automated machinery to mobile robots
                      and drones. Each solution is tailored to the specific
                      needs of the customer, taking into account factors like
                      production volume, safety requirements, and environmental
                      conditions. RoboWorks is committed to staying at the
                      forefront of robotics technology, continuously researching
                      and developing new solutions to meet the evolving needs of
                      their customers.
                    </Text>
                  </Box>
                  <Box
                    w={{ base: "100%", md: "50%" }}
                    borderWidth="0.1px"
                    borderRadius="lg"
                    borderColor={"#F8F8FA"}
                    p={"33px"}
                  >
                    <Box>
                      <Progress
                        mb={"10px"}
                        mt={"10px"}
                        value={project.progressPercentage}
                        size="lg"
                        borderRadius="11px"
                        bg={"#ADCBD1"}
                        color="var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                      />
                      <Text>
                        {project.progressPercentage}% fundraising goal met
                      </Text>
                    </Box>
                    <Flex justify={"space-between"} mt={"25px"}>
                      <Box>
                        <Text color={"#ADCBD1"} fontSize={"sm"}>
                          Fundraising goal
                        </Text>
                        <Heading mt={"5px"} fontSize={"26px"}>
                          ${project.fundraisingGoal?.toLocaleString()}
                        </Heading>
                      </Box>
                      <Box borderLeft={"1px solid white"} />
                      <Box>
                        <Text color={"#ADCBD1"} fontSize={"sm"}>
                          Total raised
                        </Text>
                        <Heading mt={"5px"} fontSize={"26px"}>
                          ${project.totalRaised?.toLocaleString()}
                        </Heading>
                      </Box>
                    </Flex>

                    <Box borderBottom={"1px solid white"} mt={12} />

                    <Flex justify={"space-between"} mt={10}>
                      <Text color={"#00D1FC"} fontSize={"sm"}>
                        Starting date
                      </Text>
                      <Text> Aug 19, 2024</Text>
                    </Flex>
                    <Flex justify={"space-between"} mt={2}>
                      <Text color={"#00D1FC"} fontSize={"sm"}>
                        Completion date
                      </Text>
                      <Text> Dec 9, 2024</Text>
                    </Flex>
                    <Flex justify={"space-between"} mt={2}>
                      <Text color={"#00D1FC"} fontSize={"sm"}>
                        Numbers of backers
                      </Text>
                      <Text>11,372</Text>
                    </Flex>
                  </Box>
                </Flex>
              </TabPanel>

              <TabPanel>
                <SimpleGrid
                  columns={[1, 2]}
                  direction={["column", "row"]}
                  spacing={{ base: 0, md: 12 }}
                >
                  {persons.map((item, key) => (
                    <TeamCard key={key} {...item} />
                  ))}
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <CustomCard
                  img="token.svg"
                  title={
                    "As a tech start-up, RoboWorks can offer various rewards and incentives to its investors. Here are a few options:"
                  }
                  list1={
                    "Equity: One of the most common incentives for investors is equity in the company. By offering equity, investors become part owners of the company and can share in its success through dividends and capital gains."
                  }
                  list2={
                    "Early Access to Products: Investors can be given early access to RoboWorks products before they are available to the general public. This can be a valuable incentive, especially for investors who are interested in using the products themselves or have connections in industries where the products could be useful."
                  }
                  list3={
                    "Discounts on Products or Services: Investors can be given discounts on RoboWorks products or services as a way of showing appreciation for their support. This can also help incentivize them to continue investing in the company."
                  }
                  list4={
                    "Exclusive Events or Access: Investors can be given exclusive access to events or opportunities related to RoboWorks. This could include things like VIP tours of the company facilities or invitations to exclusive industry events where they can network and learn more about the latest trends and developments."
                  }
                  list5={
                    "Recognition and Branding: Investors can be recognized and given branding opportunities to show their support for RoboWorks. This could include things like having their names listed on the company website or being featured in marketing materials.Ultimately, the rewards and incentives offered to investors will depend on the goals and needs of the company, as well as the interests and priorities of the investors themselves. Its important to find a balance that is mutually beneficial and helps build a strong relationship between the company and its investors."
                  }
                />
              </TabPanel>

              <TabPanel>
                <SimpleGrid
                  columns={[1, 2]}
                  direction={["column", "row"]}
                  spacing={{ base: 0, md: 24 }}
                  my={12}
                  justifyContent={"space-between"}
                >
                  <Box>
                    <Text fontSize={"26px"} lineHeight={"48px"}>
                      Contact Information
                    </Text>
                    <Text color={"rgba(255, 255, 255, 0.50)"} fontSize={"20px"}>
                      Fill up this form and our team will get back to you within
                      24 hours.
                    </Text>

                    <Flex alignItems={"center"} mt={5} gap={4}>
                      <MdOutlineLocalPhone color="#00D1FC" />
                      <Text color={"white"} fontSize={"18px"}>
                        +2348101321796
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} mt={5} gap={4}>
                      <MdOutlineEmail color="#00D1FC" />
                      <Text color={"white"} fontSize={"18px"}>
                        {project?.title}@gmail.com
                      </Text>
                    </Flex>
                    <Flex alignItems={"center"} mt={5} gap={4}>
                      <IoLocationOutline color="#00D1FC" />
                      <Text color={"white"} fontSize={"18px"}>
                        67 Street Chi Avenue, united states
                      </Text>
                    </Flex>
                  </Box>

                  <Box
                    borderWidth="0.1px"
                    borderRadius="12px"
                    borderColor={"#F8F8FA"}
                    p={10}
                    bg={"#01191E"}
                    width="100%"
                    height="45vh"
                    flex-shrink="0"
                  >
                    <FormControl>
                      <FormLabel mb={2}>Email address</FormLabel>
                      <Input
                        color="black"
                        bg="#CFDDE9"
                        type="email"
                        _placeholder={"black"}
                      />
                      <FormLabel mb={2}>Phone number</FormLabel>
                      <Input
                        color="black"
                        bg="#CFDDE9"
                        type="email"
                        _placeholder={"black"}
                      />
                      <FormLabel mb={2}>Messgae</FormLabel>
                      <Textarea
                        color="black"
                        bg="#CFDDE9"
                        type="email"
                        _placeholder={"black"}
                      />
                      <Button
                        p={4}
                        bg={
                          "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                        }
                        color={"white"}
                        // onClick={addData}
                        type="submit"
                        width="full"
                        mt={4}
                        mb={24}
                      >
                        Send message
                      </Button>
                    </FormControl>
                  </Box>
                </SimpleGrid>
              </TabPanel>

              <TabPanel>
                <Flex
                  direction={["column", "row"]}
                  spacing={{ base: 0, md: "15%" }}
                  my={12}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Box px={4}>
                    <Text
                      fontSize={"28px"}
                      lineHeight={"36px"}
                      fontWeight={"bold"}
                    >
                      Community
                    </Text>
                    <Box mt={6} mb={4}>
                      <Text
                        fontSize={"24px"}
                        lineHeight={"32px"}
                        fontWeight={"bold"}
                      >
                        Robotics Enthusiasts
                      </Text>
                      <Text
                        fontSize={"18px"}
                        lineHeight={"24px"}
                        mt={4}
                        fontWeight={400}
                        color={"rgba(255, 255, 255, 0.80)"}
                        w={"70%"}
                      >
                        For a community of people who are interested in robotics
                        and automation. These community provide a space for
                        people to share their knowledge, ideas, and projects
                        related to robotics.
                      </Text>
                    </Box>

                    <Box mt={6} mb={4}>
                      <Text
                        fontSize={"24px"}
                        lineHeight={"32px"}
                        fontWeight={"bold"}
                      >
                        Hackerspaces
                      </Text>
                      <Text
                        fontSize={"18px"}
                        lineHeight={"24px"}
                        mt={4}
                        fontWeight={400}
                        color={"rgba(255, 255, 255, 0.80)"}
                        w={"70%"}
                      >
                        A built communities around hackerspaces, which are
                        community-operated workspaces where people with common
                        interests,often in computers, technology, science, or
                        digital or electronic art can meet, socialize and
                        collaborate.
                      </Text>
                    </Box>

                    <Box mt={6} mb={4}>
                      <Text
                        fontSize={"24px"}
                        lineHeight={"32px"}
                        fontWeight={"bold"}
                      >
                        Meetups
                      </Text>
                      <Text
                        fontSize={"18px"}
                        lineHeight={"24px"}
                        mt={4}
                        fontWeight={400}
                        color={"rgba(255, 255, 255, 0.80)"}
                        w={"70%"}
                      >
                        communities around meetups, where people who are
                        interested in robotics and automation can come together
                        and discuss their interests. These meetups provide an
                        opportunity for people to network and collaborate on
                        projects.
                      </Text>
                    </Box>
                  </Box>

                  <Box w={"40%"}>
                    <Text
                      fontSize={"28px"}
                      lineHeight={"36px"}
                      fontWeight={"bold"}
                    >
                      Category
                    </Text>
                    <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
                      <Text
                        fontSize={"18px"}
                        lineHeight={"24px"}
                        fontWeight={400}
                        color={"rgba(255, 255, 255, 0.80)"}
                        mt={12}
                      >
                        Enthusiasts
                      </Text>
                      <Text
                        fontSize={"18px"}
                        lineHeight={"24px"}
                        my={12}
                        fontWeight={400}
                        color={"rgba(255, 255, 255, 0.80)"}
                      >
                        Education
                      </Text>
                      <Text
                        fontSize={"18px"}
                        lineHeight={"24px"}
                        fontWeight={400}
                        color={"rgba(255, 255, 255, 0.80)"}
                      >
                        Meetup
                      </Text>
                    </Box>
                  </Box>

                  <Box w={"20%"}>
                    <Text
                      fontSize={"28px"}
                      lineHeight={"36px"}
                      fontWeight={"bold"}
                    >
                      users
                    </Text>
                    <Box display={"flex"} flexDirection={"column"} gap={"80px"}>
                      <Box mt={12}>
                        <AvatarGroup size="md" max={2}>
                          <Avatar
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Avatar
                            name="Segun Adebayo"
                            src="https://bit.ly/sage-adebayo"
                          />
                          <Avatar
                            name="Kent Dodds"
                            src="https://bit.ly/kent-c-dodds"
                          />
                          <Avatar
                            name="Prosper Otemuyiwa"
                            src="https://bit.ly/prosper-baba"
                          />
                          <Avatar
                            name="Christian Nwamba"
                            src="https://bit.ly/code-beast"
                          />
                        </AvatarGroup>
                      </Box>

                      <Box>
                        <AvatarGroup size="md" max={2}>
                          <Avatar
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Avatar
                            name="Segun Adebayo"
                            src="https://bit.ly/sage-adebayo"
                          />
                          <Avatar
                            name="Kent Dodds"
                            src="https://bit.ly/kent-c-dodds"
                          />
                          <Avatar
                            name="Prosper Otemuyiwa"
                            src="https://bit.ly/prosper-baba"
                          />
                          <Avatar
                            name="Christian Nwamba"
                            src="https://bit.ly/code-beast"
                          />
                        </AvatarGroup>
                      </Box>
                      <Box mt={12}>
                        <AvatarGroup size="md" max={2}>
                          <Avatar
                            name="Ryan Florence"
                            src="https://bit.ly/ryan-florence"
                          />
                          <Avatar
                            name="Segun Adebayo"
                            src="https://bit.ly/sage-adebayo"
                          />
                          <Avatar
                            name="Kent Dodds"
                            src="https://bit.ly/kent-c-dodds"
                          />
                          <Avatar
                            name="Prosper Otemuyiwa"
                            src="https://bit.ly/prosper-baba"
                          />
                          <Avatar
                            name="Christian Nwamba"
                            src="https://bit.ly/code-beast"
                          />
                        </AvatarGroup>
                      </Box>
                    </Box>
                  </Box>
                </Flex>
              </TabPanel>

              <TabPanel>
                <CustomCard
                  img="update.png"
                  title={
                    "The following are the updates investors should take note of:"
                  }
                  list1={
                    "Product Development: RoboWorks provide regular updates on the development of its robotic products, including any new features or capabilities that have been added."
                  }
                  list2={
                    "Sales and Revenue: RoboWorks provide updates on its sales and revenue growth, including any major customer wins or partnerships that have been secured. This can help investors understand the company's financial performance and growth potential."
                  }
                  list3={
                    "Partnerships and Collaborations: RoboWorks provide updates on any partnerships or collaborations it has established with other companies or organizations. This will help investors understand the company's strategic positioning and potential for future growth."
                  }
                  list4={
                    "Key Hires and Talent Acquisition: RoboWorks provide updates on any new key hires or talent acquisitions, including executives, engineers, or other key staff members. This will help investors understand the company's leadership and technical capabilities"
                  }
                  list5={
                    "Regulatory and Legal Developments: RoboWorks provide updates on any regulatory or legal developments that may impact the company's operations or growth potential. This will help investors understand the risks associated with investing in the company and how the company is managing these risks."
                  }
                />
              </TabPanel>

              <TabPanel>
                <CustomCard
                  img="secure.svg"
                  title={
                    "The following are the security measures put in place by Roboworks"
                  }
                  list1={
                    "Secure Data Storage: RoboWorks should ensure that sensitive investor information such as personal details, investment amounts, and transaction records are securely stored using encryption and access controls. This will help prevent data breaches and unauthorized access."
                  }
                  list2={
                    "Two-Factor Authentication: RoboWorks can require two-factor authentication for all investor accounts to ensure that only authorized users can access their accounts. This can involve a combination of passwords, security questions, and verification codes sent to mobile devices."
                  }
                  list3={
                    "Regular Security Audits: RoboWorks can conduct regular security audits to identify and address potential vulnerabilities in their systems and processes. This will help ensure that the company is staying up to date with the latest security threats and taking appropriate measures to protect investor data. "
                  }
                  list4={
                    "Transparency: RoboWorks can be transparent with investors about the security measures they have in place, how they handle sensitive information, and what steps they are taking to address any security concerns.."
                  }
                  list5={
                    "Insurance: RoboWorks can obtain insurance to protect against losses due to cyber attacks or other security breaches. This can provide an added layer of protection for investors and help demonstrate the company's commitment to security."
                  }
                />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Footer />
      </Box>
      {isOpen && (
        <DonatorModal project={project} isOpen={isOpen} onClose={onClose} />
      )}
    </Box>
  );
}
