import { Box, Text, Flex } from "@chakra-ui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <Box
    padding="20px"
    width="104px"
    height="32px"
    bgSize="contain"
    bgRepeat='no-repeat'
    bgImage={{
      base: 'url("/images/img1.png")',
    }}
  />,
  <Box
    padding="20px"
    width="104px"
    height="32px"
    bgRepeat='no-repeat'
    bgSize="contain"
    bgImage={{
      base: 'url("/images/img2.png")',
    }}
  />,
  <Box
    padding="20px"
    bgRepeat='no-repeat'
    width="104px"
    bgSize="contain"
    height="32px"
    bgImage={{
      base: 'url("/images/img3.png")',
    }}
  />,
  <Box
    padding="20px"
    width="104px"
    bgRepeat='no-repeat'
    height="32px"
    bgSize="contain"
    bgImage={{
      base: 'url("/images/img4.png")',
    }}
  />,
  <Box
    padding="20px"
    bgRepeat='no-repeat'
    width="104px"
    height="32px"
    bgSize="contain"
    bgImage={{
      base: 'url("/images/img5.png")',
    }}
  />,
];

const responsive = {
  0: { items: 3 },
  568: { items: 3 },
  1024: { items: 5 },
};

const MobilePartner = () => {
  return (
    <Flex
      width="100%"
      align="center"
      justify="center"
      mt="50px"
      flexDir="column"
    >
      <Text fontWeight={400} fontSize="12px" color="#BDBDBD">
        OUR PARTNERS
      </Text>

      <Text
        fontSize="28px"
        fontWeight={700}
        color="#333333"
        pt={"20px"}
        textAlign="center"
        lineHeight="36px"
      >
        We are trusted by top <br /> brands
      </Text>
      <Box h={"30px"} />

      <Flex width="100%" justify="center" align="center">
        <AliceCarousel
          responsive={responsive}
          mouseTracking
          items={items}
          controlsStrategy="alternate"
        />
      </Flex>
    </Flex>
  );
};

export default MobilePartner;
