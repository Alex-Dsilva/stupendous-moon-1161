import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Button,
} from "@chakra-ui/react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
// const cartData = [
//     {
//       id: '1',
//       price: 39.99,
//       currency: 'GBP',
//       name: 'Ferragamo bag',
//       description: 'Tan, 40mm',
//       quantity: 3,
//       imageUrl:
//         'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
//     },
//     {
//       id: '2',
//       price: 39.99,
//       currency: 'GBP',
//       name: 'Bamboo Tan',
//       description: 'Tan, 40mm',
//       quantity: 3,
//       imageUrl:
//         'https://images.unsplash.com/photo-1591561954557-26941169b49e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
//     },
//     {
//       id: '3',
//       price: 39.99,
//       currency: 'GBP',
//       name: 'Yeezy Sneakers',
//       description: 'Tan, 40mm',
//       quantity: 3,
//       imageUrl:
//         'https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
//     },
//   ]

export const Cart = () => {
  const cartData = useSelector((store) => store.cart);
  console.log(cartData);
  const navigate = useNavigate();

  if (cartData.length === 0) {
    return (
      <Box
        display={"grid"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"2"}
        margin={"100"}
      >
        <Heading>Your Cart Is Empty</Heading>
        <Button onClick={() => navigate("/")}>
          <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
        </Button>
      </Box>
    );
  }

  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({cartData.length} items)
          </Heading>

          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link
              onClick={() => navigate("/")}
              color={mode("blue.500", "blue.200")}
            >
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
