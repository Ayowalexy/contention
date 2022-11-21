import {
  Box,
  Text,
  VStack,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  Flex,
} from "@chakra-ui/react";
import { MotionFlex } from "../../../motion";
import { data_1, data_2, data_3, data_4 } from "./data";

const Modal = () => {
  return (
    <Box zIndex={100000} pos="absolute" className="b_box">
      <MotionFlex
        width="920px"
        borderRadius="30px"
        backgroundColor="#fff"
        height="550px"
        padding="60px"
        flexDir="column"
        boxShadow="4px 4px 40px rgba(0,0,0,0.2)"
      >
        <Text
          color="#333333"
          fontSize="16px"
          fontWeight={700}
          textTransform="uppercase"
        >
          Amazing Plugins for Creators
        </Text>

        <Tabs mt="20px">
          <TabList>
            <Tab
              marginRight={"35px"}
              _selected={{
                color: "#F77E23",
                fontSize: "14px",
                fontWeight: 600,
                borderBottom: "2px solid #F77E23",
              }}
            >
              Stand-alone
            </Tab>
            <Tab
              marginRight={"35px"}
              _selected={{
                color: "#F77E23",
                fontSize: "14px",
                fontWeight: 600,
                borderBottom: "2px solid #F77E23",
              }}
            >
              Marketing
            </Tab>
            <Tab
              marginRight={"35px"}
              _selected={{
                color: "#F77E23",
                fontSize: "14px",
                fontWeight: 600,
                borderBottom: "2px solid #F77E23",
              }}
            >
              Engagement
            </Tab>
            
            <Tab
              marginRight={"35px"}
              _selected={{
                color: "#F77E23",
                fontSize: "14px",
                fontWeight: 600,
                borderBottom: "2px solid #F77E23",
              }}
            >
              Add-ons
            </Tab>
          </TabList>

          <TabPanels pt="20px">
            <TabPanel>
              <HStack width="100%" justify="space-between" flexWrap="wrap">
                {data_1.map((element, idx) => (
                  <Box>
                    <HStack
                      mb="40px"
                      key={idx}
                      align="flex-start"
                      spacing="15px"
                    >
                      <VStack
                        align="center"
                        justify="center"
                        borderRadius="50%"
                        backgroundColor={element.color}
                        height="35px"
                        width="35px"
                      >
                        <Image src={element.img} />
                      </VStack>
                      <VStack align="flex-start" width="300px">
                        <Text color="#555555" fontWeight={600} fontSize="16px">
                          {element.title}
                        </Text>
                        <Text color="#888888" fontWeight={300} fontSize="14px">
                          {element.text}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack width="100%" justify="space-between" flexWrap="wrap">
                {data_2.map((element, idx) => (
                  <Box>
                    <HStack
                      mb="40px"
                      key={idx}
                      align="flex-start"
                      spacing="15px"
                    >
                      <VStack
                        align="center"
                        justify="center"
                        borderRadius="50%"
                        backgroundColor={element.color}
                        height="35px"
                        width="35px"
                      >
                        <Image src={element.img} />
                      </VStack>
                      <VStack align="flex-start" width="300px">
                        <Text color="#555555" fontWeight={600} fontSize="16px">
                          {element.title}
                        </Text>
                        <Text color="#888888" fontWeight={300} fontSize="14px">
                          {element.text}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack width="100%" justify="space-between" flexWrap="wrap">
                {data_3.map((element, idx) => (
                  <Box>
                    {idx === 1 && (
                      <Text
                        color="#333333"
                        padding="15px 0px"
                        fontSize="14px"
                        fontWeight={700}
                      >
                        Payment Plugins
                      </Text>
                    )}
                    <HStack
                      mb="40px"
                      key={idx}
                      marginTop={idx !== 1 ? "-15px" : "0px"}
                      align="flex-start"
                      spacing="15px"
                    >
                      <VStack
                        align="center"
                        justify="center"
                        borderRadius="50%"
                        backgroundColor={element.color}
                        height="35px"
                        width="35px"
                      >
                        <Image src={element.img} />
                      </VStack>
                      <VStack align="flex-start" width="300px">
                        <Text color="#555555" fontWeight={600} fontSize="16px">
                          {element.title}
                        </Text>
                        <Text color="#888888" fontWeight={300} fontSize="14px">
                          {element.text}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </HStack>
            </TabPanel>
            <TabPanel>
              <HStack width="100%" justify="space-between" flexWrap="wrap">
                {data_4.map((element, idx) => (
                  <Box>
                    <HStack
                      mb="40px"
                      key={idx}
                      align="flex-start"
                      spacing="15px"
                    >
                      <VStack
                        align="center"
                        justify="center"
                        borderRadius="50%"
                        backgroundColor={element.color}
                        height="35px"
                        width="35px"
                      >
                        <Image src={element.img} />
                      </VStack>
                      <VStack align="flex-start" width="300px">
                        <Text color="#555555" fontWeight={600} fontSize="16px">
                          {element.title}
                        </Text>
                        <Text color="#888888" fontWeight={300} fontSize="14px">
                          {element.text}
                        </Text>
                      </VStack>
                    </HStack>
                  </Box>
                ))}
              </HStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MotionFlex>
    </Box>
  );
};

export default Modal;
