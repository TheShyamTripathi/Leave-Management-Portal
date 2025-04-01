"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes";
import { Toaster } from "react-hot-toast";

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      <Toaster />
      {children}
      </NextThemesProvider>
  )
}

export default Providers