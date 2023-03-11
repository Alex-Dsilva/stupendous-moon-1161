import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { Box, Stack, Heading, Text, Image, Button, Grid, Flex, List, ListItem, AccordionButton, AccordionItem, Accordion, AccordionPanel, Icon} from '@chakra-ui/react';
import { getProducts, addToCart } from '../../redux/App/AppAction';
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Filter from "../../components/Filter"
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductSkeleton from '../../components/ProductSkeleton';
import {HiViewBoards} from 'react-icons/hi'
import {FaBars} from 'react-icons/fa'


const Products = ({ title }) => {
  const { products, isLoading } = useSelector(state => state.Appreducer);
  const [searchParam] = useSearchParams();
  const dispatch = useDispatch();
  const [data, setdata]=useState([])
  const [page, setPage]=useState(1)

  const params = {
    category: searchParam.getAll("category"),
    // priceRange: searchParam.getAll("priceRange"),
    rating: searchParam.getAll("rating"),
    brand: searchParam.getAll("brand"),
    // brand: ['Xiaomi', 'OnePlus'],
    FreeShipping: searchParam.get("FreeShipping"),
    SortBy: searchParam.get("SortBy"),
    min: searchParam.get("min"),
    max: searchParam.get("max"),
    onSale: searchParam.get("onSale"),
    Shiping: searchParam.get("Shiping"),
    page
  };

  Object.keys(params).forEach(key => {
    if (!params[key]) {
      delete params[key];
    }
    if(typeof(params[key])==="object" && params[key].length<1){
      delete params[key];
    }
  });

 

  useEffect(() => {
    console.log(params)
    dispatch(getProducts(params));
  }, [searchParam, page ]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setdata(products);

  }, [products]);


  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <ChakraProvider>
    <Box  id="pro" mt="80px">
      <Heading className="title" as="h1" p="20px">
        {title || "Products"}
      </Heading>
      <Flex >
      <Box border='1px solid' display={['none','none','block']} w='15rem' p='5px' ml='1rem'>
        <Flex justify='space-between' flexDir='column'>
          <Heading color='gray' size='sm' mb={3}>
            Catagary
          </Heading>
              <Accordion allowMultiple>
                <AccordionItem>
                  {({ isExpanded }) => (
                    <>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            Electronics
                          </Box>
                          {isExpanded ? (
                            <Icon as={HiViewBoards}/>
                          ) : (
                            <Icon as={FaBars}/>
                          )}
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <List spacing={3} pl='1rem'>
                          <ListItem>
                            Bluetooth Speaker
                          </ListItem>
                          <ListItem>
                            Headphones & Earphones
                          </ListItem>
                          <ListItem>
                            3D Printers & Accessories
                          </ListItem>
                          <ListItem>
                            Video Games Accessories
                          </ListItem>
                        </List>
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
          <List spacing={3} pl='1rem'>
            <ListItem>
              Home
            </ListItem>
            <ListItem>
              Fashion
            </ListItem>
            <ListItem>
              Electronic
            </ListItem>
            <ListItem>
              Vahicals
            </ListItem>
          </List>
        </Flex>
      </Box>
      <Box w={['100%', '60%', '78%']}>
      <Filter/>
      {isLoading ? (
        <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(2, 1fr)",  "repeat(4, 1fr)" ]}  gap={6} p="20px">
          {Array.from({ length: 10 }, (_, i) => (
            <ProductSkeleton key={i+50} />
          ))}
        </Grid>

      ) : (
        <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(2, 1fr)",  "repeat(4, 1fr)" ]} gap={3} p="25px" >
          {data.map((product, index) => {
            return (
            <ProductCard key={index} product={product} />
          )})}
        </Grid>
      )}
      </Box>
      </Flex>
      <Flex gap='2rem' justify='center' align='center'>
        <Button isDisabled={page<2} borderRadius='none' bg='#046381' color='white' onClick={()=>setPage(page-1)}>PREVIOUS</Button>
        <Text  borderRadius={5} bg='gray.100' p='10px 20px' >{page}</Text>
        <Button borderRadius='none' bg='#046381' color='white' onClick={()=>setPage(page+1)}>NEXT</Button>
      </Flex>
    </Box>
    </ChakraProvider>
  );
};

export default Products;
