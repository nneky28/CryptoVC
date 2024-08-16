import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  HStack,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  Modal,
  ModalOverlay,
  Center,
  Heading,
  ModalBody,
  Select,
  ModalContent,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { UserContext } from "../Routes/UserContext";
import { WalletContext } from "../Utils/WalletContext";

export default function NavBar({ home }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [signInMode, setSignInMode] = useState(false);
  const { defaultAccount, connectWalletHandler } = useContext(WalletContext);
  const { userType, updateUserType, isAuthenticated, logout } = useContext(UserContext);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };



  const handleOptionChange = (e) => {
    if (signInMode) {
      return updateUserType("startUp");
    } else {
      updateUserType("Investor");
    }
  };

  return (
    <Box
      w="100%"
      p={10}
      display={"flex"}
      flexDirection="row"
      justifyContent={{
        base: "center",
        sm: "center",
        md: "space-between",
        lg: "space-between",
      }}
      px={[0, "120px"]}
      // mx={8}
      position="fixed"
      top="0"
      zIndex="10"
      overflow={"hidden"}
      bg={"#002241"}
      boxShadow={"0px 5px 15px 2px rgba(0, 0, 0, 0.14)"}
      id="nav-bar"
    >
      <Flex
        padding={"1px"}
        gap={4}
        alignItems={"center"}
        display={["none", "flex"]}
        justifyContent={"space-between"}
        w={"100%"}
      >
        <Link to="/">
          <HStack>
            <Image src="/logo.svg" alt="logo" />
          </HStack>
        </Link>

        {home && (
          <Box color={"white"} gap={12} display={"flex"}>
            <ScrollLink to="discover" smooth={true} duration={500}>
            </ScrollLink>
            <ScrollLink to="ongoing" smooth={true} duration={500}>
              <Text p={2} fontSize="15px" as="button" onClick={scrollToTop}>
                Explore
              </Text>
            </ScrollLink>

            {!isAuthenticated ? (
              <>
                <Text
                  as="button"
                  onClick={() => {
                    setSignInMode(false);
                    onModalOpen();
                  }}
                  p={2}
                  fontSize="15px"
                >
                  Sign Up
                </Text>
                <Text
                  as="button"
                  p={2}
                  fontSize="15px"
                  onClick={() => {
                    setSignInMode(true);
                    onModalOpen();
                  }}
                >
                  Sign In
                </Text>
              </>
            ) : (
              <Text 
              as="button"
              p={2}
              fontSize="15px"
              color={'red'}
              onClick={logout}>
                Logout
              </Text>
            )}
          </Box>
        )}

        <Button colorScheme="blue" onClick={connectWalletHandler}>
          {defaultAccount
            ? `Connected: ${defaultAccount.slice(
                0,
                6
              )}...${defaultAccount.slice(-4)}`
            : "Connect Wallet"}
        </Button>
        <Drawer isOpen={isOpen} placement="right" onClose={onClose} home>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody mt={8}>
              <Link to="/about">
                {" "}
                <Text p={2} fontSize="15px">
                  Expore
                </Text>
              </Link>
              <Text
                as="button"
                onClick={() => {
                  setSignInMode(false);
                  onModalOpen();
                }}
                p={2}
                fontSize="15px"
              >
                Sign Up
              </Text>
              <br />{" "}
              <Text
                as="button"
                onClick={() => {
                  setSignInMode(true);
                  onModalOpen();
                }}
                p={2}
                fontSize="15px"
              >
                Sign In
              </Text>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <>
          <Modal isOpen={isModalOpen} onClose={onModalClose} isCentered>
            <ModalOverlay />
            <ModalContent
              bg="#01203D"
              borderRight={"12px"}
              border={"1px solid white"}
            >
              <ModalBody p={"50px"}>
                <Center>
                  <Heading
                    fontSize="26px"
                    textAlign={"center"}
                    lineHeight={"36px"}
                    color="white"
                    fontFamily={"Titillium Web"}
                  >
                    How would you like to {signInMode ? "sign in" : "sign up"}
                  </Heading>
                </Center>

                <Box my={6}>
                  <Select
                    placeholder={`${
                      signInMode ? "Sign In" : "Sign Up"
                    } as an investor or a start techup`}
                    borderColor="white"
                    color="white"
                    onChange={handleOptionChange}
                  >
                    <option value="StartUp">StartUp</option>
                    <option value="Investor">Investor</option>
                  </Select>
                </Box>

                <Center>
                  <Flex gap={3} flexDirection="column" width="100%">
                    {signInMode ? (
                      <Link to="/SignIn">
                        <Button
                          color="#ffff"
                          width="100%"
                          borderRadius={"8px"}
                          bg={
                            "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                          }
                        >
                          Continue
                        </Button>
                      </Link>
                    ) : userType === "startup" ? (
                      <Link to="/SignUp">
                        <Button
                          color="#ffff"
                          width="100%"
                          borderRadius={"8px"}
                          bg={
                            "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                          }
                        >
                          Continue
                        </Button>
                      </Link>
                    ) : (
                      <Link to="/InvestSignUp" style={{ width: "100%" }}>
                        <Button
                          color="#ffff"
                          width="100%"
                          borderRadius={"8px"}
                          bg={
                            "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                          }
                        >
                          Continue
                        </Button>
                      </Link>
                    )}
                    <Button
                      as="button"
                      onClick={onModalClose}
                      color="white"
                      variant="outline"
                      borderRadius={"8px"}
                      colorScheme={"white"}
                      mt={4}
                      p={2}
                    >
                      Cancel
                    </Button>
                  </Flex>
                </Center>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      </Flex>
    </Box>
  );
}
