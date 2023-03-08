import React from "react";
// import "./Navbar.css";
import logo from "../assets/onchoiselogo_4.jpg";
import {
  Box,

  Divider,
  Flex,
  Image,
  Input,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";



function Navbar() {

  // const { auth } = useSelector(store => store);
  const [search, setSearch]=useState('')
  const {name} = useSelector(store => store.Authreducer);
  // const {name}=auth
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
  <Box
    height="fit-content"
    pt="10px"
    display="flex"
    justify="center"
    alignItems="center"
    border={"2px solid #046381"}
    backgroundColor={"#046381"}
     top={"0"} zIndex={5} >
  <Link to="/" style={{width:"150px", marginLeft:"20px"}}><Image w="150px" h="45px" id="logo" src={logo} alt="" /></Link>
  <Box w="100%">
  <Flex justify="space-around" align="center" ml={["0px","100px", "100px"]} >
    <Flex w={["50%", "50%", "70%"]} justify="center" align="center" >
              <Input w="80%"
                border="1px solid black"
                borderRight="0"
                borderLeftRadius="4px"
                h="35px"
                borderRightRadius="0"
                bg="white"
                type="text"
                id="search"
                placeholder={"Search by Keyword"}
                onChange={(e)=>setSearch(e.target.value)}
              />
<Button 
  border="1px solid black"
  w="50px" 
  h={["36px","36.5px", "37px"]}
  borderLeft="0"
  borderLeftRadius="0"
  borderRightRadius="4px" 
  bg="white"
>
  <AiOutlineSearch style={{fontSize:"35px", fontWeight:"800"}} />
</Button>
    </Flex >
    <Flex w={["15%","20%","15%"]} display={["none", "none", "flex"]} justify="space-around" align="center">
    <Link to="/login" style={{textDecoration:"none"}} id="sign"><Box color="#FFFFFF" fontWeight="600" >{name? name:"Sign In"}</Box></Link>
    <Link to="/cart" style={{textDecoration:"none"}}  id="cart"><Box color="#FFFFFF"><AiOutlineShoppingCart style={{fontSize:"22px",fontWeight:"900"}}/></Box></Link>
    </Flex>
    <Box display={["block", "block", "none"]}>
        <IconButton
          icon={<AiOutlineMenu />}
          fontSize="20px"
          aria-label="Open Navigation Menu"
          onClick={onOpen}
        />
        <Drawer isOpen={isOpen} onClose={onClose} placement="right">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Navigation</DrawerHeader>
            <DrawerBody p="10px" textAlign="left">
            
            <Flex w="100%" p="10px" justify="space-around" align="center">
              <Link to="/login" onClick={onClose} style={{textDecoration:"none"}} id="sign"><Box color="#030202" fontWeight="600" >{name? name:"Sign In"}</Box></Link>
              <Link to="/cart" onClick={onClose} style={{textDecoration:"none"}}  id="cart"><Box color="#000000"><AiOutlineShoppingCart style={{fontSize:"22px",fontWeight:"900"}}/></Box></Link>
            </Flex>

            <Divider />
            <Box p="30px">
            <Link style={{textDecoration:"none"}} to="/newproducts" id="new">
              <Box color="#1a1818" p="10px 0px" fontWeight="600" >New</Box>
            </Link>
            
            <Link style={{textDecoration:"none"}}  to="/bestproducts" id="best">
              <Box color="#1a1818" p="10px 0px" fontWeight="600">Bestselling</Box>
            </Link>
            
            <Link style={{textDecoration:"none"}}to="/clearanceproducts" id="clear">
              <Box color="#1a1818" p="10px 0px"  fontWeight="600">Clearance</Box>
            </Link>
            
            <Link style={{textDecoration:"none"}} to="/todaydeals" id="deal">
              <Box color="#1a1818" p="10px 0px" fontWeight="600">Deals</Box>
            </Link>
            
            <Link style={{textDecoration:"none"}} to="/payment" id="coup">
              <Box color="#1a1818" p="10px 0px" fontWeight="600">Wallet</Box>
            </Link>
            
            <Link style={{textDecoration:"none"}} to="/apponlyproducts" id="ap">
              <Box color="#1a1818" p="10px 0px" fontWeight="600">App Only</Box>
            </Link>
            </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </Box>
  </Flex>

  <Flex
        w="60%"
        h="40px"
        m="auto"
        align="center"
        color="#FFFFFF"
        justify="space-around"
        display={["none", "none", "flex"]}
      >
        <Link style={{textDecoration:"none"}} to="/newproducts" id="new"><Box color="#FFFFFF" fontWeight="600" >New</Box></Link>
        <Link style={{textDecoration:"none"}}  to="/bestproducts" id="best"><Box color="#FFFFFF" fontWeight="600">Bestselling</Box></Link>
        <Link style={{textDecoration:"none"}}to="/clearanceproducts" id="clear"><Box color="#FFFFFF" fontWeight="600">Clearance</Box></Link>
        <Link style={{textDecoration:"none"}} to="/todaydeals" id="deal"><Box color="#FFFFFF" fontWeight="600">Deals</Box></Link>
        <Link style={{textDecoration:"none"}} to="/payment" id="coup"><Box color="#FFFFFF" fontWeight="600">Wallet</Box></Link>
        <Link style={{textDecoration:"none"}} to="/apponlyproducts" id="ap"><Box color="#FFFFFF" fontWeight="600">App Only</Box></Link>
      </Flex>
</Box>
</Box>
</ChakraProvider>
);
}


export default Navbar;




