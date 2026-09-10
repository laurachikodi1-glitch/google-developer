import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
// import https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.3.1/css/all.min.css

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
})
