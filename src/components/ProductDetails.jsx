import { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
// import { getProductReviews, getProductQuestions } from "../redux/actions";

const ProductDetails = ({ productId }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const dispatch = useDispatch();

  const { singleproduct, isLoading, isError, errorMsg } = useSelector(state => state.Appreducer);
  const reviews = []
//   useSelector((state) => state.reviews[productId]);
  const questions = []
//   useSelector((state) => state.questions[productId]);

  useEffect(() => {
    dispatch(getProductReviews(productId));
    // dispatch(getProductQuestions(productId));
  }, [dispatch, productId]);

  return (
    <Box>
      <Tabs index={selectedTabIndex} onChange={setSelectedTabIndex}>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Reviews</Tab>
          <Tab>Q&A</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>{singleproduct.description}</Text>
          </TabPanel>

          <TabPanel>
            {reviews.length ? (
              reviews.map((review) => (
                <Box key={review.id}>
                  <Text fontWeight="bold">{review.author}</Text>
                  <Text>{review.content}</Text>
                </Box>
              ))
            ) : (
              <Text>No reviews yet.</Text>
            )}
          </TabPanel>

          <TabPanel>
            {questions.length ? (
              questions.map((question) => (
                <Box key={question.id}>
                  <Text fontWeight="bold">{question.author}</Text>
                  <Text>{question.content}</Text>
                </Box>
              ))
            ) : (
              <Text>No questions yet.</Text>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProductDetails;
