import { useMediaQuery } from "@chakra-ui/react";
import PartnerDesktop from "./Deskop";
import MobilePartner from "./Mobile";

const Partners = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return <>{isLargerThan768 ? <PartnerDesktop /> : <MobilePartner />}</>;
};

export default Partners;
