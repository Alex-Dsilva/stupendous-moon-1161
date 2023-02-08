import React from "react";
import { Box, Text, Button, Input, Image } from "@chakra-ui/react";
import "./Footer.css";

const Footer = () => {
  return (
    <Box className="Footer">
      <Text
        color="#0066FF"
        paddingTop="20px"
        paddingBottom="20px"
        ml="10px"
        fontSize="16px"
      >
        Why Buy From GeekBuying &nbsp; &nbsp; &nbsp; <b>+</b>
      </Text>
      <hr />

      <Box className="subscribeBox">
        <Box>
          <Input
           className="input"
            placeholder="Enter Email to get 5% off coupon"
          />
        </Box>
        <Box>
          <Button className="subBtn">Subscribe</Button>
        </Box>
      </Box>

      <hr />

      <Box className="footerDiv">
        <Box>
          <Text textAlign="left" fontSize="18px" fontWeight="bold">
            Help
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Order Status
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            About Us
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Contact Us
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Warranty
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            FAQ
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Site Map
          </Text>
        </Box>
        <Box marginLeft={["100px","20px","20px"]}>
          <Text textAlign="left" fontSize="18px" fontWeight="bold">
            Support
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            WhatGeek
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Shopping Guide
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Payment Information
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            WholeSale
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            DropShipping
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Blog
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Affiliates
          </Text>
        </Box>
        <Box className="policySection">
          <Text textAlign="left" fontSize="18px" fontWeight="bold">
            Policies
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Terms and Conditions
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Return Policy
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Privacy
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Declaration
          </Text>
          <Text textAlign="left" marginTop="10px" fontSize="14px">
            Customs
          </Text>
        </Box>
        

        <Box className="qrCode">
          <Text className="DandC">Download the App</Text>
          <Image
            height="100px"
            width="100px"
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png"
          />
          <Text className="DandC">Connect With Us</Text>
          <Box display="flex"></Box>
        </Box>
        <Box>
          <Image
            height="36px"
            width="126px"
            marginTop="20px"
            marginLeft="10px"
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg"
          />
          <Image
            height="36px"
            width="126px"
            marginTop="10px"
            marginLeft="10px"
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg"
          />
          <Image
            height="36px"
            width="126px"
            marginTop="10px"
            marginLeft="10px"
            src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg"
          />
        </Box>

        {/* <Box marginLeft="80px" marginTop="30px">
          <Box display="flex" gap="10px">
            <Image
              width="22px"
              height="22px"
              src="https://cdn.icon-icons.com/icons2/2751/PNG/512/email_icon_176156.png"
            />
            <Text>service@geekbuying.com</Text>
          </Box>
          <Box display="flex" gap="10px">
            <Image
              width="22px"
              height="22px"
              src="https://img.freepik.com/premium-vector/flat-icon-entrance-ticket-event_124715-2042.jpg?w=2000"
            />
            <Text>Ticket</Text>
          </Box>
          <Box display="flex" gap="10px">
            <Image
              width="22px"
              height="22px"
              src="https://previews.123rf.com/images/dirkercken/dirkercken1402/dirkercken140200573/26249408-live-chat-icon-chatting-online-button-.jpg"
            />
            <Text>Live Chat</Text>
          </Box>
        </Box> */}
      </Box>
      <Box
       className="lowerImages"
      >
        <Image
          height="35px"
          width="100px"
          src="https://japan.zdnet.com/storage/2011/06/20/db71b2b3c3b49972db1d58327cb0aa47/20110620.jpg"
        />
        <Image
          height="70px"
          width="90px"
          marginTop="-15px"
          src="https://e7.pngegg.com/pngimages/706/888/png-clipart-logo-transparency-brand-product-paypal-blue-text.png"
        />
        <Image
          height="35px"
          width="70px"
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/visa-buy-card-checkout-credit-income-online-payment-price-sale-shopping-33562.png"
        />
        <Image
          height="35px"
          width="50px"
          marginLeft="8px"
          src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960"
        />
        <Image
          height="75px"
          width="70px"
          marginTop="-19px"
          marginLeft="8px"
          src="https://cdn-icons-png.flaticon.com/512/196/196539.png"
        />
        <Image
          height="35px"
          width="60px"
          marginLeft="8px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png"
        />
        <Image
          height="35px"
          width="100px"
          marginLeft="8px"
          src="https://user-images.githubusercontent.com/52973457/82835977-d9520b00-9ec5-11ea-8880-642813c05f24.png"
        />
        <Image
          height="35px"
          width="100px"
          src="https://cdn.worldvectorlogo.com/logos/oxxo-logo.svg"
        />
        <Image
          height="35px"
          width="100px"
          src="https://cdn.worldvectorlogo.com/logos/giropay.svg"
        />
         <Image
          height="35px"
          width="200px"
          src="data:image/png;base64,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"
        />
        <Image
          height="35px"
          width="150px"
          src="data:image/png;base64,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"
        />
       
      </Box>

      <hr />
    </Box>
  );
};

export default Footer;
