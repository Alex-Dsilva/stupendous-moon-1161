import React from "react";
// import "./Navbar.css";
import logo from "../assets/onchoiselogo_4.jpg";
import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Text,
  Icon,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
} from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";




function Navbar() {


  
  const { Appreducer, Authreducer } = useSelector(store => store);
  const {name}= Authreducer

  return (

<Box
    height="fit-content"
    w="100%"
    pt="10px"
    border={"2px solid #0e6548"}
    backgroundColor={"#0e6548"}
    position={"fixed"} top={"0"} zIndex={5} >

  <Flex justify="space-around" align="center" >
    <Link to="/" style={{width:"15%"}}><Image w="100%" h="55px" id="logo" src={logo} alt="" /></Link>
    <Flex w="40%">
    <Input h="30px" pl="20px" w="100%" textAlign="left" border="none" borderLeftRadius="4px" outline="none" type="text" id="search" placeholder={"Search by Keyword"}/>
    <Button border="none" w="30px" borderRightRadius="4px" bg="white"><AiOutlineSearch style={{fontSize:"16px", fontWeight:"800"}}/></Button>
    </Flex>
   
    <Flex w="20%" justify="space-around" align="center">
    <Link to="/login" style={{textDecoration:"none"}} id="sign"><Box color="#FFFFFF" fontWeight="600" >{name? name:"Sign In"}</Box></Link>
    <Link to="/cart" style={{textDecoration:"none"}}  id="cart"><Box color="#FFFFFF"><AiOutlineShoppingCart style={{fontSize:"22px",fontWeight:"900"}}/></Box></Link>
    </Flex>
  </Flex>


  <Flex w="60%" h="40px" m="auto" align="center" color="#FFFFFF" justify="space-around">
    <Link style={{textDecoration:"none"}} to="/newproducts" id="new"><Box color="#FFFFFF" fontWeight="600" >new</Box></Link>
    <Link style={{textDecoration:"none"}}  to="/bestproducts" id="best"><Box color="#FFFFFF" fontWeight="600">Bestselling</Box></Link>
    <Link style={{textDecoration:"none"}}to="/clearanceproducts" id="clear"><Box color="#FFFFFF" fontWeight="600">Clearance</Box></Link>
    <Link style={{textDecoration:"none"}} to="/todaydeals" id="deal"><Box color="#FFFFFF" fontWeight="600">Deals</Box></Link>
    <Link style={{textDecoration:"none"}} to="/payment" id="coup"><Box color="#FFFFFF" fontWeight="600">Wallet</Box></Link>
    <Link style={{textDecoration:"none"}} to="/apponlyproducts" id="ap"><Box color="#FFFFFF" fontWeight="600">App Only</Box></Link>
  </Flex>
</Box>);
}


export default Navbar;


