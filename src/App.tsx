import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "./components/theme-provider";
import { router } from "./routes";

import "./global.css";

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizzashop-theme"  defaultTheme="system">
        {/* %s e uma variavel que pega de todas as paginas  */}
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors  />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
  
}
