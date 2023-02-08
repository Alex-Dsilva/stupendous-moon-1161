import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <Box
        // bg={useColorModeValue("gray.50", "gray.900")}
        // color={useColorModeValue("gray.700", "gray.200")}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
              <Stack align={"flex-start"}>
                <Image
                style={{width:"70%"}}
                  src="data:image/png;base64,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"
                  alt=""
                />
              </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Contact Us</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}>Help Center</Link>
              <Link href={"#"}>Safety Center</Link>
              <Link href={"#"}>Community Guidelines</Link>
            </Stack>
            <Stack align={"flex-start"}>
              <Link href={"#"}>Cookies Policy</Link>
              <Link href={"#"}>Privacy Policy</Link>
              <Link href={"#"}>Terms of Service</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text>© 2023 GeekBuying. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
