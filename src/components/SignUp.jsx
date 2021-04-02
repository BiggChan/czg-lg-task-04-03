// 注册
import { Center , Input, Stack, InputGroup, InputLeftElement, Button, Text, } from "@chakra-ui/react"
import { LockIcon, EmailIcon, EditIcon } from '@chakra-ui/icons'

const Login = () => {
  return (
    <form>
      <Stack 
      flex="1"
      p={5}
      borderRadius="md">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<EmailIcon color="gray.300" />}
          />
          <Input placeholder="请输入邮箱" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<EditIcon color="gray.300" />}
          />
          <Input type="text" placeholder="请输入用户名" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<LockIcon color="gray.300" />}
          />
          <Input type="password" placeholder="请输入密码" />
        </InputGroup>
        <Stack p={5}>
            <Button  colorScheme="green" borderRadius="3xl">注册</Button>
        </Stack>
        <Center>
            <Text>点击 “注册” 即表示您同意并愿意遵守简书</Text>
        </Center>
        <Center >
            <Text px={2} as="a" _hover={{ color: "#f00"}} href="#" color='blue'>用户协议</Text>
            和
            <Text px={2} as="a" _hover={{ color: "#f00"}} href="#" color='blue'>隐私政策</Text>
        </Center>
        
      </Stack>
    </form>
  )
}
export default Login;
