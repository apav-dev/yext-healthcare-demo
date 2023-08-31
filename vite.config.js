import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import yextSSG from "@yext/pages/vite-plugin";

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '');
  console.log(env);
  return {
    // vite config
    define: {
      YEXT_PUBLIC_SEARCH_API_KEY: JSON.stringify(env.YEXT_PUBLIC_SEARCH_API_KEY),
    },
    plugins: [react(), yextSSG()],
  }
})