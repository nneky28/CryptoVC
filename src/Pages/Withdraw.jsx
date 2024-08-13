import {
    Box, Heading, Center, Text, Input, Button, FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react'
import React from 'react'
import NavBar from '../Layouts/NavBar'
import Footer from '../Layouts/Footer'



export default function Withdraw({ name, role, desc, img }) {

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
            <Center p={'50px'} zIndex={2} color={'white'} mt={'8%'}>
                <Heading fontSize={'40px'} >
                    Withdraw
                </Heading>
            </Center>
            <Center zIndex={2} color={'white'}>
                <Heading fontSize={'30px'} >
                    RoboWorks
                </Heading>
            </Center>
            <Center p={'10px'} zIndex={2} color={'white'}>
                <Text fontSize={'18px'}> Your withdrawal balance is <span style={{ color: '#00D1FC' }}>$150,491,562</span> </Text>
            </Center>

            <Center zIndex={2} color={'white'}>
                <Text>To withdraw fill out the form below</Text>
            </Center>
            <Center zIndex={2} color={'white'} px={'560px'} mt={6}>
                <FormControl>
                    
                    <FormLabel fontSize={'20px'} mt={5}>Wallet address</FormLabel>
                    <Input type='default' placeholder='Enter your Wallet address' bg={'#E6DDF8'} color={'black'} _placeholder={{ color: 'black' }} h={14} />


                    <FormLabel fontSize={'20px'} mt={5}>Enter amount</FormLabel>
                    <Input type='default' placeholder='Enter the amount you want to withdraw' bg={'#E6DDF8'} color={'black'} _placeholder={{ color: 'black' }} h={14} />

                    <FormLabel fontSize={'20px'} mt={5}>Withdrawal method</FormLabel>
                    <Select placeholder='Select your withdrawal method' bg={'#E6DDF8'} color='black' h={14} w={['58%', '50%', '100%']} >
                        <option style={{base:"20%" }}>transfer</option>
                        <option>Coupons</option>
                    </Select>
                    <Button 
                   p={5}
                   bg={"var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))"}
                   color={"white"}  
                   type="submit" 
                   width="100%" 
                   mt={4}
                   my={12}
                >Withdraw</Button>
                </FormControl>

            </Center>
        
            
 
            <Footer />
        </Box>
    )
}
