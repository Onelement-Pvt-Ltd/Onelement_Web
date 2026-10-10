import path from "path"
import { fileURLToPath } from "url"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const currentDirectory = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(currentDirectory, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-state": ["@reduxjs/toolkit", "@tanstack/react-query", "react-redux", "redux-persist"],
          "vendor-motion": ["framer-motion", "lenis"],
          "vendor-icons": ["lucide-react", "react-icons"],
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    restoreMocks: true,
  },
})
