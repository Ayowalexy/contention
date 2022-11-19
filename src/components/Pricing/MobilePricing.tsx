import { Box, Image, Text, Flex, HStack, VStack } from "@chakra-ui/react";
import Button from "../Button";

const MobilePricing = () => {
  return (
    <Flex
      width="100%"
      align="center"
      justify="center"
      mt="70px"
      flexDir="column"
    >
      <Image src="/images/img6.png" />

      <VStack
        justify="space-around"
        height="378px"
        width="100%"
        backgroundColor="#0F0F0F"
        align="center"
        textAlign="center"
      >
        <Box>
          <Text
            color="#C2C2C2"
            lineHeight="24px"
            fontWeight={700}
            fontSize="35px"
          >
            Our pricing
          </Text>
          <Text
            lineHeight="24px"
            fontWeight={400}
            fontSize="22px"
            color="#F77D27"
            // width='80%'
            pt="20px"
          >
            We only make profit when <br />
            you are making profit
          </Text>
        </Box>
        <Text
          lineHeight="24px"
          fontWeight={400}
          fontSize="25px"
          color="#C2C2C2"
        >
          10% deduction on every transaction
        </Text>
      </VStack>
      <VStack
        justify="space-around"
        width="100%"
        height="315px"
        backgroundColor="#FFF1E7"
      >
        <VStack width='80%' align="flex-end">
          <Image src="/images/Burst-Bloat.png" />
        </VStack>
        <Text
          lineHeight="30px"
          fontWeight={400}
          fontSize="20px"
          color="#616161"
          textAlign="center"
          // width='80%'
        >
          Focus on your content and the business around it, let contentionary be
          your technical partners.
        </Text>
        <Button width="180px">
          <Text>Yeah, Let’s Start this</Text>
        </Button>
      </VStack>
    </Flex>
  );
};

export default MobilePricing;
