import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    "blue": "#00B8E4",
    'text': '#525252',
    'textTitle': '#0F2137',

  },
  styles: {
    global: {
      body: {
        bgGradient: 'linear(to-r, gray50, gray.100)',
        section: {
          minHeight: '100vh',
          padding: '0 9%',
          paddingTop: '4rem',
          paddingBottom: '2rem',
        }
      },
      html: {
        fontFamily: "Montserrat, sans-serif",
        color: 'black.100',
      },
    }
  }
})