import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay,Text,Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const StatusModal = ({isOpen, onClose}) => {
  const navigate = useNavigate();
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        bg={"#01203D"}
        color={"#FFF"}
        maxW={"620px"}
        border={'1px solid white'}
        p={ 6}>
     
        <ModalCloseButton />
        <ModalBody>
          <Box display={'flex'} flexDir={'column'} alignItems={'center'} gap={'12px'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="81" height="80" viewBox="0 0 81 80" fill="none">
            <path d="M73.8333 51.6667C73.8333 60.8717 66.3717 68.3333 57.1667 68.3333C54.1833 68.3333 51.38 67.55 48.9567 66.175C46.3902 64.7203 44.2554 62.6111 42.7698 60.0624C41.2842 57.5138 40.501 54.6167 40.5 51.6667C40.5 47.3867 42.1133 43.4833 44.7633 40.5333C46.3248 38.7899 48.2368 37.3958 50.3742 36.4423C52.5116 35.4888 54.8262 34.9973 57.1667 35C66.3717 35 73.8333 42.4617 73.8333 51.6667Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M57.166 20V35C54.8256 34.9973 52.5109 35.4888 50.3735 36.4423C48.2361 37.3958 46.3242 38.7899 44.7627 40.5333C42.0124 43.5888 40.4933 47.5558 40.4993 51.6667C40.5003 54.6167 41.2836 57.5137 42.7691 60.0624C44.2547 62.6111 46.3896 64.7203 48.956 66.175C44.5193 67.5167 38.6293 68.3333 32.166 68.3333C18.3593 68.3333 7.16602 64.6017 7.16602 60V20" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.16602 46.667C7.16602 51.2687 18.3593 55.0003 32.166 55.0003C35.1777 55.0003 38.066 54.8237 40.7393 54.497M7.16602 33.3337C7.16602 37.9353 18.3593 41.667 32.166 41.667C36.7593 41.667 41.0643 41.2537 44.7627 40.5337M64.666 48.3337L55.4993 57.5003L50.4993 52.5003M57.166 20.0003C57.166 24.602 45.9727 28.3337 32.166 28.3337C18.3593 28.3337 7.16602 24.602 7.16602 20.0003C7.16602 15.3987 18.3593 11.667 32.166 11.667C45.9727 11.667 57.166 15.3987 57.166 20.0003Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Text  color={'var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))'} fontWeight={'bold'} fontSize={'20px'}>Congratulations!</Text>
          <Text fontWeight={400}>You have successfully launched your project</Text>
          <Button
             p={'10px 20px'}
             border={'none'}
             color={'white'}
             bg={'var(--well, linear-gradient(121deg, #027DE4 50.32%, #00D1FC 99.84%))'}
             onClick={()=>navigate('/details')}
            >Visit Details</Button>
          </Box>
          </ModalBody>
          </ModalContent>
          </Modal>
     
  )
}

export default StatusModal