import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Import inspectAttr if needed

export default defineConfig({
  base: '/WhiteMeatShop/', // Fixed for GitHub Pages
  plugins: [react()],      // Simplified for testing
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
