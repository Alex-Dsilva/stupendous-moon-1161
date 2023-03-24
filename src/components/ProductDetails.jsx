import { useState, useEffect } from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Reviews from "./Reviews";
import delivary from '../assets/Delivary.jpg'
import Question from "./Question";
// import { getProductReviews, getProductQuestions } from "../redux/actions"


const ProductDetails = ({ productId }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const dispatch = useDispatch();

  const { singleproduct,reviews, isLoading, isError, errorMsg } = useSelector(state => state.Appreducer);
;
  const questions = []

  console.log(reviews.length)
  return (
    <Box >
      <Tabs w='97%' m={'auto'} mt='5' borderTop='2px solid #dfdfdf' index={selectedTabIndex} onChange={setSelectedTabIndex}>
        <TabList>
          <Tab h='60px' _selected={{ color: 'white', bg: 'blue.500', fontWeight:'600' }} >Description</Tab>
          <Tab h='60px' _selected={{ color: 'white', bg: 'blue.500', fontWeight:'600' }} >Reviews</Tab>
          <Tab h='60px' _selected={{ color: 'white', bg: 'blue.500', fontWeight:'600' }} >Q&A</Tab>
        </TabList>

        <TabPanels>
          <TabPanel >
          <Box id="Description" dangerouslySetInnerHTML={{ __html:`${singleproduct.description}` }} />
            <Image m='auto' w='90%' src={delivary} alt='Fast Delavary'/>
            <Image m='auto' mb='5' w='90%' src="https://cdn.magloft.com/pdf-import/520/images/img_24-6.jpg" alt='Best Product Quality'/>
            <Image m='auto' w='90%' src="https://kenbrooksolar.com/wp-content/uploads/2016/08/Solar-Panel-and-Power-Plant-Systems-price-list-per-watt.png" alt='Best Product Price'/>
          </TabPanel>

          <TabPanel>
            <Reviews singleproduct={singleproduct}/>
          </TabPanel>

          <TabPanel>
            <Question singleproduct={singleproduct} />
            {/* {questions.length ? (
              questions.map((question) => (
                <Box key={question.id}>
                  <Text fontWeight="bold">{question.author}</Text>
                  <Text>{question.content}</Text>
                </Box>
              ))
            ) : ( */}
              {/* <Text>No questions yet.</Text> */}
            {/* )} */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProductDetails;


