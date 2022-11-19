import { useMediaQuery } from "@chakra-ui/react";
import DesktopBuild from "./DeskstopBuild";
import MobileBuild from "./MobileBuild";



const Build = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>{isLargerThan768 ? <DesktopBuild /> : <MobileBuild />}</>
  );
};

export default Build;
