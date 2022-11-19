import { useMediaQuery } from "@chakra-ui/react";
import DeskopFooter from "./DeskstopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return <>{isLargerThan768 ? <DeskopFooter /> : <MobileFooter />}</>;
};

export default Footer