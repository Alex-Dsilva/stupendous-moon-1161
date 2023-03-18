import { StarIcon } from '@chakra-ui/icons';
import { Box, Button,  IconButton, CloseButton, FormControl, FormLabel, Image, Stack, Text, Textarea, Flex, Heading, Input } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BsHandThumbsDown, BsHandThumbsUp } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import img from '../assets/5217215.jpg'
import { getProductReviews, postProductQuestions, postProductReviews, updateProductReviews } from '../redux/App/AppAction';

const Question = ({singleproduct}) => {

    const [showForm, setShowForm] = useState(false);
    const [Question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const { question } =useSelector((store)=>store.Appreducer)

    const dispatch=useDispatch()
    const wordCount = Question.trim().split(/\s+/).length;
    const isDisabled = wordCount > 200;
    const isAdmin=true

    const handleQuestionChange = (event) => {
      setQuestion(event.target.value);
    };

    const handleAnswerSubmit= () =>{
      const data={
        answer: answer
      }
      console.log(singleproduct._id, data, "samlex")

      // dispatch()

    }
  
    const handleSubmit = () => {
      
      const newQuestion = {
        user: "63dd2452c5868d2719737b3a",
        questionText:Question
      };

      dispatch(postProductQuestions({id:singleproduct._id,data:newQuestion}))
      
      // Reset form state
      setQuestion("");
      setShowForm(false);
    };
  
    return (
      <Box>
        {/* Review form */}
        {/* Button to open review form */}
        <Flex align='center' gap='5'>
          <Heading as='h6' fontWeight='600'>Questions & Answers</Heading>
          <Button  bg='#046381' _active={{color:'#000000'}} p='4px 50px' borderRadius='3px' color='white' onClick={() => setShowForm(true)} my="5" >
            Ask a Question
          </Button>
        </Flex>

        {showForm && (
          <Box border="2px solid #e8e8e8" p="4" m='4'>
            <FormControl id="question" isRequired mb="4">
              <Flex justifyContent='space-between' mb='1' alignItems="flex-start">
              <FormLabel>Question</FormLabel>
              <CloseButton onClick={() => setShowForm(false)} />
              </Flex>
              <Box style={{ position: "relative" }}>
                <Textarea
                  value={Question}
                  onChange={handleQuestionChange}
                  placeholder="Enter your question here..."
                  w='100%'
                  h='150px'
                />
                <Text
                  position="absolute"
                  right="0"
                  bottom="0"
                  fontSize="sm"
                  color={wordCount > 200 ? "red.500" : "gray.500"}
                  mr="2"
                  mb="1"
                >
                  {wordCount} / 200 words
                </Text>
              </Box>
              <Button mt='2' onClick={handleSubmit} colorScheme="blue" disabled={isDisabled}>Submit</Button>
            </FormControl>
          </Box>
        )}

        {question.length > 0 ? (
          <Stack spacing="4">
            {question.map((ques, index) => (
              <Box key={index} border="2px solid #e8e8e8" p="7">
                <Flex align='center' gap='5'>
                  <Box bg='blue.600' p='2px 9px' borderRadius='6px' textAlign='center' ><Text fontWeight='700' fontSize='15' color='white' textAlign='center' >Q</Text></Box>
                <Text as='b'>{ques.question }{ques.question[ques.question.length-1] !=="?" ? "?":""}</Text>
                </Flex>
                <Text ml='50px' mb='6'>{new Date(ques.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
              {ques.isAnswered?(
                <>
              <Flex align='center' gap='5'>
                <Box bg='gray.600' p='2px 9px' borderRadius='6px' textAlign='center' ><Text fontWeight='700' fontSize='15' color='white' textAlign='center' >A</Text></Box>
              <Text >{ques.answer }</Text>
              </Flex>
              <Text ml='50px'>Answered by Seller on {new Date(ques.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</Text>
              </>
              ):(
                <>
                  {isAdmin ? (
                    <Box p="2">
                      <Text mb='2' >Please provide an answer:</Text>
                      <Input mb='2' value={answer} placeholder='Please provide an answer...' onChange={(e) => setAnswer(e.target.value)} />
                      <Button bg='#046381' color='white' onClick={handleAnswerSubmit}>Submit</Button>
                    </Box>
                  ) : (
                    <Box p="2">
                      <Text>This question will be answered soon</Text>
                    </Box>
                  )}
                </>
              )}
              </Box>
            ))}
          </Stack>
        ) : (
          <Box p="4">
            <Image w='300px' m='auto' src={img} alt="No question yet" />
            <Text textAlign='center'  color='red' fontWeight='500'>Be The First One To Ask the Question</Text>
          </Box>
        )}
  
      </Box>
    );
}

export default Question