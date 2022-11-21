import { Box, Text, Flex, HStack, VStack, Image } from "@chakra-ui/react";
import Button from "../Button";

const DeskopPricing = () => {
  return (
    <VStack width="100%">
      <HStack
        width="100%"
        marginTop={"50px"}
        justify="center"
        align="center"
        height="374px"
        spacing="0px"
      >
        <VStack
          width={{ md: "50%", lg: "70%" }}
          backgroundColor="#000"
          align={{ lg: "flex-start", md: "center" }}
          spacing="20px"
          height="100%"
          justify="center"
          paddingLeft={{ lg: "150px" }}
        >
          <Text color="#C2C2C2" fontWeight={700} fontSize="35px">
            Our pricing
          </Text>
          <Text
            textAlign={{ md: "center", lg: 'left' }}
            fontSize="20px"
            fontWeight={400}
            color="#C2C2C2"
          >
            <span style={{ color: "rgba(247, 125, 39, 1)" }}>
              We only make profit when you are making profit
            </span>{" "}
            <br />
            10% charge on every transaction
          </Text>
          <Text fontSize="50px" fontWeight={800} color="#C2C2C2">
            Setup is FREE
          </Text>
        </VStack>
        {/* <Box
          bgImage={{
            base: 'url("/images/img6.png")',
          }}
          width={{
            md: "50%",
            lg: "30%",
          }}
          bgSize="contain"
        /> */}
        <Image
          flexGrow={1}
          src="/images/img6.png"
          width="30%"
          height={{ md:"374px" }}
        />
      </HStack>

      <HStack
        width="100%"
        justify="center"
        align="center"
        height="330px"
        backgroundColor="rgba(255, 238, 225, 0.8);"
      >
        <HStack width="60%" justify="space-between" align="center">
          <Image src="/images/Burst-Bloat.png" />
          <VStack width="80%">
            <Text
              fontWeight={400}
              fontSize="30px"
              lineHeight="33px"
              marginBottom="30px"
              textAlign="center"
              width="100%"
              color="#616161"
            >
              Focus on your content and the business around it, let
              contentionary be your technical partners.
            </Text>
            <Button width="180px">
              <Text>Yeah, Let’s Start this</Text>
            </Button>
          </VStack>
          <Image src="/images/Burst-Bloat.png" />
        </HStack>
      </HStack>
    </VStack>
  );
};

export default DeskopPricing;
