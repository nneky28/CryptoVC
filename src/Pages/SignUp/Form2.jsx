import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Text, Box, Heading, Input, Button, Progress } from "@chakra-ui/react";
import NavBar from "../../Layouts/NavBar";
import { ImFilePicture } from "react-icons/im";

const Form2 = ({ nextStep,  handleSignup,handleChange,va }) => {
  const [formState, setFormState] = useState({
    profilePicture: "",
    companyName: "",
    biography: "",
    projectTitle: "",
    socialMedia: "",
    data: [],
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const profilePictureInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    getData(e);
  };
  const getData = (e) => {
    const { value, name } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const continueFunc = (e) => {
    e.preventDefault();
    const {
      profilePicture,
      companyName,
      biography,
      projectTitle,
      socialMedia,
    } = formState;

    if (
      !profilePicture ||
      !companyName ||
      !biography ||
      !projectTitle ||
      !socialMedia
    ) {
      toast.error("Please fill all required fields");
    } else {
      localStorage.setItem(
        "user",
        JSON.stringify([...formState.data, formState])
      );
      toast.success("Data added successfully");
      nextStep();
      window.location.href = "/SignIn";
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
      <Box mt={"10%"} position={"relative"} zIndex={2}>
        <Box>
          <Heading textAlign={"center"} color={"white"} fontSize={"28px"}>
            CREATE YOUR ACCOUNT
          </Heading>
          <Text
            color={"white"}
            style={{
              fontSize: "16px",
              lineHeight: "22px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
            mt={18}
          >
            Step 2 of 2
          </Text>

          <Progress value={100} color='#008AFF' size='xs' borderRadius={8}/>
          <Text color={"white"} my={2}>
            Profile Picture
          </Text>
          <Box
            w="100%"
            h="20vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={"#CFDDE9"}
            borderRadius="md"
            p={4}
            onClick={() => profilePictureInputRef.current.click()}
          >
            <ImFilePicture color="rgba(2, 12, 23, 0.50)" />
            <Input
              ref={profilePictureInputRef}
              name="profilePicture"
              type="file"
              onChange={handleFileChange}
              variant="unstyled"
              accept=".jpg, .jpeg, .png"
              display={"none"}
            />
            {selectedFile ? (
              <Text color="rgba(2, 12, 23, 0.50)" fontSize="sm">
                {selectedFile.name}
              </Text>
            ) : (
              <Text color="rgba(2, 12, 23, 0.50)" fontSize="sm">
                Drag and drop or Select file from computer
              </Text>
            )}
          </Box>
          <Box color={"white"} my={4}>
            <Text mb={2}>Company’s name and Description</Text>
            <Input
              className="Input"
              name="companyName"
              type="text"
              placeholder="&nbsp; Enter company’s name here and add a description"
              onChange={handleChange}
              value={formState.companyName}
              variant={"filled"}
              p={"20px 16px"}
              color={'white'}
            />
          </Box>

          <Box >
            <Text color={"white"}mb={2}>Biography</Text>
            <Input
              className="Input"
              name="biography"
              type="text"
              placeholder="&nbsp; Add a bio"
              onChange={handleChange}
              value={formState.biography}
              p={"20px 16px"}
              variant={"filled"}
              color={'white'}
            />
          </Box>

          <Box color={"white"} my={4}>
            <Text mb={2}>Project title and Description</Text>
            <Input
              className="Input"
              name="projectTitle"
              type="text"
              placeholder=" &nbsp; Enter project title and description"
              onChange={handleChange}
              value={formState.projectTitle}
              p={"20px 16px"}
              variant={"filled"}
              color={'white'}
            />
          </Box>

          <Box color={"white"} my={4}>
            <Text mb={2}>Social Media Link</Text>
            <Input
              className="Input"
              name="socialMedia"
              type="text"
              placeholder=" &nbsp; Add your Discord & telegram links"
              onChange={handleChange}
              value={formState.socialMedia}
              p={"20px 16px"}
              variant={"filled"}
              color={'white'}
            />
          </Box>

          <Button
            p={4}
            my={4}
            bg={"var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))" }
            color={"white"}
            onClick={handleSignup}
            type="submit"
            width="full"
            mb={12}>
            Create an account
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
    </Box>
  );
};

export default Form2;
