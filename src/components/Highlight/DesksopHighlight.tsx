import { Box, Flex, Text, Image, VStack, HStack } from "@chakra-ui/react";
import Button from "../Button";

const DeskopHighlight = () => {
  return (
    <Flex
      width="100%"
      justify="center"
      align="center"
      pt={{
        lg: "150px",
        base: "20px",
      }}
      flexDir="column"
    >
      <Text
        lineHeight="40px"
        fontSize="40px"
        fontWeight={700}
        textAlign="center"
        paddingTop={{ md: "70px", lg: '0px' }}
      >
        Highlights of <br />
        the Academy
      </Text>
      <HStack width="90%" flexWrap="wrap" justify="space-between" mt={"70px"}>
        {[
          {
            id: 1,
            img: "/images/svg/icon1.svg",
            text: "Upload Unlimited courses in modules, assign assessment to modules.",
          },
          {
            id: 2,
            img: "/images/svg/icon2.svg",
            text: "Host online examination (With proctored technology).",
          },
          {
            id: 3,

            img: "/images/svg/icon3.svg",
            text: "Issue online certifications.",
          },
          {
            id: 4,

            img: "/images/svg/icon2.svg",
            text: " Make your course private (Accessible by invitation).",
          },
          {
            id: 5,

            img: "/images/svg/icon3.svg",
            text: "Make your course public (Accessible by payment).",
          },
          {
            id: 6,

            img: "/images/svg/icon1.svg",
            text: "Sell other forms of content (ebooks, Audio, practice test).",
          },
        ].map((ele, idx) => (
          <Box
            width={{
              lg: "313px",
              base: "45%",
              md: "30%",
            }}
          >
            <VStack
              align="flex-start"
              width="100%"
              height={{
                lg: "166px",
                base: "193px",
              }}
              spacing="20px"
              padding={{
                lg: "20px",
                base: "20px",
              }}
              marginBottom={"40px"}
              backgroundColor="#fff"
              boxShadow="0px 4px 40px rgba(0, 0, 0, 0.08)"
              key={idx}
            >
              <Image src={ele.img} />
              <Text
                width="100%"
                lineHeight={{
                  base: "21px",
                  lg: "25px",
                }}
                fontSize={{
                  base: "12px",
                  lg: "18px",
                }}
                fontWeight={700}
              >
                {ele.text}
              </Text>
            </VStack>
          </Box>
        ))}
      </HStack>
      <Button width="161px">
        <Text>I'm Interested</Text>
      </Button>
    </Flex>
  );
};

export default DeskopHighlight;
