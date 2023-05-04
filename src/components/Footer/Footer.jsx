import React from "react";
import { Box, Text, Button, Input, Image, Flex, ChakraProvider, Divider, Container, SimpleGrid, Stack, HStack, Grid } from "@chakra-ui/react";
// import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF, FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { RiCustomerService2Fill } from "react-icons/ri";
import { HiTicket } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <ChakraProvider>
    <Box bg='#f1f6fd'>
    <Box mt='2'  maxW={{sm:'700px', md:'1200px', lg:'1800px'}} m='auto'>
      <Flex justify={'center'}  p='5' >
      <Text
        as='b'
        color="#0066FF"
        fontSize="14px"
        textAlign={'center'}
      >
        Why Buy From GeekBuying? &nbsp; &nbsp; &nbsp; <b>+</b>
      </Text>
      </Flex>
     
      <Divider />

      <Flex p='2' justify={'center'}  m='auto' align={'center'} w={{sm:'98%', md:'60%', lg:'30%'}}>
          <Input
            outline={'1px solid #0066FF'}
            borderRadius={'none'}
            h='2.3em'
            placeholder="Enter Email to get 5% off coupon"
          />

          <Button bg="#0066FF" h='2.4em' border={'1px solid #0066FF'} color={'white'} borderRadius={'none'}>Subscribe</Button>

      </Flex>

      <Divider />
      <Container as={Stack} maxW='80%' m='auto' mt='5'>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg:4 }} spacing={4}>
          <Stack align={'flex-start'}>
            <Text textAlign="left" fontSize="18px" fontWeight="bold">Help</Text>
            <Link fontSize="0.2em" to='#'>Order Status</Link>
            <Link to='#'>About Us</Link>
            <Link to='#'>Contact Us</Link>
            <Link to='#'> Warranty</Link>
            <Link to='#'>FAQ</Link>
            <Link to='#'>Site Map</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text textAlign="left" fontSize="18px" fontWeight="bold">Support</Text>
            <Link to='#'>WhatGeek</Link>
            <Link to='#'>Shopping Guide</Link>
            <Link to='#'>Payment Information</Link>
            <Link to='#'>WholeSale</Link>
            <Link to='#'>DropShipping</Link>
            <Link to='#'>Blog</Link>
            <Link to='#'> Affiliates</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <Text textAlign="left" fontSize="18px" fontWeight="bold">Policies</Text>
            <Link to='#'>Terms and Conditions</Link>
            <Link to='#'>Return Policy</Link>
            <Link to='#'>Privacy</Link>
            <Link to='#'>Declaration</Link>
            <Link to='#'>Customs</Link>
          </Stack>  
          <Stack align={'flex-start'} w='fit-content'>
            <Text textAlign="left" fontSize="18px" fontWeight="bold">Download the App</Text>
            <Flex align='center' w='100%' justify='center'>
                  <Image h='7rem' w='47%' src='https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png' alt='qr Download' />
                  <Flex flexDir={'column'} justify='center' align='center' p='1' w='53%' >
                    <a href="https://geekbuying.app.link/pcwebios" target="_blank" rel="noopener noreferrer"><Image w='100%'  mb='1'  src='https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg' alt='qr Download' /></a>
                    <a href="https://geekbuying.app.link/pcwebandroid" target="_blank" rel="noopener noreferrer"><Image h='100%' mb='1' src='https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg' alt='qr Download' /></a>
                    <a href="https://appgallery.huawei.com/app/C105563881" target="_blank" rel="noopener noreferrer"><Image h='100%' mb='1' src='https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg' alt='qr Download' /></a>
                  </Flex>
                </Flex>
          <Text textAlign="left" fontSize="18px" fontWeight="bold">Connect with us</Text>
          <Flex gap='4'>
            <Link to='#'><FaFacebookF style={{color:"#06f", height:"20px", width:"20px"}}/></Link>
            <Link to='#'><FaYoutube style={{color:"#06f", height:"20px", width:"20px"}}/></Link>
            <Link to='#'><FaTelegramPlane style={{color:"#06f", height:"20px", width:"20px"}}/></Link>
            <Link to='#'><FaInstagram style={{color:"#06f", height:"20px", width:"20px"}}/></Link>
            <Link to='#'><FaTwitter style={{color:"#06f", height:"20px", width:"20px"}}/></Link>
            <Link to='#'><FaTiktok style={{color:"#06f", height:"20px", width:"20px"}}/></Link>
          </Flex>
          </Stack>
        </SimpleGrid>
          <Flex pt='5' align={'flex-start'} flexDir={['column', 'column', 'row']} justify={'center'} gap={['1em', '1em', '4em']}>
            <Link to='#'><Flex gap='2' align={'center'} justify={'center'} color="#06f" fontSize={'17px'} fontWeight={'600'}><MdEmail style={{color:"#06f", height:"22px", width:"22px"}}/> service@geekbuying.com</Flex></Link>
            <Link to='#'><Flex gap='2' align={'center'} justify={'center'} color="#06f" fontSize={'17px'} fontWeight={'600'}><HiTicket style={{color:"#06f", height:"22px", width:"22px"}}/> Ticket</Flex></Link>
            <Link to='#'><Flex gap='2' align={'center'} justify={'center'} color="#06f" fontSize={'17px'} fontWeight={'600'}><RiCustomerService2Fill style={{color:"#06f", height:"22px", width:"22px"}}/> Live Chat</Flex></Link>
          </Flex>
          <Divider />
          <Grid templateColumns={['repeat(2, 1fr)','repeat(5, 1fr)','repeat(9, 1fr)' ]} gap='5' m='auto' pt='3' pb='2'>
        <Image
          h={['60px','38px', '40px']}
          src="https://japan.zdnet.com/storage/2011/06/20/db71b2b3c3b49972db1d58327cb0aa47/20110620.jpg"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://e7.pngegg.com/pngimages/706/888/png-clipart-logo-transparency-brand-product-paypal-blue-text.png"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/visa-buy-card-checkout-credit-income-online-payment-price-sale-shopping-33562.png"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://cdn-icons-png.flaticon.com/512/196/196539.png"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://user-images.githubusercontent.com/52973457/82835977-d9520b00-9ec5-11ea-8880-642813c05f24.png"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://cdn.worldvectorlogo.com/logos/oxxo-logo.svg"
        />
        <Image
          h={['60px','38px', '40px']}
          src="https://cdn.worldvectorlogo.com/logos/giropay.svg"
        />
       
          </Grid>
          <Box p='3' borderTop={'0.5px solid'}>
            <Text textAlign={'center'}>Copyright © All rights reserved.</Text>
          </Box>
      </Container>
    </Box>
    </Box>
    </ChakraProvider>
  );
};

export default Footer;
