import {
  Box,
  Text,
  Flex,
  HStack,
  VStack,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import Button from "../Button";
import DeskopPricing from "./DeskstopPricing";
import MobilePricing from "./MobilePricing";

const Pricing = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return <>{isLargerThan768 ? <DeskopPricing /> : <MobilePricing />}</>;
};

export default Pricing;
