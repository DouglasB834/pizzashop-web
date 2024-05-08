import { Helmet, HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import "./global.css";
import { Toaster } from "sonner";

export function App() {
  return (
    <HelmetProvider>
      {/* %s e uma variavel que pega de todas as paginas  */}
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster richColors  />
      <RouterProvider router={router} />

    </HelmetProvider>
  )
  
}
