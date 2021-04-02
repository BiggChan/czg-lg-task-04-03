// 登录
import { observer } from "mobx-react";
import useStores from '../stores/useStores'
import { Input, FormHelperText, Stack, FormControl, InputGroup, InputLeftElement, Button, Checkbox, Spacer, FormLabel, Text, Flex, useToast  } from "@chakra-ui/react"
import { LockIcon, EmailIcon, EditIcon } from '@chakra-ui/icons'
import axios from 'axios';
import {  useFormik } from "formik";
import * as Yup from "yup";


const Login = observer(() => {
  
  const { userStore } = useStores()
  const toast = useToast()
  const formik =  useFormik(
    {initialValues:{email:'', password: ''}, 
    onSubmit: function (values){
      toast({
        title: "登录",
        description: `邮箱：${values.email} 密码：${values.password}`,
        position: "top",
        status: "success",
        duration: 1000,
        isClosable: true,
      })
    },
    validationSchema: Yup.object({
      email: Yup.string().required("请输入邮箱").min(5, "用户名的长度不能小于5"),
      password: Yup.string().required("请输入密码").min(6, "密码的长度不能小于6"),
    })
  })
  return (
    <form >
      <Stack 
      flex="1"
      p={5}
      borderRadius="md">
      <FormControl >
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<EmailIcon color="gray.300" />}
          />
          <Input 
            placeholder="请输入邮箱" 
            name="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            />
        </InputGroup>
        {formik.touched.email && formik.errors.email ? <FormHelperText color="red" textAlign="left">{formik.errors.email}</FormHelperText>:null}
        </FormControl><FormControl>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={<LockIcon color="gray.300" />}
          />
          <Input 
            type="password" 
            placeholder="请输入密码" 
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </InputGroup>
        {formik.touched.password && formik.errors.password ? <FormHelperText color="red" textAlign="left">{formik.errors.password}</FormHelperText>:null}
      </FormControl>
        <Stack spacing ={5} pt={5}>
          <Flex>
            <Checkbox colorScheme="gray" color='#969696'>记住我</Checkbox>
            <Spacer />
            <Text as="a" _hover={{ color: "#f00"}} href="#" color='#969696'>登录遇到问题？</Text>
          </Flex>
          <Button colorScheme="blue" borderRadius="3xl" onClick={formik.handleSubmit} >登录</Button>
        </Stack>
      </Stack>
    </form>
  )
})
export default Login;
