// Static build config for GitHub Pages deployment.
// Uses plain Vite + React instead of TanStack Start's SSR setup.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Set this to your repo name for GitHub Pages subdirectory hosting
  base: "/All-Sync-Landing-Page/",
  build: {
    outDir: "dist-static",
  },
});
