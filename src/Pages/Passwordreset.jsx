import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import {RxEyeClosed, RxEyeOpen} from 'react-icons/rx'
import { getAuth, updatePassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import bg from "../assets/Signup.jpg"

const FormWrapper=styled.div`
    padding: 5px;
    width: 30%;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 10px rgb(0 0 0 / 20%);
    position: absolute;
    top: 200px;
    transform: translate(90%);
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
        color: antiquewhite;
        height: 44px;
        outline: none;
        text-align: center;
        line-height: 44px;
        cursor: pointer;
        background-color: #06f;
        font-size: 14px;
        font-weight: bold;
        border: 1px solid #06f;
        border-radius: 4px;
    }
    #New_Account{
        justify-self: center;
        width: 100%;
        align-self: center;
        color: #666;
        height: 44px;
        outline: none;
        text-align: center;
        line-height: 44px;
        cursor: pointer;
        background-color: #f0f0f0;
        font-size: 14px;
        font-weight: bold;
        border: 1px solid #d1d1d1;
        border-color: #d1d1d1;
        border-radius: 4px;
    }
`;

const FromPasswordInputWrapper=styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-indent: 14px;
    border: 1px solid #d1d1d1;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
`

const FormHead=styled.div`
    text-align: left;
`
const SignInput=styled.input`
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

const PasswordSignInput=styled.input`
     outline: none;
     width: 90%;
    line-height: 30px;
    text-indent: 14px;
    border:none;
    box-sizing: border-box;
`



const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
const Passwordreset = () => {
     const auth = getAuth();
    const user = auth.currentUser;
    const userRef=useRef();
    const errRef=useRef();


    const [checkpass, setCheckPass]=useState(false)

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');



    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])


    useEffect(() => {
        setErrMsg('');
    }, [pwd])
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = PWD_REGEX.test(pwd);
        if (!v1 ) {
            alert("Invalid Entry");
            return;
        }
        e.preventDefault()
        console.log("res")
        const data={
            password:pwd
        }
        updatePassword(user, data.password).then((res) => {
            console.log(res)
            alert("Password updated")
          }).catch((error) => {
            console.log(error)
            alert("Somthing went wrong Please try again!")
          });
      } 
       



  return (
    <div >
        <Link to="products"><img src={bg}/></Link>
       <FormWrapper>
        <FormHead>
            <h3>Reset your Password</h3>
        </FormHead>
        <SignInform onSubmit={ handleSubmit}>
            <div>
                <FromPasswordInputWrapper>
                    <PasswordSignInput type={checkpass?"text":"password"} placeholder="Password" name="password" onChange={(e) => setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}/>
                    {checkpass? <RxEyeOpen onClick={()=>setCheckPass(false)}/>:<RxEyeClosed onClick={()=>setCheckPass(true)} />}
                </FromPasswordInputWrapper>
                {pwdFocus && pwd && !validPwd?<label for="password">Please enter a valid password</label>:""}
            </div>
            <div>
                <FromPasswordInputWrapper>
                    <PasswordSignInput
                    type={checkpass?"text":"password"}
                    placeholder="Confirm Password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                />
                {checkpass? <RxEyeOpen onClick={()=>setCheckPass(false)}/>:<RxEyeClosed onClick={()=>setCheckPass(true)} />}
                </FromPasswordInputWrapper>
                {matchFocus && matchPwd && !validMatch ?<label for="confirm_pwd">password did not match</label>:""}
            </div>  
            <SignInput id="submit"  type="submit"/>

            <Link to="Signup"><button id="New_Account" >Create a new account</button></Link>
        </SignInform>
       </FormWrapper>
    </div>
  )
}

export default Passwordreset