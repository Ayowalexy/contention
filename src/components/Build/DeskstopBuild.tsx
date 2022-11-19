import {
  Text,
  Flex,
  Box,
  HStack,
  VStack,
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Button from "../Button";

const DesktopBuild = () => {
  return (
    <Flex
      width="100%"
      justify="center"
      align="center"
      flexDir="column"
      mt="50px"
    >
      <Text
        fontWeight={700}
        fontSize="40px"
        lineHeight="48px"
        textAlign="center"
      >
        Built for One-man <br />
        business and large <br />
        institutions
      </Text>
      <Text
        lineHeight="24px"
        fontSize="16px"
        fontWeight={400}
        paddingTop="16px"
        color="#616161"
        textAlign="center"
        width="350px"
      >
        One platform with all the features and Apps that can help you impact
        better and grow bigger
      </Text>

      <HStack width="100%" justify="space-around" marginTop="90px">
        <Image src="/images/hero1.png" />
        <VStack spacing="40px" align="flex-start">
          <Text
            lineHeight="48px"
            width="550px"
            fontSize="33px"
            fontWeight={700}
          >
            Highly customizable templates to suit your business brand
          </Text>

          <Text
            lineHeight="30px"
            width="500px"
            color="#616161"
            fontSize="20px"
            fontWeight={400}
          >
            As a creator, there are available templates for you to customize and
            setup. You can also select your desired features based on your
            learning centre offerings (course, exams, publications,
            certification, competitions feature etc.)
          </Text>

          <Button width="137px">
            <Text>I'm Interested</Text>
          </Button>
        </VStack>
      </HStack>

      <HStack width="100%" justify="space-around" marginTop="90px">
        <VStack spacing="40px" align="flex-start">
          <Text
            lineHeight="48px"
            width="550px"
            fontSize="33px"
            fontWeight={700}
          >
            Launch to your domain
          </Text>

          <Text
            lineHeight="30px"
            width="500px"
            color="#616161"
            fontSize="20px"
            fontWeight={400}
          >
            Choose how you want your student to access your learning centre,
            Yes, your students come to your link and not contentionary.com
          
          </Text>
          <UnorderedList fontWeight={400} fontSize="16px" color="#616161">
            <ListItem> Your domain: www.example.com (₦1,500/ month)</ListItem>
            <ListItem>
              Our subdomain: www.example.cttc.ac (₦1,000/ month)
            </ListItem>
            <ListItem>
              Your subdomian: example.Website.com (₦1,500/month)
            </ListItem>
            <ListItem>www.contentionary.com/example (Free)</ListItem>
          </UnorderedList>

          <Button width="137px">
            <Text>I'm Interested</Text>
          </Button>
        </VStack>
        <Image src="/images/hero2.png" />
      </HStack>

      <HStack width="100%" justify="space-around" marginTop="90px">
        <Image src="/images/hero3.png" />
        <VStack spacing="40px" align="flex-start" width="550px">
          <Text lineHeight="48px" fontSize="33px" fontWeight={700}>
            Sales Driven Approach (sell independently and sell via partners’
            academies)
          </Text>

          <UnorderedList fontWeight={400} fontSize="16px" color="#616161">
            <ListItem>
              {" "}
              Allow top institutions to plug to your contents and sell to their
              students for shared profit.
            </ListItem>
            <ListItem>
              List contents to our marketplace for visibility and sales.
            </ListItem>
            <ListItem>
              List contents to contentionary’s premium for monthly royalties
            </ListItem>
            <ListItem>Sell globally</ListItem>
          </UnorderedList>

          <Button width="137px">
            <Text>I'm Interested</Text>
          </Button>
        </VStack>
      </HStack>
    </Flex>
  );
};

export default DesktopBuild;
