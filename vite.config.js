import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteImagemin({
      pngquant: { quality: [0.6, 0.8] },
      mozjpeg: { quality: 80 },
    }),
  ],
  base: "/BenOS/",
});
