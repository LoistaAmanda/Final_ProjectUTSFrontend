import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Teruskan request /api/hospitals ke API eksternal tanpa CORS error
      "/api/hospitals": {
        target: "https://dekontaminasi.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/api\/hospitals/, "/api/id/covid19/hospitals"),
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js",
  },
});
