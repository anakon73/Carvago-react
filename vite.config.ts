import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), AutoImport({
    imports: ['react', 'react-router-dom'],
    dts: true,
    eslintrc: {
      enabled: true,
    },
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
