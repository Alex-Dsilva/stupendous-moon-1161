import React from "react";
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
  Text,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  InputGroup,
  MenuItem,
  InputLeftElement,
  List,
  ListItem,
} from "@chakra-ui/react";
import {catagorys} from '../utils/catagorys'
import { ChakraProvider } from "@chakra-ui/react";
import {
  GrCart,
  AiOutlineHeart,
  AiFillHeart,
  IoCartOutline,
  AiOutlineMenu,
  FaBars,
  AiOutlineSearch,
  IoCallOutline,
  FiHelpCircle,
  IoTicketOutline,
  AiOutlineMessage,
  BsChevronDown,
  BsChevronUp,
  FiSmartphone,
  FaRegUser,
  FcGoogle
} from "react-icons/all";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomPopover from "./CustomPopover";
import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { Countries, countriesCurrency, languages, sugesstion } from '../utils/Countries'
import { useEffect } from "react";

function Navbar() {
  // const { t, i18n } = useTranslation()
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState([]);
  const { name } = useSelector(store => store.Authreducer);
  const [shipto, setShipto] = useState(0)
  const [buycur, setBuycur] = useState(0)
  const [shipcur, setShipCur]=useState({shipto, buycur })
  const [curlang, setCurlang] = useState('English')
  const [cartdropdown, setCartDropDown]=useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [serIsOpen, setSerIsOpen] = useState(false)
  const navigate=useNavigate()

  const fetchSuggestions = (value) => {
    const results = sugesstion.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(results);
    if (results.length > 0) {
      setSerIsOpen(true)
    }
  };

    const handleShipping=()=>{
      setShipCur({shipto, buycur})
    }

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    fetchSuggestions(value);
    console.log(suggestions)
  };

  const handleLanguage = (lang) => {
    setCurlang(lang.language)
    alert(lang.code)

    // i18n.changeLanguage(lang);

  }

  // useEffect(() => {
  //  dispatch()
  // }, [])
  

  const handleSearch =()=>{
    navigate(`/products/search/${search}`)
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
        backgroundColor={"#046381"}
        top={"0"} zIndex={5} >
        <Flex w='100%' display={["none", "none", "flex"]} justify='flex-end' align='center' gap='6' mr={10}>
          <CustomPopover
            trigger={(<Flex align='center' p='2'>
              <FiSmartphone style={{ fontSize: "24px", color: 'white' }} />
              <Text fontSize='13.5px' mr='1.5' color='white' >{'Save $50 with App'}</Text>
              <BsChevronDown style={{ color: 'white' }} />
            </Flex>)}
            height='fit-content'>
            <>
              <Text mb='1' noOfLines={3} >Download app to get up to 70% off <br /> app-only deals and coupons worth $50</Text>
              <Flex align='center' justify='center'>
                <Image h='8rem' w='8rem' src='https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png' alt='qr Download' />
                <Box p='1'>
                  <a href="https://geekbuying.app.link/pcwebios" target="_blank" rel="noopener noreferrer"><Image mt='2' mb='2' src='https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg' alt='qr Download' /></a>
                  <a href="https://geekbuying.app.link/pcwebandroid" target="_blank" rel="noopener noreferrer"><Image mb='2.5' src='https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg' alt='qr Download' /></a>
                  <a href="https://appgallery.huawei.com/app/C105563881" target="_blank" rel="noopener noreferrer"><Image mb='2.5' src='https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg' alt='qr Download' /></a>

                </Box>
              </Flex>
            </>
          </CustomPopover>
          <CustomPopover
            trigger={(<Flex align='center' p='2' gap={1}>
              <Text fontSize='13.5px' color='white' >{curlang}</Text>
              {true ? <BsChevronDown style={{ color: 'white' }} /> : <BsChevronUp style={{ color: 'white' }} />}
            </Flex>)}
            height='fit-content'>
            <>
              {
                languages.map((language, i) => {
                  return <Text key={i} mb='1' noOfLines={3} cursor='pointer' onClick={() => handleLanguage(language)} p='2px 10px'>{language.language}</Text>
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
        <Divider display={["none", "none", "flex"]} bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
        <Flex w='100%' justify='space-around' p='2' align='center'>
          <Link to="/" ><Image w={['7rem', '7rem', '9rem']} h="50px" id="logo" src={logo} alt="" /></Link>
          <Flex w="35%" align="flex-start">
            <InputGroup w="100%" position='relative'>
              <Input
                border="1px solid black"
                borderRight="0"
                borderLeftRadius="4px"
                h="40px"
                borderRightRadius="0"
                bg="white"
                type="text"
                id="search"
                value={search}
                onChange={handleInputChange}
                placeholder={"Search by Keyword"}
              />
              <Button
                w="50px"
                h="40px"
                borderLeft="0"
                borderLeftRadius="0"
                borderRightRadius="4px"
                bg="white"
                onClick={handleSearch}
              >
                <AiOutlineSearch style={{ fontSize: "27px", fontWeight: "800" }} />
              </Button>
            </InputGroup>
            {serIsOpen && (
              <List shadow='md' onMouseLeave={() => setSerIsOpen(false)} mt={2} w="40%" h='300px' overflow='auto' position="absolute" bg='white' top={['46px', '46px', '90px']} zIndex="1">
                {suggestions.map((suggestion,i) => (
                  <Link key={i} to={`/products/search/${suggestion}`}><ListItem m='2' cursor='pointer' key={suggestion} py={1} px={2} _hover={{ bg: "gray.200" }}>
                    <Text>{suggestion}</Text>
                  </ListItem></Link>
                ))}
              </List>
            )}
          </Flex>

          <Flex display={["none", "none", "flex"]} ml='-30px' gap='3' align="center">
            <CustomPopover
              trigger={(<Flex align='center' p='1' gap={1}>
                <span style={{ fontSize: '15px', color: 'white', fontWeight: '600' }}>Ship to </span>
                <Image w='2rem' src={`${Countries[shipcur.shipto].flagImg}`} alt='flag' />
                <Text color='white' fontSize='16px' fontWeight='400' >/{`${countriesCurrency[shipcur.buycur].code}`}</Text>

                {true ? <BsChevronDown style={{ color: 'white' }} /> : <BsChevronUp style={{ color: 'white' }} />}
              </Flex>)}
              height='fit-content'>
              <Flex flexDir='column' gap='5' p='10px 5px'>
                <Box>
                  <Text mb='2' fontWeight='600'>Ship to</Text>
                  <Menu>
                    {({ isOpen }) => (
                      <>
                        <MenuButton isActive={isOpen}
                          ml='2'
                          mr='2'
                          fontWeight='400'
                          fontSize='15px'
                          border='1px solid #b3b3b3'
                          bg='white'
                          leftIcon={<Image src={Countries[shipto].flagImg} boxSize={'30px'} />}
                          as={Button}
                          w='300px'
                          textAlign='left'
                          rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}>
                          {" " + Countries[shipto].name}
                        </MenuButton>
                        <MenuList h='300px' minWidth='300px' sx={{
                          "&::-webkit-scrollbar": {
                            width: "2px",
                            height: "2px",
                            marginRight: '-5px'
                          },
                          "&::-webkit-scrollbar-thumb": {
                            background: "gray.400",
                            borderRadius: "50%",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "transparent",
                          },
                          "&::-webkit-scrollbar-button": {
                            display: "none",
                          },
                          outline: "none",
                        }}
                          overflowY="auto">
                          {Countries.map((country, i) => (
                            <MenuItem key={i} onClick={() => setShipto(i)}>
                              <Flex alignItems="center">
                                <Image src={country.flagImg} boxSize={4} mr={2} />
                                <Text>{country.name}</Text>
                              </Flex>
                            </MenuItem>
                          ))}
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
                <Box>
                  <Text mb='2' fontWeight='600'>Currency</Text>
                  <Menu >
                    {({ isOpen }) => (
                      <>
                        <MenuButton
                          isActive={isOpen}
                          ml='2'
                          mr='2'
                          border='1px solid #b3b3b3'
                          bg='white'
                          fontWeight='400'
                          fontSize='15px'
                          // leftIcon={<Image src={Countries[shipto].flagImg} boxSize={'30px'} />}
                          as={Button}
                          w='300px'
                          textAlign='left'
                          rightIcon={isOpen ? <BsChevronUp /> : <BsChevronDown />}
                        >
                          {countriesCurrency[buycur].code} {" "} {countriesCurrency[buycur].symbol}
                        </MenuButton>
                        <MenuList
                          h='300px'
                          minWidth='300px'
                          sx={{
                            "&::-webkit-scrollbar": {
                              width: "2px",
                              height: "2px",
                              marginRight: '-5px'
                            },
                            "&::-webkit-scrollbar-thumb": {
                              background: "gray.400",
                              borderRadius: "50%",
                            },
                            "&::-webkit-scrollbar-track": {
                              background: "transparent",
                            },
                            "&::-webkit-scrollbar-button": {
                              display: "none",
                            },
                            outline: "none",
                          }}
                          overflowY="auto"
                        >
                          <Flex>
                            <Box w="50%" key='first-half' borderRight="1px solid #b3b3b3">
                              {countriesCurrency.slice(0, countriesCurrency.length / 2).map((country, i) => (
                                <MenuItem key={i} onClick={() => setBuycur(i)}>
                                  <Flex alignItems="center" w='100%' justify='space-between' p='2px 0px'>
                                    <Text>{country.code}</Text>
                                    <Text>{country.symbol}</Text>
                                  </Flex>
                                </MenuItem>
                              ))}
                            </Box>
                            <Box w="50%" key='secound-half'>
                              {countriesCurrency.slice(countriesCurrency.length / 2).map((country, i) => (
                                <MenuItem key={i} onClick={() => setBuycur(i + countriesCurrency.length / 2)}>
                                  <Flex alignItems="center" w='100%' justify='space-between' p='2px 0px'>
                                    <Text>{country.code}</Text>
                                    <Text>{country.symbol}</Text>
                                  </Flex>
                                </MenuItem>
                              ))}
                            </Box>
                          </Flex>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
                <Button bg='#046381' onClick={handleShipping} color='white' border='1px solid #b3b3b3'>Save</Button>
              </Flex>
            </CustomPopover>
            
              <CustomPopover
                trigger={(<Flex color="#FFFFFF" fontSize='15px' fontWeight="400" gap='1' >
                  <FaRegUser style={{ width: '21px', height: '21px' }} />
                  {name ? name : "Sign In"}
                </Flex>)}
                height='fit-content'>
                <>
                  <Text textAlign='center' mb='0.5rem' mt='1rem' fontSize='17px'>Welcome to Geekbuying</Text>
                  <Flex p='1' gap='5' align='center' mb='5' >
                    <Link to='/login'><Button cursor='pointer' w='7.5rem' h='35px' bg='#046381' color='white' >Join</Button></Link>
                    <Link to='/signup'><Button w='7.5rem' h='35px' border='1px solid #b3b3b3' cursor='pointer' >Sign In</Button></Link>
                  </Flex>
                  <Text mt='3' textAlign='center'>----------{" "}or{" "}----------</Text>
                  <Flex justify='center' m='12%'>
                    <FcGoogle style={{ width: '30px', height: '40px' }} />
                  </Flex>
                </>
              </CustomPopover>
          </Flex>

          <CustomPopover
            trigger={(<Box
              size="sm"
              variant="ghost"
              colorscheme="blue"
              position="relative"
              display={["none", "none", "flex"]}
            >
              <IoCartOutline size={20} style={{ height: '25px', width: '25px', color: 'white' }} />
              {1 > 0 && (
                <Box position="absolute" top="-12px" right="-6px">
                  <Badge borderRadius="full" fontSize='10' variant="solid" colorScheme="red">
                    {0}
                  </Badge>
                </Box>
              )}
            </Box>)}
            height='fit-content'>
            <>
              <Flex className="cart_full" direction="column" justifyContent="space-between">
                <Box w='300px' h='220px' overflowY='scroll'>
                  <Flex alignItems="center">
                    <Image src="//img.gkbcdn.com/p/2022-09-09/DUOTTS-C29-Electric-Bike-750W-Mountain-Bike-516948-0._w280_.jpg" alt="Electric Bike" boxSize="100px" objectFit="contain" mr={4} />
                    <Flex direction="column" justifyContent="space-between">
                      <Text fontSize="sm" fontWeight="500">
                        DUOTTS C29 Electric Bike 29 Inch 750W Mountain Bike
                      </Text>
                      <Flex alignItems="center">
                        <Text mr={2}>₹ 78833.20</Text>
                        <Text>X7</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Divider bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
                  <Flex alignItems="center">
                    <Image src="//img.gkbcdn.com/p/2022-09-09/DUOTTS-C29-Electric-Bike-750W-Mountain-Bike-516948-0._w280_.jpg" alt="Electric Bike" boxSize="100px" objectFit="contain" mr={4} />
                    <Flex direction="column" justifyContent="space-between">
                      <Text fontSize="sm" fontWeight="500">
                        DUOTTS C29 Electric Bike 29 Inch 750W Mountain Bike
                      </Text>
                      <Flex alignItems="center">
                        <Text mr={2}>₹ 78833.20</Text>
                        <Text>X7</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Divider bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
                  <Flex alignItems="center">
                    <Image src="//img.gkbcdn.com/p/2022-09-09/DUOTTS-C29-Electric-Bike-750W-Mountain-Bike-516948-0._w280_.jpg" alt="Electric Bike" boxSize="100px" objectFit="contain" mr={4} />
                    <Flex direction="column" justifyContent="space-between">
                      <Text fontSize="sm" fontWeight="500">
                        DUOTTS C29 Electric Bike 29 Inch 750W Mountain Bike
                      </Text>
                      <Flex alignItems="center">
                        <Text mr={2}>₹ 78833.20</Text>
                        <Text>X7</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Divider bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
                  <Flex alignItems="center">
                    <Image src="//img.gkbcdn.com/p/2022-09-09/DUOTTS-C29-Electric-Bike-750W-Mountain-Bike-516948-0._w280_.jpg" alt="Electric Bike" boxSize="100px" objectFit="contain" mr={4} />
                    <Flex direction="column" justifyContent="space-between">
                      <Text fontSize="sm" fontWeight="500">
                        DUOTTS C29 Electric Bike 29 Inch 750W Mountain Bike
                      </Text>
                      <Flex alignItems="center">
                        <Text mr={2}>₹ 78833.20</Text>
                        <Text>X7</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Divider bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
                  <Flex alignItems="center">
                    <Image src="//img.gkbcdn.com/p/2022-09-09/DUOTTS-C29-Electric-Bike-750W-Mountain-Bike-516948-0._w280_.jpg" alt="Electric Bike" boxSize="100px" objectFit="contain" mr={4} />
                    <Flex direction="column" justifyContent="space-between">
                      <Text fontSize="sm" fontWeight="500">
                        DUOTTS C29 Electric Bike 29 Inch 750W Mountain Bike
                      </Text>
                      <Flex alignItems="center">
                        <Text mr={2}>₹ 78833.20</Text>
                        <Text>X7</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Divider bg='gray.300' mb='1' variant='solid' h='1px' orientation='horizontal' />
                </Box>
                <Flex justifyContent="space-between" mb='2' alignItems="center">
                  <Text>7 Item(s)</Text>
                  <Text fontWeight="bold">₹ 551832.4</Text>
                </Flex>
                <Button bg='#046381' color='white' border='1px solid #b3b3b3'>View My Cart</Button>
              </Flex>

            </>
          </CustomPopover>
          <Box display={["block", "block", "none"]}>
            <IconButton
              icon={<AiOutlineMenu />}
              fontSize="18px"
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
        <Flex w='100%' display={["none", "none", "flex"]}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  // isActive={isOpen}
                  fontWeight='400'
                  fontSize='15px'
                  textAlign='left'
                  borderTopRadius='10px'
                  ml='5'
                  p='5px'
                  _hover={{ bg: '#50bdde' }}
                >
                  <Flex align='center' gap='1' >
                    <FaBars style={{ fontSize: '20px', fontWeight: '900', color: 'white' }} />
                    <Text fontSize='17px' color='white'>Categories</Text>
                  </Flex>
                </MenuButton>
                <MenuList
                  h='300px'
                  minWidth='fit-content'
                  zIndex='999'
                  sx={{
                    "&::-webkit-scrollbar": {
                      width: "2px",
                      height: "2px",
                      marginRight: '-5px'
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "gray.400",
                      borderRadius: "50%",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "transparent",
                    },
                    "&::-webkit-scrollbar-button": {
                      display: "none",
                    },
                    outline: "none",
                  }}
                  overflowY="auto"
                >
                  <Flex flexDir='column'>
                    {
                      catagorys.map((category, i) => (
                        category.list.map((item) => (
                          <Text cursor='pointer' _hover={{ bg: 'gray.200' }} p='2' key={item} mx='2' >
                            {item}
                          </Text>
                        ))
                      ))
                    }

                  </Flex>
                </MenuList>
              </>
            )}
          </Menu>
          <Flex
            w="60%"
            h="40px"
            ml='20'
            align="center"
            color="#FFFFFF"
            justify="space-around"
            display={["none", "none", "flex"]}
          >
            <Link style={{ textDecoration: "none" }} to="/products/new/newarrival" key="new"><Box color="#FFFFFF" fontWeight="600" >New</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/products/best/bestselling" key="best"><Box color="#FFFFFF" fontWeight="600">Bestselling</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/products/clearance/special_clearance_sale" key="clear"><Box color="#FFFFFF" fontWeight="600">Clearance</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/products/todaydeals/deals" key="deal"><Box color="#FFFFFF" fontWeight="600">Deals</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/payment" key="coup"><Box color="#FFFFFF" fontWeight="600">Wallet</Box></Link>
            <Link style={{ textDecoration: "none" }} to="/products/apponly" key="ap"><Box color="#FFFFFF" fontWeight="600">App Only</Box></Link>
          </Flex>

        </Flex>
      </Box>
    </ChakraProvider>
  );
}


export default Navbar;

