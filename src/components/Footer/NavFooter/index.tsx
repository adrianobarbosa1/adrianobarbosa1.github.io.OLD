import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

import { menuItems } from "./footer.data";

import styles from "./styles.module.scss";

export function NavFooter() {

  return (
    <>
      <Flex
        as='nav'
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        {menuItems.map(({ path, label }, i) => {
          return (
            <Link
              flex={{ base: 1, md: 'auto' }}
              color='whitesmoke'
              cursor='pointer'
              p='5px 20px'
              mt='1.5rem'
              _hover={{
                textDecoration: 'none',
                color: '#00B8E4',
              }}
            >
              <ScrollLink
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                path={path}

              >
                {label}
              </ScrollLink>
            </Link>
          );
        })}

      </Flex>
    </>
  );
}
