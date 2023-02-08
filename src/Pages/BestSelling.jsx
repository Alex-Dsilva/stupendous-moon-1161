import axios from "axios";
import {
  Button,
  Box,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Container,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { addCart } from "../redux/Cart/CartAction";
import { useDispatch } from "react-redux";
const Loading = () => {
  return (
    <Container>
      <Image
        w="200px"
        h="200px"
        ml="180px"
        src="https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif"
      />
    </Container>
  );
};
const BestSelling = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api-pathak-database.vercel.app/BestSelling?_page=${page}&_limit=20`
      )
      .then((res) => {
        setData(res);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };
  useEffect(() => {
    getData(page);
  }, [page]);

  const dispatch=useDispatch();
  const toast=useToast()

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Box>
        <Box
          boxShadow="md"
          display="flex"
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="100px"
        >
          <Heading>Bestselling</Heading>
        </Box>
        <Box align="center" bg=" #f1f6fd">
          <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }} spacing={6} w="80%" mr="0px">
            {data?.data?.map((el) => (
              <Box
                className="eachBox"
                mt="20px"
                align="center"
                key={el.ID}
                style={{
                  background: "white",
                  fontFamily: "Open Sans",
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image src={el.PicturePath}></Image>
                <Image
                  width="60px"
                  src="https://img.gkbcdn.com/s3/bn/2211/1111-636b8e9c2b40c926000ab10a.gif"
                ></Image>
                <Box mt="1" as="h4" lineHeight="tight" noOfLines={2}>
                  {el.Name}
                </Box>
                <Text fontWeight="600" fontSize="large">
                  ${el.SalePrice}
                </Text>
                <Text fontSize="large">
                  ${el.CsSalesPrice}
                </Text>
                <Button onClick={()=>(dispatch(addCart(el)),toast({
      title: "Cart Added",
      position: "bottom-center",
      duration: 1000,
      status: "success",
      isClosable: true,
    }))} colorScheme="whatsapp" display={"block"} margin={"auto"} mt={"1"}>Add To Cart</Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Box align="center" mb="10px" bg=" #f1f6fd">
          <Button
            colorScheme="teal"
            variant="outline"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            PREV
          </Button>
          <Button colorScheme="blue" m="20px">
            {page}
          </Button>
          <Button
            colorScheme="teal"
            variant="outline"
            disabled={page >= 8}
            onClick={() => setPage(page + 1)}
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default BestSelling;
