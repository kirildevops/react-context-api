import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const removePrefix = (str, prefix) =>
  str.startsWith(prefix) ? str.slice(prefix.length) : str

const removeApiPrefix = (path) => removePrefix(path, '/api')

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        rewrite: removeApiPrefix,
      },
    },
  },
})
