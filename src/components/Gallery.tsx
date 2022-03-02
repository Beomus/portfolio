import * as React from "react"
import { 
  Box,
  Button,
  Center,
  Image,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react'
import images from './Images'



function Gallery() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [selectedImage, setSelectedImage] = React.useState(images[0])

  const expandModal = (image: React.SetStateAction<{ src: any; id: number }>) => {
    setSelectedImage(image);
    onOpen();
  }

  const closeModal = () => {
    setSelectedImage(selectedImage);
    onClose();
  }

  return ( 
    <Box padding={'20px'}>
      <Wrap px="1rem" spacing={10} justify={"center"}>
        { images.map((image) => (
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
              onClick={() => expandModal(image)}
            >
            <Image
              objectFit='cover'
              boxSize={'auto'}
              boxShadow={'lg'}
              src={image.src}
              loading="lazy"
            />
            </Button>

          </WrapItem>
        ))}
      </Wrap>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        size='lg'
        isCentered
        motionPreset='scale'
        scrollBehavior='outside'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding={'0 0 0 0'}>
            <Center>
              <Image
                maxH='1200px'
                maxW='1200px'
                size={'auto'}
                
                objectFit='cover'
                src={selectedImage.src}
              />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  ) 
}

export default Gallery;