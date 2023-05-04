import { StarIcon } from '@chakra-ui/icons'
import { Box, Flex, Image, Text, IconButton } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product, index}) => {

    const [liked, setLiked] = useState(false);
    const navigate = useNavigate();
    const discount= ((product.strikedprice - product.price) / product.strikedprice) * 100 
    const heartIcon = liked ? <FaHeart color="red" /> : <FaRegHeart />;
    const handleLike = async () => {
        setLiked(!liked);
    };

    const handleClick = () =>{
        navigate(`/singleproduct${product._id}`)
    }

  return (
    <Flex key={index} flexDir="column" gap={1} p={3} 
              overflow="hidden"
              onClick={handleClick}
              justify='center'
              align={'center'}
              border='none'
              _hover={{ shadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
              transition="all 0.3s ease-in-out" borderWidth="1px">
            <Image alignSelf='center' src={`${product.images[0]}`} alt={product.name} />
            
            <Flex flexDir={'column'} wrap='wrap' w='80%'>
            <Text noOfLines={2} fontSize='16' size='sm'>{product.name}</Text>
            <Text>
              <b>₹{product.price || 2549} </b> 
            </Text>
             <Text>
              <s> ₹{product.strikedprice.toFixed(2) || 1249}</s>{"  "}
              <Text ml='6px' as="span" color="green.500">
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
            <IconButton
                icon={heartIcon}
                aria-label="Like"
                justifyContent='left'
                cursor='pointer'
                m='15px 5px 10px 5px'
                p='0'
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
            
          </Flex>
  )
}

export default ProductCard