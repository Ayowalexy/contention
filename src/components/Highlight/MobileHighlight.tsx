import { Box, Text, HStack, VStack, Flex } from "@chakra-ui/react";

const MobileHighlight = () => {
  return (
    <Flex
      width="100%"
      justify="center"
      align="center"
      pt="150px"
      flexDir="column"
    >
      <Text
        lineHeight="38px"
        fontSize="28px"
        fontWeight={700}
        textAlign="center"
      >
        Highlights of <br />
        the Academy
      </Text>
    </Flex>
  );
};

export default MobileHighlight;
