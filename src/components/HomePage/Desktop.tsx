import { Box, Text, HStack, Image, Flex, useMediaQuery } from "@chakra-ui/react";
import Button from "../Button";
import Modal from "../Modal";
import { IoIosArrowDown } from "react-icons/io";

const DesktopHome = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 1024px)");

  return (
    <Box width="100%">
      <Flex justify='flex-end' align='flex-start'>
      <Box
        zIndex={-100}
        position="absolute"
        width={{
          md: "70%",
          lg: "94.5%",
        }}
        height={{
          md: '40vh',
          lg: "80vh",
        }}
        bgImage={{
          base: 'url("/images/bgD.png")',
        }}
        bgSize="contain"
        bgPos="right"
        // top={{
        //   md: -305,
        //   lg: -20,
        // }}
        top={0}
        bgRepeat="no-repeat"
      />
      </Flex>
      <Box
        width='100%'
        padding={{
          base: '0px',
          md: '30px',
          lg: "30px 80px"
        }}
      >
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
            <Text fontSize="14px" color="#616161" fontWeight={400}>
              Pricing
            </Text>
            <Text fontSize="14px" color="#616161" fontWeight={400}>
              Contact us
            </Text>
          </HStack>
          <Button width="161px">
            <Text>I'm Interested</Text>
          </Button>
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
    </Box>
  );
};

export default DesktopHome;
