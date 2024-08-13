import React, { useState } from "react";
import { Text, Image, HStack, Input, Button, Box, Heading } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import NavBar from "../../Layouts/NavBar";

const Form1 = ({ nextStep ,handleChange,values}) => {

  const continueFunc = (e) => {
    e.preventDefault();
    const { fullName, email, password, country, phone } = values;
    if (!fullName || !email || !password || !country || !phone) {
      toast.error("Please fill all required fields");
    } else {
      nextStep(); 
    }
  };

  const addData = (e) => {
    e.preventDefault();
    const { fullName, email, password, country, phone } = values;

    if (!fullName) {
      toast.error("Name field is required!", { position: "top-center" });
    } else if (!email) {
      toast.error("Email field is required", { position: "top-center" });
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address", {
        position: "top-center",
      });
    } else if (!password) {
      toast.error("Password field is required", { position: "top-center" });
    } else if (password.length < 5) {
      toast.error("Password length must be greater than five", {
        position: "top-center",
      });
    } else if (!country) {
      toast.error("Country field is required", { position: "top-center" });
    } else if (!phone) {
      toast.error("Phone field is required", { position: "top-center" });
    } else {
      continueFunc(e); // Only call continueFunc if all validations pass
    }
  };

  return (
    <Box
      w="100%"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
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
      <NavBar />
      <Box mt={'15%'} position={'relative'} zIndex={2}>
        <Heading textAlign={'center'} color={'white'} fontSize={'28px'}>CREATE YOUR ACCOUNT</Heading>
        <Text
          color={'white'}
          style={{
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "600",
            marginBottom: "16px",
          }}
          mt={18}
        >
          Step 1 of 2
        </Text>
        <div className="Line--frame">
          <div className="Line--right">
            <hr className="hh--Style" />
          </div>
          <div className="Line--left">
            <hr style={{border:'2px solid #FFFFFF'}}/>
          </div>
        </div>

        {/* Form Inputs */}
        <Box my={4} color={'#FFFFFF'} >
          <Text mb={2}>Full Name</Text>
          <Input
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            type="text"
            variant={"filled"}
            placeholder="e.g Roberts Ella"
          />
        </Box>

        <Box mb={4} color={'#FFFFFF'}>
          <Text mb={2}>Email Address</Text>
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            type="text"
            variant={"filled"}
            placeholder="robertsella@gmail.com"
          />
        </Box>

        <Box mb={4} color={'#FFFFFF'}>
          <Text mb={2}>Password</Text>
          <Input
            name="password"
            value={values.password}
            onChange={handleChange}
            type="password"
            placeholder="********"
            _placeholder={'white'}
            variant={'filled'}
          />
        </Box>
        <Box mb={4} color={'white'}>
          <Text>Password must contain:</Text>
          <Text ml={4}>• At least 8 characters</Text>
          <Text ml={4}>• At least one number</Text>
          <Text ml={4}>• At least one lowercase letter</Text>
          <Text ml={4}>• At least one uppercase letter</Text>
        </Box>

        <Box mb={4} color={'#FFFFFF'}>
          <Text mb={2}>Wallet Address for Cryptocurrency</Text>
          <Input
            name="walletAddress"
            value={values.walletAddress}
            onChange={handleChange}
            type="text"
            placeholder="e.g 0X 153000... "
            bg={'#CFDDE9'}
            color={'white'}
            variant={'filled'}
          />
        </Box>

        <Box mb={4} color={'#FFFFFF'}>
          <Text mb={2}>Country of Residence</Text>
          <Input
            name="country"
            value={values.country}
            onChange={handleChange}
            type="text"
            placeholder="e.g Nigeria"
            bg={'#CFDDE9'}
            variant={'filled'}
          />
        </Box>

        <Box mb={4} color={'#FFFFFF'}>
          <Text mb={2}>Phone Number (optional)</Text>
          <Input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            type="text"
            placeholder="+234"
            bg={'#CFDDE9'}
            color={'black'}
            variant={'filled'}
          />
        </Box>

        <Text mb={4} color={'white'}>
          By creating an account, you accept the
          <Link to="/terms">Terms of Service</Link> &amp;{" "}
          <Link to="/privacy">Privacy Policy</Link>
        </Text>

        <Button  
          p={4}
          bg={"var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"}
          color={"white"} 
          onClick={addData} 
          type="submit" 
          width="full" 
          mb={12}>
          Continue
        </Button>
        <ToastContainer 
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        icon={false}
        autoClose={5000}
        hideProgressBar={true}
        position="bottom-center"
        toastClassName="custom-toast"
      />
      </Box>
    </Box>
  );
};

export default Form1;
