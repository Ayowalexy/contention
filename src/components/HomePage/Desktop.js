import {
  Box,
  Text,
  HStack,
  Image,
  Flex,
  useMediaQuery,
  VStack
} from "@chakra-ui/react";
import Button from "../Button";
import Modal from "../Modal";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const DesktopHome = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 1024px)");

  const element = document.getElementById("pricing");
  const y = element.getBoundingClientRect().top + window.scrollY;

  const element_2 = document.getElementById("contact");
  const x = element_2.getBoundingClientRect().top + window.scrollY;

  const scrollTo = (val) => {
    window.scroll({
      top: val,
      behavior: 'smooth'
    });
  }


  return (
    <HStack justify='space-between' align='center' width="100%">
      <Box width='50%' padding='30px 80px'>
        <HStack width="100%" justify="space-between">
          <HStack spacing="40px">
            <Image src="/images/logo.png" />
            <HStack paddingLeft="20px" className="menu">
              <Text fontSize="14px" color="#616161" fontWeight={400}>
                Base Plugin
              </Text>
              <IoIosArrowDown fill="#616161" />
            </HStack>
            {isLargerThan768 && <Modal />}
            <Text onClick={() => scrollTo(y)} cursor='pointer' fontSize="14px" color="#616161" fontWeight={400}>
              Pricing
            </Text>

            <Text fontSize="14px" onClick={() => scrollTo(x)} cursor='pointer' color="#616161" fontWeight={400}>
              Contact us
            </Text>
          </HStack>

        </HStack>

        <Box mt="80px">
          <Text fontSize="80px" lineHeight="74px" fontWeight={700}>
            Dear <br />
            Creator
          </Text>
          <Text fontSize="30px" fontWeight={700} lineHeight="42px" mt={"30px"}>
            Launch your customizable <br />
            <span style={{ color: "#DDA333" }}>Online Academy </span>in minutes
          </Text>
          <Button width="179px" props={{ marginTop: "70px" }}>
            <Text>Get Started For Free</Text>
          </Button>
          <Text
            fontWeight={400}
            color="#616161"
            pt={"30px"}
            fontSize="16px"
            width="450px"
          >
            Sell online courses, conduct assessments, share notes and issue
            online certifications, all on your terms.
          </Text>

          <Box mt="20px">
            <HStack spacing="40px">
              <HStack spacing="15px">
                <Image src="/images/svg/code.svg" />
                <Text color="#616161" fontSize="14px" fontWeight={400}>
                  No code required
                </Text>
              </HStack>

              <HStack spacing="15px">
                <Image src="/images/svg/user.svg" />
                <Text color="#616161" fontSize="14px" fontWeight={400}>
                  No technical skills needed
                </Text>
              </HStack>

              <HStack spacing="15px">
                <Image src="/images/svg/wallet.svg" />
                <Text color="#616161" fontSize="14px" fontWeight={400}>
                  Free Setup
                </Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>
      <HStack width='50%' height='80vh' justify='flex-end' alignSelf='flex-start' >
        <VStack  width='90%'
          bgRepeat={'no-repeat'}
          align='flex-end'
          padding='30px 80px'
          bgPos={'top right'}
          // align='flex-start'
          height='100%'
           bgImage={{
            base: 'url("/images/rect.png")',

          }}
          bgSize="contain">
          <Button width="161px">
            <Text>I'm Interested</Text>
          </Button>
          <Image src="/images/bgD1.png" paddingTop='40px' />
        </VStack>
      </HStack>
      {/* <Flex justify="flex-end" align="flex-start">
        <Box
          zIndex={-100}
          position="absolute"
          width={{
            md: "70%",
            lg: "94.5%",
          }}
          height={{
            md: "40vh",
            lg: "80vh",
          }}
          bgImage={{
            base: 'url("/images/bgD.png")',
          }}
          bgSize="contain"
          bgPos="right"
          top={0}
          bgRepeat="no-repeat"
        />
      </Flex> */}
      {/* <Box
        width="100%"
        padding={{
          base: "0px",
          md: "30px",
          lg: "30px 80px",
        }}
      >
        
      </Box> */}
    </HStack>
  );
};

export default DesktopHome;
