import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path"

const root = resolve(__dirname, "src")
const outDir = resolve(__dirname, "dist")

// https://vitejs.dev/config/
export default defineConfig({
  root,
  publicDir: resolve(__dirname, "public"),
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
      }
    }
  },
  server: {
    proxy: {
      "/graphql": {
        target: "https://api.yelp.com/v3/graphql",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/graphql/, "")
      }
    }
  }
})
