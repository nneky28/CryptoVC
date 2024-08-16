import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Heading,
  Button,
  Progress,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Center,
  ButtonGroup,
  ModalFooter,
  Input,
  Highlight,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DonatorModal = ({ onClose, isOpen, project }) => {
  const [prompt, setPrompt] = useState(false)
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate();

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={"#01203D"}
        color={"#FFF"}
        maxW={prompt || success ? '500px':"1280px"}
        border={prompt || success ? '1px solid white':'none'}
        p={ success? 6:12}>
       {
        prompt || success ? null :  <ModalHeader>Donate</ModalHeader>
       }
        <ModalCloseButton />
        <ModalBody>
       {
        prompt ? (<Box color={'white'} p={5}>
          <Text fontSize={'24px'}  fontWeight={'bold'}>Confirm your decision</Text>
          <Text fontSize={'18px'} mt={2}>Fund {project?.title}</Text>
          <Flex alignItems={'center'} my={2} gap={2}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#3F8A33"/>
          </svg>
          <Text fontSize={'20px'}  fontWeight={'bold'}>0.0005 CELO contributed</Text>
          </Flex>
          <Text fontSize={'16px'} >Changes could be subject to additional
          gate fee</Text>
        </Box>): success ? (
          <Box display={'flex'} flexDir={'column'} alignItems={'center'} gap={'12px'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
            <path d="M73.8333 51.6667C73.8333 60.8717 66.3717 68.3333 57.1667 68.3333C54.1833 68.3333 51.38 67.55 48.9567 66.175C46.3902 64.7203 44.2554 62.6111 42.7698 60.0624C41.2842 57.5138 40.501 54.6167 40.5 51.6667C40.5 47.3867 42.1133 43.4833 44.7633 40.5333C46.3248 38.7899 48.2368 37.3958 50.3742 36.4423C52.5116 35.4888 54.8262 34.9973 57.1667 35C66.3717 35 73.8333 42.4617 73.8333 51.6667Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.166 20V35C54.8256 34.9973 52.5109 35.4888 50.3735 36.4423C48.2361 37.3958 46.3242 38.7899 44.7627 40.5333C42.0124 43.5888 40.4933 47.5558 40.4993 51.6667C40.5003 54.6167 41.2836 57.5137 42.7691 60.0624C44.2547 62.6111 46.3896 64.7203 48.956 66.175C44.5193 67.5167 38.6293 68.3333 32.166 68.3333C18.3593 68.3333 7.16602 64.6017 7.16602 60V20" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.16602 46.667C7.16602 51.2687 18.3593 55.0003 32.166 55.0003C35.1777 55.0003 38.066 54.8237 40.7393 54.497M7.16602 33.3337C7.16602 37.9353 18.3593 41.667 32.166 41.667C36.7593 41.667 41.0643 41.2537 44.7627 40.5337M64.666 48.3337L55.4993 57.5003L50.4993 52.5003M57.166 20.0003C57.166 24.602 45.9727 28.3337 32.166 28.3337C18.3593 28.3337 7.16602 24.602 7.16602 20.0003C7.16602 15.3987 18.3593 11.667 32.166 11.667C45.9727 11.667 57.166 15.3987 57.166 20.0003Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Text  color={'var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))'} fontWeight={'bold'} fontSize={'20px'}>Thank you!</Text>
          <Text fontWeight={400}>Thank you donating</Text>
          <Button
             p={'10px 20px'}
             border={'none'}
             color={'white'}
             bg={'var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))'}
             onClick={()=>navigate('/')}
            >Visit Homepage</Button>
          </Box>
        ):
        (
           <Box>
           <Text fontSize={"36px"} color="white">
             {project?.title}
           </Text>
             <Flex
              mt={2}
               justify={"space-between"}
               direction={["column", "row"]}
               gap={"61px"}>
               <Box
                 borderWidth="0.1px"
                 borderRadius="lg"
                 borderColor={"#F8F8FA"}
                 p={12}
                 w={["100%", "50%"]}>
   
                 <Box>
                   <Progress
                     mb={"10px"}
                     mt={"10px"}
                     value={80}
                     size="lg"
                     borderRadius="11px"
                     bg={"#ADCBD1"}
                     color="var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"
                   />
   
                   <Text>65% fundraising goal met </Text>
                 </Box>
                 <Flex justify={"space-between"} mt={"25px"}>
                   <Box>
                     <Text color={"#ADCBD1"} fontSize={"sm"}>
                       Fundraising goal
                     </Text>
                     <Heading mt={"5px"} fontSize={"26px"}>
                       $190,204,512
                     </Heading>
                   </Box>
                   <Box borderLeft={"1px solid white"} />
   
                   <Box>
                     <Text color={"#ADCBD1"} fontSize={"sm"}>
                       Total raised
                     </Text>
                     <Heading mt={"5px"} fontSize={"26px"}>
                       $150,204,512
                     </Heading>
                   </Box>
                 </Flex>
                 <Box borderBottom={"1px solid white"} mt={12} />
   
                 <Flex justify={"space-between"} mt={10}>
                   <Text color={"#00D1FC"} fontSize={"sm"}>
                     Starting date
                   </Text>
                   <Text> June 9, 2023</Text>
                 </Flex>
                 <Flex justify={"space-between"} mt={2}>
                   <Text color={"#00D1FC"} fontSize={"sm"}>
                     Completion date
                   </Text>
                   <Text> June 9, 2025</Text>
                 </Flex>
                 <Flex justify={"space-between"} mt={2}>
                   <Text color={"#00D1FC"} fontSize={"sm"}>
                     Numbers of backers
                   </Text>
                   <Text>11,372</Text>
                 </Flex>
               </Box>
   
               <Box w={["100%", "50%"]}>
                 <Text fontSize={"sm"} lineHeight={8} textAlign={"left"} w={'535px'}>
                   {project?.description} is a tech start-up that designs and
                   builds robots for a variety of industries, including
                   manufacturing, construction, and logistics. The company's
                   mission is to help businesses increase efficiency, reduce costs,
                   and improve safety by leveraging robotic technology. RoboWorks
                   offers a range of robotic solutions, from robotic arms and
                   automated machinery to mobile robots and drones. Each solution
                   is tailored to the specific needs of the customer, taking into
                   account factors like production volume, safety requirements, and
                   environmental conditions. RoboWorks is committed to staying at
                   the forefront of robotics technology, continuously researching
                   and developing new solutions to meet the evolving needs of their
                   customers.
                 </Text>
               </Box>
             </Flex>
             <Center my={12}>
             <Text fontSize={"28px"} color="white" fontWeight={'bold'}>
              Project Selected
              </Text>
             </Center>
              <Flex alignItems={'center'} justifyContent={'space-between'} my={10}> 
              <Text fontSize={"20px"} color="white" fontWeight={'bold'}>
                {project?.title}
              </Text>
             <Box>
             <Flex gap={4}>
             <Input variant='outline' placeholder='Enter amount you wish to donate'/>
             <Input htmlSize={4} width='auto'placeholder="ETH" />
             </Flex>
             </Box>
              </Flex>

              <Box
                borderWidth="0.1px"
                borderRadius="lg"
                borderColor={"#F8F8FA"}
                p={12}
                display={'flex'}
                justifyContent={'center'}
                w={["100%", "50%"]}
                my={4}
                mx="auto" 
                flexDirection={'column'}
              >
                <Text fontWeight={'bold'} color={'white'} fontSize={'32px'} lineHeight={'42px'}>Total</Text>
                <Flex justifyContent={'space-between'} my={2}>
                <Text fontWeight={400} color={'white'} fontSize={'18px'}>Your contribution</Text>
                  <Text fontWeight={400} color={'white'} fontSize={'18px'}>O.0005 ETH</Text>
                </Flex>
                <Flex justifyContent={'space-between'} whiteSpace={'nowrap'}>
                <Text fontWeight={400} color={'white'} fontSize={'18px'} whiteSpace={'nowrap'}>Wallet Address</Text>
                  <Text fontWeight={400} color={'#00D1FC'} fontSize={'18px'} whiteSpace={'nowrap'}  textOverflow="ellipsis"
                    overflow="hidden"
                    width="100px" >0x7d83bfc14d7b4d2930e2ff9d3f45a09dff3e2a17</Text>
                </Flex>
              </Box>
              <Box display={'flex'} flexDirection={'column'} alignItems={'center'} my={5}>
              <Text fontWeight='light' fontSize={'20px'} textAlign={'center'} w={'50%'}>
              <Highlight query='Please note this platform accepts only Ethereum' styles={{ py: '1', fontWeight: 'normal' ,color:'#00D1FC'}}>
              Your contribution must be valued at 2USD to be eligible for 
              matching. Please note this platform accepts only Ethereum
              </Highlight>
            </Text>
              </Box>
             <Center>
                 <Button
                   p={4}
                   bg={"var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"}
                   color={"white"}
                   type="submit"
                   width="567px"
                   mt={8}
                   onClick={()=>setPrompt(true)}
                >
                  Donate
                 </Button>
             </Center>
           </Box>
        )
       }
        </ModalBody>
        {
          prompt && (
            <ModalFooter alignSelf={'center'}>
           <ButtonGroup variant='outline' spacing='6'>
            <Button color={'white'} onClick={onClose}>Cancel</Button>
            <Button
             p={'10px 20px'}
             border={'none'}
             color={'white'}
             bg={'var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))'}
             onClick={() => {
              setPrompt(false)
              setSuccess(true)
             }}
            >Confirm</Button>
          </ButtonGroup>
          </ModalFooter>
          )
        }
      </ModalContent>
    </Modal>
  );
};

export default DonatorModal;
