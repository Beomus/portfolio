import * as React from "react"
import { 
  Box,
  Button,
  Image,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import images from './Images'



function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return ( 
    <Box padding={'20px'}>
      <Wrap px="1rem" spacing={10} justify={"center"}>
        { images.map(({src, id}) => (
          <WrapItem
            boxShadow="base"
            rounded="20px"
            overflow="hidden"
            lineHeight={2}
            _hover={{ boxShadow: "dark-lg"}}
          >
            <Button
              variant='link'
              maxH='400'
              maxW='600'
              size={'auto'}
              minH='200px'
              minW='300px'
              onClick={onOpen}
            >
            <Image
              objectFit='cover'
              boxSize={'auto'}
              boxShadow={'lg'}
              src={src}
              key={id}
              loading="lazy"
            />
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Image
                    objectFit='contain'
                    src={src}
                    key={id}
                  />
                </ModalBody>

              </ModalContent>
            </Modal>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  ) 
}

export default Gallery;