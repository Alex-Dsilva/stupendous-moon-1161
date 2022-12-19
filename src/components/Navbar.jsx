import React from "react";
import "./Navbar.css";
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




function Navbar() {
  return (
    <>

<Box
    height={"250px"}
    width={"1358px"}
    border={"2px solid #0e6548"}
    backgroundColor={"#0e6548"}
    marginLeft={"-42px"}
    // marginTop={"-100px"} 
    
    position={"fixed"} top={"0"} zIndex={5} >

  <Box gap={"30px"} display="flex" marginLeft={"1000px"} >
        <a href="" id="sap">Language</a>
        <a href="" id="sap">Support</a>

      </Box>
    
    <Box>
        <img id="logo" src={logo} alt="" />
      </Box>
    <Box>
    <Box >
    <input  type="text" id="search" onClick={"Enter"} placeholder={"Search by Keyword"}  />


    <a href="" id="sign">Sign In</a>

    <a href="" id="cart">Cart</a>
  </Box>



  <Box marginTop={"60px"} fontSize={"20px"}>
    <a href="" id="menu">Category</a>
    <a href="" id="new">new</a>
    <a href="" id="best">Bestselling</a>
    <a href="" id="brand">Brand</a>
    <a href="" id="clear">Clearence</a>
    <a href="" id="deal">Deals</a>
    <a href="" id="coup">Coupons</a>
    <a href="" id="ap">App Only</a>
    <a href="" id="what">What Geek</a>

  </Box>
</Box>
</Box>
</>);
}


export default Navbar;