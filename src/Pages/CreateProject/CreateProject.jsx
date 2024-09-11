import {
  Box,
  Heading,
  Center,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useRef, useState } from "react";
import "./CreateProject.css";
import NavBar from "../../Layouts/NavBar";
import Footer from "../../Layouts/Footer";
import { ImFilePicture } from "react-icons/im";
import { toast, ToastContainer,Zoom } from "react-toastify";
import { ethers } from "ethers";
import { WalletContext } from "../../Utils/WalletContext";
import StatusModal from "../../Components/StatusModal";

export function CreateProject() {
  const [_title, setTitle] = useState("");
  const [_description, setDescription] = useState("");
  const [_target, setTarget] = useState("");
  const[type,setType]= useState("");
  const [_deadline, setDeadline] = useState("");
  const  profilePictureInputRef = useRef(null);
  const [value, setValue] = React.useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [writeLoading,setWriteLoading]= useState(false);
  const [_category,setCategory]= useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    getData(e);
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  const getData = (e) => {
    // const { value, name } = e.target;
  };  
  
  const { contract, provider,switchToSepoliaOptimism } = useContext(WalletContext);

  const SEPOLIA_OPTIMISM_CHAIN_ID = '0xaa37dc';
  
  const handleChange = async (e) => {
    e.preventDefault();
  
    if (!_target || !_deadline) {
      return toast.error('Target amount and deadline are required');
    }
  
    const targetNumber = parseFloat(_target);
    if (isNaN(targetNumber) || !isFinite(targetNumber) || targetNumber <= 0) {
      return toast.error('Target must be a valid positive number');
    }
  
    const deadlineNumber = parseInt(_deadline, 10);
    if (isNaN(deadlineNumber) || deadlineNumber <= 0) {
      return toast.error('Deadline must be a valid positive number');
    }
  
    try {
      await switchToSepoliaOptimism();
      if (!contract) {
        return toast.error('Wallet not connected or contract not initialized');
      }
      const network = await provider.getNetwork();
      const currentChainId = network.chainId;
      const currentChainIdHex = `0x${currentChainId.toString(16)}`.toLowerCase();
console.log('Network',currentChainId)
    if (currentChainIdHex !== SEPOLIA_OPTIMISM_CHAIN_ID) {
      return toast.error('Please switch to the Sepolia Optimism network.');
    }
      setWriteLoading(true);
      const goalInWei = ethers.utils.parseEther(targetNumber.toString());
      const durationInSeconds = Math.floor(deadlineNumber * 24 * 60 * 60);
    
      const tx = await contract.launch(goalInWei, durationInSeconds, {
        gasLimit: 200000,
      });
      const receipt = await tx.wait();
       console.log('Recept', tx,receipt)
      const launchEvent = receipt.events.find(event => event.event === 'Launch');
      if (launchEvent) {
        const [id, creator, goal, startAt, endAt] = launchEvent.args;
        console.log('Arguments',id,creator,goal,endAt,startAt)
      }

      setTitle("");
      setDescription("");
      setTarget("");
      setDeadline("");
    } catch (error) {
      console.log('error',error)
      toast.error('Failed to launch campaign: ' + error.message);
    } finally {
      setWriteLoading(false);
      onOpen()
    }
  };
  
  return (
    <Box
      w="100%"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      bgGradient="linear(to-r, #011B32 50%, #027DE4)"
      alignItems={'center'}
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
      <Box
        color="white"
        position={"relative"}
        zIndex={2}
        display={"flex"}
        flexDirection={"column"}
        mt={"8%"}
        w={"100%"}
        maxW={"600px"}
        mx={"auto"}
        px={"20px"}>
        <Heading textAlign={"center"} color={"white"} fontSize={"28px"}>
          PROJECT CREATION
        </Heading>
        <Text fontSize={"18px"} textAlign={"center"} lineHeight={"28px"}>
          Create a new project by filling out the form below
        </Text>
        <Center>
          <FormControl mt={10}>
            <FormLabel fontSize={"16px"}>Project Title</FormLabel>
            <Input
              type="default"
              id="_title"
              onChange={(e) => setTitle(e.target.value)}
              value={_title}
              placeholder="A catchy and descriptive name for your project"
              bg={"#CFDDE9"}
              color={"black"}
              _placeholder={{ color: "black" }}
            />

            <FormLabel fontSize={"16px"} mt={5}>
              Project category
            </FormLabel>
            <Input
              type="default"
              id="_category"
              onChange={(e) => setCategory(e.target.value)}
              value={_category}
              placeholder="The category of your project. E.g Blockchain, AI, Robotic, etc"
              bg={"#CFDDE9"}
              color={"black"}
              _placeholder={{ color: "black" }}
            />

            <FormLabel fontSize={"16px"} mt={5}>
              Project description
            </FormLabel>
            <Input
              type="default"
              id="_description"
              onChange={(e) => setDescription(e.target.value)}
              value={_description}
              placeholder="Detail explanation of your project and how investors will benefit"
              bg={"#CFDDE9"}
              color={"black"}
              _placeholder={{ color: "black" }}
              w="100%"
            />

            <FormLabel fontSize={"16px"} mt={5}>
              Funding goals
            </FormLabel>
            <Input
              id="_target"
              onChange={(e) => setTarget(e.target.value)}
              value={_target}
              placeholder="Specify the amount of funded needed to complete the project"
              bg={"#CFDDE9"}
              color={"black"}
              _placeholder={{ color: "black" }}
               type="number"
            />

            <FormLabel fontSize={"16px"} mt={5}>
              Display picture
            </FormLabel>
            <Input
              id="dp"
              bg={"#CFDDE9"}
              name="profilePicture"
              type="file"
              placeholder="&nbsp; Drag and drop or Select file (in jpeg or png format only)"
              onChange={getData}
              color={'black'}
              // values={profilePicture}
              _placeholder={{ color: "black" }}
            />

            <FormLabel fontSize={"16px"} mt={5}>
              Cryptocurrency of choice
            </FormLabel>
            <Input
              type="default"
              id="_target"
              onChange={(e) => setType(e.target.value)}
              value={type}
              placeholder="This platform accepts Ethereum "
              bg={"#CFDDE9"}
              color={"black"}
              _placeholder={{ color: "black" }}
            />
            <FormLabel fontSize={"16px"} mt={5}>
              Project timeline
            </FormLabel>
            <Input
              type="number"
              id="_deadline"
              onChange={(e) => setDeadline(e.target.value)}
              value={_deadline}
              placeholder="Duration needed to complete the project with deadlines and milestones"
              bg={"#CFDDE9"}
              color={"black"}
              _placeholder={{ color: "black" }}
            />

            <Text mt={5} mb={2}>
              Team background
            </Text>
            <Textarea
              value={value}
              onChange={handleInputChange}
              placeholder="Brief background of team members; their qualifications & experience"
              size="sm"
              bg={"#CFDDE9"}
              color={"black"}
              _placeholder={{ color: "black" }}
              borderRadius={"10px"}
            />

            <Text color={"white"} mb={2} mt={5}>
              Pictures of listed team members
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
          </FormControl>
        </Center>

        <Center pb="100">
          <Button
            type="submit"
            bg={
              "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
            }
            width="full"
            my={12}
            p={5}
            onClick={handleChange}
            color={"white"}
          >
            {writeLoading ? "Submiting....." : "Create a Project"}
          </Button>
        </Center>
      </Box>
      <Footer />
      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        icon={false}
        autoClose={5000}
        transition={Zoom}
        hideProgressBar={true}
        position="top-center"
        toastClassName="custom-toast"
      />
      <StatusModal
      isOpen={isOpen}
      onClose={onClose}
      />
    </Box>
  );
}
