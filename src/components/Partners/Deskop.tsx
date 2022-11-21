import { Text, Box, Flex, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import AliceCarousel from "react-alice-carousel";
import Marquee from "react-fast-marquee";

import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <Box
    padding="20px"
    width="178px"
    height="56px"
    bgImage={{
      base: 'url("/images/img1.png")',
    }}
  />,
  <Box
    padding="20px"
    width="178px"
    height="56px"
    bgImage={{
      base: 'url("/images/img2.png")',
    }}
  />,
  <Box
    padding="20px"
    width="178px"
    height="56px"
    bgImage={{
      base: 'url("/images/img3.png")',
    }}
  />,
  <Box
    padding="20px"
    width="178px"
    height="56px"
    bgImage={{
      base: 'url("/images/img4.png")',
    }}
  />,
  <Box
    padding="20px"
    width="178px"
    height="56px"
    bgImage={{
      base: 'url("/images/img5.png")',
    }}
  />,
];

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 },
};

const PartnerDesktop = () => {
  return (
    <Flex
      width="100%"
      align="center"
      justify="center"
      mt="120px"
      flexDir="column"
    >
      <Text fontWeight={400} fontSize="12px" color="#BDBDBD">
        OUR PARTNERS
      </Text>

      <Text
        fontSize="40px"
        fontWeight={700}
        color="#333333"
        pt={"20px"}
        textAlign="center"
        lineHeight="40px"
      >
        We are trusted <br />
        by top brands
      </Text>
      <Box h={"30px"} />

      <Flex width="100%" justify="center" align="center">
        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          <Box
            padding="20px"
            width="178px"
            marginLeft={'70px'}
            height="56px"
            bgImage={{
              base: 'url("/images/img1.png")',
            }}
          />
          ,
          <Box
            padding="20px"
            marginLeft={'70px'}

            width="178px"
            height="56px"
            bgImage={{
              base: 'url("/images/img2.png")',
            }}
          />
          ,
          <Box
            padding="20px"
            width="178px"
            marginLeft={'70px'}

            height="56px"
            bgImage={{
              base: 'url("/images/img3.png")',
            }}
          />
          ,
          <Box
            padding="20px"
            width="178px"
            marginLeft={'70px'}

            height="56px"
            bgImage={{
              base: 'url("/images/img4.png")',
            }}
          />
          ,
          <Box
            padding="20px"
            marginLeft={'70px'}

            width="178px"
            height="56px"
            bgImage={{
              base: 'url("/images/img5.png")',
            }}
          />
          
        </Marquee>
        {/* <AliceCarousel
          responsive={responsive}
          mouseTracking
          items={items}
          controlsStrategy="alternate"
        /> */}
      </Flex>
    </Flex>
  );
};

export default PartnerDesktop;
