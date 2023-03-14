import { Box, Button, FormControl, FormLabel, Image, Stack, Text, Textarea } from '@chakra-ui/react';
import React from 'react'
import { useState } from 'react';
import img from '../assets/5385893.png'

const Reviews = ({singleproduct}) => {
    const [showForm, setShowForm] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [reviews, setReviews] = useState(singleproduct.reviews);
  
    const handleRatingClick = (value) => {
      setRating(value);
    };
  
    const handleCommentChange = (event) => {
      setComment(event.target.value);
    };
  
    const handleSubmit = () => {
      // Add new review to the list
      const newReview = {
        user: "John Doe",
        rating,
        comment,
      };
      setReviews([...reviews, newReview]);
  
      // Reset form state
      setRating(0);
      setComment("");
      setShowForm(false);
    };
  
    return (
      <Box>
        {/* Review form */}
        {/* Button to open review form */}
        <Button onClick={() => setShowForm(true)} my="4">
          Add Review
        </Button>
        {showForm && (
          <Box border="1px solid gray" p="4">
            <FormControl id="rating" isRequired mb="4">
              <FormLabel>Rating</FormLabel>
              {/* Display star buttons */}
              <Stack direction="row">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Button
                    key={value}
                    onClick={() => handleRatingClick(value)}
                    colorScheme={rating >= value ? "yellow" : "gray"}
                  >
                    ★
                  </Button>
                ))}
              </Stack>
            </FormControl>
  
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
          // Display reviews if there are any
          <Stack spacing="4">
            {reviews.map((review, index) => (
              <Box key={index} border="1px solid gray" p="4">
                <Text fontWeight="bold">{review.user}</Text>
                <Text>{`${review.rating} stars`}</Text>
                <Text>{review.comment}</Text>
              </Box>
            ))}
          </Stack>
        ) : (
          // Display placeholder image if there are no reviews
          <Box p="4">
            <Image src={img} alt="No reviews yet" />
          </Box>
        )}
  
      </Box>
    );
}

export default Reviews