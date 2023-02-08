import React, { useEffect, useState, useRef, memo } from "react";
import styled from "styled-components";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
  loginrequest,
  loginsuccess,
  loginfailure,
} from "../redux/Auth/AuthAction";
import { app, db } from "../config/firebaseConfig";
import { doc, getDoc, setDoc, collection } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/Signup.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
const EMAIl_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const Login = () => {
  const auth = getAuth();
  const userRef = useRef();
  const errRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checkpass, setCheckPass] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setValidEmail(EMAIl_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = PWD_REGEX.test(pwd);
    const v2 = EMAIl_REGEX.test(email);
    if (!v1 || !v2) {
      alert("Invalid Entry");
      return;
    }
    e.preventDefault();
    console.log("res");
    const data = {
      email: email,
      password: pwd,
    };
    dispatch(loginrequest());
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const { displayName, uid } = userCredential.user;
        console.log(displayName, uid);
        const query = doc(db, "users", `${uid}`);
        getDoc(query)
          .then((res) => {
            const address = {
              pincode:
                res._document.data.value.mapValue.fields.address.mapValue.fields
                  .pincode.integerValue,
              locality:
                res._document.data.value.mapValue.fields.address.mapValue.fields
                  .locality,
              city:
                res._document.data.value.mapValue.fields.address.mapValue.fields
                  .city.stringValue,
              state:
                res._document.data.value.mapValue.fields.address.mapValue.fields
                  .state.stringValue,
            };
            const { bag, phone } = {
              bag:
                res._document.data.value.mapValue.fields.bag.arrayValue.values,
              phone: res._document.data.value.mapValue.fields.phone.stringValue,
            };

            console.log("data", bag, phone);
            console.log("address", address);

            dispatch(loginsuccess({ displayName, uid, address, bag, phone }));
            navigate("/");
          })

          .catch((err) => alert(err.message));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Sign-in Failed : ${errorMessage}`);
      });
  };

  return (
    <Formbg>
      <FormWrapper>
        <FormHead>
          <Button
            display={"block"}
            margin={"auto"}
            marginBottom={"1rem"}
            colorScheme="blue"
          >
            Fill Your Credentials to Log in
          </Button>
        </FormHead>
        <SignInform onSubmit={handleSubmit}>
          <div>
            <FromInputWrapper>
              <SignInput
                type="email"
                placeholder="Email address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </FromInputWrapper>
            {emailFocus && email && !validEmail ? (
              <label htmlFor="email">Please enter a valid email address</label>
            ) : (
              ""
            )}
          </div>
          <div>
            <FromPasswordInputWrapper>
              <PasswordSignInput
                type={checkpass ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              {checkpass ? (
                <RxEyeOpen onClick={() => setCheckPass(false)} />
              ) : (
                <RxEyeClosed onClick={() => setCheckPass(true)} />
              )}
            </FromPasswordInputWrapper>
            {pwdFocus && pwd && !validPwd ? (
              <label htmlFor="password">Please enter a valid password</label>
            ) : (
              ""
            )}
          </div>
          <CheckOut>
            <Left>
              <input
                type="checkbox"
                placeholder="checkbox"
                name="checkbox"
                onChange={(e) => console.log(e.target.value)}
              />
              <span htmlFor="checkbox">Keep me signed in </span>
              <AiOutlineQuestionCircle />
            </Left>
            <Right>
              <Link to="/passwordreset">
                <div>Forgot your password?</div>
              </Link>
            </Right>
          </CheckOut>
          <SignInput id="submit" type="submit" />
          <Link to="/signup">
            <Button id="New_Account">Create a new account</Button>
          </Link>
          <Orline>
            <span>or</span>
          </Orline>
          <Gdiv>
            <FcGoogle />
          </Gdiv>
        </SignInform>
      </FormWrapper>
    </Formbg>
  );
};

export default memo(Login, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});

const Formbg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;

const FormWrapper = styled.div`
  padding: 5px;
  /* width: 30%; */
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgb(0 0 0 / 20%);
  position: absolute;

  /* top: 200px;
    transform: translate(90%);
    text-align: left; */
  z-index: 3;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SignInform = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

  #submit {
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
  #New_Account {
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
  > div {
    text-align: left;
    > label {
      font-size: 12px;
      line-height: 0;
      color: red;
      ::after {
        content: "*";
      }
    }
  }
`;

const FromInputWrapper = styled.div`
  /* border:1.5px solid ; */
  text-align: left;
`;

const CheckOut = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 100;
  > span {
    font-size: 14px;
    color: #666;
  }
`;
const Orline = styled.div`
  height: 20px;
  border-bottom: 1px solid #e6e7e8;
  position: relative;
  > span {
    font-size: 14px;
    width: 50px;
    color: #999;
    background-color: #fff;
    padding: 0 13px;
    margin-left: -21px;
    position: absolute;
    left: 50%;
    bottom: -9px;
    z-index: 2;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  > div {
    font-size: 13px;
    height: 18px;
    cursor: pointer;
    text-decoration: underline #999;
    color: #999;
    display: inline-block;
  }
`;
const BgImage = styled.img`
  width: 100%;
  height: 100%;
  border: none;
`;
const FromPasswordInputWrapper = styled.div`
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
  /* display: inline-block; */
`;

const FormHead = styled.div`
  text-align: left;
`;
const Gdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  > svg {
    height: 44px;
    width: 35px;
  }
`;
const SignInput = styled.input`
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
  text-align: left;
`;

const PasswordSignInput = styled.input`
  outline: none;
  width: 88%;
  line-height: 30px;
  text-indent: 14px;
  text-align: left;
  display: inline-block;
  border: none;
  box-sizing: border-box;
`;
