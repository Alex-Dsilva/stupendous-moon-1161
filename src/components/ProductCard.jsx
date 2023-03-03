import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ProductCard = ({product, index}) => {

    const [liked, setLiked] = useState(false);
    const discount= ((product.strikedprice - product.price) / product.strikedprice) * 100 
    const heartIcon = liked ? <FaHeart color="red" /> : <FaRegHeart />;
    const handleLike = async () => {
        setLiked(!liked);
    };

    const handleClick = () =>{
        
    }

  return (
    <Flex key={index} flexDir="column" gap={1} p={3} 
              overflow="hidden"
              onClick={()=>alert("hi")}
              justify='center'
              border='none'
              _hover={{ shadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              transition="all 0.3s ease-in-out" borderWidth="1px">
            <Image alignSelf='center' w='80%' src={product.image_url} alt={product.name} />
            <Text>{product.name}</Text>
            <Box>
            <Text>
              <b>₹{product.price  || 2549} </b> 
            </Text>
             <Text>
              <s> ₹{product.strikedprice || 1249}</s>{"  "}
              <Text ml='6px' as="span" color="green.500">
                        {discount.toFixed()}% off
              </Text>
            </Text>
            </Box>
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
            <IconButton
                icon={heartIcon}
                aria-label="Like"
                justifyContent='left'
                cursor='pointer'
                m='15px 5px 10px 5px'
                p='0'
                // h='1'
                w='1'
                bg='none'
                border='none'
                _hover={{bg:"none", border:'none'}}
                _focus={{bg:"none", border:'none'}}
                onClick={(e) => {
                    e.stopPropagation();
                    handleLike();
                }}
            />
          </Flex>
  )
}

export default ProductCard