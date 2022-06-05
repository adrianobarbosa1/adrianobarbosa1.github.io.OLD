import { Flex, Icon, Text, useBreakpointValue } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { adrIcon, adrIconWhite } from "../socialIcons";

export function Logo() {
  return (
    <>
      <Flex
        cursor='pointer'
      >

        <ScrollLink
          activeClass="active"
          to='home'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          path='home'>
          <Flex
            align='center'
          >

            <Icon width="75" height="30" as={adrIcon} />

            <Text
              as='p'
              ml='0.5rem'
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontWeight="bold"
            >
              Adriano Barbosa
            </Text>
          </Flex>

        </ScrollLink>
      </Flex>
    </>
  );
}

export function LogoWhite() {
  return (
    <><Flex
      align='center'
      justify='center'
      cursor='pointer'
    >
      <ScrollLink
        activeClass="active"
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        path='home'>

        <Flex
          align='center'
        >
          <Icon mt={1} width="75" height="30" as={adrIconWhite} />

          <Text
            as='p'
            ml='0.5rem'
            color='whitesmoke'
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontWeight="bold"
          >
            Adriano Barbosa
          </Text>
        </Flex>
      </ScrollLink>
    </Flex>
    </>
  );
}
