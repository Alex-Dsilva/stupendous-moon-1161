import React,{useState} from 'react'
import { Box, Button, ChakraProvider, Flex, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import {ref, get, child,set, getDatabase } from "firebase/database";
import { db } from "../utils/firebaseConfig";
import { FcGoogle } from 'react-icons/fc';
import { ViewIcon, ViewOffIcon, PhoneIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
const EMAIl_REGEX =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LoginTest = () => {
  const [seePassword,setSeePassword ]=useState(false)
  const [Email,SetEmail ]=useState(true)
  const [submitButton, setSubmitButton]=useState(false)
  const [Password,SetPassword ]=useState(true)
  const auth = getAuth();
  const Googleprovider = new GoogleAuthProvider();

  const handleGooglelogin = () => {
    signInWithPopup(auth, Googleprovider)
      .then((userCredential) => {
        const { displayName, uid, email } = userCredential.user;
        console.log(userCredential)
        set(ref(db, 'users/' + uid), {
          username: displayName,
          email: email,
          city : null,
          state:null,
          dob:null
        });
      }

      ).catch((err) => {
        alert(err.message);

      })
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      setSubmitButton(true);
      console.log(e.target[0].value)
      const email=e.target[0].value
      const password=e.target[1].value
      SetEmail(EMAIl_REGEX.test(email))
      SetPassword(PWD_REGEX.test(password))
      if(!Email || !Password){
        return 
      }
      signInWithEmailAndPassword(auth, email, password) .then(async (res) => { 
        const user = res.user;
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
        setSubmitButton(false);
        // navigate("/");
      })
      .catch((err) => {
        setSubmitButton(false);
        alert(err.message);

      });


  }

  return (
    <ChakraProvider>
      <Box>

        <Flex id='Form container' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' flexDir='column'  w='350px' p='5' m='auto' mt='50px'>
          <Text as='b' m='2' textAlign='center'>Login</Text>
        <form onSubmit={handleSubmit}>
         <FormControl mb='4'>
          <FormLabel>Email address</FormLabel>
          <Input type='email' required placeholder='Enter your Email'/>
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl> 
        <FormControl mb='4'>
          <FormLabel>Enter your Password</FormLabel>
          <Flex>
            <Input borderRightRadius="0" required borderRight='none' type={seePassword? 'text':'password'} placeholder='Enter your Password' />
            <Button borderLeftRadius="0" onClick={()=>setSeePassword(!seePassword)}>{seePassword? <ViewOffIcon/>:<ViewIcon/>}</Button>
          </Flex>
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Button type='submit' w='100%' bg='gray.500' color='white' isLoading={submitButton}>Submit</Button>
        <Text p='2'>New to the site  <Link to='Signup'><Text as='b' color='blue.600'>Signup</Text></Link></Text>
        </form>
            <Text textAlign='center ' mt='5'>or</Text>
        <Flex justifyContent='space-around' mt='3' >
        <FcGoogle cursor={'pointer'} onClick={handleGooglelogin} style={{width:'30px', height:'30px'}}/>
        <PhoneIcon onClick={()=>alert("hi")} w='25px' h='25px'/>
        </Flex>
        </Flex>
        
      </Box>
    </ChakraProvider>

  )
}

export default LoginTest


// name 
// email
// phone No
// 