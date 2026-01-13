import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ✅ keep this for GitHub Pages
  base: "/",

  build: {
    target: "es2018",      // ✅ iOS Safari compatible
    cssTarget: "chrome61", // ✅ prevents CSS parsing issues
  },

  server: {
    host: true,
  },
});
