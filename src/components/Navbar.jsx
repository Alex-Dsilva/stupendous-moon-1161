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
  Icon,
  Badge,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import {
  GrCart,
  AiOutlineHeart,
  AiFillHeart,
  IoCartOutline,
  AiOutlineMenu,
  AiOutlineSearch,
  IoCallOutline,
  FiHelpCircle,
  IoTicketOutline,
  AiOutlineMessage,
  BsChevronDown,
  BsChevronUp,
  FiSmartphone
} from "react-icons/all";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomPopover from "./CustomPopover";
import { useState } from "react";
import { useTranslation } from "react-i18next";


const languages = ['English', 'हिन्दी']

function Navbar() {
  const { t, i18n } = useTranslation()
  // const { auth } = useSelector(store => store);
  const [search, setSearch] = useState('')
  const { name } = useSelector(store => store.Authreducer);
  // const {name}=auth
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLanguage = (lang) => {
    // alert("lang")
    i18n.changeLanguage(lang);
  }

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
        <Flex w='100%' justify='flex-end' align='center' gap='6' mr={10}>
          <CustomPopover
            trigger={(<Flex align='center' p='2'>
              <FiSmartphone style={{ fontSize: "24px", color: 'white' }} />
              <Text fontSize='13.5px' mr='1.5' color='white' >{t('Save $50 with App')}</Text>
              {false ? <BsChevronDown style={{ color: 'white' }} /> : <BsChevronUp style={{ color: 'white' }} />}
            </Flex>)}
            height='fit-content'>
            <>
              <Text mb='1' noOfLines={3} >Download app to get up to 70% off <br /> app-only deals and coupons worth $50</Text>
              <Flex align='center' justify='center'>
                <Image h='8rem' w='8rem' src='https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png' alt='qr Download' />
                <Box p='1'>
                  <Image mt='2' mb='2' src='https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg' alt='qr Download' />
                  <Image mb='2.5' src='https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg' alt='qr Download' />
                  <Image mb='2.5' src='https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg' alt='qr Download' />
                </Box>
              </Flex>
            </>
          </CustomPopover>
          <CustomPopover
            trigger={(<Flex align='center' p='2' gap={1}>
              <Text fontSize='13.5px' color='white' >English</Text>
              {true ? <BsChevronDown style={{ color: 'white' }} /> : <BsChevronUp style={{ color: 'white' }} />}
            </Flex>)}
            height='fit-content'>
            <>
              {
                languages.map((language) => {
                  return <Text mb='1' noOfLines={3} cursor='pointer' onClick={() => handleLanguage('chi')} p='2px 10px'>{language}</Text>
                })
              }
            </>
          </CustomPopover>

          <CustomPopover
            trigger={(<Flex align='center' p='1' gap={1}>
              <Text fontSize='13.5px' color='white' >Support Center</Text>
              {true ? <BsChevronDown style={{ color: 'white' }} /> : <BsChevronUp style={{ color: 'white' }} />}
            </Flex>)}
            height='fit-content'>
            <>
              <Flex p='1' gap='2' align='center' >
                <AiOutlineMessage />
                Live Chat
              </Flex>
              <Flex p='1' gap='2' align='center' >
                <IoTicketOutline />
                Ticket
              </Flex>
              <Flex p='1' gap='2' align='center' >
                <FiHelpCircle />
                Help Center
              </Flex>
              <Flex p='1' gap='2' align='center' >
                <IoCallOutline />
                Call Us
              </Flex>
            </>
          </CustomPopover>
        </Flex>
        <Divider bg='white' mb='1' variant='solid' h='1px' orientation='horizontal' />
        <Flex w='100%' justify='space-around' p='2' align='center'>
          <Link to="/" ><Image w={['7rem', '7rem', '9rem']} h="50px" id="logo" src={logo} alt="" /></Link>
          <Flex w='50%' align='flex-start' >
            <Input
              border="1px solid black"
              borderRight="0"
              borderLeftRadius="4px"
              h="40px"
              borderRightRadius="0"
              bg="white"
              type="text"
              id="search"
              placeholder={"Search by Keyword"}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              w="50px"
              h="40px"
              borderLeft="0"
              borderLeftRadius="0"
              borderRightRadius="4px"
              bg="white"
            >
              <AiOutlineSearch style={{ fontSize: "27px", fontWeight: "800" }} />
            </Button>
          </Flex>
          <Flex display={["none", "none", "flex"]} ml='-30px' gap='2' align="center">
            <CustomPopover
              trigger={(<Flex align='center' p='1' gap={1}>
                <span style={{ fontSize: '14px', color: 'white', fontWeight: '600' }}>Ship to </span>
                <Image w='2rem' border='1px solid white' src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png" alt='flag' />
                <Text color='white' fontWeight='600' >/INR</Text>
                {true ? <BsChevronDown style={{ color: 'white' }} /> : <BsChevronUp style={{ color: 'white' }} />}
              </Flex>)}
              height='fit-content'>
              <>
                <Flex p='1' gap='2' align='center' >
                  <AiOutlineMessage />
                  Live Chat
                </Flex>
                <Flex p='1' gap='2' align='center' >
                  <IoTicketOutline />
                  Ticket
                </Flex>
                <Flex p='1' gap='2' align='center' >
                  <FiHelpCircle />
                  Help Center
                </Flex>
                <Flex p='1' gap='2' align='center' >
                  <IoCallOutline />
                  Call Us
                </Flex>
              </>
            </CustomPopover>
            <Link display={["none", "none", "flex"]}  to="/login" style={{ textDecoration: "none" }} id="sign">
              <Box color="#FFFFFF" fontWeight="600" >
                {name ? name : "Sign In"}
              </Box>
            </Link>
          </Flex>
          <Box
            size="sm"
            variant="ghost"
            colorScheme="blue"
            position="relative"
            display={["none", "none", "flex"]} 
          >
            <IoCartOutline size={20} style={{ height: '25px', width: '25px', color: 'white' }} />
            {0 > 0 && (
              <Box position="absolute" top="-12px" right="-6px">
                <Badge borderRadius="full" fontSize='8' variant="solid" colorScheme="red">
                  {0}
                </Badge>
              </Box>
            )}
          </Box>
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
                    <Link to="/cart" onClick={onClose} style={{ textDecoration: "none" }} id="cart"><Box color="#000000"><GrCart style={{ fontSize: "22px", fontWeight: "900" }} /></Box></Link>
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
        <Flex w='100%' border='1px solid' bg='green.500' p='5'>
          <Flex >
            <AiOutlineMenu />
          </Flex>

        </Flex>
      </Box>
    </ChakraProvider>
  );
}


export default Navbar;

{/*

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
