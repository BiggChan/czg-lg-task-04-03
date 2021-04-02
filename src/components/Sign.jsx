import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Center,Heading  } from "@chakra-ui/react"

const Account = () =>{
    return (
        <Box bg="gray" h="100vh" pt={20}>
            
            <Box bg="white" w={500} mx="auto" pt={10} overflow="hidden" >
                <Tabs variant="line" align="center" colorScheme="red"  >
                    <TabList mb="1em" border="none">
                    <Tab border="none" 
                    _selected={{borderRadius:"none",boxShadow:"none",borderBottom:"1px solid red",color:"red"}}
                    _hover={{borderRadius:"none",boxShadow:"none",borderBottom:"1px solid red"}}
                    >登录</Tab>
                    <Center w="10" >*</Center>
                    <Tab border="none" 
                    _selected={{borderRadius:"none",boxShadow:"none",borderBottom:"1px solid red",color:"red"}}
                    _hover={{borderRadius:"none",boxShadow:"none",borderBottom:"1px solid red"}}
                    >注册</Tab>
                    </TabList>
                    <Heading as="h3" size="lg">接口422，formik只实现了登录</Heading>
                    <TabPanels>
                        <TabPanel>
                            <SignIn></SignIn>
                        </TabPanel>
                        <TabPanel>
                            <SignUp></SignUp>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    )
   
}

export default Account