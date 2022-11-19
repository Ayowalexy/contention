import { MotionFlex } from "../../../motion";
import { Text, BoxProps, Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface btnprops {
  width: string;
  props?: BoxProps;
  children: ReactNode;
}

const Button = ({ width, props, children }: btnprops): JSX.Element => {
  return (
    <Flex
      justify="center"
      align="center"
      borderRadius="4px"
      height='49px'
      width={width}
      background="linear-gradient(92.54deg, #DD6E20 -14.34%, #DDA333 98.84%)"
      {...props}
    >
      <Text color="#fff" fontSize="14px" fontWeight={500}>
        {children}
      </Text>
    </Flex>
  )
}

export default Button