import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { Box, Heading, Text, Image, Button, Grid, Flex, List, ListItem, AccordionButton, AccordionItem, Accordion, AccordionPanel, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton, Icon, DrawerCloseButton } from '@chakra-ui/react';
import { getProducts, addToCart } from '../../redux/App/AppAction';
import { ChakraProvider } from "@chakra-ui/react";
import { useParams, useSearchParams } from "react-router-dom";
import Filter from "../../components/Filter"
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductSkeleton from '../../components/ProductSkeleton';
import Deals from '../../utils/Deals'
import Match from '../../assets/Match.svg'

const TodayDeals = ({ title }) => {

  const { products, isLoading } = useSelector(state => state.Appreducer);
  const [searchParam] = useSearchParams();
  const { searchQuery } = useParams();
  const dispatch = useDispatch();
  const [data, setdata] = useState([])
  const [page, setPage] = useState(1)
  const [isOpen, setIsOpen] = useState(false)
  console.log(searchQuery)


  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)

  const params = {
    category: searchParam.getAll("category"),
    rating: searchParam.getAll("rating"),
    search: searchQuery,
    brand: searchParam.getAll("brand"),
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
    if (typeof (params[key]) === "object" && params[key].length < 1) {
      delete params[key];
    }
  });



  useEffect(() => {
    console.log(params)
    dispatch(getProducts(params));
  }, [searchParam, page, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setdata(products);

  }, [products]);

  console.log(Deals)

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  return (
    <ChakraProvider>
      <Box id="pro" mt="20px">
        <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]} gap={3} p="25px" >
            {Deals.map((product, index) => {
              return <ProductCard key={index} product={product} />;
            })}
        </Grid>
        <Heading className="title" as="h1" p="20px">
          {title || "Products"}
        </Heading>
        <Flex >
          
          <Box w='100%' >
          
            <Flex justify='space-around' display={data.length > 0 ? 'flex' : 'none'}>
              <Filter />
            </Flex>

            {isLoading ? (
              <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]} gap={6} p="20px">
                {Array.from({ length: 10 }, (_, i) => (
                  <ProductSkeleton key={i + 50} />
                ))}
              </Grid>

            ) : (
              <>
                {data.length > 0 ? (
                  <Grid templateColumns={["repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(5, 1fr)"]} gap={3} p="25px" >
                    {data.map((product, index) => {
                      return <ProductCard key={index} product={product} />;
                    })}
                  </Grid>
                ) : (
                  <Flex flexDir='column' gap='5' align='center' mb='10rem' justify='center' >
                    <Image src={Match} w='50%' alt="No products found" />
                    <Text as='b'>{page>0?`There are no more Products Found with Keyword "${searchQuery}"`:`"No Match Found for Keyword "${searchQuery}"` }</Text>
                  </Flex>
                )}
              </>
            )}
          </Box>
        </Flex>
        <Flex gap='2rem' justify='center' align='center'>
          <Button isDisabled={page < 2} borderRadius='none' bg='#046381' color='white' onClick={() => setPage(page - 1)}>PREVIOUS</Button>
          <Text borderRadius={5} bg='gray.100' p='10px 20px' >{page}</Text>
          <Button borderRadius='none' bg='#046381' color='white' onClick={() => setPage(page + 1)}>NEXT</Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default TodayDeals;
