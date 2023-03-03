import { Box, Image, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const ProductSkeleton = () => {
  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
      <Skeleton height="200px">
        <Image h='13rem' />
      </Skeleton>
      <Box p="6">
        <SkeletonText height="20px" />
        <SkeletonText height="20px"/>
        <SkeletonText height="20px"/>
      </Box>
    </Box>
  )
}

export default ProductSkeleton