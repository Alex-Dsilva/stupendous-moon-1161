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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Text,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMenu,
  AiOutlineSearch,
  BsChevronDown,
  BsChevronUp,
  FiSmartphone
} from "react-icons/all";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomPopover from "./CustomPopover";
import { useState } from "react";



function Navbar() {

  // const { auth } = useSelector(store => store);
  const [search, setSearch] = useState('')
  const { name } = useSelector(store => store.Authreducer);
  // const {name}=auth
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Box
        height="fit-content"
        display="flex"
        justify="center"
        flexDirection='column'
        alignItems="center"
        w={['100vw', 'inherit', 'inherit']}
        border={"2px solid #046381"}
        backgroundColor={"#046381"}
        top={"0"} zIndex={5} >
        <Flex w='100%' justify='flex-end' gap='6' mr={10}>
          <CustomPopover trigger={<Button>Popover 1</Button>} height='fit-content'>
              <>
              <Text mb='1' noOfLines={3} >Download app to get up to 70% off <br/> app-only deals and coupons worth $50</Text>
              <Flex align='center' justify='center'>
                <Image h='8rem' w='8rem' src='https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png' alt='qr Download'/>
                <Box p='1'>
                <Image mt='2'mb='2' src='https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg' alt='qr Download'/>
                <Image mb='2.5' src='https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg' alt='qr Download'/>
                <Image mb='2.5' src='https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg' alt='qr Download'/>
                </Box>
              </Flex>
                </>
          </CustomPopover>
          <Popover placement='bottom-end'>
            <PopoverTrigger >
              <Flex align='center' p='2'>
                <FiSmartphone style={{ fontSize: "24px", color:'white' }}/>
                <Text fontSize='13.5px' mr='1.5' color='white' >Save $50 with App</Text>
                {false ? <BsChevronDown style={{color:'white' }}/>:<BsChevronUp style={{color:'white' }}/>}
              </Flex>
            </PopoverTrigger>
            <PopoverContent h='100px' overflowY='scroll' w='fit-content' m='auto' p='10px'>
              <PopoverArrow />
              <PopoverBody>
                
              </PopoverBody>
              {/* <PopoverFooter>This is the footer</PopoverFooter> */}
            </PopoverContent>
          </Popover>
          <Popover placement='bottom-end'>
            <PopoverTrigger>
              <Flex align='center' p='2' gap={1}>
              <Text fontSize='13.5px' color='white' >English</Text>
              {true ? <BsChevronDown style={{color:'white' }}/>:<BsChevronUp style={{ color:'white' }}/>}
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
          </Popover>
          <Popover placement='bottom-end'>
            <PopoverTrigger>
              <Flex align='center' p='2' gap={1}>
                <Text fontSize='13.5px' color='white' >Support Center</Text>
                {true ? <BsChevronDown style={{color:'white' }}/>:<BsChevronUp style={{color:'white' }}/>}
              </Flex>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
        <Divider bg='white' variant='solid' h='1px' orientation='horizontal' />
        <Box w='100%' border='1px solid' bg='blue.600' p='5'></Box>
        <Box w='100%' border='1px solid' bg='green.500' p='5'></Box>
      </Box>
    </ChakraProvider>
  );
}


export default Navbar;



{/* <Link to="/" style={{ width: "150px", marginLeft: "20px" }}><Image w="150px" h="45px" id="logo" src={logo} alt="" /></Link>
        <Box w="100%">
          <Flex justify="space-around" align="center" ml={["0px", "100px", "100px"]} >
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
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                border="1px solid black"
                w="50px"
                h={["36px", "36.5px", "37px"]}
                borderLeft="0"
                borderLeftRadius="0"
                borderRightRadius="4px"
                bg="white"
              >
                <AiOutlineSearch style={{ fontSize: "35px", fontWeight: "800" }} />
              </Button>
            </Flex >
            <Flex w={["15%", "20%", "15%"]} display={["none", "none", "flex"]} justify="space-around" align="center">
              <Link to="/login" style={{ textDecoration: "none" }} id="sign"><Box color="#FFFFFF" fontWeight="600" >{name ? name : "Sign In"}</Box></Link>
              <Link to="/cart" style={{ textDecoration: "none" }} id="cart"><Box color="#FFFFFF"><AiOutlineShoppingCart style={{ fontSize: "22px", fontWeight: "900" }} /></Box></Link>
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
                      <Link to="/login" onClick={onClose} style={{ textDecoration: "none" }} id="sign"><Box color="#030202" fontWeight="600" >{name ? name : "Sign In"}</Box></Link>
                      <Link to="/cart" onClick={onClose} style={{ textDecoration: "none" }} id="cart"><Box color="#000000"><AiOutlineShoppingCart style={{ fontSize: "22px", fontWeight: "900" }} /></Box></Link>
                    </Flex>

                    <Divider />
                    <Box p="30px">
                      <Link style={{ textDecoration: "none" }} to="/newproducts" id="new">
                        <Box color="#1a1818" p="10px 0px" fontWeight="600" >New</Box>
                      </Link>

                      <Link style={{ textDecoration: "none" }} to="/bestproducts" id="best">
                        <Box color="#1a1818" p="10px 0px" fontWeight="600">Bestselling</Box>
                      </Link>

                      <Link style={{ textDecoration: "none" }} to="/clearanceproducts" id="clear">
                        <Box color="#1a1818" p="10px 0px" fontWeight="600">Clearance</Box>
                      </Link>

                      <Link style={{ textDecoration: "none" }} to="/todaydeals" id="deal">
                        <Box color="#1a1818" p="10px 0px" fontWeight="600">Deals</Box>
                      </Link>

                      <Link style={{ textDecoration: "none" }} to="/payment" id="coup">
                        <Box color="#1a1818" p="10px 0px" fontWeight="600">Wallet</Box>
                      </Link>

                      <Link style={{ textDecoration: "none" }} to="/apponlyproducts" id="ap">
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
            <Link style={{ textDecoration: "none" }} to="/newproducts" id="new"><Box color="#FFFFFF" fontWeight="600" >New</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/bestproducts" id="best"><Box color="#FFFFFF" fontWeight="600">Bestselling</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/clearanceproducts" id="clear"><Box color="#FFFFFF" fontWeight="600">Clearance</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/todaydeals" id="deal"><Box color="#FFFFFF" fontWeight="600">Deals</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/payment" id="coup"><Box color="#FFFFFF" fontWeight="600">Wallet</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/apponlyproducts" id="ap"><Box color="#FFFFFF" fontWeight="600">App Only</Box></Link>
          </Flex>
        </Box> */}
