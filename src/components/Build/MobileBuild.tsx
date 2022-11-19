import Button from "../Button";
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

const MobileBuild = () => {
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
        fontSize="28px"
        lineHeight="38px"
        textAlign="center"
      >
        Built for One-man <br />
        business and large <br />
        institutions
      </Text>
      <VStack padding="20px" spacing="15px">
        <Image src="/images/hero1.png" />
        <Text lineHeight="22px" width="100%" fontSize="20px" fontWeight={700}>
          Highly customizable templates to suit your business brand
        </Text>

        <Text
          lineHeight="24px"
          width="100%"
          color="#616161"
          fontSize="12px"
          fontWeight={400}
        >
          As a creator, there are available templates for you to customize and
          setup. You can also select your desired features based on your
          learning centre offerings (course, exams, publications, certification,
          competitions feature etc.)
        </Text>

        <Button width="137px">
          <Text>I'm Interested</Text>
        </Button>
      </VStack>

      <VStack padding="20px" spacing="15px" mt='30px'>
        <Image src="/images/hero2.png" />
        <Text lineHeight="22px" width="100%" fontSize="20px" fontWeight={700}>
          Launch to your domain
        </Text>

        <Text
          lineHeight="24px"
          width="100%"
          color="#616161"
          fontSize="12px"
          fontWeight={400}
        >
          Choose how you want your student to access your learning centre, Yes,
          your students come to your link and not contentionary.com
        </Text>
        <UnorderedList
          fontWeight={400}
          fontSize="12px"
          lineHeight="24px"
          color="#616161"
        >
          <ListItem> Your domain: www.example.com (₦1,500/ month)</ListItem>
          <ListItem>
            Our subdomain: www.example.cttc.ac (₦1,000/ month)
          </ListItem>
          <ListItem>
            Your subdomian: example.Website.com (₦1,500/month)
          </ListItem>
          <ListItem>www.contentionary.com/example (Free)</ListItem>
        </UnorderedList>

        <Button width="137px" props={{marginTop: '20px'}}>
          <Text>I'm Interested</Text>
        </Button>
      </VStack>

      <VStack padding="20px" spacing="15px" mt='30px'>
        <Image src="/images/hero3.png" />
        <Text lineHeight="22px" width="100%" fontSize="20px" fontWeight={700}>
          Sales Driven Approach (sell independently and sell via partners’
          academies)
        </Text>

        <UnorderedList
          fontWeight={400}
          fontSize="12px"
          lineHeight="24px"
          color="#616161"
        >
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
        <Button width="137px" props={{marginTop: '20px'}}>
          <Text>I'm Interested</Text>
        </Button>
      </VStack>
    </Flex>
  );
};

export default MobileBuild;
