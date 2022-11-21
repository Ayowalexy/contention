import { Box, Text, Image, HStack, VStack } from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import Button from "../Button";

const HomePageMobile = () => {
  return (
    <Box width="100%" padding="40px 20px">
      <Box
        zIndex={-100}
        position="absolute"
        width="94.5%"
        height={"100vh"}
        bgImage={{
          base: 'url("/images/bgM.png")',
        }}
        bgPos="right"
        top={-20}
        marginTop={"-50px"}
        bgRepeat="no-repeat"
      />
      <HStack width="100%" justify="space-between">
        <Image src="/images/logo.png" height="30px" />
        <BiMenu size={30} />
      </HStack>

      <VStack align="flex-start" mt="50px" spacing="30px">
        <Text fontSize="45px" lineHeight="38px" fontWeight={700}>
          Dear <br />
          Creator
        </Text>

        <Text fontSize="22px" fontWeight={700} lineHeight="30px">
          Launch your customizable <br />
          <span style={{ color: "#DDA333" }}>Online Academy </span> <br />
          in minutes
        </Text>
        <Box>
          <Button width="190px">
            <Text>Get Started For Free</Text>
          </Button>
          <Text
            fontWeight={400}
            color="#616161"
            pt={"30px"}
            fontSize="12px"
            textAlign='center'
            lineHeight="24px"
            width="100%"
          >
            Sell online courses, conduct assessments, share notes and issue
            online certifications, all on your terms.
          </Text>
        </Box>
      </VStack>

      <Box mt='30px'>
        <HStack align='center' justify='center' width='100%' spacing='30px' flexWrap='wrap'>
          <HStack spacing="10px">
            <Image src="/images/svg/code.svg" />
            <Text color="#616161" fontSize="12px" fontWeight={400}>
              No code required
            </Text>
          </HStack>

          <HStack spacing="10px">
            <Image src="/images/svg/user.svg" />
            <Text color="#616161" fontSize="12px" fontWeight={400}>
              No credit card
            </Text>
          </HStack>

          <HStack spacing="10px" pt='10px'>
            <Image src="/images/svg/wallet.svg" />
            <Text color="#616161" fontSize="12px" fontWeight={400}>
            No technical skills needed
            </Text>
          </HStack>
        </HStack>
      </Box>


    </Box>
  );
};

export default HomePageMobile;
