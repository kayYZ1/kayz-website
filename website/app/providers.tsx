'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark"
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode('light.50', 'dark.700')(props),
      }
    })
  },
  colors: {
    dark: {
      25: "#fdfdfd",
      50: "#f0f0f0",
      100: "#d1d5db",
      200: "#a5adb8",
      300: "#7a879e",
      400: "#58606e",
      500: "#404f5e",
      600: "#333c48",
      700: "#2a303b",
      800: "#1f232c",
      900: "#15181e",
    },
    light: {
      50: "#f9f9f9",
      100: "#e0e0e0",
      200: "#c0c0c0",
      300: "#a0a0a0",
      400: "#808080",
      500: "#606060",
      600: "#505050",
      700: "#404040",
      800: "#303030",
      900: "#202020",
    }
  }
})


export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}