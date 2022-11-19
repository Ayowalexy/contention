import { Text, Image, Box, HStack, VStack, useMediaQuery } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import Button from "../../src/components/Button";

import Partners from "../../src/components/Partners";
import Build from "../../src/components/Build";
import Highlight from "../../src/components/Highlight";
import Pricing from "../../src/components/Pricing";
import HomePage from "../../src/components/HomePage";
import Footer from "../../src/components/Footer";


const Index = () => {

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Box>
      <Box width="100%" padding={isLargerThan768 ? "30px 80px" : '0px'} >
        <HomePage />
        <Partners />
        <Build />
        <Highlight />
      </Box>
      <Pricing />
      <Footer />
    </Box>
  );
};

export default Index;
