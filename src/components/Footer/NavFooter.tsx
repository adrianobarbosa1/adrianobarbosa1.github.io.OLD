import { Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link"
import { NAV_ITEMS } from "../navItems.data";

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
        {NAV_ITEMS.map(({ path, label }, i) => {
          return (
            <NextLink href={path} passHref key={`${path}${i}`}>
              <Link

                flex={{ base: 1, md: 'auto' }}
                color='whitesmoke'
                cursor='pointer'
                p='5px 20px'
                mt='1.5rem'
                _activeLink={{ color: '#00B8E4' }}
                _hover={{
                  textDecoration: 'none',
                  color: '#00B8E4',
                }}
              >

                {label}
              </Link>
            </NextLink>

          );
        })}

      </Flex>
    </>
  );
}
