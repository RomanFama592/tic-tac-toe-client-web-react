import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

export const aliasses = {
  "@ts": path.resolve(__dirname, './src/assets/ts'),
  "@css": path.resolve(__dirname, './src/assets/css'),
  "@assets": path.resolve(__dirname, './src/assets'),
  "@components": path.resolve(__dirname, './src/components'),
  "@contexts": path.resolve(__dirname, './src/contexts'),
  "@hooks": path.resolve(__dirname, './src/hooks'),
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasses
  },
  server: {
    port: 8080,
    watch: {
      //use "usePolling: true" in case of using dev container, otherwise set to "false"
      usePolling: true
    }
  }
})