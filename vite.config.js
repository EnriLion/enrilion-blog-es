import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  base: "/enrilion-blog/",
  build: {
    outDir: 'dist',
  },
//  server: {
 //   allowedHosts: [
  //    'ch-filed-increase-geneva.trycloudflare.com'
   // ]
  //}
});
