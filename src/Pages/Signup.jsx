import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { loadCaptchaEnginge,LoadCanvasTemplateNoReload,validateCaptcha} from 'react-simple-captcha';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile
  } from "firebase/auth";
import { app, db } from "../config/firebaseConfig"
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';


const CaptchaContainer=styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    > #Captchadiv{
        display: flex;
        flex-direction: column;
        > label{
            font-size: 12px;
        }
    }
`;

const FromCaptchaInputWrapper=styled.div`
    border:1.5px solid ;
    width: 98px;
   height: 30px;

`

const CaptchaInput=styled.input`
   width: 90px;
   height: 28px;
   border: none;
   outline: none;
`;

const FormWrapper=styled.div`
    padding: 5px;
    width: 35%;
    padding: 20px 30px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    position: absolute;
    top: 200px;
    transform: translate(75%);
    z-index: 3;
`;

const SignInform=styled.form`
   display: flex;
   flex-direction: column;
   gap: 15px;
   justify-content: center;

    #submit{
        justify-self: center;
        align-self: center;
        background-color: #06f;
        color: antiquewhite;
        height: 44px;
        outline: none;
        text-align: center;
        line-height: 44px;
        cursor: pointer;
        background-color: #06f;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        border: 1px solid #06f;
        border-radius: 4px;
    }
   > div{
    text-align: left;
    > label {
        font-size: 12px;
        line-height: 0;
    }
   }
`;

const FromInputWrapper=styled.div`
    /* border:1.5px solid ; */

`

const FormHead=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    > p{
        cursor: pointer;
    }
`

const SignInput=styled.input`
    /* height: 25px;
    width: 95%; */
    outline: none;

    width: 100%;
    height: 44px;
    line-height: 44px;
    text-indent: 14px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
`;

function Signup() {

    const auth = getAuth();
    const [checkCaptcha, setCheckCaptcha]= useState(false)
    const [data, setdata] = useState({});

    useEffect(()=>{
        loadCaptchaEnginge(5);
    },[])

    const handleInput = (event) => {
        let input = { [event.target.name]: event.target.value };
    
        console.log(event.target.value);
        setdata({ ...data, ...input });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        if(data.username!==undefined||""){
          if(data.email!==undefined||""){
            console.log("hi")
            createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
              updateProfile(auth.currentUser, {
                displayName: data.username
              });
              console.log(res);
              const docData={
                address: {
                  pincode: "",
                  locality: "",
                  city: "",
                  state: "",
                },
                wishlist:[],
                bag:[],
                phone:""
              }
             setDoc(doc(db, "users", `${res.user.uid}`), docData);
            //  navigate("/");
            alert("sign")
            })
            .catch((err) => alert(err));
          } 
       
        }
    }

    const handleCaptchaChange=(e)=>{
        let Captcha = e.target.value;
        console.log(Captcha.length)
        if(Captcha.length===5){
            console.log(Captcha)
            if(validateCaptcha(Captcha)===true){

                setCheckCaptcha(true)
            }else{
                loadCaptchaEnginge(5); 
            }
        }
    }

  return (
    <div >
       <FormWrapper>
        <FormHead>
            <h3>Create your account</h3>
            <p onClick={()=>alert("sign in")}>Sign in</p>
        </FormHead>
        <SignInform onSubmit={ handleSubmit }>
            <div>
                <FromInputWrapper>
                    <SignInput type="text" placeholder="Nick name" name="username" onChange={handleInput}/>
                </FromInputWrapper>
                <label for="name">Please enter your name</label>
            </div>
            <div>
                <FromInputWrapper>
                    <SignInput type="email" placeholder="Email address" name="email" onChange={handleInput}/>
                </FromInputWrapper>
                <label for="name">Please enter a valid email address</label>
            </div>
            <div>
                <FromInputWrapper>
                    <SignInput type="text" placeholder="Password" name="password" onChange={handleInput}/>
                </FromInputWrapper>
                <label for="name">Please enter a valid password</label>
            </div>
            <CaptchaContainer>
            <div id="Captchadiv">
                <FromCaptchaInputWrapper>
                    <CaptchaInput placeholder="Enter Captcha" onChange={handleCaptchaChange} id="user_captcha_input" name="user_captcha_input" type="text"/>
                </FromCaptchaInputWrapper>
                <label for="name">Enter the verification code</label>
            </div>
            
               <LoadCanvasTemplateNoReload/>
            </CaptchaContainer>
        
            <SignInput id="submit" type="submit"/>

        </SignInform>
       </FormWrapper>
    </div>
  )
}

export default Signup

