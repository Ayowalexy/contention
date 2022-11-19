import { useMediaQuery } from "@chakra-ui/react";
import DesktopHome from "./Desktop";
import HomePageMobile from "./Mobile";

const HomePage = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return <>{isLargerThan768 ? <DesktopHome /> : <HomePageMobile />}</>;
};

export default HomePage;
