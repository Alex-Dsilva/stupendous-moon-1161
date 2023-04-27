import React,{useState} from 'react'
import { Box, Button, ChakraProvider, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, InputRightElement, PinInput, PinInputField, Text } from '@chakra-ui/react'
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";
import {ref, set } from "firebase/database";
import { db } from "../utils/firebaseConfig";
import { FcGoogle } from 'react-icons/fc';
import { ViewIcon, ViewOffIcon, PhoneIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';


const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
const EMAIl_REGEX =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const PhoneLoginTest = () => {
    const [SeeOtp,setSeeOtp ]=useState(false)
    const [Email,SetEmail ]=useState(true)
    const [submitButton, setSubmitButton]=useState(false)
    const [Password,SetPassword ]=useState(true)
    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();
  
    const handleGooglelogin = () => {
      // signInWithPopup(auth, Googleprovider)
      //   .then((userCredential) => {
      //     const { displayName, uid, email } = userCredential.user;
      //     console.log(userCredential)
          set(ref(db, 'Categories'), {
            username: displayName,
            email: email,
            city : null,
            state:null,
            dob:null
          });
        // }
  
        // ).catch((err) => {
        //   alert(err.message);
  
        // })
    }

    const genrateRecaptcha = () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
        window.recaptchaVerifier = new RecaptchaVerifier(
          "sign-in-button",
          {
            size: "invisible",
            callback: (response) => {}
          },
          auth
        );
      };


      const handleSubmit = () => {
        if (value === "" || value === undefined || value.length < 12)
          return seterr("invalid phone No.");
        genrateRecaptcha();
        const AppVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+${value}`, AppVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setSeeOtp(true);
          })
          .catch((error) => {
            alert("Error SMS not sent please try again" + `${error}`);
          });
      };
  
    // const handleSubmit=(e)=>{
    //   alert("bye")
        // e.preventDefault()
        // setSubmitButton(true);
        // console.log(e.target[0].value)
        // const name =e.target[0].value
        // const phone_number=e.target[1].value
        // const city=e.target[2].value
        // const state=e.target[3].value
        // const dob=e.target[4].value
        // const otp=e.target[5].value
        // SetEmail(EMAIl_REGEX.test(email))
        // SetPassword(PWD_REGEX.test(password))
        // if(!Email || !Password){
        //   return 
        // }
        // createUserWithEmailAndPassword(auth, email, password) .then(async (res) => { 
        //   const user = res.user;
        //   await updateProfile(user, {
        //     displayName: name,
        //   });
        //   set(ref(db, 'users/' + user.uid), {
        //     username: name,
        //     email: email,
        //     city : city,
        //     state:state,
        //     dob:dob
        //   });
        //   setSubmitButton(false);
        //   // navigate("/");
        // })
        // .catch((err) => {
        //   setSubmitButton(false);
        //   alert(err.message);
  
        // });
  
  
    // }
  return (
    <ChakraProvider>
    <Box>

      <Flex id='Form container' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' flexDir='column'  w='350px' p='5' m='auto' mt='50px'>
        <Text as='b' m='2' textAlign='center'>Sign Up</Text>
      <form onSubmit={handleSubmit}>
      <FormControl mb='4'>
        <FormLabel>Name</FormLabel>
        <Input type='text' required placeholder='Enter your Full Name'/>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
       <FormControl mb='4'>
        <FormLabel>Phone No.</FormLabel>
        <InputGroup>
                <InputLeftAddon children='+91' />
                <InputRightElement
                pointerEvents='none'
                children={<PhoneIcon color='gray.300' />}
                 />
                <Input type='number' placeholder='phone number' />
        </InputGroup>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl> 
      <FormControl mb='4'>
        <FormLabel>City</FormLabel>
        <Input type='text' required placeholder='Enter your City'/>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl mb='4'>
        <FormLabel>State</FormLabel>
        <Input type='text' required placeholder='Enter your State'/>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      <FormControl mb='4'>
        <FormLabel>Date of Birth</FormLabel>
        <Input type='date' required placeholder='Enter your D.O.B'/>
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>
      {SeeOtp?"":(
        <FormControl mb='4'>
           <FormLabel>Enter your 6 Digit  OTP</FormLabel>
           <PinInput size='md' textAlign='center' type="number" placeholder="•" >
              <PinInputField mr='2' />
              <PinInputField mr='2' />
              <PinInputField mr='2' />
              <PinInputField mr='2' />
              <PinInputField mr='2' />
              <PinInputField mr='2' />
         </PinInput>
        </FormControl>
      )}
      {SeeOtp? (<Button type='submit' w='100%' bg='gray.500' color='white' isLoading={submitButton}>Submit</Button>):(
        <Button onClick={ handleSubmit } w='100%' bg='gray.500' color='white' isLoading={false} >
        Get OTP
      </Button>
      )}
      
      
      <Text p='2'>Alreay have a account  <Link to='login'><Text as='b' color='blue.600'>Login</Text></Link></Text>
      </form>
      
          <Text textAlign='center ' mt='5'>or</Text>
      <Flex justifyContent='space-around' mt='3' >
      <FcGoogle cursor={'pointer'} onClick={handleGooglelogin} style={{width:'30px', height:'30px'}}/>
      <PhoneIcon onClick={()=>alert("hi")} w='25px' h='25px'/>
      </Flex>
      </Flex>
      <div id="sign-in-button" />
    </Box>
  </ChakraProvider>
  )
}

export default PhoneLoginTest