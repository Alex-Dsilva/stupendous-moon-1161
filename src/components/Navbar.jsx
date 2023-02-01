import React from "react";
// import "./Navbar.css";
import logo from "../assets/onchoiselogo_4.jpg";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Image,
  Text,
  Icon,
  Input,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  MenuItem,
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




function Navbar() {

  const {product, auth } = useSelector(store => store);
  const {name}=auth
  
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
  <Box
    height="fit-content"
    w="100vw"
    pt="10px"
    border={"2px solid #0e6548"}
    backgroundColor={"#0e6548"}
    position={"fixed"} top={"0"} zIndex={5} >

  <Flex justify="space-around" align="center" >
    <Link to="/" style={{width:"80px"}}><Image w="80px" h="45px" id="logo" src={logo} alt="" /></Link>
    <Flex w="40%" justify="center" align="center" >
    <Input  w="80%"
   border="1px solid black"
   borderRight="0"
   borderLeftRadius="4px"
   h="38px"
   borderRightRadius="0" 
   bg="white"
  type="text" 
  id="search" 
  placeholder={"Search by Keyword"}
/>
<Button 
  border="1px solid black"
  w="50px" 

  borderLeft="0"
  borderLeftRadius="0"
  borderRightRadius="4px" 
  bg="white"
>
  <AiOutlineSearch style={{fontSize:"40px", fontWeight:"800"}} />
</Button>
    </Flex >
    <Flex w="20%" display={["none", "none", "flex"]} justify="space-around" align="center">
    <Link to="/login" style={{textDecoration:"none"}} id="sign"><Box color="#FFFFFF" fontWeight="600" >{name? name:"Sign In"}</Box></Link>
    <Link to="/cart" style={{textDecoration:"none"}}  id="cart"><Box color="#FFFFFF"><AiOutlineShoppingCart style={{fontSize:"22px",fontWeight:"900"}}/></Box></Link>
    </Flex>
    <Box display={["block", "none", "none"]}>
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
              <Link to="/login" style={{textDecoration:"none"}} id="sign"><Box color="#030202" fontWeight="600" >{name? name:"Sign In"}</Box></Link>
               <Link to="/cart" style={{textDecoration:"none"}}  id="cart"><Box color="#000000"><AiOutlineShoppingCart style={{fontSize:"22px",fontWeight:"900"}}/></Box></Link>
            </Flex>

            <Divider />

            <Link style={{textDecoration:"none"}} to="/newproducts" id="new">
              <Box color="#1a1818" fontWeight="600" >New</Box>
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
</ChakraProvider>
);
}


export default Navbar;




