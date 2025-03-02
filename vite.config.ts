import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change this to 3000
    strictPort: true, // Ensures it doesn't switch to another port
    open: true, // Auto-opens the browser
  },
});
