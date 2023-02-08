import axios from "axios";
import {
  Box,
  Text,
  Heading,
  SimpleGrid,
  Image,
  Container,
  Button,
  useToast,
  Flex,
  Badge,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoIosStarOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  TriangleUpIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/Cart/CartAction";
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
const NewArrivals = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const toast = useToast();
  const [datas, setDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(4);

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
  const getData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://api-pathak-database.vercel.app/NewArrival?_page=${page}&_limit=20`
      )
      .then((res) => {
        setDatas(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  const handleAddToCart = (el) => {
    toast({
      title: "Product View",
      position: "bottom-left",
      statur: "success",
      isClosable: true,
    });
  };

  const lowtohigh = () => {
    const newData = [...datas].sort((a, b) => {
      return +a.CsSalesPrice - +b.CsSalesPrice;
    });
    setDatas(newData);
  };

  const hightolow = () => {
    const newData = [...datas].sort((a, b) => {
      return +b.CsSalesPrice - +a.CsSalesPrice;
    });
    setDatas(newData);
  };

  const fromAtoZ = () => {
    const newData = [...datas].sort((a, b) => {
      const nameA = a.LabelText.toUpperCase();
      const nameB = b.LabelText.toUpperCase();
      //  return a.LabelText.toUpperCase() - b.LabelText.toUpperCase()
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    });
    setDatas(newData);
    console.log(newData);
  };
  const fromZtoA = () => {
    const newData = [...datas].sort((a, b) => {
      const nameA = b.LabelText.toUpperCase();
      const nameB = a.LabelText.toUpperCase();
      //  return a.LabelText.toUpperCase() - b.LabelText.toUpperCase()
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    });
    setDatas(newData);
    console.log(newData);
  };

  const lowDiscount = () => {
    const newData = [...datas].sort((a, b) => {
      return +b.Discount - +a.Discount;
    });
    setDatas(newData);
  };
  const highDiscount = () => {
    const newData = [...datas].sort((a, b) => {
      return +a.Discount - +b.Discount;
    });
    setDatas(newData);
  };

  // const filterByStarFive = (rating) => {
  //   const newData = [...datas].filter((el) => {
  //     return el.Rating === rating;
  //   });
  //   setDatas(newData);
  // };

  useEffect(() => {
    getData(page);
  }, [page]);

  const dispatch=useDispatch();

  return isLoading ? (
    <Loading />
  ) : (
    <Box>
      <Box
        boxShadow="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="100px"
      >
        <Heading>New Arrivals</Heading>
      </Box>
      {isDesktop&& <Box
        style={{
          display: "grid",
          justifyContent: "center",
          margin: "1.5rem 0",
        }}
      >
        <Box display="flex" mb="10px" gap="10px">
          <Button colorScheme="whatsapp">New Arrived :</Button>
          <Box onClick={fromAtoZ}>
            <Button fontSize="sm">7 days</Button>{" "}
          </Box>
          <Box onClick={fromZtoA}>
            <Button fontSize="sm">15 days</Button>{" "}
          </Box>
          <Box onClick={fromAtoZ}>
            <Button fontSize="sm">30 Days</Button>{" "}
          </Box>
        </Box>
        <Box display="flex" gap="10px" className="sort-text-byPrice">
          <Button colorScheme="whatsapp">Sort by Price :</Button>
          <Box onClick={lowtohigh}>
            <Button fontSize="sm">
              Low to High
              <ChevronUpIcon />
            </Button>{" "}
          </Box>
          <Box onClick={hightolow}>
            <Button fontSize="sm">
              High to Low <ChevronDownIcon />
            </Button>{" "}
          </Box>
          <Box onClick={fromAtoZ}>
            {" "}
            <Button fontSize="sm">New Arrival</Button>{" "}
          </Box>
        </Box>
        <Box
          display="flex"
          gap="10px"
          className="sort-text-byDiscount"
          mt="10px"
        >
          <Button colorScheme="whatsapp">Sort by Discount % :</Button>
          <Box onClick={lowDiscount}>
            <Button fontSize="sm">
              <TriangleUpIcon />
            </Button>{" "}
          </Box>
          <Box onClick={highDiscount}>
            <Button fontSize="sm">
              <TriangleDownIcon />
            </Button>{" "}
          </Box>
        </Box>

        {/* <Box
            display="flex"
            gap="10px"
            className="sort-text-byPrice"
            mt="10px"
          >
            <Button colorScheme='whatsapp'>Filter by :</Button>
            <Box onClick={() => filterByStarFive(5)}>
              <Button fontSize="sm">5 Star Rating</Button>
            </Box>
          </Box> */}
      </Box>}

      <SimpleGrid columns={{ base: 2, sm: 2, md: 3, lg: 4 }} style={{width:"80%",margin:"auto",marginTop:"1rem"}} spacing={10}>
        {datas.length > 0 &&
          datas.map((el) => (
            // <Link to={`/newarrivals/${el.id}`} key={el.id}>
              <Box
                // onClick={() => handleAddToCart(el)}
                key={el.id}
                className="eachBox"
                pos="relative"
                style={{
                  background: "white",
                  fontFamily: "Open Sans",
                  display: "flex",
                  padding: "10px",
                  flexDirection: "column",
                }}
              >
                <Image
                  position="absolute"
                  mt="-10px"
                  right="0"
                  src="https://img.gkbcdn.com/s3/l/label/Label1.png?version=20221110"
                ></Image>
                <Image src={el.PicturePath}></Image>

                <Box
                  mt="1"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={2}
                  textAlign="left"
                >
                  {el.Name}
                </Box>
                <Box textAlign="left">
                  <Text fontWeight="600" fontSize="large">
                    ${el.SalePrice}
                  </Text>
                  <Box display="flex" gap="3px">
                    <Text textAlign="left" as="del" fontSize="xs" color="gray">
                      ${el.CsSalesPrice}{" "}
                    </Text>
                    <Text textAlign="left" fontSize="xs" color="gray">
                      ({el.Discount}%off)
                    </Text>
                  </Box>
                  <Badge
                    ml="1"
                    colorScheme="green"
                    display="flex"
                    alignItems="center"
                    w="max-content"
                  >
                    <IoIosStarOutline />
                    <Text fontSize="sm">{el.Rating}</Text>
                  </Badge>
                  <Button onClick={()=>(dispatch(addCart(el)),toast({
      title: "Cart Added",
      position: "bottom-center",
      duration: 1000,
      status: "success",
      isClosable: true,
    }))} colorScheme="yellow" display={"block"} margin={"auto"} mt={"1"}>Add To Cart</Button>
                </Box>
              </Box>
            // </Link>
          ))}
      </SimpleGrid>
      <Box align={"center"} bg=" #f1f6fd">
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
          disabled={page >= 4}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};
export default NewArrivals;
