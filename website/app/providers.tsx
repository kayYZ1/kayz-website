'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('gray.100', 'gray.700')(props),
        color: mode('gray.800', 'gray.100')(props),
      },
    }),
  },
  colors: {
    brand: {
      50: '#e3f2f9',
      100: '#c5e4f3',
      200: '#a2d4ec',
      300: '#7ac1e4',
      400: '#47a9da',
      500: '#0088cc',
      600: '#007ab8',
      700: '#339bb3',
      800: '#2d7b8e',
      900: '#24576a',
    },
    secondary: {
      50: '#ffe3e3',
      100: '#ffbdbd',
      200: '#ff9b9b',
      300: '#f86a6a',
      400: '#ef4e4e',
      500: '#e12d39',
      600: '#cf1124',
      700: '#b71c1c',
      800: '#9e1919',
      900: '#851515',
    },
  },
});


export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}