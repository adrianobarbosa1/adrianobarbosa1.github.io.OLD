import { Flex } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import styles from "./styles.module.scss";

const textArray = [
  "DESENVOLVEDOR FULLSTACK",
  "ESPECIALISTA NODE.JS",
  "ESPECIALISTA REACT.JS",
];

export function Adriano() {
  return (
    <>
      <Flex>
        <Flex className={styles.content}>
          <h1>ADRIANO BARBOSA</h1>
          <p>
            DESENVOLVEDOR WEB <br />
            PROGRAMADOR JAVASCRIPT
          </p>
          <div className={styles.type}>
            <Typewriter
              options={{
                strings: textArray,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Flex>
      </Flex>
    </>
  );
}
