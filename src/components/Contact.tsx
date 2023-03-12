import * as React from "react"

import {
  Box,
  Image,
  List,
  ListItem,
  ListIcon,
  Wrap,
  WrapItem,
  Text,
  Container,
  Divider,
  Badge,
  Link,
  Center,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  VStack,
} from '@chakra-ui/react'
import profile from '../images/profile/profile.jpeg'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { SiGmail } from 'react-icons/si'
import { 
  RiCamera3Line, 
  RiCameraLensLine, 
  RiGithubFill,
  RiInstagramLine,
  RiAccountPinBoxFill
} from 'react-icons/ri'

export const Contact = () => (
    <Box padding={'20px'}>
      <VStack>
        <Wrap px="1rem" spacing={5} justify={"center"}>
          
          <WrapItem>
              <Image
                src={profile}
                maxW={'320px'}
                minW={'160px'}
              />
          </WrapItem>
          
          <WrapItem>
            <Container>
              <Text paddingBottom={5} fontSize={'1.1rem'}>
                A little bit about myself, my name is <Badge colorScheme='red' fontSize={'1.1rem'}>Hau</Badge> and there's a long story behind the pronunciation
                and meaning, all of which I will happily tell you over a cup of tea or coffee.
              </Text>
              
              <Text paddingBottom={5} fontSize={'1.1rem'}>
                I take pictures every now and then, find them in the <Badge colorScheme='pink' fontSize={'1.0rem'}>Gallery</Badge>.
                Currently based in <Badge colorScheme='green' fontSize={'1.0rem'}>Tokyo</Badge>, feel free to contact me for a impromptu photoshoot, no charge except for maybe a cup of coffee ☕
              </Text>

              <Text fontSize={'1.1rem'}>
                A coffee addict who plays a bit of guitar, maybe one day I'll be good enough for a   
                <Button
                  height='24px'
                  isLoading
                  loadingText='YouTube'
                  colorScheme='red'
                  variant='outline'
                  spinnerPlacement='start'
                  marginLeft='10px'
                >
                  Youtube channel
                </Button>
              </Text>

              <Divider 
                orientation='horizontal'
                padding={5}
              />
              <List spacing={4} paddingTop={10}>
                <ListItem>
                  <ListIcon as={RiCamera3Line} color='green.500' />
                  <Link href='https://cweb.canon.jp/eos/special/kisssp/x9i-feature/index.html' isExternal color='teal.500'>
                  Camera: Canon EOS Kiss X9i <ExternalLinkIcon mx='2px' />
                  </Link>
                </ListItem>

                <ListItem>
                  <ListIcon as={RiCameraLensLine} color='green.500' />
                  <Link href='https://cweb.canon.jp/ef/lineup/ef-s/ef-s18-55-f4-56is-stm/' isExternal color='teal.500'>
                  Lens: EF-S18-55mm F4-5.6 IS STM <ExternalLinkIcon mx='2px' />
                  </Link>
                </ListItem>

                <ListItem>
                  <ListIcon as={RiCameraLensLine} color='green.500' />
                  <Link href='https://cweb.canon.jp/ef/lineup/ef-s/ef-s55-250-f4-56is-stm/' isExternal color='teal.500'>
                  Lens: EF-S55-250mm F4-5.6 IS STM <ExternalLinkIcon mx='2px' />
                  </Link>
                </ListItem>
                
              </List>
              
            </Container>
          </WrapItem>
        </Wrap>

        <Wrap px="1rem" spacing={4} justify={"center"} paddingTop={'30px'}>
            <WrapItem>
              <Center height={38}>
                <Tag size={'lg'} variant='subtle' colorScheme='cyan'>
                  <TagLeftIcon boxSize='12px' as={SiGmail} />
                  <TagLabel>trunghau60@gmail.com</TagLabel>
                </Tag>
              </Center>
            </WrapItem>

            <WrapItem>
              <Button spinner={<RiInstagramLine />} colorScheme='pink' variant='solid' isLoading spinnerPlacement='start' loadingText='Instagram'>
                Instagram
              </Button>
            </WrapItem>

            <WrapItem>
              <Button leftIcon={<RiGithubFill />} colorScheme='teal' variant='outline' as='a' href="https://github.com/Beomus" target='_blank'>
                GitHub
              </Button>
            </WrapItem>

            <WrapItem>
              <Button leftIcon={<RiAccountPinBoxFill />} colorScheme='blue' variant='outline' as='a' href="https://thatshau.com/" target='_blank' isActive>
                For Work
              </Button>
            </WrapItem>
          </Wrap>
      </VStack>
    </Box>
)