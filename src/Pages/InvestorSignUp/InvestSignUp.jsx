import React, { useState, useContext } from "react";
import { Text, Image, HStack, Box, Heading, Input,Button } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Routes/UserContext";
import NavBar from "../../Layouts/NavBar";


const InvestSignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState([]);
  // const { updateUserType } = useContext(UserContext);

  const getData = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "walletAddress":
        setWalletAddress(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const addData = (e) => {
    e.preventDefault();

    if (!fullName) {
      toast.error("Name field is required!");
    } else if (!email) {
      toast.error("Email field is required");
    } else if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
    } else if (!walletAddress) {
      toast.error("Wallet Address is required");
    } else if (!password) {
      toast.error("Password field is required");
    } else if (password.length < 5) {
      toast.error("Password length must be greater than five characters");
    } else if (!country) {
      toast.error("Country field is required");
    } else if (!phone) {
      toast.error("Phone field is required");
    } else {
      // const userType = "Investor";
      // updateUserType(userType);
      // localStorage.setItem("user", JSON.stringify({ ...data }));
      // window.location.href = "/";
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
    h={'auto'}
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
      <Box mt={'10%'} position={'relative'} zIndex={2}>
        <Box color={'white'}>
          <Heading fontSize={'28px'} textAlign={'center'}>CREATE YOUR ACCOUNT</Heading>
          <Box  mt={12}>
            <Text mb={2}>Full Name</Text>
            <Input
              className="Input"
              name="fullName"
              value={fullName}
              onChange={getData}
              type="text"
              placeholder="&nbsp; e.g Roberts Ella"
              variant={"filled"}
              color={'white'}
              _placeholder={'black'}
            />
          </Box>

          <Box my={5}>
            <Text mb={2}>Email Address</Text>
            <Input
              className="Input"
              name="email"
              value={email}
              onChange={getData}
              type="text"
              placeholder="&nbsp; robertsella@gmail.com"
              variant={"filled"}
              color={'white'}
              _placeholder={'black'}
            />
          </Box>

          <Box>
            <Text mb={2}>Password</Text>
            <Input
              className="Input"
              name="password"
              value={password}
              onChange={getData}   
              type="password"
              placeholder=" &nbsp;********"
              variant={"filled"}
              color={'white'}
              _placeholder={'black'}
            />
          </Box>

          <Box color={'white'} my={4} fontSize={'12px'}>
            <Text>Password must contain:</Text>
            <Text>
              <span className="Dot">•</span> At least 8 characters
            </Text>
            <Text>
              <span className="Dot">•</span> At least one number
            </Text>
            <Text>
              <span className="Dot">•</span> At least one lowercase letter
            </Text>
            <Text>
              <span className="Dot">•</span> At least one uppercase letter
            </Text>
          </Box>

          <Box>
            <Text mb={2}>Wallet Address for cryptocurrency</Text>
            <Input
              className="Input"
              name="walletAddress"
              value={walletAddress}
              onChange={getData}
              type="text"
              placeholder="&nbsp; e.g 0X 153000...  "
              variant={"filled"}
              color={'white'}
              _placeholder={'black'}
            />
          </Box>          
          <HStack spacing={4} mb={4} w={'100%'} mt={5}>
          <Box color={'white'}>
            <Text mb={2}>Country of Residence</Text>
            <Input
              name="country"
              value={country}
              onChange={getData}
              type="text"
              placeholder="e.g Nigeria"
              variant={"filled"}
              color={'white'}
              _placeholder={'black'}
            />
          </Box>

          <Box color={'white'}>
            <Text mb={2}>Phone Number (optional)</Text>
            <Input
              name="phone"
              value={phone}
              onChange={getData}
              type="text"
              placeholder="+234"
              variant={"filled"}
              color={'white'}
              _placeholder={'black'}
            />
          </Box>
        </HStack>

        <Button
         p={4}
         bg={"var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"}
         color={"white"} 
         onClick={addData} 
         type="submit" 
         width="full" 
         mt={4}
         mb={12}>
           Create an account
        </Button>
        </Box>
      </Box>

   
    </Box>
  );
};

export default InvestSignUp;
