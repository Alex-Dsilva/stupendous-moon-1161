import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { Box, Stack, Heading, Text, Image, Button, Grid, Flex, List, ListItem, AccordionButton, AccordionItem, Accordion, AccordionPanel, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, IconButton, Icon, DrawerCloseButton } from '@chakra-ui/react';
import { getProducts, addToCart } from '../../redux/App/AppAction';
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Filter from "../../components/Filter"
import { useState } from 'react';
import ProductCard from '../../components/ProductCard';
import ProductSkeleton from '../../components/ProductSkeleton';
import { HiViewBoards } from 'react-icons/hi'
import { FaBars } from 'react-icons/fa'
import Deals from '../../utils/Deals'
import { HamburgerIcon } from "@chakra-ui/icons";
import {catagorys, Brands} from '../../utils/catagorys'
import Match from '../../assets/Match.svg'


const Products = ({ title }) => {
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
        <Heading className="title" as="h1" p="20px">
          {title || "Products"}
        </Heading>
        <Flex >
          <>
            <Box display={['none', 'none', 'block']} w="15rem" p="5px" h="max-content" ml="1rem">
              <Heading color="gray" size="sm" mb={3}>
                Category
              </Heading>
              <Accordion allowMultiple>
                {catagorys.map((category, i) => (
                  <AccordionItem mt="5" key={i}>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton >
                            <Box as="span" flex="1" textAlign="left">
                              {category.name}
                            </Box>
                            {isExpanded ? <HiViewBoards /> : <FaBars />}
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <List spacing={3} pl="1rem">
                            {category.list.map((item) => (
                              <ListItem key={item} mt="2">
                                {item}
                              </ListItem>
                            ))}
                          </List>
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Category</DrawerHeader>

                <DrawerBody>
                  <Accordion allowMultiple>
                    {catagorys.map((category, index) => (
                      <AccordionItem key={index} mt="5">
                        {({ isExpanded }) => (
                          <>
                            <h2>
                              <AccordionButton >
                                <Box as="span" flex="1" textAlign="left">
                                  {category.name}
                                </Box>
                                {isExpanded ? <HiViewBoards /> : <FaBars />}
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                              <List spacing={3} pl="1rem">
                                {category.list.map((item, i) => (
                                  <ListItem key={i} mt="2">
                                    {item}
                                  </ListItem>
                                ))}
                              </List>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    ))}
                  </Accordion>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
          <Box w={['100%', '100%', '78%']}>
            <Flex justify='space-around' display={data.length > 0 ? 'flex' : 'none'}>
              <Text display={['flex', 'flex', 'none']} align='center' gap={3} color='blue.500' _hover={{ textDecor: 'underline' }} onClick={onOpen} fontSize='md'><HamburgerIcon boxSize={6} /> Category</Text>
              <Filter />
            </Flex>

            {isLoading ? (
              <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={6} p="20px">
                {Array.from({ length: 10 }, (_, i) => (
                  <ProductSkeleton key={i + 50} />
                ))}
              </Grid>

            ) : (
              <>
                {data.length > 0 ? (
                  <Grid templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={3} p="25px" >
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

export default Products;
