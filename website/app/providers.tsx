'use client'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const customTheme = extendTheme({
  config: {
    initialColorMode: "dark"
  },
  colors: {
    dark: {
      50: "#f0f0f0", // Light gray
      100: "#d1d5db",
      200: "#a5adb8",
      300: "#7a879e",
      400: "#58606e",
      500: "#404f5e", // Primary color for dark mode (dark gray)
      600: "#333c48",
      700: "#2a303b",
      800: "#1f232c",
      900: "#15181e",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
})


export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>
}