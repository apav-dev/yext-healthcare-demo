import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig(({ command, mode }) => {
  return {
    define: {
      __YEXT_PUBLIC_SEARCH_API_KEY__: JSON.stringify(process.env.YEXT_PUBLIC_SEARCH_API_KEY),
    },
    plugins: [react(), yextSSG()],
  }
})