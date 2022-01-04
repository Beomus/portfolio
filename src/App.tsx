import * as React from "react"
import {
  ChakraProvider,
  theme,
  Box,
  Heading,
  Center,
  Spacer,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/ColorModeSwitcher"
import { Contact } from "./components/Contact"
import Gallery from "./components/Gallery"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" padding='20px'>
              
        <Tabs align='start' variant='soft-rounded' direction='ltr'>
          
          <TabList>
            <Center>
              <Heading size='lg'>Portfolio</Heading>
            </Center>
            <Spacer />
            
            <Tab>Gallery</Tab>
            <Tab>Contact</Tab>
            
            <ColorModeSwitcher justifySelf="flex-end" />
          
          </TabList>
          
          <TabPanels>
            
            <TabPanel>
              <Gallery />
            </TabPanel>
            
            <TabPanel>
              <Contact />
            </TabPanel>
          </TabPanels>
        </Tabs>


    </Box>
    
  </ChakraProvider>
)
