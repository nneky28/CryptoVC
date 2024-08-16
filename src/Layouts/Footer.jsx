import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Center,
  Heading,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";

export default function Footer() {
  const today = new Date();

  return (
    <Box
      bg="#01203D"
      color="#fff"
      py={32}
      zIndex={2}
      position={'relative'}
      w={{ base: "100%", md: "100%" }}
      px={40}>
      <Flex justifyContent={'space-between'} alignItems={'center'} gap={'20px'}>
        <Flex justifyContent={'space-between'} gap={'54px'} w={'50%'}>
          <Box>
            <Heading fontSize="24px" mb={4}>
              Product
            </Heading>
            <Text fontSize="14px">Features</Text>
            <Text fontSize="14px" mt={4}>
              Workload
            </Text>
            <Text fontSize="14px" mt={4}>
              Time
            </Text>
          </Box>
          <Box>
            <Heading fontSize="24px" mb={4}>
              Company
            </Heading>
            <Text fontSize="14px">Real Work</Text>
            <Text fontSize="14px" mt={4}>
              About & Contact
            </Text>
            <Text fontSize="14px" mt={4}>
              Careers
            </Text>
          </Box>

          <Box>
            <Heading fontSize="24px" mb={4}>
              Resources
            </Heading>
            <Text fontSize="14px">Blog</Text>
            <Text fontSize="14px" mt={4}>
              Help & About
            </Text>
            <Text fontSize="14px" mt={4}>
              Customer{" "}
            </Text>
          </Box>
        </Flex>

    
          <HStack  display={'flex'} flexDirection={'column'} gap={'4px'} alignItems={'flex-start'}>
              <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <g clipPath="url(#clip0_2908_1658)">
                <path d="M31.8394 28.2642L28.552 26.6605C28.3652 26.5688 28.1232 26.6058 27.9898 26.7506C25.6019 29.3402 21.8761 31.0082 17.6949 31.0082C10.5025 31.0082 4.65185 26.0686 4.65185 19.9981C4.65185 18.076 5.23691 16.268 6.26793 14.6933C8.49195 11.2945 12.7799 8.98958 17.693 8.98958C21.878 8.98958 25.6076 10.6608 27.9955 13.2521C28.1289 13.3968 28.3709 13.4338 28.5577 13.3422L31.8451 11.7385C32.0738 11.6275 32.1329 11.3734 31.9766 11.1948C28.8093 7.54193 23.7266 5.14528 17.9845 5.06646C14.0244 5.01178 10.3348 6.07499 7.34087 7.91028C2.97287 10.59 0.0856445 14.9056 -0.000114709 19.781C-0.141141 28.1162 7.84971 34.9346 17.6911 34.9346C23.5494 34.9346 28.7502 32.5186 31.9728 28.8078C32.1272 28.6293 32.0662 28.3767 31.8375 28.2642H31.8394Z" fill="white"/>
                <path d="M31.8452 11.7409L28.5578 13.3446C28.371 13.4363 28.129 13.3993 27.9956 13.2545C25.6077 10.6632 21.8781 8.99199 17.6931 8.99199C12.7781 8.99199 8.49015 11.297 6.26803 14.6957C6.17084 14.1134 6.11938 13.5183 6.11938 12.9135C6.11938 11.1361 6.5558 9.44559 7.34288 7.9143C10.3387 6.07901 14.0283 5.01419 17.9866 5.07049C23.7267 5.1493 28.8113 7.54596 31.9786 11.1988C32.1349 11.3774 32.0739 11.6315 31.8471 11.7425L31.8452 11.7409Z" fill="white"/>
                <path d="M39.9353 27.0227L39.3693 28.1004C35.6188 35.218 27.3211 39.8569 18.1411 40.0017C17.8952 40.0049 17.697 39.836 17.697 39.6301V36.4469C17.697 36.2474 17.8838 36.0801 18.1239 36.0769C24.7807 35.9515 30.8506 32.8857 34.1704 28.0715L18.1792 20.2799C17.9276 20.1577 17.9276 19.8472 18.1792 19.725L27.3135 15.2743L27.6394 15.1167L34.1723 11.9318C31.6205 8.2307 27.4412 5.56221 22.6177 4.46844C21.1693 4.14191 19.6619 3.95533 18.1258 3.92477C17.8857 3.92155 17.6989 3.75427 17.6989 3.55481V0.371607C17.6951 0.16572 17.8933 -0.00317178 18.1392 4.52088e-05C20.2679 0.0338236 22.349 0.310484 24.3386 0.802683C30.9249 2.43048 36.4878 6.43563 39.3674 11.9013L39.9334 12.979C40.0935 13.2846 39.9544 13.6433 39.6114 13.8106L38.8624 14.1757L32.3485 17.3476L27.0676 19.9228C26.9971 19.9582 26.9971 20.0451 27.0676 20.0805L39.6095 26.1944C39.9525 26.36 40.0916 26.7171 39.9315 27.0243L39.9353 27.0227Z" fill="white"/>
                <path d="M39.6132 13.809L38.8643 14.1741C36.7412 15.0507 34.3133 15.5493 31.7348 15.5493C30.3131 15.5493 28.9391 15.3981 27.6355 15.1167L34.1685 11.9318C31.6166 8.2307 27.4373 5.56221 22.6138 4.46844C21.1655 4.14191 19.658 3.95533 18.122 3.92477C17.8818 3.92155 17.6951 3.75427 17.6951 3.55481V0.371607C17.6951 0.16572 17.8933 -0.00317178 18.1391 4.52088e-05C20.2678 0.0338236 22.3489 0.310484 24.3385 0.802683C30.9249 2.43048 36.4878 6.43563 39.3674 11.9013L39.9334 12.979C40.0935 13.2846 39.9543 13.6433 39.6113 13.8106L39.6132 13.809Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_2908_1658">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
              </Box>
              <Heading fontSize={'18px'} lineHeight={'28px'} fontWeight={'bold'}>Crypto Venture Capital</Heading>
              <Text fontSize={'16px'} lineHeight={'22px'} fontWeight={400}>Empowering Startups, Empowering Futures</Text>
          </HStack>
  
      </Flex>
    </Box>
  );
}
