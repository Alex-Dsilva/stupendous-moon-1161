import { StarIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from 'react';
import { Box, Stack, Heading, Text, Image, Button, Skeleton, Grid, Flex, filter} from '@chakra-ui/react';
import { getProducts, addToCart } from '../../redux/App/AppAction';
import { ChakraProvider } from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Filter from "./Filter"
import { useState } from 'react';


const ProductSkeleton = () => {
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Skeleton height="200px">
        <Image />
      </Skeleton>
      <Box p="6">
        <Skeleton height="20px" my="10px" />
        <Skeleton height="20px" my="10px" />
        <Skeleton height="20px" my="10px" />
        <Stack isInline justifyContent="center" mt="auto">
          <Skeleton height="20px" width="40%" />
        </Stack>
      </Box>
    </Box>
  );
};


const Products = ({ title }) => {
  const { products, isLoading } = useSelector(state => state.Appreducer);
  const [searchParam] = useSearchParams();
  const Category = searchParam.getAll("category")
  const priceRange = searchParam.getAll("priceRange")
  const rating = searchParam.getAll("rating")
  const dispatch = useDispatch();
  // const [data, setdata]=useState(products||[])
  console.log(products)
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // useEffect(() => {
  // const filteredProducts = products.filter(product => {
  //   let match = true;

  //   if (Category.length && !Category.includes(product.category)) {
  //     match = false;
  //   }

  //   if (rating.length && !rating.includes(product.rating)) {
  //     match = false;
  //   }

  //   let selectedPrice;
  //   if(priceRange.length){
  //     console.log("priceRange", priceRange)
  //     selectedPrice=priceRange[0]?.split(" ").map(Number)
  //   }
  //   if (selectedPrice && product.price >= selectedPrice[0]) {
  //     match = false;
  //   }
  //   if (selectedPrice && product.price <= selectedPrice[1]) {
  //     match = false;
  //   }
  
  //   return match;
  // });

  

//     if (filteredProducts.length > 0) {
//       setdata(filteredProducts)
//     }
  
// }, [ searchParam ]);
  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  return (
    <ChakraProvider>
    <Box id="pro" mt="90px">
      <Heading className="title" as="h1" p="20px">
        {title || "Products"}
      </Heading>
      {isLoading ? (
        <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(2, 1fr)",  "repeat(4, 1fr)" ]}  gap={6} p="20px">
          {Array.from({ length: 10 }, (_, i) => (
            <ProductSkeleton key={i+50} />
          ))}
        </Grid>

      ) : (
        <Flex>
        <Filter products={products}/>
        <Grid templateColumns={[ "repeat(1, 1fr)", "repeat(2, 1fr)",  "repeat(3, 1fr)" ]} gap={7} p="25px" >
          {data.map((product, index) => {
            const discount= ((product.strikedprice - product.price) / product.strikedprice) * 100 
            return (
            // <ProductCard key={index} product={product} onAddToCart={handleAddToCart} />
            <Flex flexDir="column" gap={3} p={5} borderRadius="10px" shadow="md"
              overflow="hidden"
              _hover={{ transform: 'scale(1.1)' }}
              transition="all 0.3s ease-in-out" borderWidth="1px">
            <Image src={product.image_url} alt={product.name} />
            <Text fontWeight="bold">{product.name}</Text>
            <Text>
              <b>₹{product.price  || 2549} </b> 
              <s> ₹{product.strikedprice || 1249}</s>{" "}
              <Text as="span" color="green.500">
                        {discount.toFixed()}% off
              </Text>
            </Text>
            <Text fontWeight="bold">
              {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < product.rating ? 'yellow.400' : 'gray.300'}
              />
            )) || "No Reviews"}   { product.ratingCount}
            </Text>
            <Button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </Button>
          </Flex>
          )})}
        </Grid>
        </Flex>
      )}
    </Box>
    </ChakraProvider>
  );
};

export default Products;
