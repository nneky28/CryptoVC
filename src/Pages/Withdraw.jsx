import {
  Box,
  Heading,
  Center,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  Spinner,
} from "@chakra-ui/react";
import React, { useContext,  useState } from "react";
import NavBar from "../Layouts/NavBar";
import Footer from "../Layouts/Footer";
import { useLocation } from "react-router-dom";
import projects from "../Utils/Dummydata";
import { WalletContext } from "../Utils/WalletContext";
import { toast, ToastContainer } from "react-toastify";
import { useCrowdFunding } from "../hooks/useCrowdFunding";

export default function Withdraw() {
  const location = useLocation();
  const project = location.state ?? projects;
  const { defaultAccount } = useContext(WalletContext);
  const [amount, setAmount] = useState("");
  const [withdrawalMethod, setWithdrawalMethod] = useState("");
  const [status] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signer } = useContext(WalletContext);
  const crowdfundingFunctions = useCrowdFunding(signer);



  const validateForm = () => {
    let errors = []
    if (!amount?.trim()) {
      errors.push("Amount is required");
    } else if (isNaN(amount) || parseFloat(amount) <= 0) {
      errors.push("Amount must be a positive number");
    }

    if (!withdrawalMethod) {
      errors.push("Please select a withdrawal method");
    }
    if (errors.length > 0) {
      toast.error(errors.join("\n"));
      return false;
    }

    return true;
  };

  const handleWithdraw = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      const balance = await crowdfundingFunctions.getPledgedAmount(project?.id, defaultAccount );
      console.log('balance',balance)
      if (balance.lt(amountInWei)) {
        toast.error("Insufficient balance for withdrawal");
      }
      // Call the claim function on the contract
      const tx = await crowdfundingFunctions.claim(project?.id); 
      toast.info("Transaction sent. Waiting for confirmation...");
      // Wait for the transaction to be mined
      await tx.wait();
      setIsLoading(false);
      toast.success("Withdrawal successful!");
    } catch (error) {
      setIsLoading(false);
      console.log('error.message', error.message)
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <Box
      w="100%"
      display={"flex"}
      flexDirection={"column"}
      // alignItems={"center"}
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
      <Center p={"50px"} zIndex={2} color={"white"} mt={"8%"}>
        <Heading fontSize={"40px"}>Withdraw {status}</Heading>
      </Center>
      <Center zIndex={2} color={"white"}>
        <Heading fontSize={"30px"}>{project?.title}</Heading>
      </Center>
      <Center p={"10px"} zIndex={2} color={"white"}>
        <Text fontSize={"18px"}>
          {" "}
          Your withdrawal balance is{" "}
          <span style={{ color: "#00D1FC" }}>$150,491,562</span>{" "}
        </Text>
      </Center>

      <Center zIndex={2} color={"white"}>
        <Text>To withdraw fill out the form below</Text>
      </Center>
      <Center zIndex={2} color={"white"} px={"560px"} mt={6}>
        <FormControl>
          <FormLabel fontSize={"20px"} mt={5}>
            Wallet address
          </FormLabel>
          <Input
            type="default"
            placeholder="Enter your Wallet address"
            bg={"#E6DDF8"}
            color={"black"}
            value={defaultAccount}
            onChange={(e) => setWalletAddress(e.target.value)}
            _placeholder={{ color: "black" }}
            h={14}
          />

          <FormLabel fontSize={"20px"} mt={5}>
            Enter amount
          </FormLabel>
          <Input
            type="default"
            placeholder="Enter the amount you want to withdraw"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            bg={"#E6DDF8"}
            color={"black"}
            _placeholder={{ color: "black" }}
            h={14}
          />

          <FormLabel fontSize={"20px"} mt={5}>
            Withdrawal method
          </FormLabel>
          <Select
            placeholder="Select your withdrawal method"
            bg={"#E6DDF8"}
            value={withdrawalMethod}
            onChange={(e) => setWithdrawalMethod(e.target.value)}
            color="black"
            h={14}
            w={["58%", "50%", "100%"]}
          >
            <option style={{ base: "20%" }}>transfer</option>
            <option>Coupons</option>
          </Select>
          <Button
            p={5}
            bg={
              "var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
            }
            color={"white"}
            type="submit"
            width="100%"
            mt={4}
            my={12}
            onClick={handleWithdraw}
          >
            {isLoading ? (
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="md"
              />
            ) : (
              "Withdraw"
            )}
          </Button>
        </FormControl>
      </Center>

      <ToastContainer
        progressClassName="toastProgress"
        bodyClassName="toastBody"
        icon={false}
        autoClose={5000}
        hideProgressBar={true}
        position="top-center"
        toastClassName="custom-toast"
      />

      <Footer />
    </Box>
  );
}
