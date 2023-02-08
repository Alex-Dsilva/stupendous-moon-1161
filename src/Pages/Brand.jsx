import axios from "axios";
import {
  Box,
  Text,
  SimpleGrid,
  Image,
  Heading,
  Container,
  Button,
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
const Brand = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const getData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api-pathak-database.vercel.app/Items?_page=${page}&_limit=20`
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
    // <Box>
    //   <Box>
    //     <Box>
    //       <Box
    //         boxShadow="md"
    //         display="flex"
    //         justifyContent="center"
    //         alignItems="center"
    //         w="100%"
    //         h="100px"
    //       >
    //       </Box>
    //       {/* <Box w='26%' bg=' #f1f6fd' mt='10px'>
    //     <SimpleGrid columns={4} spacing={1}>
    //         <Image src='https://img.gkbcdn.com/b/eleglide._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/Logo/roborock._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/engwe._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/sculpfun-6AlQjHhs._p1_.jpg'  alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/Logo/tronsmart._p1_.jpg?v=788944783'  alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/Logo/jimmy._p1_.jpg?v=-219567574' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/Logo/jimmy._p1_.jpg?v=-219567574' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/laserpecker._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/creality-3d._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/qidi-6vlr2Iht._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/Logo/BMAX._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/atomstack-6SNQ2kaP._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/ortur._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/mr-carve-6i2rJIX8._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/Logo/Roidmi._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/flashfish-6DPuf6vS._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/inse-6ILfjShE._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/proscenic-6HykTHuh._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/zendure-6eh27neh._p1_.jpg' alt='BrandLogo'/>
    //         <Image src='https://img.gkbcdn.com/b/bezior._p1_.jpg' alt='BrandLogo'/>          
    //     </SimpleGrid>
    //     </Box> */}

          
    //     </Box>
    //   </Box>
    // </Box>
    // <Box align="center">
    //   
    
    //       <Box mb="10px" bg=" #f1f6fd" padding="30px">
    //         <Button
    //           colorScheme="teal"
    //           variant="outline"
    //           disabled={page === 1}
    //           onClick={() => setPage(page - 1)}
    //         >
    //           PREV
    //         </Button>
    //         <Button colorScheme="blue" m="30px">
    //           {page}
    //         </Button>
    //         <Button
    //           colorScheme="teal"
    //           variant="outline"
    //           disabled={page >= 9}
    //           onClick={() => setPage(page + 1)}
    //         >
    //           NEXT
    //         </Button>
    //       </Box>
    // </Box>
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
        <Heading>Trending Brands</Heading>{" "}
      </Box>
      <Box align="center" bg=" #f1f6fd">
      <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }} spacing={3} w="80%" m="00px">
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
                <Text
                
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bg="red"
                  borderRadius="10px"
                  color="white"
                  fontSize="xs"
                  width="55px"
                >
                  {el.Discount}% OFF
                </Text>
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
      statur: "success",
      isClosable: true,
    }))} colorScheme="whatsapp" display={"block"} margin={"auto"} mt={"1"}>Add To Cart</Button>
              </Box>
            ))}
          </SimpleGrid>
      </Box>
    </Box>
      <Box align="center" mb="10px" bg=" #f1f6fd" padding="0px">
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
  );
};
export default Brand;
