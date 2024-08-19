import React, { useContext, useState } from "react";
import { Text, Box, Input, Button, Heading } from "@chakra-ui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "../../Layouts/NavBar";
import { UserContext } from "../../Routes/UserContext";

const SignIn = () => {
  const location = useLocation();
  const email = location.state;
  const [formData, setFormData] = useState({ email: email ?? "", password: "" });
  const { login,userType } = useContext(UserContext);
  const navigate = useNavigate();

console.log('userType',userType)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    if (!email || !password) {
      toast.error("Email and password are required.");
      return;
    }
    const usersKey = userType === "Investor" ? "investor" : "users";
    const storedUsers = JSON.parse(localStorage.getItem(usersKey)) || [];
  console.log('usersKey and storedUsers',usersKey,storedUsers)
    const user = storedUsers.find(u => u.email === email && u.password === password);
console.log('USER',user)
    
    if (user) {
      login(user);
      toast.success("Logged in successfully");
      if (userType === "Investor") {
        navigate('/details');
      } else {
        navigate('/CreateProject');
      }
    } else {
      toast.error("Invalid credentials");
    }
  };
  
  return (
    <Box
    w="100%"
    h="100vh"
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
    <Box pos={"relative"} w={"100%"} maxW={"500px"} mx={"auto"} zIndex={2}>
      <Heading textAlign={'center'} color={'white'} fontSize={'28px'}>SIGN IN INTO YOUR ACCOUNT</Heading>
      <Box my={8} w={"100%"}>
        <Text color={"white"} fontSize={"12px"} mb={2}>
          Email Address
        </Text>
        <Input
          className="Input"
          type="text"
          name="email"
          w={"100%"}
          p={4}
          value={formData?.email}
          variant={"filled"}
          onChange={handleChange}
          placeholder="&nbsp; e.g robertsella@gmail.com"
        />
      </Box>
  
      <Box>
        <Text color={"white"} fontSize={"12px"} mb={2}>
          Password
        </Text>
        <Input
          className="Input"
          name="password"
          w={"100%"}
          type="password"
          variant={"filled"}
          color={'white'}
          value={formData?.password}
          onChange={handleChange}
          placeholder="&nbsp; ********"
          p={4}
        />
      </Box>
  
      <Button
        bg={"var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"}
        color={"white"}
        type="submit"
        mt={8}
        w={"100%"}
        onClick={handleSubmit}
      >
        Sign in
      </Button>

   
  
      <Text color={"white"} fontSize={"14px"} my={6} textAlign={'right'}>
        Don't have an account{" "}
        <Text as={"span"} color={"white"}>
          <Link to="/SignUp">SignUp</Link>
        </Text>
      </Text>
    </Box>
    <ToastContainer 
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        icon={false}
        autoClose={5000}
        hideProgressBar={true}
        position="top-center"
        toastClassName="custom-toast"
      />
   
  </Box>
  
  );
};

export default SignIn;
