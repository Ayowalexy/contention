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
        paddingTop={'30px'}
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

      <Flex
        align="center"
        flexDir={{
          md: "column",
          lg: "row",
        }}
        width="100%"
        height={{ lg: "80vh" }}
        justify="space-around"
        marginTop="90px"
      >
        <Image
          src="/images/hero1.png"
          width={{
            md: "100%",
            lg: "35%",
          }}
        />
        <VStack
          spacing="40px"
          width={{ md: "100%", lg: "50%" }}
          align={{ md: "center", lg: "flex-start" }}
        >
          <Text
            lineHeight="48px"
            width="80%"
            fontSize="33px"
            fontWeight={700}
            paddingTop={{ md: "40px" }}
            textAlign={{ md: "center", lg: 'left' }}
          >
            Highly customizable templates to suit your business brand
          </Text>

          <Text
            lineHeight="30px"
            width="80%"
            color="#616161"
            fontSize="20px"
            fontWeight={400}
            textAlign={{ md: "center", lg: 'left' }}
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
      </Flex>

      <Flex
        flexDir={{
          md: "column",
          lg: "row",
        }}
        align="center"
        width="100%"
        height={{ lg: "80vh" }}
        justify="space-around"
        marginTop="90px"
      >
        <VStack
          spacing="40px"
          width={{ lg: "50%" }}
          order={{ md: 1 }}
          align={{ md: "center", lg: "flex-start" }}
        >
          <Text
            lineHeight="48px"
            width="550px"
            fontSize="33px"
            fontWeight={700}
            textAlign={{ md: "center", lg: 'left' }}
            paddingTop={{ md: "40px" }}
          >
            Launch to your domain
          </Text>

          <Text
            lineHeight="30px"
            width="500px"
            color="#616161"
            fontSize="20px"
            fontWeight={400}
            textAlign={{ md: "center", lg: 'left' }}

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
        <Image
          src="/images/hero2.png"
          width={{
            md: "100%",
            lg: "35%",
          }}
        />
      </Flex>

      <Flex
        flexDir={{
          md: "column",
          lg: "row",
        }}
        align="center"
        width="100%"
        height={{ lg: "80vh" }}
        justify="space-around"
        marginTop="90px"
      >
        <Image
          src="/images/hero3.png"
          width={{
            md: "100%",
            lg: "35%",
          }}
        />
        <VStack
          spacing="40px"
          align={{ md: "center", lg: "flex-start" }}
          width={{ lg: "50%" }}
        >
          <Text
            lineHeight="48px"
            fontSize="33px"
            paddingTop={{ md: "40px" }}
            fontWeight={700}
            textAlign={{ md: "center", lg: 'left' }}

          >
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
      </Flex>
    </Flex>
  );
};

export default DesktopBuild;
