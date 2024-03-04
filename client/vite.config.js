import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Import the Vite React plugin

export default defineConfig({
  plugins: [react()], // Add the React plugin
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Set your backend base URL here
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});