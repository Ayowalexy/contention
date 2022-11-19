import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Index from "./Home";
import { useState, useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Home() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <>
      {show ? (
        <Flex
          align="center"
          justify="center"
          height="100vh"
          width="100%"
          bgColor="rgba(221,163,51, 0.3)"
        >
          <div className="col-md-2">
            <div className="preloader-whirlpool">
              <div className="whirlpool"></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="preloader-floating-circles">
              <div className="f_circleG" id="frotateG_01"></div>
              <div className="f_circleG" id="frotateG_02"></div>
              <div className="f_circleG" id="frotateG_03"></div>
              <div className="f_circleG" id="frotateG_04"></div>
              <div className="f_circleG" id="frotateG_05"></div>
              <div className="f_circleG" id="frotateG_06"></div>
              <div className="f_circleG" id="frotateG_07"></div>
              <div className="f_circleG" id="frotateG_08"></div>
            </div>
            
          </div>
        </Flex>
      ) : (
        <Index />
      )}
    </>
  );
}
