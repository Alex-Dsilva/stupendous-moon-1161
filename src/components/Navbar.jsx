import React from "react";
import "./Navbar.css";
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
    
      p="10px"
      pb='0px'
      width='100%'
      maxw="1200px"
      className="navbarBox"
      display="flex"
      gap="40px"
      justifyContent="space-between"
      // position={'fixed'}
      // top='0px'
      // margin='auto'
      // zIndex='200'
      background={'#f8f9fa'}
      
      
  
    >
      <Center maxWidth="300px" minW="150px" h="108px">
        <Link to="/">
          <Image
            cursor="pointer"
            w="80%"
            minW="160px"
            src=""
          ></Image>
        </Link>
      </Center>
      <Box className="navSecondBox" flexGrow="60%">
        <Flex p="10px" gap="20px" flexDir="row-reverse" >
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Country Website
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Language
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Support Center
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Ship to
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Mobile Offer
          </Text>
        </Flex>
        <Flex p="10px" gap="40px" flexDir="row-reverse">
          <Link to="/cart">
            <Center cursor="pointer" gap="10px">
              <Icon boxSize="1.5rem" as={AiOutlineShoppingCart} />
              <Text fontSize="1.05rem">Cart</Text>
            </Center>
          </Link>
          <Link to="/wishlist">
            <Center cursor="pointer" gap="10px">
              <Icon boxSize="1.5rem" as={AiOutlineHeart} />
              <Text fontSize="1.15rem">Favourites</Text>
            </Center>
          </Link>
          <Link to="/login">
            <Center cursor="pointer" gap="10px">
              <Icon boxSize="1.5rem" as={CgProfile} />
              <Text fontSize="1.05rem">Log In</Text>
            </Center>
          </Link>
          <Flex h="35px" border="2.2px solid #3a86ff" borderRadius="25px">
            <Input
              h="100%"
              className="NavInput"
              maxW="300px"
              borderLeftRadius="25px"
              borderWidth="0px"
              fontSize="1.1rem"
              placeholder="mobile phone"
              py="-4px"
            ></Input>
            <Button h="100%" borderRadius="25px">
              <Center>
                <Icon boxSize="1.3rem" as={AiOutlineSearch}></Icon>
              </Center>
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box className="NavMenu">
        <Center>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Menu
            </MenuButton>
            <MenuList>
              <Link to="/signup">
                <MenuItem>Sign up</MenuItem>
              </Link>
              <Link to="/wishlist">
                <MenuItem>Wish List</MenuItem>
              </Link>
              <Link to="/cart">
                <MenuItem>Cart</MenuItem>
              </Link>
              <Link to="/products">
                <MenuItem>Mobiles</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Center>
      </Box>
    </Box>

 
    </>
  );
}

export default Navbar;