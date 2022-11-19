import { useMediaQuery } from "@chakra-ui/react";
import DeskopHighlight from "./DesksopHighlight";
import MobileHighlight from "./MobileHighlight";

const Highlight = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isLargerThan768 ? <DeskopHighlight /> : <DeskopHighlight />}
    </>
  );
};

export default Highlight;
