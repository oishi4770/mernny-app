import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    host: true,
    proxy: {
      "/api": {
        target: "http://backend:5000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
  },
});
