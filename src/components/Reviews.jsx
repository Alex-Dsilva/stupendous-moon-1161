import { StarIcon } from '@chakra-ui/icons';
import { Box, Button,  IconButton, CloseButton, FormControl, FormLabel, Image, Stack, Text, Textarea, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import img from '../assets/5385893.png'
import { getProductReviews, postProductReviews, updateProductReviews } from '../redux/App/AppAction';

const Reviews = ({singleproduct}) => {
    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const { reviews } =useSelector((store)=>store.Appreducer)
    const dispatch=useDispatch()

    const handleRatingClick = (value) => {
      setRating(value);
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };

    const handleClick=(task,id)=>{
      const data={
        action:task,
        userId:"641338e89d70719bbfd5b156"
      }

      dispatch(updateProductReviews({id,data}))

    }

  
    const handleSubmit = () => {
      // Add new review to the list
      const newReview = {
        userId: "63dd2452c5868d2719737b3a",
        name: "Raja Moli",
        rating,
        comment,
      };

      dispatch(postProductReviews({id:singleproduct._id, data:newReview}))
      
      // Reset form state
      setRating(0);
      setComment("");
      setShowForm(false);
    };
  
    return (
      <Box >
        {/* Review form */}
        {/* Button to open review form */}
        <Flex align='center' gap='5'>
          <Heading as='h6' fontWeight='600'>Customer Reviews</Heading>
          <Button  bg='#046381' _active={{color:'#000000'}} p='4px 50px' borderRadius='3px' color='white' onClick={() => setShowForm(true)} my="5" >
            Write A Review
          </Button>
        </Flex>
        
        {showForm && (
          <Box border="2px solid #e8e8e8" p="4" m='4'>
            <Flex justifyContent="flex-end" alignItems="flex-start">
              <FormControl id="rating" isRequired mb="4" >
                <FormLabel>Rating</FormLabel>
                {/* Display star buttons */}
                <Stack direction="row">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <StarIcon
                      key={value}
                      onClick={() => handleRatingClick(value)}
                      boxSize={5}
                      color={rating < value ? "gary" : "yellow.400"}
                    />
                  ))}
                </Stack>
              </FormControl>
              <CloseButton onClick={() => setShowForm(false)} />
            </Flex>
  
            <FormControl id="comment" isRequired mb="4">
              <FormLabel>Comment</FormLabel>
              <Textarea
                value={comment}
                onChange={handleCommentChange}
                placeholder="Enter your comment here..."
              />
            </FormControl>
  
            <Button onClick={handleSubmit} colorScheme="blue">
              Submit
            </Button>
          </Box>
        )}

        {reviews.length > 0 ? (
          <Stack spacing="4">
            {reviews.map((review, index) => (
              <Box key={index} border="2px solid #e8e8e8" p="4">
                <Flex gap='10' flexDir={['column','column','row']} p='5'>
                <Text fontWeight="bold">{review.name}</Text>
                <Box >
                <Text>{`${review.rating} stars`}</Text>
                <Text fontWeight="bold">
              {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < review.rating ? 'yellow.400' : 'gray.300'}
              />
            )) || "No Reviews"} 
            </Text>
                <Text>{review.comment}</Text>
                <Flex gap={'3'} flexDir={['column','row','row']} align={['left','center','center']} >
                  <Text>{new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
                  <Box>
                  <IconButton bg='none' onClick={()=>handleClick("like", review._id)} _hover={{bg:'none'}} _active={{bg:'none'}}  icon={<BsHandThumbsUp/>}/> {review.like}
                  </Box>
                  <Box>
                    <IconButton bg='none' onClick={()=>handleClick("dislike", review._id)} _hover={{bg:'none'}} _active={{bg:'none'}} icon={<BsHandThumbsDown />}/> {review.dislike}
                  </Box>
                </Flex>
                </Box>
                </Flex>
              </Box>
            ))}
          </Stack>
        ) : (
          <Box p="4">
            <Image w='300px' m='auto' src={img} alt="No reviews yet" />
            <Text textAlign='center'  color='red' fontWeight='500'>Be The First One To Give Your Review</Text>
          </Box>
        )}
  
      </Box>
    );
}

export default Reviews