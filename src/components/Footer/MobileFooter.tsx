import { Box, Text, Image, Flex, HStack } from "@chakra-ui/react";

const MobileFooter = () => {
  return (
    <Flex
      padding="120px 30px"
      justify="flex-start"
      backgroundColor="#fff"
      align="flex-start"
      flexDir="column"
    >
      <Image src="/images/logo.png" />
      <Text color="#333333" fontWeight={700} fontSize="17px" pt="30px">
        Nigeria Office:
      </Text>
      <Text color="#333333" fontWeight={500} fontSize="12px" pt="10px">
        Address 1:
      </Text>
      <Text
        color="#616161"
        fontWeight={400}
        fontSize="12px"
        width="190px"
        pt="10px"
      >
        38 Opebi Road, Ikeja, Lagos State, Nigeria.
      </Text>

      <Text color="#333333" fontWeight={500} fontSize="12px" pt="20px">
        Telephone:
      </Text>
      <Text
        color="#DD7824"
        fontWeight={400}
        fontSize="12px"
        width="190px"
        pt="10px"
      >
        +234 902 239 6389{" "}
      </Text>

      <Text color="#333333" fontWeight={700} fontSize="17px" pt="30px">
        United Kingdom Office
      </Text>

      <Text
        color="#616161"
        fontWeight={400}
        fontSize="12px"
        width="190px"
        pt="10px"
      >
        Longside Lane, Longside House, Bradford, United Kingdom.{" "}
      </Text>

      <Text color="#333333" fontWeight={500} fontSize="12px" pt="20px">
        Telephone:
      </Text>
      <Text
        color="#DD7824"
        fontWeight={400}
        fontSize="12px"
        width="190px"
        pt="10px"
      >
        +44 7754 601138{" "}
      </Text>

      <Text color="#333333" fontWeight={700} fontSize="14px" pt="40px">
        Social follows
      </Text>
      <Flex justify='space-between' align='flex-start'>
        <Image src="/images/svg/fb.svg" ml='-17px' />
        <Image src="/images/svg/linked.svg" ml='-18px'/>
        <Image src="/images/svg/youtube.svg" ml='-18px' />
        <Image src="/images/svg/twitter.svg" ml='-18px' />
      </Flex>
    </Flex>
  );
};

export default MobileFooter;
