import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Remove the proxy section
  server: {
    // No proxy configuration
  },
});
